import { Router } from "express";
import { buscarPerfil, atualizarPerfil } from "../controllers/perfilController.js";

const router = Router();

router.get("/perfil/:email", buscarPerfil);
router.put("/perfil/:email", atualizarPerfil);

export default router;