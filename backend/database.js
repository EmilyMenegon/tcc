import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("dados.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    tipo TEXT NOT NULL DEFAULT 'aluno'
  )
`);

export default db;