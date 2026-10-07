import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

// Também usada pelo Socket.IO (index.js) para validar o token do matemático.
export function verificarToken(token) {
  return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
}

export function exigirLogin(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ erro: "Token não fornecido." });
  }

  const token = authHeader.split(" ")[1];

  try {
    req.usuario = verificarToken(token); // { email, tipo }
    next();
  } catch (err) {
    return res.status(401).json({ erro: "Token inválido ou expirado." });
  }
}

export function exigirTipo(tiposPermitidos) {
  return (req, res, next) => {
    if (!req.usuario) {
      return res.status(401).json({ erro: "Não autenticado." });
    }

    if (!tiposPermitidos.includes(req.usuario.tipo)) {
      return res
        .status(403)
        .json({ erro: "Você não tem permissão para acessar isso." });
    }

    next();
  };
}