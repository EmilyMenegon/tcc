import db from "../database.js";

function resolverUsuarioId(email) {
  const usuario = db
    .prepare("SELECT id FROM usuario WHERE email = ?")
    .get(email);

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
  const linhas = db
    .prepare("SELECT * FROM evento ORDER BY id_evento DESC")
    .all();

  res.json(linhas.map(montarEvento));
}

export function criarEvento(req, res) {
  const { nome, descricao, data, horario, local, imagem } = req.body;

  if (!nome || !descricao || !data || !horario || !local) {
    return res.status(400).json({
      erro: "Preencha todos os campos obrigatórios.",
    });
  }

  const usuarioId = resolverUsuarioId(req.usuario.email);

  if (!usuarioId) {
    return res.status(401).json({
      erro: "Usuário não encontrado.",
    });
  }

  try {
    const info = db
      .prepare(
        `INSERT INTO evento
        (nome, descricao, data_evento, horario, local, imagem, usuario_id)
        VALUES (?, ?, ?, ?, ?, ?, ?)`
      )
      .run(
        nome.trim(),
        descricao.trim(),
        data,
        horario,
        local.trim(),
        imagem || "",
        usuarioId
      );

    const linhaEvento = db
      .prepare("SELECT * FROM evento WHERE id_evento = ?")
      .get(info.lastInsertRowid);

    res.status(201).json(montarEvento(linhaEvento));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: "Erro ao criar evento.",
    });
  }
}

export function atualizarEvento(req, res) {
  const { id } = req.params;
  const { nome, descricao, data, horario, local, imagem } = req.body;

  if (!nome || !descricao || !data || !horario || !local) {
    return res.status(400).json({
      erro: "Preencha todos os campos obrigatórios.",
    });
  }

  const eventoExistente = db
    .prepare("SELECT * FROM evento WHERE id_evento = ?")
    .get(id);

  if (!eventoExistente) {
    return res.status(404).json({
      erro: "Evento não encontrado.",
    });
  }

  try {
    db.prepare(
      `UPDATE evento
       SET nome = ?,
           descricao = ?,
           data_evento = ?,
           horario = ?,
           local = ?,
           imagem = ?
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

    const linhaEvento = db
      .prepare("SELECT * FROM evento WHERE id_evento = ?")
      .get(id);

    res.json(montarEvento(linhaEvento));
  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: "Erro ao atualizar evento.",
    });
  }
}

export function excluirEvento(req, res) {
  const { id } = req.params;

  const eventoExistente = db
    .prepare("SELECT * FROM evento WHERE id_evento = ?")
    .get(id);

  if (!eventoExistente) {
    return res.status(404).json({
      erro: "Evento não encontrado.",
    });
  }

  try {
    /*
     * Primeiro remove os participantes vinculados ao evento.
     */
    db.prepare(
      "DELETE FROM participantes_evento WHERE evento_id = ?"
    ).run(id);

    /*
     * Remove também as notas daquele evento.
     */
    db.prepare(
      "DELETE FROM notas WHERE evento_id = ?"
    ).run(id);

    /*
     * O evento antigo também poderia estar gravado em
     * usuario.evento_id. Limpamos para manter compatibilidade
     * com bancos antigos.
     */
    db.prepare(
      "UPDATE usuario SET evento_id = NULL WHERE evento_id = ?"
    ).run(id);

    db.prepare(
      "DELETE FROM evento WHERE id_evento = ?"
    ).run(id);

    res.json({
      mensagem: "Evento excluído com sucesso!",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: "Erro ao excluir evento.",
    });
  }
}

export function listarParticipantes(req, res) {
  const { id } = req.params;

  const participantes = db
    .prepare(`
      SELECT
        u.id AS usuarioId,
        i.nome_poeta,
        i.turma,
        i.turno,
        i.curso
      FROM participantes_evento pe
      JOIN usuario u
        ON u.id = pe.usuario_id
      JOIN inscricoes i
        ON i.id_inscricoes = u.inscricao_id
      WHERE u.tipo_usuario = 'poeta'
        AND pe.evento_id = ?
      ORDER BY i.nome_poeta
    `)
    .all(id);

  res.json(participantes);
}

export function definirParticipantes(req, res) {
  const { id } = req.params;
  const { usuarioIds } = req.body;

  const eventoExistente = db
    .prepare("SELECT * FROM evento WHERE id_evento = ?")
    .get(id);

  if (!eventoExistente) {
    return res.status(404).json({
      erro: "Evento não encontrado.",
    });
  }

  if (!Array.isArray(usuarioIds)) {
    return res.status(400).json({
      erro: "Envie a lista de participantes.",
    });
  }

  try {
    /*
     * Remove somente os participantes DESTE evento.
     *
     * Isso é diferente do sistema antigo.
     *
     * Se João estiver:
     *
     * Evento 1
     * Evento 2
     *
     * e estivermos editando o Evento 2,
     * remover João do Evento 2 NÃO remove João do Evento 1.
     */
    db.prepare(
      "DELETE FROM participantes_evento WHERE evento_id = ?"
    ).run(id);

    if (usuarioIds.length > 0) {
      const placeholders = usuarioIds.map(() => "?").join(", ");

      db.prepare(
        `INSERT OR IGNORE INTO participantes_evento
         (usuario_id, evento_id)
         SELECT id, ?
         FROM usuario
         WHERE id IN (${placeholders})
           AND tipo_usuario = 'poeta'`
      ).run(id, ...usuarioIds);
    }

    res.json({
      mensagem: "Participantes atualizados com sucesso!",
    });
  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: "Erro ao definir participantes.",
    });
  }
}