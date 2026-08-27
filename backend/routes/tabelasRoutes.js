import { Router } from "express";
import { listarTabelas, verTabela, verUsuarios } from "../controllers/tabelasController.js";
 
const router = Router();
 
router.get("/tabelas", listarTabelas);
router.get("/tabela/:nome", verTabela);
router.get("/usuarios", verUsuarios);
 
export default router;
 