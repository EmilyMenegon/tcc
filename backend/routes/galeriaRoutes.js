import { Router } from "express";

import {
  listarFotos,
  listarFotosFixadas,
  adicionarFotos,
  excluirFoto,
} from "../controllers/galeriaController.js";

import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

// PÚBLICO — a Home carrega só as fotos fixadas, sem login
router.get("/galeria/fixadas", listarFotosFixadas);

// PROTEGIDO — álbum completo: só para quem está logado (ADM e alunos)
router.get("/galeria", exigirLogin, listarFotos);

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