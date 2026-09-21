import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import authRoutes from "./routes/authRoutes.js";
import tabelasRoutes from "./routes/tabelasRoutes.js";
import perfilRoutes from "./routes/perfilRoutes.js";
import inscricaoRoutes from "./routes/inscricaoRoutes.js";
import galeriaRoutes from "./routes/galeriaRoutes.js";
import muralRoutes from "./routes/muralRoutes.js";
import eventoRoutes from "./routes/eventoRoutes.js";
import notaRoutes from "./routes/notaRoutes.js";
import anotacaoRoutes from "./routes/anotacaoRoutes.js";

const app = express();
const server = http.createServer(app);
 
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando! Veja as tabelas em /tabelas ou teste a API em /docs.html" });
});

app.use(tabelasRoutes);
app.use(perfilRoutes);
app.use(inscricaoRoutes);
app.use(galeriaRoutes);
app.use(authRoutes);
app.use(muralRoutes);
app.use(eventoRoutes);
app.use(notaRoutes);
app.use(anotacaoRoutes);

let aoVivo = {
  poeta: "",
  notas: [null, null, null, null, null],
};
 
io.on("connection", (socket) => {
 
  // Assim que alguém conecta (ex: a TV), recebe o estado atual
  socket.emit("aoVivoAtual", aoVivo);
 
  // O matemático envia atualizações (poeta e/ou notas)
  socket.on("aoVivoAtualizar", (dados) => {
    aoVivo = { ...aoVivo, ...dados };
    io.emit("aoVivoAtual", aoVivo);
  });
 
  // Limpa o placar (ex: ao trocar de poeta)
  socket.on("aoVivoLimpar", () => {
    aoVivo = { poeta: "", notas: [null, null, null, null, null] };
    io.emit("aoVivoAtual", aoVivo);
  });
 
});
 
 
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 