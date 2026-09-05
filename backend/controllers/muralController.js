import db from "../database.js";

function resolverUsuarioId(email) {
  const usuario = db.prepare("SELECT id FROM usuario WHERE email = ?").get(email);
  return usuario ? usuario.id : null;
}

function montarPost(linha) {
  return {
    id: linha.id_mural,
    titulo: linha.titulo,
    descricao: linha.descricao,
    cor: linha.cor || null,
  };
}

export function listarPosts(req, res) {
  const linhas = db.prepare("SELECT * FROM mural ORDER BY id_mural DESC").all();
  res.json(linhas.map(montarPost));
}

export function criarPost(req, res) {
  const { titulo, descricao, cor } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const usuarioId = resolverUsuarioId(req.usuario.email);

  if (!usuarioId) {
    return res.status(401).json({ erro: "Usuário não encontrado." });
  }

  try {
    const info = db
      .prepare("INSERT INTO mural (titulo, descricao, cor, usuario_id) VALUES (?, ?, ?, ?)")
      .run(titulo.trim(), descricao.trim(), cor || null, usuarioId);

    const linha = db.prepare("SELECT * FROM mural WHERE id_mural = ?").get(info.lastInsertRowid);

    res.status(201).json(montarPost(linha));
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar post it." });
  }
}

export function atualizarPost(req, res) {
  const { id } = req.params;
  const { titulo, descricao, cor } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ erro: "Preencha todos os campos." });
  }

  const existente = db.prepare("SELECT * FROM mural WHERE id_mural = ?").get(id);

  if (!existente) {
    return res.status(404).json({ erro: "Post it não encontrado." });
  }

  db.prepare("UPDATE mural SET titulo = ?, descricao = ?, cor = ? WHERE id_mural = ?").run(
    titulo.trim(),
    descricao.trim(),
    cor || existente.cor || null,
    id
  );

  const linha = db.prepare("SELECT * FROM mural WHERE id_mural = ?").get(id);

  res.json(montarPost(linha));
}

export function excluirPost(req, res) {
  const { id } = req.params;

  const existente = db.prepare("SELECT * FROM mural WHERE id_mural = ?").get(id);

  if (!existente) {
    return res.status(404).json({ erro: "Post it não encontrado." });
  }

  db.prepare("DELETE FROM mural WHERE id_mural = ?").run(id);

  res.json({ mensagem: "Post it excluído com sucesso!" });
}