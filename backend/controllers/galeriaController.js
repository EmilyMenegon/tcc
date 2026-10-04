import db from "../database.js";

const LIMITE_FIXADAS = 5;

// Cria a coluna "fixada" na primeira execução (não apaga nada)
const colunas = db.prepare("PRAGMA table_info(galeria)").all();
if (!colunas.some((c) => c.name === "fixada")) {
  db.exec("ALTER TABLE galeria ADD COLUMN fixada INTEGER NOT NULL DEFAULT 0");
}

// Usada pelo ADM: devolve tudo, com o campo "fixada" e a data de publicação
export function listarFotos(req, res) {
  const fotos = db
    .prepare(
      "SELECT id_fotos, anexo, fixada, criado_em FROM galeria ORDER BY id_fotos DESC"
    )
    .all();

  const resultado = fotos.map((foto) => ({
    id: foto.id_fotos,
    imagem: foto.anexo,
    fixada: foto.fixada,
    criado_em: foto.criado_em,
  }));

  res.json(resultado);
}

// Usada pela Home (pública): só as fixadas, no máximo 5
export function listarFotosFixadas(req, res) {
  const fotos = db
    .prepare(
      "SELECT id_fotos, anexo FROM galeria WHERE fixada = 1 ORDER BY id_fotos DESC LIMIT ?"
    )
    .all(LIMITE_FIXADAS);

  res.json(
    fotos.map((foto) => ({
      id: foto.id_fotos,
      imagem: foto.anexo,
    }))
  );
}

export function adicionarFotos(req, res) {
  const { email, fotos, fixada } = req.body;
  const ehFixada = fixada === true || fixada === 1 || fixada === "1";

  if (!email || !Array.isArray(fotos) || fotos.length === 0) {
    return res.status(400).json({ erro: "Envie o email e pelo menos uma foto." });
  }

  const usuario = db
    .prepare("SELECT id FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  if (ehFixada) {
    if (fotos.some((f) => typeof f === "string" && f.startsWith("data:video"))) {
      return res
        .status(400)
        .json({ erro: "Imagens fixadas não podem ser vídeos." });
    }

    const { total } = db
      .prepare("SELECT COUNT(*) AS total FROM galeria WHERE fixada = 1")
      .get();

    if (total + fotos.length > LIMITE_FIXADAS) {
      return res.status(400).json({
        erro: `O limite é de ${LIMITE_FIXADAS} imagens fixadas. Restam ${Math.max(
          0,
          LIMITE_FIXADAS - total
        )} vaga(s).`,
      });
    }
  }

  const stmt = db.prepare(
    "INSERT INTO galeria (anexo, usuario_id, fixada, criado_em) VALUES (?, ?, ?, ?)"
  );

  // mesma data para todas as fotos enviadas juntas
  const criadoEm = db.prepare("SELECT datetime('now') AS agora").get().agora;

  const novasFotos = [];

  for (const base64 of fotos) {
    const info = stmt.run(base64, usuario.id, ehFixada ? 1 : 0, criadoEm);
    novasFotos.push({
      id: info.lastInsertRowid,
      imagem: base64,
      fixada: ehFixada ? 1 : 0,
      criado_em: criadoEm,
    });
  }

  res.status(201).json(novasFotos);
}

export function excluirFoto(req, res) {
  const { id } = req.params;

  const info = db.prepare("DELETE FROM galeria WHERE id_fotos = ?").run(id);

  if (info.changes === 0) {
    return res.status(404).json({ erro: "Foto não encontrada." });
  }

  res.status(204).send();
}