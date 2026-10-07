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
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

// Quem lança, edita e exclui notas: só o matemático.
// (se o organizador também precisar, use ["matematico", "organizador"])
const soMatematico = [exigirLogin, exigirTipo(["matematico"])];

// Quem consulta tudo (inclusive notas ainda não publicadas) e publica.
const matematicoOuOrganizador = [
  exigirLogin,
  exigirTipo(["matematico", "organizador"]),
];

router.get("/notas", matematicoOuOrganizador, listarNotas);
router.get("/notas/poetas", matematicoOuOrganizador, listarPoetas);

// PÚBLICO: devolve só as notas já publicadas.
router.get("/eventos/:id/notas", listarNotasPorEvento);

router.put("/eventos/:id/notas/publicar", matematicoOuOrganizador, publicarNotasEvento);

router.post("/notas", soMatematico, criarNota);
router.put("/notas/:id", soMatematico, atualizarNota);
router.delete("/notas/:id", soMatematico, excluirNota);

export default router;