import { Router } from "express";
import {
  listarPosts,
  criarPost,
  atualizarPost,
  excluirPost,
} from "../controllers/muralController.js";
import { exigirLogin, exigirTipo } from "../middlewares/auth.js";

const router = Router();

router.get("/mural", exigirLogin, listarPosts);
router.post("/mural", exigirLogin, exigirTipo(["organizador"]), criarPost);
router.put("/mural/:id", exigirLogin, exigirTipo(["organizador"]), atualizarPost);
router.delete("/mural/:id", exigirLogin, exigirTipo(["organizador"]), excluirPost);

export default router;