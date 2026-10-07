import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import rateLimit from "express-rate-limit";
import { verificarToken } from "./middlewares/auth.js"; // também carrega o .env
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

/*
 * Endereços do front-end que podem falar com o back-end.
 * Se o front rodar em outro endereço (outra porta, ou o IP da rede para
 * abrir o placar em outro computador), coloque no .env separado por vírgula:
 *
 * FRONT_URL=http://localhost:5173,http://192.168.0.10:5173
 */
const ORIGENS_PERMITIDAS = (process.env.FRONT_URL || "http://localhost:5173")
  .split(",")
  .map((origem) => origem.trim());

const io = new Server(server, {
  cors: { origin: ORIGENS_PERMITIDAS },
});

app.use(cors({ origin: ORIGENS_PERMITIDAS }));

/* ---------- Limite de tentativas ---------- */

const mensagemLimite = {
  erro: "Muitas tentativas. Aguarde alguns minutos e tente de novo.",
};

// Login e cadastro (limite mais alto: vários alunos podem usar a mesma rede da escola)
const limiteLogin = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: mensagemLimite,
});

// Recuperação de senha
const limiteCodigo = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: mensagemLimite,
});

app.use(["/login", "/cadastro"], limiteLogin);
app.use(
  ["/solicitar-codigo", "/verificar-codigo", "/redefinir-senha"],
  limiteCodigo
);

/* ---------- Tamanho das requisições ---------- */

// Só estas rotas recebem imagens/vídeos em base64.
const jsonGrande = express.json({ limit: "50mb" });
app.use("/galeria", jsonGrande);
app.use("/eventos", jsonGrande);
app.use("/perfil", jsonGrande);

// Todas as outras: limite pequeno.
app.use(express.json({ limit: "100kb" }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando!" });
});

/*
 * As páginas /tabelas mostram o banco inteiro. Ficam desligadas por padrão.
 * Para usar durante o desenvolvimento, coloque no .env:
 *
 * HABILITAR_TABELAS=true
 *
 * Mesmo ligadas, só abrem na própria máquina do servidor.
 */
if (process.env.HABILITAR_TABELAS === "true") {
  app.use(tabelasRoutes);
}

app.use(perfilRoutes);
app.use(inscricaoRoutes);
app.use(galeriaRoutes);
app.use(authRoutes);
app.use(muralRoutes);
app.use(eventoRoutes);
app.use(notaRoutes);
app.use(anotacaoRoutes);

/* ---------- Erros ---------- */

app.use((err, req, res, next) => {
  if (err.type === "entity.too.large") {
    return res.status(413).json({ erro: "Arquivo ou texto grande demais." });
  }

  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ erro: "JSON inválido." });
  }

  console.error(err);
  res.status(500).json({ erro: "Erro interno do servidor." });
});

/* ---------- Placar ao vivo (Socket.IO) ---------- */

let aoVivo = {
  poeta: "",
  notas: [null, null, null, null, null],
};

/*
 * Qualquer pessoa (ex.: a TV) pode se conectar e ASSISTIR.
 * Só o matemático logado consegue ALTERAR o placar.
 *
 * No front do matemático, conecte enviando o token:
 *   io(API_URL, { auth: { token } })
 */
io.use((socket, next) => {
  const token = socket.handshake.auth?.token;

  if (token) {
    try {
      socket.data.usuario = verificarToken(token);
    } catch {
      // token inválido: continua como espectador
    }
  }

  next();
});

function ehMatematico(socket) {
  return socket.data.usuario?.tipo === "matematico";
}

function notaValida(valor) {
  if (valor === null || valor === "") return true;

  const numero = Number(valor);

  return !Number.isNaN(numero) && numero >= 0 && numero <= 10;
}

// Aceita só os campos do placar, no formato esperado.
function limparDadosAoVivo(dados) {
  const limpo = {};

  if (typeof dados?.poeta === "string") {
    limpo.poeta = dados.poeta.slice(0, 100);
  }

  if (
    Array.isArray(dados?.notas) &&
    dados.notas.length === 5 &&
    dados.notas.every(notaValida)
  ) {
    limpo.notas = dados.notas;
  }

  // tempo do cronômetro, em segundos
  if (
    typeof dados?.tempo === "number" &&
    Number.isFinite(dados.tempo) &&
    dados.tempo >= 0 &&
    dados.tempo <= 3600
  ) {
    limpo.tempo = Math.floor(dados.tempo);
  }

  return limpo;
}

io.on("connection", (socket) => {
  // Quem conecta (ex: a TV) recebe o estado atual
  socket.emit("aoVivoAtual", aoVivo);

  // O matemático envia atualizações (poeta e/ou notas)
  socket.on("aoVivoAtualizar", (dados) => {
    if (!ehMatematico(socket)) return;

    aoVivo = { ...aoVivo, ...limparDadosAoVivo(dados) };
    io.emit("aoVivoAtual", aoVivo);
  });

  // Limpa o placar (ex: ao trocar de poeta)
  socket.on("aoVivoLimpar", () => {
    if (!ehMatematico(socket)) return;

    aoVivo = { poeta: "", notas: [null, null, null, null, null] };
    io.emit("aoVivoAtual", aoVivo);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});