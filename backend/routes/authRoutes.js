import { Router } from "express";

import {
  cadastrar,
  login,
  solicitarCodigo,
  verificarCodigo,
  redefinirSenha,
} from "../controllers/authController.js";

const router = Router();

router.post("/cadastro", cadastrar);
router.post("/login", login);
router.post("/solicitar-codigo", solicitarCodigo);
router.post("/verificar-codigo", verificarCodigo);
router.post("/redefinir-senha", redefinirSenha);

export default router;