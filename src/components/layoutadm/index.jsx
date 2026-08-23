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

export default function Layoutadm() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Header>

      {/* PERFIL */}
      <ProfileIcon to="/adm/profileadm">
        <FaUser />
      </ProfileIcon>

      {/* NAVBAR */}
      <Navbar>

        {/* BOTÃO MOBILE */}
        <MenuButton
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </MenuButton>

        {/* LINKS */}
        <NavCenter $open={menuOpen}>

           <NavItem
            to="/adm/inicioadm"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </NavItem>

          <NavItem
            to="/adm/inscricaoadm"
            onClick={() => setMenuOpen(false)}
          >
            Inscrições
          </NavItem>

          <NavItem
            to="/adm/muraladm"
            onClick={() => setMenuOpen(false)}
          >
            Mural
          </NavItem>

          <NavItem
            to="/adm/eventos"
            onClick={() => setMenuOpen(false)}
          >
            Eventos
          </NavItem>

          {/* GALERIA POR ÚLTIMO */}
          <NavItem
            to="/adm/galeriaadm"
            onClick={() => setMenuOpen(false)}
          >
            Galeria
          </NavItem>

        </NavCenter>

      </Navbar>

    </Header>
  );
}