import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../database.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;

const alteracoesPerfil = new Map();

export function buscarPerfil(req, res) {
  const { email } = req.params;

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
    const { email } = req.params;
    const { nome, senha, novoEmail, foto } = req.body;

    if (!nome) {
      return res.status(400).json({
        erro: "Preencha o nome.",
      });
    }

    if (!novoEmail && !senha) {
      return res.status(400).json({
        erro: "Nenhuma alteração de email ou senha precisa de confirmação.",
      });
    }

    if (novoEmail) {
      const emailNormalizado = novoEmail.trim().toLowerCase();

      if (!EMAIL_REGEX.test(emailNormalizado)) {
        return res.status(400).json({
          erro: "Digite um email válido.",
        });
      }

      const emailExistente = db
        .prepare("SELECT id FROM usuario WHERE email = ? AND email != ?")
        .get(emailNormalizado, email);

      if (emailExistente) {
        return res.status(400).json({
          erro: "Esse email já está sendo usado por outra conta.",
        });
      }
    }

    if (senha && (senha.length < SENHA_MIN || senha.length > SENHA_MAX)) {
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
      expiracao: Date.now() + 10 * 60 * 1000,
      verificado: false,
      nome,
      senha: senha || null,
      novoEmail: novoEmail ? novoEmail.trim().toLowerCase() : null,
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
    const { email } = req.params;
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
      return res.status(400).json({
        erro: "Código de confirmação inválido.",
      });
    }

    const emailFinal = alteracao.novoEmail || usuario.email;
    const senhaHash = alteracao.senha
      ? await bcrypt.hash(alteracao.senha, 10)
      : null;

    try {
      if (alteracao.senha && alteracao.foto) {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?, senha = ?, foto_perfil = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          senhaHash,
          alteracao.foto,
          usuario.id
        );
      } else if (alteracao.senha) {
        db.prepare(
          `UPDATE usuario
           SET nome = ?, email = ?, senha = ?
           WHERE id = ?`
        ).run(
          alteracao.nome,
          emailFinal,
          senhaHash,
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

    return res.json({
      mensagem: "Perfil atualizado com sucesso!",
      nome: alteracao.nome,
      email: emailFinal,
      foto: alteracao.foto || null,
    });
  } catch (error) {
    console.error("Erro ao verificar código do perfil:", error);

    return res.status(500).json({
      erro: "Erro ao confirmar alteração do perfil.",
    });
  }
}

export async function atualizarPerfil(req, res) {
  const { email: emailAtual } = req.params;
  const { nome, foto } = req.body;

  if (!nome) {
    return res.status(400).json({
      erro: "Preencha o nome.",
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
      ).run(nome, foto, usuario.id);
    } else {
      db.prepare(
        `UPDATE usuario
         SET nome = ?
         WHERE id = ?`
      ).run(nome, usuario.id);
    }

    return res.json({
      mensagem: "Perfil atualizado com sucesso!",
      nome,
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