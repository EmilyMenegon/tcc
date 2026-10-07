import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../database.js";
import { gerarToken } from "../config/jwt.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;
const NOME_MAX = 100;
const FOTO_MAX_CARACTERES = 10_000_000; // ~7 MB em base64

const MAX_TENTATIVAS_CODIGO = 5;
const VALIDADE_CODIGO_MS = 10 * 60 * 1000;

const alteracoesPerfil = new Map();

/*
 * SEGURANÇA: todas as funções abaixo trabalham SEMPRE com o usuário do token
 * (req.usuario.email). O :email que vem na URL é ignorado, para que ninguém
 * consiga ler ou alterar o perfil de outra pessoa.
 */

function nomeValido(nome) {
  return typeof nome === "string" && nome.trim().length > 0 && nome.trim().length <= NOME_MAX;
}

function fotoValida(foto) {
  return (
    foto === undefined ||
    foto === null ||
    foto === "" ||
    (typeof foto === "string" &&
      foto.startsWith("data:image/") &&
      foto.length <= FOTO_MAX_CARACTERES)
  );
}

export function buscarPerfil(req, res) {
  const email = req.usuario.email;

  const usuario = db
    .prepare("SELECT nome, email, foto_perfil FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario) {
    return res.status(404).json({
      erro: "Usuário não encontrado.",
    });
  }

  res.json({
    nome: usuario.nome,
    email: usuario.email,
    foto: usuario.foto_perfil || null,
  });
}

export async function solicitarCodigoPerfil(req, res) {
  try {
    const email = req.usuario.email;
    const { nome, senha, novoEmail, foto } = req.body;

    if (!nome) {
      return res.status(400).json({
        erro: "Preencha o nome.",
      });
    }

    if (!nomeValido(nome)) {
      return res.status(400).json({
        erro: "Nome inválido.",
      });
    }

    if (!fotoValida(foto)) {
      return res.status(400).json({
        erro: "Foto inválida.",
      });
    }

    if (!novoEmail && !senha) {
      return res.status(400).json({
        erro: "Nenhuma alteração de email ou senha precisa de confirmação.",
      });
    }

    if (novoEmail) {
      const emailNormalizado = String(novoEmail).trim().toLowerCase();

      if (!EMAIL_REGEX.test(emailNormalizado)) {
        return res.status(400).json({
          erro: "Digite um email válido.",
        });
      }

      const emailExistente = db
        .prepare("SELECT id FROM usuario WHERE lower(email) = ? AND email != ?")
        .get(emailNormalizado, email);

      if (emailExistente) {
        return res.status(400).json({
          erro: "Esse email já está sendo usado por outra conta.",
        });
      }
    }

    if (
      senha &&
      (typeof senha !== "string" ||
        senha.length < SENHA_MIN ||
        senha.length > SENHA_MAX)
    ) {
      return res.status(400).json({
        erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
      });
    }

    const usuario = db
      .prepare("SELECT id, nome, email FROM usuario WHERE email = ?")
      .get(email);

    if (!usuario) {
      return res.status(404).json({
        erro: "Usuário não encontrado.",
      });
    }

    const codigo = crypto.randomInt(100000, 1000000).toString();
    const codigoHash = await bcrypt.hash(codigo, 10);

    alteracoesPerfil.set(usuario.id, {
      codigoHash,
      expiracao: Date.now() + VALIDADE_CODIGO_MS,
      tentativas: 0,
      nome: nome.trim(),
      // a nova senha já fica guardada em hash, nunca em texto puro
      senhaHash: senha ? await bcrypt.hash(senha, 10) : null,
      novoEmail: novoEmail ? String(novoEmail).trim().toLowerCase() : null,
      foto: foto || null,
    });

    console.log("");
    console.log("========================================");
    console.log("       CÓDIGO DE ALTERAÇÃO DE PERFIL");
    console.log("========================================");
    console.log(`Usuário: ${usuario.nome}`);
    console.log(`Email atual: ${usuario.email}`);
    console.log(`Código: ${codigo}`);
    console.log("Validade: 10 minutos");
    console.log("========================================");
    console.log("");

    return res.json({
      mensagem: "Código de confirmação gerado.",
    });
  } catch (error) {
    console.error("Erro ao gerar código do perfil:", error);

    return res.status(500).json({
      erro: "Erro ao gerar código de confirmação.",
    });
  }
}

export async function verificarCodigoPerfil(req, res) {
  try {
    const email = req.usuario.email;
    const { codigo } = req.body;

    if (!codigo) {
      return res.status(400).json({
        erro: "Digite o código de confirmação.",
      });
    }

    const usuario = db
      .prepare("SELECT id, nome, email FROM usuario WHERE email = ?")
      .get(email);

    if (!usuario) {
      return res.status(404).json({
        erro: "Usuário não encontrado.",
      });
    }

    const alteracao = alteracoesPerfil.get(usuario.id);

    if (!alteracao) {
      return res.status(400).json({
        erro: "Nenhuma alteração aguardando confirmação.",
      });
    }

    if (Date.now() > alteracao.expiracao) {
      alteracoesPerfil.delete(usuario.id);

      return res.status(400).json({
        erro: "O código de confirmação expirou.",
      });
    }

    const codigoValido = await bcrypt.compare(
      String(codigo),
      alteracao.codigoHash
    );

    if (!codigoValido) {
      alteracao.tentativas += 1;

      if (alteracao.tentativas >= MAX_TENTATIVAS_CODIGO) {
        alteracoesPerfil.delete(usuario.id);

        return res.status(400).json({
          erro: "Muitas tentativas incorretas. Solicite um novo código.",
        });
      }

      return res.status(400).json({
        erro: "Código de confirmação inválido.",
      });
    }

    const emailFinal = alteracao.novoEmail || usuario.email;

    try {
      if (alteracao.senhaHash && alteracao.foto) {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?, senha = ?, foto_perfil = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          alteracao.senhaHash,
          alteracao.foto,
          usuario.id
        );
      } else if (alteracao.senhaHash) {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?, senha = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          alteracao.senhaHash,
          usuario.id
        );
      } else if (alteracao.foto) {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?, foto_perfil = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          alteracao.foto,
          usuario.id
        );
      } else {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          usuario.id
        );
      }
    } catch (err) {
      if (err.message.includes("UNIQUE")) {
        return res.status(400).json({
          erro: "Esse email já está sendo usado por outra conta.",
        });
      }

      throw err;
    }

    alteracoesPerfil.delete(usuario.id);

    const resposta = {
      mensagem: "Perfil atualizado com sucesso!",
      nome: alteracao.nome,
      email: emailFinal,
      foto: alteracao.foto || null,
    };

    // O token carrega o e-mail. Se o e-mail mudou, devolve um token novo
    // para a sessão continuar funcionando (o front deve guardá-lo).
    if (emailFinal !== usuario.email) {
      resposta.token = gerarToken({
        email: emailFinal,
        tipo: req.usuario.tipo,
      });
    }

    return res.json(resposta);
  } catch (error) {
    console.error("Erro ao verificar código do perfil:", error);

    return res.status(500).json({
      erro: "Erro ao confirmar alteração do perfil.",
    });
  }
}

export async function atualizarPerfil(req, res) {
  const emailAtual = req.usuario.email;
  const { nome, foto } = req.body;

  if (!nome) {
    return res.status(400).json({
      erro: "Preencha o nome.",
    });
  }

  if (!nomeValido(nome)) {
    return res.status(400).json({
      erro: "Nome inválido.",
    });
  }

  if (!fotoValida(foto)) {
    return res.status(400).json({
      erro: "Foto inválida.",
    });
  }

  try {
    const usuario = db
      .prepare("SELECT id, email FROM usuario WHERE email = ?")
      .get(emailAtual);

    if (!usuario) {
      return res.status(404).json({
        erro: "Usuário não encontrado.",
      });
    }

    if (foto) {
      db.prepare(
        `UPDATE usuario
         SET nome = ?, foto_perfil = ?
         WHERE id = ?`
      ).run(nome.trim(), foto, usuario.id);
    } else {
      db.prepare(
        `UPDATE usuario
         SET nome = ?
         WHERE id = ?`
      ).run(nome.trim(), usuario.id);
    }

    return res.json({
      mensagem: "Perfil atualizado com sucesso!",
      nome: nome.trim(),
      email: usuario.email,
      foto: foto || null,
    });
  } catch (err) {
    console.error("Erro ao atualizar perfil:", err);

    return res.status(500).json({
      erro: "Erro ao atualizar perfil.",
    });
  }
}