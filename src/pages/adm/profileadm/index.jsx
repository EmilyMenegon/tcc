import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import {
  getUsuarioLogado,
  salvarUsuarioLogado,
  logout,
  getAuthHeaders,
} from "../../../utils/auth";
import {
  GlobalStyle,
  Page,
  Pixel01,
  Pixel02,
  Pixel03,
  BackButton,
  Container,
  ProfileCard,
  ProfileHeader,
  AvatarWrapper,
  Avatar,
  EditButton,
  UserName,
  UserEmail,
  Form,
  Field,
  Label,
  Input,
  SaveButton,
  LogoutLink,
  Message,
  ModalOverlay,
  Modal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";

export default function Profileadm() {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [nome, setNome] = useState("");
  const [emailAtual, setEmailAtual] = useState("");
  const [photo, setPhoto] = useState("/perfil.png");
  const [fotoBase64, setFotoBase64] = useState(null);

  useEffect(() => {
    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado?.email) {
      navigate("/login");
      return;
    }

    fetch(
      `http://localhost:3001/perfil/${encodeURIComponent(
        usuarioLogado.email
      )}`,
      {
        headers: getAuthHeaders(),
      }
    )
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.erro || "Não foi possível carregar o perfil.");
        }

        setNome(data.nome || "");
        setEmailAtual(data.email || usuarioLogado.email);

        if (data.foto) {
          setPhoto(data.foto);
        }
      })
      .catch((err) => {
        setErro(err.message || "Não foi possível carregar o perfil.");
      });
  }, [navigate]);

  const handleButtonMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErro("Selecione uma imagem válida.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
      setFotoBase64(reader.result);
      setErro("");
      setSucesso("");
    };

    reader.onerror = () => {
      setErro("Não foi possível carregar a imagem.");
    };

    reader.readAsDataURL(file);
  };

  async function handleSalvar(e) {
    e.preventDefault();

    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("Preencha o nome.");
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3001/perfil/${encodeURIComponent(emailAtual)}`,
        {
          method: "PUT",
          headers: {
            ...getAuthHeaders(),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: nome.trim(),
            foto: fotoBase64,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Não foi possível atualizar o perfil.");
        return;
      }

      const usuario = getUsuarioLogado();

      salvarUsuarioLogado({
        ...usuario,
        nome: data.nome || nome.trim(),
        email: emailAtual,
        foto: data.foto || fotoBase64 || photo,
      });

      setNome(data.nome || nome.trim());

      if (data.foto) {
        setPhoto(data.foto);
      }

      setFotoBase64(null);
      setSucesso("Perfil atualizado com sucesso!");
    } catch {
      setErro("Não foi possível atualizar o perfil.");
    }
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  return (
    <>
      <GlobalStyle />

      <Page>
        <Pixel01 src="/pixel01.png" alt="" />
        <Pixel02 src="/pixel02.png" alt="" />
        <Pixel03 src="/pixel03.png" alt="" />

        <BackButton
          to="/adm/inicioadm"
          onMouseMove={handleButtonMouseMove}
          aria-label="Voltar"
        >
          <span className="button-content">
            <FaArrowLeft />
          </span>
        </BackButton>

        <Container>
          <ProfileCard>
            <ProfileHeader>
              <AvatarWrapper>
                <Avatar src={photo} alt="Foto de perfil" />

                <EditButton
                  htmlFor="fotoPerfil"
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="button-content">Editar</span>

                  <input
                    id="fotoPerfil"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </EditButton>
              </AvatarWrapper>

              <UserName>{nome || "Administrador"}</UserName>
              <UserEmail>{emailAtual}</UserEmail>
            </ProfileHeader>

            <Form onSubmit={handleSalvar}>
              <Field>
                <Label htmlFor="nome">Nome</Label>

                <Input
                  id="nome"
                  type="text"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                    setErro("");
                    setSucesso("");
                  }}
                  placeholder="Digite seu nome"
                  autoComplete="name"
                />
              </Field>

              <Field>
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  type="email"
                  value={emailAtual}
                  disabled
                  readOnly
                />
              </Field>

              {erro && <Message $error>{erro}</Message>}

              {sucesso && <Message $success>{sucesso}</Message>}

              <SaveButton
                type="submit"
                onMouseMove={handleButtonMouseMove}
              >
                <span className="button-content">
                  Salvar alterações
                </span>
              </SaveButton>
            </Form>

            <LogoutLink
              type="button"
              onClick={() => setShowLogoutModal(true)}
            >
              Sair da conta
            </LogoutLink>
          </ProfileCard>
        </Container>

        {showLogoutModal && (
          <ModalOverlay>
            <Modal>
              <h3>Sair da conta?</h3>

              <p>
                Tem certeza que deseja sair da sua conta?
              </p>

              <ModalButtons>
                <CancelButton
                  type="button"
                  onClick={() => setShowLogoutModal(false)}
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="button-content">
                    Cancelar
                  </span>
                </CancelButton>

                <ConfirmButton
                  type="button"
                  onClick={handleLogout}
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="button-content">
                    Sair
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