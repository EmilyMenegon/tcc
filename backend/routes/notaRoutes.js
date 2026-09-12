import { Router } from "express";
import {
  listarNotas,
  listarPoetas,
  criarNota,
  atualizarNota,
  excluirNota,
} from "../controllers/notaController.js";

const router = Router();

router.get("/notas", listarNotas);
router.get("/notas/poetas", listarPoetas);
router.post("/notas", criarNota);
router.put("/notas/:id", atualizarNota);
router.delete("/notas/:id", excluirNota);

export default router;