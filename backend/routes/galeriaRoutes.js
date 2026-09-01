import { Router } from "express";
import { listarFotos, adicionarFotos, excluirFoto } from "../controllers/galeriaController.js";
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

router.get("/galeria", exigirLogin, listarFotos);
router.post("/galeria", exigirLogin, exigirTipo(["organizador"]), adicionarFotos);
router.delete("/galeria/:id", exigirLogin, exigirTipo(["organizador"]), excluirFoto);

export default router;