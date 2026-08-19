import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
 
const app = express();
 
app.use(cors());
app.use(express.json());
 
app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando!" });
});
 
app.use(authRoutes);
 
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 