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

db.exec(`
  CREATE TABLE IF NOT EXISTS mural (
    id_mural INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descricao TEXT NOT NULL,
    cor TEXT,
    usuario_id INTEGER NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario (id)
  )
`);

/* ==========================================
   NOTAS (avaliação dos poetas pelos jurados)
   - 5 notas (N1 a N5); a maior e a menor
     são descartadas no cálculo do resultado
   - "media"     = média das 3 notas válidas
   - "desconto"  = penalidade por tempo excedido
   - "resultado" = nota final (media - desconto)
   - "tempo"     = tempo do poeta no cronômetro, em segundos
   - "evento_id" = evento ao qual essa nota pertence
========================================== */

db.exec(`
  CREATE TABLE IF NOT EXISTS notas (
    id_notas INTEGER PRIMARY KEY AUTOINCREMENT,
    n1 FLOAT NOT NULL,
    n2 FLOAT NOT NULL,
    n3 FLOAT NOT NULL,
    n4 FLOAT NOT NULL,
    n5 FLOAT NOT NULL,
    media FLOAT NOT NULL,
    desconto FLOAT NOT NULL DEFAULT 0,
    tempo FLOAT,
    resultado FLOAT NOT NULL,
    usuario_id INTEGER NOT NULL,
    evento_id INTEGER,
    criado_em TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (usuario_id) REFERENCES usuario (id),
    FOREIGN KEY (evento_id) REFERENCES evento (id_evento)
  )
`);


try {
  db.exec(`ALTER TABLE notas ADD COLUMN evento_id INTEGER REFERENCES evento (id_evento)`);
} catch (err) {
  // coluna já existe — segue o jogo
}

export default db;