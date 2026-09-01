import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/jwt.js";

export function exigirLogin(req, res, next) {

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ erro: "Token não fornecido." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.usuario = payload; // { email, tipo }
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
      return res.status(403).json({ erro: "Você não tem permissão para acessar isso." });
    }

    next();

  };

}