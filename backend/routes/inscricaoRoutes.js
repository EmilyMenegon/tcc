import { Router } from "express";
import { criarInscricao, buscarInscricaoPorEmail } from "../controllers/inscricaoController.js";

const router = Router();

router.post("/inscricao", criarInscricao);
router.get("/inscricao/:email", buscarInscricaoPorEmail);

export default router;