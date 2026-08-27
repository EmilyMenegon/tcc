import bcrypt from "bcryptjs";
import db from "../database.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SENHA_MIN = 6;
const SENHA_MAX = 16;

export function buscarPerfil(req, res) {

  const { email } = req.params;

  const usuario = db
    .prepare("SELECT nome, email, foto_perfil FROM usuario WHERE email = ?")
    .get(email);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  res.json({
    nome: usuario.nome,
    email: usuario.email,
    foto: usuario.foto_perfil || null,
  });

}

export async function atualizarPerfil(req, res) {

  const { email: emailAtual } = req.params;
  const { nome, senha, novoEmail, foto } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Preencha o nome." });
  }

  if (novoEmail && !EMAIL_REGEX.test(novoEmail)) {
    return res.status(400).json({ erro: "Digite um email válido." });
  }

  if (senha && (senha.length < SENHA_MIN || senha.length > SENHA_MAX)) {
    return res.status(400).json({
      erro: `A senha deve ter entre ${SENHA_MIN} e ${SENHA_MAX} caracteres.`,
    });
  }

  const emailFinal = novoEmail || emailAtual;

  try {

    if (senha && foto) {
      const senhaHash = await bcrypt.hash(senha, 10);
      db.prepare("UPDATE usuario SET nome = ?, email = ?, senha = ?, foto_perfil = ? WHERE email = ?")
        .run(nome, emailFinal, senhaHash, foto, emailAtual);
    } else if (senha) {
      const senhaHash = await bcrypt.hash(senha, 10);
      db.prepare("UPDATE usuario SET nome = ?, email = ?, senha = ? WHERE email = ?")
        .run(nome, emailFinal, senhaHash, emailAtual);
    } else if (foto) {
      db.prepare("UPDATE usuario SET nome = ?, email = ?, foto_perfil = ? WHERE email = ?")
        .run(nome, emailFinal, foto, emailAtual);
    } else {
      db.prepare("UPDATE usuario SET nome = ?, email = ? WHERE email = ?")
        .run(nome, emailFinal, emailAtual);
    }

    res.json({ mensagem: "Perfil atualizado com sucesso!", nome, email: emailFinal, foto: foto || null });

  } catch (err) {
    if (err.message.includes("UNIQUE")) {
      return res.status(400).json({ erro: "Esse email já está sendo usado por outra conta." });
    }
    res.status(500).json({ erro: "Erro ao atualizar perfil." });
  }

}