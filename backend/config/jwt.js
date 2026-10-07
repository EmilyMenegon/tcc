import jwt from "jsonwebtoken";

// Carrega o arquivo .env (Node 20.12+). Se não existir, a checagem abaixo avisa.
try {
  process.loadEnvFile();
} catch {
  // sem .env
}

export const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET || JWT_SECRET.length < 32) {
  throw new Error(
    "Defina JWT_SECRET (mínimo 32 caracteres) no arquivo .env do back-end."
  );
}

export function gerarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "8h",
    algorithm: "HS256",
  });
}