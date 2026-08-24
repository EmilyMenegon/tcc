import bcrypt from "bcryptjs";
import db from "./database.js";

async function seed() {

  const usuariosTeste = [
    { nome: "Organizador", email: "organizador@gmail.com", senha: "organizador1234", tipo: "organizador" },
  ];

  const stmtUsuario = db.prepare(
    "INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)"
  );

  for (const usuario of usuariosTeste) {
    try {
      const senhaHash = await bcrypt.hash(usuario.senha, 10);
      stmtUsuario.run(usuario.nome, usuario.email, senhaHash, usuario.tipo);
      console.log(`Criado: ${usuario.email} (${usuario.tipo})`);
    } catch (err) {
      console.log(`Já existe: ${usuario.email}`);
    }
  }

  const matematicosTeste = [
    { email: "mat@gmail.com", senha: "matematico1234" },
  ];

  const stmtMatematico = db.prepare(
    "INSERT INTO matematico (email, senha) VALUES (?, ?)"
  );

  for (const matematico of matematicosTeste) {
    try {
      const senhaHash = await bcrypt.hash(matematico.senha, 10);
      stmtMatematico.run(matematico.email, senhaHash);
      console.log(`Criado: ${matematico.email} (matematico)`);
    } catch (err) {
      console.log(`Já existe: ${matematico.email}`);
    }
  }

  console.log("Seed finalizado.");

}

seed();