import { Router } from "express";
import {
  criarInscricao,
  buscarInscricaoPorEmail,
  listarInscricoes,
  atualizarInscricao,
  excluirInscricao,
} from "../controllers/inscricaoController.js";

const router = Router();

router.post("/inscricao", criarInscricao);
router.get("/inscricoes", listarInscricoes);
router.get("/inscricao/:email", buscarInscricaoPorEmail);
router.put("/inscricao/:id", atualizarInscricao);
router.delete("/inscricao/:id", excluirInscricao);

export default router;