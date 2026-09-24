import bcrypt from "bcryptjs";
import crypto from "crypto";
import db from "../database.js";
import { gerarToken } from "../config/jwt.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;

const recuperacoes = new Map();

export async function cadastrar(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ erro: "Digite um email válido." });
  }

  if (senha.length < SENHA_MIN || senha.length > SENHA_MAX) {
    return res.status(400).json({
      erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
    });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const stmt = db.prepare(
      "INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, 'aluno')"
    );

    stmt.run(nome, email, senhaHash);

    res.status(201).json({
      mensagem: "Usuário cadastrado com sucesso!",
    });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(400).json({
        erro: "Email já cadastrado.",
      });
    }

    res.status(500).json({
      erro: "Erro ao cadastrar.",
    });
  }
}

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      erro: "Preencha todos os campos.",
    });
  }

  const usuario = db
    .prepare("SELECT * FROM usuario WHERE email = ?")
    .get(email);

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
    .prepare("SELECT * FROM matematico WHERE email = ?")
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
    const { email } = req.body;

    if (!email || !EMAIL_REGEX.test(email)) {
      return res.status(400).json({
        erro: "Digite um email válido.",
      });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const usuario = db
      .prepare(
        "SELECT id, nome, email, tipo_usuario FROM usuario WHERE email = ?"
      )
      .get(emailNormalizado);

    if (!usuario) {
      return res.status(404).json({
        erro: "Email não encontrado.",
      });
    }

    if (usuario.tipo_usuario === "organizador") {
      return res.status(400).json({
        erro: "Esta conta não possui recuperação de senha.",
      });
    }

    const codigo = crypto.randomInt(100000, 1000000).toString();
    const codigoHash = await bcrypt.hash(codigo, 10);

    recuperacoes.set(usuario.id, {
      codigoHash,
      expiracao: Date.now() + 10 * 60 * 1000,
      verificado: false,
    });

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

    return res.json({
      mensagem: "Código de recuperação gerado.",
    });
  } catch (error) {
    console.error("Erro ao gerar código:", error);

    return res.status(500).json({
      erro: "Erro ao gerar código de recuperação.",
    });
  }
}

export async function verificarCodigo(req, res) {
  try {
    const { email, codigo } = req.body;

    if (!email || !codigo) {
      return res.status(400).json({
        erro: "Informe o email e o código.",
      });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const usuario = db
      .prepare("SELECT id, email FROM usuario WHERE email = ?")
      .get(emailNormalizado);

    if (!usuario) {
      return res.status(404).json({
        erro: "Email não encontrado.",
      });
    }

    const recuperacao = recuperacoes.get(usuario.id);

    if (!recuperacao) {
      return res.status(400).json({
        erro: "Nenhum código de recuperação foi solicitado.",
      });
    }

    if (Date.now() > recuperacao.expiracao) {
      recuperacoes.delete(usuario.id);

      return res.status(400).json({
        erro: "O código de recuperação expirou.",
      });
    }

    const codigoValido = await bcrypt.compare(
      String(codigo),
      recuperacao.codigoHash
    );

    if (!codigoValido) {
      return res.status(400).json({
        erro: "Código de recuperação inválido.",
      });
    }

    recuperacao.verificado = true;

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
    const { email, codigo, novaSenha } = req.body;

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
      novaSenha.length < SENHA_MIN ||
      novaSenha.length > SENHA_MAX
    ) {
      return res.status(400).json({
        erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
      });
    }

    const emailNormalizado = email.trim().toLowerCase();

    const usuario = db
      .prepare("SELECT id, email FROM usuario WHERE email = ?")
      .get(emailNormalizado);

    if (!usuario) {
      return res.status(404).json({
        erro: "Email não encontrado.",
      });
    }

    const recuperacao = recuperacoes.get(usuario.id);

    if (!recuperacao) {
      return res.status(400).json({
        erro: "Solicite um novo código de recuperação.",
      });
    }

    if (Date.now() > recuperacao.expiracao) {
      recuperacoes.delete(usuario.id);

      return res.status(400).json({
        erro: "O código de recuperação expirou.",
      });
    }

    if (!recuperacao.verificado) {
      return res.status(400).json({
        erro: "Verifique o código de recuperação antes de alterar a senha.",
      });
    }

    const codigoValido = await bcrypt.compare(
      String(codigo),
      recuperacao.codigoHash
    );

    if (!codigoValido) {
      return res.status(400).json({
        erro: "Código de recuperação inválido.",
      });
    }

    const senhaHash = await bcrypt.hash(novaSenha, 10);

    db.prepare(
      "UPDATE usuario SET senha = ? WHERE id = ?"
    ).run(senhaHash, usuario.id);

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