import db from "../database.js";

export function criarInscricao(req, res) {

  const { email, nome_poeta, turma, turno, curso } = req.body;

  if (!email || !nome_poeta || !turma || !turno || !curso) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const usuario = db
    .prepare("SELECT * FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  if (usuario.inscricao_id) {
    return res.status(400).json({ erro: "Você já realizou sua inscrição." });
  }

  try {

    const stmtInscricao = db.prepare(
      "INSERT INTO inscricoes (nome_poeta, turma, turno, curso) VALUES (?, ?, ?, ?)"
    );
    const info = stmtInscricao.run(nome_poeta, turma, turno, curso);

    db.prepare(
      "UPDATE usuario SET tipo_usuario = 'poeta', inscricao_id = ? WHERE email = ?"
    ).run(info.lastInsertRowid, email);

    res.status(201).json({
      mensagem: "Inscrição realizada com sucesso!",
      tipo: "poeta",
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao realizar inscrição." });
  }

}

export function buscarInscricaoPorEmail(req, res) {

  const { email } = req.params;

  const usuario = db
    .prepare("SELECT inscricao_id FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario || !usuario.inscricao_id) {
    return res.status(404).json({ erro: "Nenhuma inscrição encontrada." });
  }

  const inscricao = db
    .prepare("SELECT * FROM inscricoes WHERE id_inscricoes = ?")
    .get(usuario.inscricao_id);

  res.json(inscricao);

}

export function listarInscricoes(req, res) {

  const inscricoes = db
    .prepare("SELECT * FROM inscricoes ORDER BY id_inscricoes")
    .all();

  res.json(inscricoes);

}

export function atualizarInscricao(req, res) {

  const { id } = req.params;
  const { nome_poeta, turma, turno, curso } = req.body;

  if (!nome_poeta || !turma || !turno || !curso) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const info = db.prepare(
    "UPDATE inscricoes SET nome_poeta = ?, turma = ?, turno = ?, curso = ? WHERE id_inscricoes = ?"
  ).run(nome_poeta, turma, turno, curso, id);

  if (info.changes === 0) {
    return res.status(404).json({ erro: "Inscrição não encontrada." });
  }

  res.json({ mensagem: "Inscrição atualizada com sucesso!" });

}

export function excluirInscricao(req, res) {

  const { id } = req.params;

  const info = db.prepare("DELETE FROM inscricoes WHERE id_inscricoes = ?").run(id);

  if (info.changes === 0) {
    return res.status(404).json({ erro: "Inscrição não encontrada." });
  }

  // Volta o usuário que tinha essa inscrição para o tipo "aluno"
  db.prepare(
    "UPDATE usuario SET tipo_usuario = 'aluno', inscricao_id = NULL WHERE inscricao_id = ?"
  ).run(id);

  res.status(204).send();

}