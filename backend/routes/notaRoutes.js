import { Router } from "express";
import {
  listarNotas,
  listarNotasPorEvento,
  listarPoetas,
  criarNota,
  atualizarNota,
  excluirNota,
  publicarNotasEvento,
} from "../controllers/notaController.js";

const router = Router();

router.get("/notas", listarNotas);
router.get("/notas/poetas", listarPoetas);
router.get("/eventos/:id/notas", listarNotasPorEvento);
router.put("/eventos/:id/notas/publicar", publicarNotasEvento);
router.post("/notas", criarNota);
router.put("/notas/:id", atualizarNota);
router.delete("/notas/:id", excluirNota);

export default router;