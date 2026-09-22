import { Router } from "express";
import {
  listarEventos,
  criarEvento,
  atualizarEvento,
  excluirEvento,
  listarParticipantes,
  definirParticipantes,
} from "../controllers/eventoController.js";
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

router.get("/eventos", listarEventos);
router.post("/eventos", exigirLogin, exigirTipo(["organizador"]), criarEvento);
router.put("/eventos/:id", exigirLogin, exigirTipo(["organizador"]), atualizarEvento);
router.delete("/eventos/:id", exigirLogin, exigirTipo(["organizador"]), excluirEvento);

router.get("/eventos/:id/participantes", exigirLogin, listarParticipantes);
router.put("/eventos/:id/participantes", exigirLogin, exigirTipo(["organizador"]), definirParticipantes);

export default router;