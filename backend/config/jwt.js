import jwt from "jsonwebtoken";

// Em um projeto real, essa chave ficaria fora do código (variável de ambiente).
// Para o TCC, mantemos aqui por simplicidade.
export const JWT_SECRET = "slam-etecamp-chave-secreta-tcc-2026";

export function gerarToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "8h" });
}