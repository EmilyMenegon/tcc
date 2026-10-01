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

// PÚBLICO — usada pelo ADM (devolve tudo, com o campo "fixada")
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