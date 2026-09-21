import db from "../database.js";

const TOTAL_PAGINAS = 40;

function buscarUsuario(email) {
  return db
    .prepare("SELECT id, inscricao_id FROM usuario WHERE email = ?")
    .get(email);
}

export function listarAnotacoes(req, res) {
  const usuario = buscarUsuario(req.usuario.email);

  if (!usuario) {
    return res.status(401).json({ erro: "Usuário não encontrado." });
  }

  if (!usuario.inscricao_id) {
    return res.status(403).json({ erro: "Faça sua inscrição para usar o caderno." });
  }

  const linhas = db
    .prepare(
      "SELECT numero_pagina, titulo, conteudo FROM anotacoes WHERE usuario_id = ? ORDER BY numero_pagina"
    )
    .all(usuario.id);

  res.json(linhas);
}

export function salvarAnotacao(req, res) {
  const numeroPagina = Number(req.params.numero);
  const { titulo, conteudo } = req.body;

  if (
    !Number.isInteger(numeroPagina) ||
    numeroPagina < 1 ||
    numeroPagina > TOTAL_PAGINAS
  ) {
    return res.status(400).json({ erro: "Página inválida." });
  }

  if (typeof conteudo !== "string" || typeof titulo !== "string") {
    return res.status(400).json({ erro: "Dados inválidos." });
  }

  const usuario = buscarUsuario(req.usuario.email);

  if (!usuario) {
    return res.status(401).json({ erro: "Usuário não encontrado." });
  }

  if (!usuario.inscricao_id) {
    return res.status(403).json({ erro: "Faça sua inscrição para usar o caderno." });
  }

  try {
    db.prepare(
      `INSERT INTO anotacoes (usuario_id, numero_pagina, titulo, conteudo)
       VALUES (?, ?, ?, ?)
       ON CONFLICT (usuario_id, numero_pagina)
       DO UPDATE SET titulo = excluded.titulo,
                     conteudo = excluded.conteudo,
                     atualizado_em = datetime('now')`
    ).run(usuario.id, numeroPagina, titulo, conteudo);

    res.json({ mensagem: "Anotação salva!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao salvar a anotação." });
  }
}