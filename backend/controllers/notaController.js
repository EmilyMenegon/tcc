import db from "../database.js";

function montarNota(linha) {
  return {
    id: linha.id_notas,
    n1: linha.n1,
    n2: linha.n2,
    n3: linha.n3,
    n4: linha.n4,
    n5: linha.n5,
    media: linha.media,
    desconto: linha.desconto,
    tempo: linha.tempo,
    resultado: linha.resultado,
    idAluno: linha.usuario_id,
    nomeAluno: linha.nome_aluno || null,
    criadoEm: linha.criado_em,
  };
}

const SELECT_NOTA_COM_POETA = `
  SELECT n.*, u.nome AS nome_aluno
  FROM notas n
  LEFT JOIN usuario u ON u.id = n.usuario_id
`;

export function listarNotas(req, res) {
  const linhas = db
    .prepare(`${SELECT_NOTA_COM_POETA} ORDER BY n.criado_em DESC`)
    .all();

  res.json(linhas.map(montarNota));
}

export function listarPoetas(req, res) {
  const linhas = db
    .prepare(
      `SELECT
         u.id AS id,
         u.nome AS nome,
         i.turma AS turma,
         i.turno AS turno,
         i.curso AS curso
       FROM usuario u
       LEFT JOIN inscricoes i ON i.id_inscricoes = u.inscricao_id
       WHERE u.tipo_usuario = 'poeta'
       ORDER BY u.nome ASC`
    )
    .all();

  res.json(linhas);
}

function validarNotas(body) {
  const { n1, n2, n3, n4, n5, resultado, id_aluno } = body;

  const notas = [n1, n2, n3, n4, n5];

  const notasValidas = notas.every(
    (valor) => typeof valor === "number" && !Number.isNaN(valor) && valor >= 0 && valor <= 10
  );

  if (!notasValidas) {
    return "Preencha as 5 notas com valores entre 0 e 10.";
  }

  if (typeof resultado !== "number" || Number.isNaN(resultado)) {
    return "Resultado inválido. Calcule a nota antes de salvar.";
  }

  if (!id_aluno) {
    return "Selecione o poeta.";
  }

  return null;
}

export function criarNota(req, res) {
  const { n1, n2, n3, n4, n5, media, desconto, tempo, resultado, id_aluno } = req.body;

  const erro = validarNotas(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  const poeta = db
    .prepare("SELECT id FROM usuario WHERE id = ? AND tipo_usuario = 'poeta'")
    .get(id_aluno);

  if (!poeta) {
    return res.status(404).json({ erro: "Poeta não encontrado." });
  }

  try {
    const info = db
      .prepare(
        `INSERT INTO notas (n1, n2, n3, n4, n5, media, desconto, tempo, resultado, usuario_id)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .run(n1, n2, n3, n4, n5, media, desconto ?? 0, tempo ?? null, resultado, id_aluno);

    const linha = db
      .prepare(`${SELECT_NOTA_COM_POETA} WHERE n.id_notas = ?`)
      .get(info.lastInsertRowid);

    res.status(201).json(montarNota(linha));
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao salvar a nota." });
  }
}

export function atualizarNota(req, res) {
  const { id } = req.params;
  const { n1, n2, n3, n4, n5, media, desconto, tempo, resultado, id_aluno } = req.body;

  const notaExistente = db.prepare("SELECT * FROM notas WHERE id_notas = ?").get(id);

  if (!notaExistente) {
    return res.status(404).json({ erro: "Nota não encontrada." });
  }

  const erro = validarNotas(req.body);

  if (erro) {
    return res.status(400).json({ erro });
  }

  try {
    db.prepare(
      `UPDATE notas
       SET n1 = ?, n2 = ?, n3 = ?, n4 = ?, n5 = ?,
           media = ?, desconto = ?, tempo = ?, resultado = ?,
           usuario_id = ?
       WHERE id_notas = ?`
    ).run(n1, n2, n3, n4, n5, media, desconto ?? 0, tempo ?? null, resultado, id_aluno, id);

    const linha = db
      .prepare(`${SELECT_NOTA_COM_POETA} WHERE n.id_notas = ?`)
      .get(id);

    res.json(montarNota(linha));
  } catch (err) {
    console.error(err);
    res.status(500).json({ erro: "Erro ao atualizar a nota." });
  }
}

export function excluirNota(req, res) {
  const { id } = req.params;

  const notaExistente = db.prepare("SELECT * FROM notas WHERE id_notas = ?").get(id);

  if (!notaExistente) {
    return res.status(404).json({ erro: "Nota não encontrada." });
  }

  db.prepare("DELETE FROM notas WHERE id_notas = ?").run(id);

  res.json({ mensagem: "Nota excluída com sucesso!" });
}