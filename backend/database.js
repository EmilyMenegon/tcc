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

db.exec(`
  CREATE TABLE IF NOT EXISTS inscricoes (
    id_inscricoes INTEGER PRIMARY KEY AUTOINCREMENT,
    nome_poeta TEXT NOT NULL,
    turma TEXT NOT NULL,
    turno TEXT NOT NULL,
    curso TEXT NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS galeria (
    id_fotos INTEGER PRIMARY KEY AUTOINCREMENT,
    anexo TEXT NOT NULL,
    usuario_id INTEGER NOT NULL
  )
`);

db.exec(`
  CREATE TABLE IF NOT EXISTS evento (
    id_evento INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    descricao TEXT NOT NULL,
    data_evento TEXT NOT NULL,
    horario TEXT NOT NULL,
    local TEXT NOT NULL,
    imagem TEXT,
    usuario_id INTEGER NOT NULL,
    criado_em TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (usuario_id) REFERENCES usuario (id)
  )
`);

export default db;