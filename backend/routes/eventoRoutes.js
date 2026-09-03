import { Router } from "express";
import {
  listarEventos,
  criarEvento,
  atualizarEvento,
  excluirEvento,
} from "../controllers/eventoController.js";
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

router.get("/eventos", exigirLogin, exigirTipo(["organizador"]), listarEventos);
router.post("/eventos", exigirLogin, exigirTipo(["organizador"]), criarEvento);
router.put("/eventos/:id", exigirLogin, exigirTipo(["organizador"]), atualizarEvento);
router.delete("/eventos/:id", exigirLogin, exigirTipo(["organizador"]), excluirEvento);

export default router;