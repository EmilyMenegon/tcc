import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import tabelasRoutes from "./routes/tabelasRoutes.js";
import perfilRoutes from "./routes/perfilRoutes.js";
import inscricaoRoutes from "./routes/inscricaoRoutes.js";
import galeriaRoutes from "./routes/galeriaRoutes.js";
import eventoRoutes from "./routes/eventoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando! Veja as tabelas em /tabelas ou teste a API em /docs.html" });
});

app.use(tabelasRoutes);
app.use(perfilRoutes);
app.use(inscricaoRoutes);
app.use(galeriaRoutes);
app.use(authRoutes);
app.use(eventoRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});