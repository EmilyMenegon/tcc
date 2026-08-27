import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPen, FaBook, FaHome } from "react-icons/fa";
import { logout } from "../../utils/auth";

import {
  GlobalStyle,
  Container,
  Header,
  LogoText,
  Title,
  Search,
  Tabs,
  Tab,
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

import Poetas from "./Poetas";
import Notas from "./Notas";

export default function Mat() {
  const location = useLocation();
  const navigate = useNavigate();

  const [aba, setAba] = useState(
    location.state?.aba || "poetas"
  );

  const [search, setSearch] = useState("");
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
              {aba === "poetas"
                ? "Poetas"
                : "Notas"}
            </Title>


            {aba === "poetas" && (
              <Search
                type="text"
                placeholder="Buscar por nome..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />
            )}

          </LogoText>

        </Header>


        {/* ==================================================
            ABAS
        ================================================== */}

        <Tabs>

          <Tab
            active={aba === "poetas"}
            onClick={() => setAba("poetas")}
          >
            <FaPen />
            Poetas
          </Tab>


          <Tab
            active={aba === "notas"}
            onClick={() => setAba("notas")}
          >
            <FaBook />
            Notas
          </Tab>

        </Tabs>


        {/* ==================================================
            CONTEÚDO
        ================================================== */}

        <Content>

          {aba === "poetas" ? (
            <Poetas search={search} />
          ) : (
            <Notas />
          )}

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