import db from "../database.js";

export function listarFotos(req, res) {

  const fotos = db
    .prepare("SELECT id_fotos, anexo FROM galeria ORDER BY id_fotos DESC")
    .all();

  const resultado = fotos.map((foto) => ({
    id: foto.id_fotos,
    imagem: foto.anexo,
  }));

  res.json(resultado);

}

export function adicionarFotos(req, res) {

  const { email, fotos } = req.body;

  if (!email || !Array.isArray(fotos) || fotos.length === 0) {
    return res.status(400).json({ erro: "Envie o email e pelo menos uma foto." });
  }

  const usuario = db
    .prepare("SELECT id FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  const stmt = db.prepare(
    "INSERT INTO galeria (anexo, usuario_id) VALUES (?, ?)"
  );

  const novasFotos = [];

  for (const base64 of fotos) {
    const info = stmt.run(base64, usuario.id);
    novasFotos.push({ id: info.lastInsertRowid, imagem: base64 });
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