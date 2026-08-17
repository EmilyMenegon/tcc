import { useState } from "react";

import {
  Header,
  Navbar,
  NavCenter,
  NavItem,
  ProfileIcon,
  MenuButton,
} from "./style";

import { FaUser } from "react-icons/fa";


export default function Layout() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (

    <Header>

      {/* ==========================================
          PERFIL
      ========================================== */}

      <ProfileIcon to="/usuario/profile">

        <FaUser />

      </ProfileIcon>


      {/* ==========================================
          NAVBAR
      ========================================== */}

      <Navbar>

        {/* ========================================
            BOTÃO MOBILE
        ======================================== */}

        <MenuButton
          type="button"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </MenuButton>


        {/* ========================================
            LINKS
        ======================================== */}

        <NavCenter $open={menuOpen}>

          <NavItem
            to="/usuario/home"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Início
          </NavItem>


          <NavItem
            to="/usuario/inscricao"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Inscrição
          </NavItem>

          <NavItem
            to="/usuario/eventosusuario"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Eventos
          </NavItem>


          <NavItem
            to="/usuario/mural"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Mural
          </NavItem>


          <NavItem
            to="/usuario/galeria"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Galeria
          </NavItem>

        </NavCenter>

      </Navbar>

    </Header>

  );

}