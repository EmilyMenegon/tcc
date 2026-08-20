import db from "../database.js";

export function cadastrar(req, res) {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  try {
    const stmt = db.prepare(
      "INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, 'aluno')"
    );
    stmt.run(nome, email, senha);
    res.status(201).json({ mensagem: "Usuário cadastrado com sucesso!" });
  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(400).json({ erro: "Email já cadastrado." });
    }
    res.status(500).json({ erro: "Erro ao cadastrar." });
  }
}

export function login(req, res) {
  const { email, senha } = req.body;

  const usuario = db
    .prepare("SELECT * FROM usuarios WHERE email = ? AND senha = ?")
    .get(email, senha);

  if (!usuario) {
    return res.status(401).json({ erro: "Email ou senha inválidos." });
  }

  res.json({
    mensagem: "Login realizado com sucesso!",
    tipo: usuario.tipo,
    nome: usuario.nome,
  });
}