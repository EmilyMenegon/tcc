import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { logout } from "../../utils/auth";

import {
  GlobalStyle,
  Container,
  Header,
  LogoText,
  Title,
  Content,
  BackButton,
  Overlay,
  Modal,
  ModalTitle,
  ModalText,
  Buttons,
  CancelButton,
  DeleteButton,
} from "./style";

import Notas from "./Notas";

export default function Mat() {
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <>
      {/* Remove a margem padrão do navegador */}
      <GlobalStyle />

      <Container>

        {/* ==================================================
            HEADER
        ================================================== */}

        <Header>

          {/* BOTÃO PARA SAIR DA CONTA */}

          <BackButton
            onClick={() => setShowLogoutModal(true)}
            aria-label="Sair da conta"
            title="Sair da conta"
          >
            <FaHome />
          </BackButton>


          <LogoText>

            <Title>
              Notas
            </Title>

          </LogoText>

        </Header>


        {/* ==================================================
            CONTEÚDO
        ================================================== */}

        <Content>

          <Notas />

        </Content>

      </Container>


      {/* ==================================================
          MODAL DE CONFIRMAÇÃO DE LOGOUT
      ================================================== */}

      {showLogoutModal && (
        <Overlay>
          <Modal>

            <ModalTitle>Sair da conta</ModalTitle>

            <ModalText>
              Tem certeza que deseja sair da sua conta?
            </ModalText>

            <Buttons>

              <CancelButton onClick={() => setShowLogoutModal(false)}>
                Cancelar
              </CancelButton>

              <DeleteButton onClick={handleLogout}>
                Sim, sair
              </DeleteButton>

            </Buttons>

          </Modal>
        </Overlay>
      )}
    </>
  );
}