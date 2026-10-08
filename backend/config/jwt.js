import jwt from "jsonwebtoken";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

// A chave de login é criada sozinha na primeira vez que o servidor sobe e
// fica guardada em backend/.jwt-secret (esse arquivo está no .gitignore).
const ARQUIVO_CHAVE = path.join(import.meta.dirname, "..", ".jwt-secret");

function obterSegredo() {
  // Opcional: se existir JWT_SECRET num .env, ele tem prioridade.
  try {
    process.loadEnvFile();
  } catch {
    // sem .env: tudo bem
  }

  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length >= 32) {
    return process.env.JWT_SECRET;
  }

  try {
    const salva = fs.readFileSync(ARQUIVO_CHAVE, "utf8").trim();

    if (salva.length >= 32) return salva;
  } catch {
    // ainda não existe
  }

  const nova = crypto.randomBytes(48).toString("hex");

  fs.writeFileSync(ARQUIVO_CHAVE, nova, { mode: 0o600 });

  console.log(
    "Chave de login criada automaticamente em backend/.jwt-secret (não envie ao GitHub)."
  );

  return nova;
}

export const JWT_SECRET = obterSegredo();

export function gerarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "8h",
    algorithm: "HS256",
  });
}