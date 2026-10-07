import { Router } from "express";
import { listarTabelas, verTabela, verUsuarios } from "../controllers/tabelasController.js";

const router = Router();

// Só abre quando o acesso vem da própria máquina onde o servidor roda.
// IMPORTANTE: aplicado em cada rota (e não com router.use), para não bloquear
// as outras rotas do site.
function somenteLocal(req, res, next) {
  const ip = req.socket.remoteAddress;
  const local = ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(ip);

  if (!local) {
    return res
      .status(403)
      .json({ erro: "Acesso permitido apenas na máquina do servidor." });
  }

  next();
}

router.get("/tabelas", somenteLocal, listarTabelas);
router.get("/tabela/:nome", somenteLocal, verTabela);
router.get("/usuarios", somenteLocal, verUsuarios);

export default router;