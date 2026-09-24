import { Router } from "express";

import {
  buscarPerfil,
  atualizarPerfil,
  solicitarCodigoPerfil,
  verificarCodigoPerfil,
} from "../controllers/perfilController.js";

import { exigirLogin } from "../middlewares/auth.js";

const router = Router();

router.get("/perfil/:email", exigirLogin, buscarPerfil);

router.put("/perfil/:email", exigirLogin, atualizarPerfil);

router.post(
  "/perfil/:email/solicitar-codigo",
  exigirLogin,
  solicitarCodigoPerfil
);

router.post(
  "/perfil/:email/verificar-codigo",
  exigirLogin,
  verificarCodigoPerfil
);

export default router;