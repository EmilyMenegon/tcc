import bcrypt from "bcryptjs";
import db from "../database.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;

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

    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(400).json({ erro: "Email já cadastrado." });
    }
    res.status(500).json({ erro: "Erro ao cadastrar." });
  }
}

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const usuario = db
    .prepare("SELECT * FROM usuario WHERE email = ?")
    .get(email);

  if (usuario) {
    const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

    if (senhaCorreta) {
      return res.json({
        mensagem: "Login realizado com sucesso!",
        tipo: usuario.tipo_usuario,
        nome: usuario.nome,
      });
    }

    return res.status(401).json({ erro: "Email ou senha inválidos." });
  }

  const matematico = db
    .prepare("SELECT * FROM matematico WHERE email = ?")
    .get(email);

  if (matematico) {
    const senhaCorreta = await bcrypt.compare(senha, matematico.senha);

    if (senhaCorreta) {
      return res.json({
        mensagem: "Login realizado com sucesso!",
        tipo: "matematico",
        nome: "Matemático",
      });
    }
  }

  res.status(401).json({ erro: "Email ou senha inválidos." });
}

export async function redefinirSenha(req, res) {
  const { email, novaSenha } = req.body;

  if (!email || !novaSenha) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ erro: "Digite um email válido." });
  }

  if (novaSenha.length < SENHA_MIN || novaSenha.length > SENHA_MAX) {
    return res.status(400).json({
      erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
    });
  }

  const senhaHash = await bcrypt.hash(novaSenha, 10);

  const usuario = db
    .prepare("SELECT * FROM usuario WHERE email = ?")
    .get(email);

  if (usuario) {
    db.prepare("UPDATE usuario SET senha = ? WHERE email = ?")
      .run(senhaHash, email);

    return res.json({ mensagem: "Senha redefinida com sucesso!" });
  }

  const matematico = db
    .prepare("SELECT * FROM matematico WHERE email = ?")
    .get(email);

  if (matematico) {
    db.prepare("UPDATE matematico SET senha = ? WHERE email = ?")
      .run(senhaHash, email);

    return res.json({ mensagem: "Senha redefinida com sucesso!" });
  }

  res.status(404).json({ erro: "Email não encontrado." });
}