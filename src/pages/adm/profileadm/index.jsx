import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import {
  getUsuarioLogado,
  salvarUsuarioLogado,
  logout,
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
  ModalOverlay,
  Modal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";

export default function Profileadm() {
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

    fetch(`http://localhost:3001/perfil/${usuarioLogado.email}`)
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

  function handleLogout() {
    logout();
    navigate("/login");
  }

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      <GlobalStyle />

      <Page>

        <BackButton to="/adm/inicioadm">
          <FaArrowLeft />
        </BackButton>

        <Container>

          <ProfileBox>
            <AvatarWrapper>
              <Avatar
                src={photo}
                alt="Foto de perfil"
              />

              <EditButton>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />

                Editar
              </EditButton>
            </AvatarWrapper>
          </ProfileBox>

          <UserName>
            {nome}
          </UserName>

          <UserEmail>
            {emailAtual}
          </UserEmail>

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

          {erro && (
            <p
              style={{
                color: "red",
                fontSize: "0.9rem",
              }}
            >
              {erro}
            </p>
          )}

          {sucesso && (
            <p
              style={{
                color: "#2e7d32",
                fontSize: "0.9rem",
              }}
            >
              {sucesso}
            </p>
          )}

          <SaveButton
            type="button"
            onClick={handleSalvar}
            onMouseMove={handleMouseMove}
          >
            Salvar alterações
          </SaveButton>

          <LogoutLink
            onClick={() => setShowLogoutModal(true)}
          >
            Sair da conta
          </LogoutLink>

        </Container>

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

                <CancelButton
                  onClick={() =>
                    setShowLogoutModal(false)
                  }
                  onMouseMove={handleMouseMove}
                >
                  Cancelar
                </CancelButton>

                <ConfirmButton
                  onClick={handleLogout}
                  onMouseMove={handleMouseMove}
                >
                  Sair
                </ConfirmButton>

              </ModalButtons>

            </Modal>

          </ModalOverlay>
        )}

      </Page>
    </>
  );
}
