import { Router } from "express";
import { cadastrar, login, redefinirSenha } from "../controllers/authController.js";

const router = Router();

router.post("/cadastro", cadastrar);
router.post("/login", login);
router.post("/redefinir-senha", redefinirSenha);

export default router;