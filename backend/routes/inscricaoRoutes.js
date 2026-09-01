import { Router } from "express";
import {
  criarInscricao,
  buscarInscricaoPorEmail,
  listarInscricoes,
  atualizarInscricao,
  excluirInscricao,
} from "../controllers/inscricaoController.js";
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

router.post("/inscricao", exigirLogin, criarInscricao);
router.get("/inscricao/:email", exigirLogin, buscarInscricaoPorEmail);

router.get("/inscricoes", exigirLogin, exigirTipo(["organizador"]), listarInscricoes);
router.put("/inscricao/:id", exigirLogin, exigirTipo(["organizador"]), atualizarInscricao);
router.delete("/inscricao/:id", exigirLogin, exigirTipo(["organizador"]), excluirInscricao);

export default router;