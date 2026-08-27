import db from "../database.js";

function getNomesTabelas() {
  return db
    .prepare("SELECT name FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'")
    .all()
    .map((row) => row.name);
}

function gerarPaginaTabela(nomeTabela, linhas) {

  const colunas = linhas.length > 0
    ? Object.keys(linhas[0]).filter((coluna) => coluna !== "senha")
    : [];

  const cabecalho = colunas.map((coluna) => `<th>${coluna}</th>`).join("");

  const corpo = linhas.map((linha) => {
    const celulas = colunas
      .map((coluna) => `<td>${linha[coluna] ?? ""}</td>`)
      .join("");
    return `<tr>${celulas}</tr>`;
  }).join("");

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Tabela: ${nomeTabela}</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 900px; margin: 40px auto; padding: 0 20px; color: #111; }
  h1 { color: #831614; }
  a.voltar { display: inline-block; margin-bottom: 20px; color: #831614; text-decoration: none; }
  table { width: 100%; border-collapse: collapse; margin-top: 15px; }
  th, td { border: 1px solid #ddd; padding: 8px 12px; text-align: left; font-size: 0.9rem; }
  th { background: #ffdb53; color: #111; }
  tr:nth-child(even) { background: #f9f9f9; }
</style>
</head>
<body>
  <a class="voltar" href="/tabelas">&larr; Ver todas as tabelas</a>
  <h1>Tabela: ${nomeTabela}</h1>
  <p>${linhas.length} registro(s) encontrado(s). ${linhas.length > 0 && "senha" in linhas[0] ? "(coluna de senha ocultada por segurança)" : ""}</p>
  <table>
    <thead><tr>${cabecalho}</tr></thead>
    <tbody>${corpo}</tbody>
  </table>
</body>
</html>
  `;
}

export function listarTabelas(req, res) {

  const nomes = getNomesTabelas();

  const links = nomes
    .map((nome) => `<li><a href="/tabela/${nome}">${nome}</a></li>`)
    .join("");

  res.send(`
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Tabelas do banco</title>
<style>
  body { font-family: Arial, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #111; }
  h1 { color: #831614; }
  li { margin: 8px 0; font-size: 1rem; }
  a { color: #831614; text-decoration: none; }
  a:hover { text-decoration: underline; }
</style>
</head>
<body>
  <h1>Tabelas do banco de dados</h1>
  <ul>${links}</ul>
</body>
</html>
  `);

}

export function verTabela(req, res) {

  const { nome } = req.params;

  const nomesValidos = getNomesTabelas();

  if (!nomesValidos.includes(nome)) {
    return res.status(404).send(`<p>Tabela "${nome}" não encontrada.</p><a href="/tabelas">Ver tabelas disponíveis</a>`);
  }

  const linhas = db.prepare(`SELECT * FROM ${nome}`).all();

  res.send(gerarPaginaTabela(nome, linhas));

}

export function verUsuarios(req, res) {
  req.params.nome = "usuario";
  verTabela(req, res);
}