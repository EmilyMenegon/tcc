import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../database.js";
import { gerarToken } from "../config/jwt.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;
const NOME_MAX = 100;

const MAX_TENTATIVAS_CODIGO = 5;
const VALIDADE_CODIGO_MS = 10 * 60 * 1000;

const recuperacoes = new Map();

function normalizarEmail(email) {
  return typeof email === "string" ? email.trim().toLowerCase() : "";
}

function buscarUsuarioPorEmail(email) {
  // lower() para encontrar também contas antigas cadastradas com maiúsculas
  return db
    .prepare("SELECT * FROM usuario WHERE lower(email) = ?")
    .get(email);
}

export async function cadastrar(req, res) {
  const { nome, senha } = req.body;
  const email = normalizarEmail(req.body.email);

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  if (typeof nome !== "string" || nome.trim().length > NOME_MAX) {
    return res.status(400).json({ erro: "Nome inválido." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ erro: "Digite um email válido." });
  }

  if (
    typeof senha !== "string" ||
    senha.length < SENHA_MIN ||
    senha.length > SENHA_MAX
  ) {
    return res.status(400).json({
      erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
    });
  }

  try {
    const jaExiste = buscarUsuarioPorEmail(email);

    if (jaExiste) {
      return res.status(400).json({ erro: "Email já cadastrado." });
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    db.prepare(
      "INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, 'aluno')"
    ).run(nome.trim(), email, senhaHash);

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
    });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(400).json({
        erro: "Email já cadastrado.",
      });
    }

    console.error(err);

    res.status(500).json({
      erro: "Erro ao cadastrar.",
    });
  }
}

export async function login(req, res) {
  const { senha } = req.body;
  const email = normalizarEmail(req.body.email);

  if (!email || !senha || typeof senha !== "string") {
    return res.status(400).json({
      erro: "Preencha todos os campos.",
    });
  }

  const usuario = buscarUsuarioPorEmail(email);

  if (usuario) {
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (senhaCorreta) {
      const token = gerarToken({
        email: usuario.email,
        tipo: usuario.tipo_usuario,
      });

      return res.json({
        mensagem: "Login realizado com sucesso!",
        tipo: usuario.tipo_usuario,
        nome: usuario.nome,
        token,
      });
    }

    return res.status(401).json({
      erro: "Email ou senha inválidos.",
    });
  }

  const matematico = db
    .prepare("SELECT * FROM matematico WHERE lower(email) = ?")
    .get(email);

  if (matematico) {
    const senhaCorreta = await bcrypt.compare(senha, matematico.senha);

    if (senhaCorreta) {
      const token = gerarToken({
        email: matematico.email,
        tipo: "matematico",
      });

      return res.json({
        mensagem: "Login realizado com sucesso!",
        tipo: "matematico",
        nome: "Matemático",
        token,
      });
    }
  }

  res.status(401).json({
    erro: "Email ou senha inválidos.",
  });
}

export async function solicitarCodigo(req, res) {
  try {
    const email = normalizarEmail(req.body.email);

    if (!email || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        erro: "Digite um email válido.",
      });
    }

    // Resposta igual para qualquer e-mail, para não revelar quem tem conta.
    const respostaPadrao = {
      mensagem: "Se o email estiver cadastrado, um código foi gerado.",
    };

    const usuario = buscarUsuarioPorEmail(email);

    if (!usuario || usuario.tipo_usuario === "organizador") {
      return res.json(respostaPadrao);
    }

    const codigo = crypto.randomInt(100000, 1000000).toString();
    const codigoHash = await bcrypt.hash(codigo, 10);

    recuperacoes.set(usuario.id, {
      codigoHash,
      expiracao: Date.now() + VALIDADE_CODIGO_MS,
      verificado: false,
      tentativas: 0,
    });

    // O código aparece no console do servidor (não há envio de e-mail).
    console.log("");
    console.log("========================================");
    console.log("       CÓDIGO DE RECUPERAÇÃO");
    console.log("========================================");
    console.log(`Usuário: ${usuario.nome}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Código: ${codigo}`);
    console.log("Validade: 10 minutos");
    console.log("========================================");
    console.log("");

    return res.json(respostaPadrao);
  } catch (error) {
    console.error("Erro ao gerar código:", error);

    return res.status(500).json({
      erro: "Erro ao gerar código de recuperação.",
    });
  }
}

// Confere o código e conta as tentativas erradas.
// Depois de MAX_TENTATIVAS_CODIGO erros, o código é apagado.
async function conferirCodigo(usuario, codigo) {
  const recuperacao = usuario ? recuperacoes.get(usuario.id) : null;

  if (!recuperacao) return { ok: false };

  if (Date.now() > recuperacao.expiracao) {
    recuperacoes.delete(usuario.id);
    return { ok: false };
  }

  const valido = await bcrypt.compare(String(codigo), recuperacao.codigoHash);

  if (!valido) {
    recuperacao.tentativas += 1;

    if (recuperacao.tentativas >= MAX_TENTATIVAS_CODIGO) {
      recuperacoes.delete(usuario.id);
    }

    return { ok: false };
  }

  return { ok: true, recuperacao };
}

export async function verificarCodigo(req, res) {
  try {
    const { codigo } = req.body;
    const email = normalizarEmail(req.body.email);

    if (!email || !codigo) {
      return res.status(400).json({
        erro: "Informe o email e o código.",
      });
    }

    const usuario = buscarUsuarioPorEmail(email);
    const resultado = await conferirCodigo(usuario, codigo);

    if (!resultado.ok) {
      return res.status(400).json({
        erro: "Código inválido ou expirado.",
      });
    }

    resultado.recuperacao.verificado = true;

    return res.json({
      mensagem: "Código confirmado.",
    });
  } catch (error) {
    console.error("Erro ao verificar código:", error);

    return res.status(500).json({
      erro: "Erro ao verificar código.",
    });
  }
}

export async function redefinirSenha(req, res) {
  try {
    const { codigo, novaSenha } = req.body;
    const email = normalizarEmail(req.body.email);

    if (!email || !codigo || !novaSenha) {
      return res.status(400).json({
        erro: "Preencha todos os campos.",
      });
    }

    if (!EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        erro: "Digite um email válido.",
      });
    }

    if (
      typeof novaSenha !== "string" ||
      novaSenha.length < SENHA_MIN ||
      novaSenha.length > SENHA_MAX
    ) {
      return res.status(400).json({
        erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
      });
    }

    const usuario = buscarUsuarioPorEmail(email);
    const resultado = await conferirCodigo(usuario, codigo);

    if (!resultado.ok) {
      return res.status(400).json({
        erro: "Código inválido ou expirado.",
      });
    }

    if (!resultado.recuperacao.verificado) {
      return res.status(400).json({
        erro: "Verifique o código de recuperação antes de alterar a senha.",
      });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    db.prepare("UPDATE usuario SET senha = ? WHERE id = ?").run(
      senhaHash,
      usuario.id
    );

    recuperacoes.delete(usuario.id);

    return res.json({
      mensagem: "Senha redefinida com sucesso!",
    });
  } catch (error) {
    console.error("Erro ao redefinir senha:", error);

    return res.status(500).json({
      erro: "Erro ao redefinir senha.",
    });
  }
}