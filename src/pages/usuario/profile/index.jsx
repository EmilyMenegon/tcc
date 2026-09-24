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
  BackButton,
  Container,
  PixelArea,
  Pixel01,
  Pixel02,
  Pixel03,
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

  const [codigo, setCodigo] = useState("");
  const [codigoEnviado, setCodigoEnviado] = useState(false);
  const [carregandoCodigo, setCarregandoCodigo] = useState(false);
  const [verificandoCodigo, setVerificandoCodigo] = useState(false);

  useEffect(() => {
    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado?.email) return;

    fetch(
      `http://localhost:3001/perfil/${encodeURIComponent(
        usuarioLogado.email
      )}`,
      {
        headers: getAuthHeaders(),
      }
    )
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

  const handleButtonMouseMove = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

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

  async function solicitarCodigo() {
    setErro("");
    setSucesso("");
    setCarregandoCodigo(true);

    try {
      const res = await fetch(
        `http://localhost:3001/perfil/${encodeURIComponent(
          emailAtual
        )}/solicitar-codigo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify({
            nome,
            senha: novaSenha || undefined,
            novoEmail: novoEmail.trim() || undefined,
            foto: fotoBase64 || undefined,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao gerar código.");
        return;
      }

      setCodigo("");
      setCodigoEnviado(true);

      setSucesso(
        "Código de confirmação gerado. Confira o terminal do backend."
      );
    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setCarregandoCodigo(false);
    }
  }

  async function verificarCodigo() {
    setErro("");
    setSucesso("");

    if (!codigo.trim()) {
      setErro("Digite o código de confirmação.");
      return;
    }

    setVerificandoCodigo(true);

    try {
      const res = await fetch(
        `http://localhost:3001/perfil/${encodeURIComponent(
          emailAtual
        )}/verificar-codigo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify({
            codigo: codigo.trim(),
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Código de confirmação inválido.");
        return;
      }

      salvarUsuarioLogado({
        ...getUsuarioLogado(),
        nome: data.nome,
        email: data.email,
      });

      setNome(data.nome);
      setEmailAtual(data.email);

      setNovoEmail("");
      setNovaSenha("");
      setCodigo("");
      setCodigoEnviado(false);
      setFotoBase64(null);

      if (data.foto) {
        setPhoto(data.foto);
      }

      setSucesso("Perfil atualizado com sucesso!");
    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    } finally {
      setVerificandoCodigo(false);
    }
  }

  function cancelarCodigo() {
    setCodigo("");
    setCodigoEnviado(false);
    setErro("");
    setSucesso("");
  }

  async function handleSalvar() {
    setErro("");
    setSucesso("");

    if (!nome.trim()) {
      setErro("Preencha o nome.");
      return;
    }

    /*
     * Se houver alteração de email ou senha,
     * primeiro solicita o código de confirmação.
     */
    if (novoEmail.trim() || novaSenha) {
      await solicitarCodigo();
      return;
    }

    /*
     * Nome e foto continuam sendo salvos
     * normalmente, sem código.
     */
    try {
      const res = await fetch(
        `http://localhost:3001/perfil/${encodeURIComponent(
          emailAtual
        )}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify({
            nome,
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

      setNome(data.nome);
      setEmailAtual(data.email);
      setFotoBase64(null);

      if (data.foto) {
        setPhoto(data.foto);
      }

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

  return (
    <>
      <GlobalStyle />

      <Page>
        <BackButton to="/usuario/home">
          <FaArrowLeft />
        </BackButton>

        <PixelArea>
          <Pixel01 src="/pixel01.png" alt="" />
          <Pixel02 src="/pixel02.png" alt="" />
          <Pixel03 src="/pixel03.png" alt="" />
        </PixelArea>

        <Container>
          <ProfileBox>
            <AvatarWrapper>
              <Avatar src={photo} alt="Foto de perfil" />

              <EditButton onMouseMove={handleButtonMouseMove}>
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

          <UserName>{nome}</UserName>
          <UserEmail>{emailAtual}</UserEmail>

          <Field>
            <Label>Nome</Label>

            <Input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </Field>

          <Field>
            <Label>Email atual</Label>

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
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </span>
            </PasswordBox>
          </Field>

          {codigoEnviado && (
            <Field>
              <Label>Código de confirmação</Label>

              <Input
                type="text"
                value={codigo}
                onChange={(e) =>
                  setCodigo(
                    e.target.value.replace(/\D/g, "").slice(0, 6)
                  )
                }
                placeholder="Digite o código de 6 dígitos"
                inputMode="numeric"
                maxLength={6}
              />

              <SaveButton
                type="button"
                onClick={verificarCodigo}
                onMouseMove={handleButtonMouseMove}
                disabled={
                  verificandoCodigo || codigo.length !== 6
                }
              >
                <span className="buttonContent">
                  {verificandoCodigo
                    ? "Verificando..."
                    : "Confirmar código"}
                </span>
              </SaveButton>

              <CancelButton
                type="button"
                onClick={cancelarCodigo}
                onMouseMove={handleButtonMouseMove}
              >
                <span className="buttonContent">
                  Cancelar
                </span>
              </CancelButton>
            </Field>
          )}

          {erro && (
            <Aviso onMouseMove={handleButtonMouseMove}>
              <span className="avisoContent">
                {erro}
              </span>
            </Aviso>
          )}

          {sucesso && (
            <AvisoSucesso onMouseMove={handleButtonMouseMove}>
              <span className="avisoContent">
                {sucesso}
              </span>
            </AvisoSucesso>
          )}

          {!codigoEnviado && (
            <SaveButton
              type="button"
              onClick={handleSalvar}
              onMouseMove={handleButtonMouseMove}
              disabled={carregandoCodigo}
            >
              <span className="buttonContent">
                {carregandoCodigo
                  ? "Gerando código..."
                  : "Salvar alterações"}
              </span>
            </SaveButton>
          )}

          <LogoutLink
            onClick={() => setShowLogoutModal(true)}
          >
            Sair da conta
          </LogoutLink>
        </Container>

        {showLogoutModal && (
          <ModalOverlay>
            <Modal>
              <h3>Sair da conta</h3>

              <p>
                Tem certeza que deseja sair da sua conta?
              </p>

              <ModalButtons>
                <CancelButton
                  onClick={() => setShowLogoutModal(false)}
                  onMouseMove={handleButtonMouseMove}
                >
                  <span className="buttonContent">
                    Cancelar
                  </span>
                </CancelButton>

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