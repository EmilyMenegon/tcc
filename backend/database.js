import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("dados.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    foto_perfil BLOB,
    tipo_usuario TEXT NOT NULL CHECK (tipo_usuario IN ('organizador', 'poeta', 'aluno')),
    inscricao_id INTEGER,
    resultado_id INTEGER
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS matematico (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL
  )
`);

export default db;