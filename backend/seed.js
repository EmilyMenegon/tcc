import db from "./database.js";
 
const usuariosTeste = [
  { nome: "Admin Teste", email: "adm@teste.com", senha: "adm12345", tipo: "adm" },
  { nome: "Matemático Teste", email: "matematico@teste.com", senha: "mat12345", tipo: "matematico" },
  { nome: "Aluno Teste", email: "aluno@teste.com", senha: "aluno12345", tipo: "aluno" },
];
 
const stmt = db.prepare(
  "INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)"
);
 
for (const usuario of usuariosTeste) {
  try {
    stmt.run(usuario.nome, usuario.email, usuario.senha, usuario.tipo);
    console.log(`Criado: ${usuario.email} (${usuario.tipo})`);
  } catch (err) {
    console.log(`Já existe: ${usuario.email}`);
  }
}
 
console.log("Seed finalizado.");
 