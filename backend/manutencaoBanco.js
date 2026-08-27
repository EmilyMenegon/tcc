import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("dados.db");

/* ============================================================
   CONFIGURAÇÃO — edite aqui toda vez que precisar apagar algo

   Coloque os IDs que você quer remover em cada lista.
   Se não quiser apagar nada de uma tabela, deixe a lista vazia: []
============================================================ */

const USUARIOS_PARA_APAGAR = [7];
const INSCRICOES_PARA_APAGAR = [3];

/* ============================================================
   Não precisa mexer daqui para baixo
============================================================ */

console.log("Iniciando manutenção do banco...\n");

for (const id of USUARIOS_PARA_APAGAR) {
  const info = db.prepare("DELETE FROM usuario WHERE id = ?").run(id);
  console.log(
    info.changes > 0
      ? `Usuário id ${id} apagado.`
      : `Usuário id ${id} não encontrado (nada foi apagado).`
  );
}

for (const id of INSCRICOES_PARA_APAGAR) {
  const info = db.prepare("DELETE FROM inscricoes WHERE id_inscricoes = ?").run(id);
  console.log(
    info.changes > 0
      ? `Inscrição id ${id} apagada.`
      : `Inscrição id ${id} não encontrada (nada foi apagado).`
  );
}

reindexarUsuarios();
reindexarInscricoes();

console.log("\nManutenção concluída! Os IDs foram reorganizados sequencialmente.");


/* ============================================================
   FUNÇÕES DE REORGANIZAÇÃO
============================================================ */

function reindexarUsuarios() {

  const linhas = db.prepare("SELECT * FROM usuario ORDER BY id ASC").all();

  db.exec("DROP TABLE IF EXISTS usuario_old");
  db.exec("ALTER TABLE usuario RENAME TO usuario_old");

  db.exec(`
    CREATE TABLE usuario (
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

  const stmt = db.prepare(`
    INSERT INTO usuario (nome, email, senha, foto_perfil, tipo_usuario, inscricao_id, resultado_id)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  for (const linha of linhas) {
    stmt.run(
      linha.nome,
      linha.email,
      linha.senha,
      linha.foto_perfil,
      linha.tipo_usuario,
      linha.inscricao_id,
      linha.resultado_id
    );
  }

  db.exec("DROP TABLE usuario_old");
  console.log("\nTabela 'usuario' reorganizada.");

}

function reindexarInscricoes() {

  const linhas = db.prepare("SELECT * FROM inscricoes ORDER BY id_inscricoes ASC").all();

  const mapaIds = {};
  linhas.forEach((linha, index) => {
    mapaIds[linha.id_inscricoes] = index + 1;
  });

  db.exec("DROP TABLE IF EXISTS inscricoes_old");
  db.exec("ALTER TABLE inscricoes RENAME TO inscricoes_old");

  db.exec(`
    CREATE TABLE inscricoes (
      id_inscricoes INTEGER PRIMARY KEY AUTOINCREMENT,
      nome_poeta TEXT NOT NULL,
      turma TEXT NOT NULL,
      turno TEXT NOT NULL,
      curso TEXT NOT NULL
    )
  `);

  const stmt = db.prepare(`
    INSERT INTO inscricoes (nome_poeta, turma, turno, curso)
    VALUES (?, ?, ?, ?)
  `);

  for (const linha of linhas) {
    stmt.run(linha.nome_poeta, linha.turma, linha.turno, linha.curso);
  }

  db.exec("DROP TABLE inscricoes_old");

  // Atualiza os usuários que apontavam para inscrições que mudaram de id
  const usuarios = db
    .prepare("SELECT id, inscricao_id FROM usuario WHERE inscricao_id IS NOT NULL")
    .all();

  for (const usuario of usuarios) {
    const novoId = mapaIds[usuario.inscricao_id];
    if (novoId) {
      db.prepare("UPDATE usuario SET inscricao_id = ? WHERE id = ?").run(novoId, usuario.id);
    }
  }

  console.log("Tabela 'inscricoes' reorganizada (referências em 'usuario' também atualizadas).");

}