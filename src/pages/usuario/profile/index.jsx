import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";

import {
  getUsuarioLogado,
  salvarUsuarioLogado,
  logout,
  getAuthHeaders,
} from "../../../utils/auth";

import {
  GlobalStyle,
  Page,
  Container,
  BackButton,
  ProfileBox,
  AvatarWrapper,
  Avatar,
  EditButton,
  UserName,
  UserEmail,
  Field,
  Label,
  Input,
  PasswordBox,
  SaveButton,
  LogoutLink,
  Aviso,
  AvisoSucesso,
  ModalOverlay,
  Modal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";

export default function Profile() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const [nome, setNome] = useState("");
  const [emailAtual, setEmailAtual] = useState("");
  const [novoEmail, setNovoEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const [photo, setPhoto] = useState("/perfil.png");
  const [fotoBase64, setFotoBase64] = useState(null);

  useEffect(() => {
    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado?.email) return;

    fetch(`http://localhost:3001/perfil/${usuarioLogado.email}`, {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => {
        setNome(data.nome);
        setEmailAtual(data.email);

        if (data.foto) {
          setPhoto(data.foto);
        }
      })
      .catch(() => {
        setErro("Não foi possível carregar o perfil.");
      });
  }, []);

  // ==========================================
  // POSIÇÃO DO MOUSE PARA AS ANIMAÇÕES
  // ==========================================

  const handleButtonMouseMove = (e) => {
    const button = e.currentTarget;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  // ==========================================
  // ALTERAR FOTO
  // ==========================================

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
      setFotoBase64(reader.result);
    };

    reader.onerror = () => {
      setErro("Não foi possível carregar a imagem.");
    };

    reader.readAsDataURL(file);
  };

  // ==========================================
  // SALVAR ALTERAÇÕES
  // ==========================================

  async function handleSalvar() {
    setErro("");
    setSucesso("");

    try {
      const res = await fetch(
        `http://localhost:3001/perfil/${emailAtual}`,
        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },

          body: JSON.stringify({
            nome,
            senha: novaSenha || undefined,
            novoEmail: novoEmail || undefined,
            foto: fotoBase64 || undefined,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao salvar.");
        return;
      }

      salvarUsuarioLogado({
        ...getUsuarioLogado(),
        nome: data.nome,
        email: data.email,
      });

      setEmailAtual(data.email);

      setNovoEmail("");
      setNovaSenha("");
      setFotoBase64(null);

      setSucesso("Perfil atualizado com sucesso!");
    } catch (err) {
      console.error(err);

      setErro("Não foi possível conectar ao servidor.");
    }
  }

  // ==========================================
  // LOGOUT
  // ==========================================

  function handleLogout() {
    logout();

    navigate("/login");
  }

  return (
    <>
      <GlobalStyle />

      <Page>

        {/* ==========================================
            VOLTAR
        ========================================== */}

        <BackButton to="/usuario/home">
          <FaArrowLeft />
        </BackButton>

        <Container>

          {/* ==========================================
              FOTO
          ========================================== */}

          <ProfileBox>

            <AvatarWrapper>

              <Avatar
                src={photo}
                alt="Foto de perfil"
              />

              <EditButton
                onMouseMove={handleButtonMouseMove}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />

                <span className="buttonContent">
                  Editar
                </span>
              </EditButton>

            </AvatarWrapper>

          </ProfileBox>

          {/* ==========================================
              NOME
          ========================================== */}

          <UserName>
            {nome}
          </UserName>

          {/* ==========================================
              EMAIL
          ========================================== */}

          <UserEmail>
            {emailAtual}
          </UserEmail>

          {/* ==========================================
              NOME
          ========================================== */}

          <Field>

            <Label>
              Nome
            </Label>

            <Input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

          </Field>

          {/* ==========================================
              EMAIL ATUAL
          ========================================== */}

          <Field>

            <Label>
              Email atual
            </Label>

            <Input
              type="email"
              value={emailAtual}
              readOnly
              disabled
            />

          </Field>

          {/* ==========================================
              NOVO EMAIL
          ========================================== */}

          <Field>

            <Label>
              Novo email (deixe em branco para manter o atual)
            </Label>

            <Input
              type="email"
              value={novoEmail}
              onChange={(e) => setNovoEmail(e.target.value)}
            />

          </Field>

          {/* ==========================================
              NOVA SENHA
          ========================================== */}

          <Field>

            <Label>
              Nova senha (deixe em branco para manter a atual)
            </Label>

            <PasswordBox>

              <Input
                type={showPassword ? "text" : "password"}
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />

              <span
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </span>

            </PasswordBox>

          </Field>

          {/* ==========================================
              AVISO DE ERRO
              COM ANIMAÇÃO
          ========================================== */}

          {erro && (
            <Aviso
              onMouseMove={handleButtonMouseMove}
            >
              <span className="avisoContent">
                {erro}
              </span>
            </Aviso>
          )}

          {/* ==========================================
              AVISO DE SUCESSO
              COM ANIMAÇÃO
          ========================================== */}

          {sucesso && (
            <AvisoSucesso
              onMouseMove={handleButtonMouseMove}
            >
              <span className="avisoContent">
                {sucesso}
              </span>
            </AvisoSucesso>
          )}

          {/* ==========================================
              SALVAR
          ========================================== */}

          <SaveButton
            type="button"
            onClick={handleSalvar}
            onMouseMove={handleButtonMouseMove}
          >
            <span className="buttonContent">
              Salvar alterações
            </span>
          </SaveButton>

          {/* ==========================================
              SAIR
          ========================================== */}

          <LogoutLink
            onClick={() => setShowLogoutModal(true)}
          >
            Sair da conta
          </LogoutLink>

        </Container>

        {/* ==========================================
            MODAL LOGOUT
        ========================================== */}

        {showLogoutModal && (
          <ModalOverlay>

            <Modal>

              <h3>
                Sair da conta
              </h3>

              <p>
                Tem certeza que deseja sair da sua conta?
              </p>

              <ModalButtons>

                {/* CANCELAR */}

                <CancelButton
                  onClick={() =>
                    setShowLogoutModal(false)
                  }
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="buttonContent">
                    Cancelar
                  </span>
                </CancelButton>

                {/* CONFIRMAR */}

                <ConfirmButton
                  onClick={handleLogout}
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="buttonContent">
                    Sim, sair
                  </span>
                </ConfirmButton>

              </ModalButtons>

            </Modal>

          </ModalOverlay>
        )}

      </Page>
    </>
  );
}
