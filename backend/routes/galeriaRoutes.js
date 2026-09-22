import { Router } from "express";

import {
  listarFotos,
  adicionarFotos,
  excluirFoto,
} from "../controllers/galeriaController.js";

import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

// PÚBLICO — a Home pode carregar as fotos sem login
router.get("/galeria", listarFotos);

// PROTEGIDO — somente usuário logado do tipo organizador pode adicionar
router.post(
  "/galeria",
  exigirLogin,
  exigirTipo(["organizador"]),
  adicionarFotos
);

// PROTEGIDO — somente usuário logado do tipo organizador pode excluir
router.delete(
  "/galeria/:id",
  exigirLogin,
  exigirTipo(["organizador"]),
  excluirFoto
);

export default router;