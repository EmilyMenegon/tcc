import db from "../database.js";

function resolverUsuarioId(email) {
  const usuario = db.prepare("SELECT id FROM usuario WHERE email = ?").get(email);
  return usuario ? usuario.id : null;
}

function montarEvento(linhaEvento) {
  return {
    id: linhaEvento.id_evento,
    nome: linhaEvento.nome,
    descricao: linhaEvento.descricao,
    data: linhaEvento.data_evento,
    horario: linhaEvento.horario,
    local: linhaEvento.local,
    imagem: linhaEvento.imagem || "",
    criadoEm: linhaEvento.criado_em,
  };
}

export function listarEventos(req, res) {
  const linhas = db.prepare("SELECT * FROM evento ORDER BY id_evento DESC").all();
  res.json(linhas.map(montarEvento));
}

export function criarEvento(req, res) {
  const { nome, descricao, data, horario, local, imagem } = req.body;

  if (!nome || !descricao || !data || !horario || !local) {
    return res.status(400).json({ erro: "Preencha todos os campos obrigatórios." });
  }

  const usuarioId = resolverUsuarioId(req.usuario.email);

  if (!usuarioId) {
    return res.status(401).json({ erro: "Usuário não encontrado." });
  }

  try {
    const info = db
      .prepare(
        `INSERT INTO evento (nome, descricao, data_evento, horario, local, imagem, usuario_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .run(nome.trim(), descricao.trim(), data, horario, local.trim(), imagem || "", usuarioId);

    const linhaEvento = db
      .prepare("SELECT * FROM evento WHERE id_evento = ?")
      .get(info.lastInsertRowid);

    res.status(201).json(montarEvento(linhaEvento));
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar evento." });
  }
}

export function atualizarEvento(req, res) {
  const { id } = req.params;
  const { nome, descricao, data, horario, local, imagem } = req.body;

  if (!nome || !descricao || !data || !horario || !local) {
    return res.status(400).json({ erro: "Preencha todos os campos obrigatórios." });
  }

  const eventoExistente = db.prepare("SELECT * FROM evento WHERE id_evento = ?").get(id);

  if (!eventoExistente) {
    return res.status(404).json({ erro: "Evento não encontrado." });
  }

  try {
    db.prepare(
      `UPDATE evento
       SET nome = ?, descricao = ?, data_evento = ?, horario = ?, local = ?, imagem = ?
       WHERE id_evento = ?`
    ).run(
      nome.trim(),
      descricao.trim(),
      data,
      horario,
      local.trim(),
      imagem || eventoExistente.imagem || "",
      id
    );

    const linhaEvento = db.prepare("SELECT * FROM evento WHERE id_evento = ?").get(id);
    res.json(montarEvento(linhaEvento));
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar evento." });
  }
}

export function excluirEvento(req, res) {
  const { id } = req.params;

  const eventoExistente = db.prepare("SELECT * FROM evento WHERE id_evento = ?").get(id);

  if (!eventoExistente) {
    return res.status(404).json({ erro: "Evento não encontrado." });
  }

  db.prepare("DELETE FROM evento WHERE id_evento = ?").run(id);

  res.json({ mensagem: "Evento excluído com sucesso!" });
}