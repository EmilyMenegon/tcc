import { Router } from "express";
import { buscarPerfil, atualizarPerfil } from "../controllers/perfilController.js";
import { exigirLogin } from "../middlewares/auth.js";

const router = Router();

router.get("/perfil/:email", exigirLogin, buscarPerfil);
router.put("/perfil/:email", exigirLogin, atualizarPerfil);

export default router;