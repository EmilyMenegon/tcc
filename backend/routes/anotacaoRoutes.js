import { Router } from "express";
import {
  listarAnotacoes,
  salvarAnotacao,
} from "../controllers/anotacaoController.js";
import { exigirLogin } from "../middlewares/auth.js";

const router = Router();

router.get("/anotacoes", exigirLogin, listarAnotacoes);
router.put("/anotacoes/:numero", exigirLogin, salvarAnotacao);

export default router;