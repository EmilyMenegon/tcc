import { useEffect, useState } from "react";

import {
  Header,
  Navbar,
  NavCenter,
  NavItem,
  ProfileIcon,
  ProfilePhoto,
  MenuButton,
} from "./style";

import { FaUser } from "react-icons/fa";
import { getUsuarioLogado } from "../../utils/auth";

export default function Layoutadm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [foto, setFoto] = useState(null);

  useEffect(() => {

    const usuarioLogado = getUsuarioLogado();
    if (!usuarioLogado?.email) return;

    fetch(`http://localhost:3001/perfil/${usuarioLogado.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.foto) setFoto(data.foto);
      })
      .catch(() => {});

  }, []);

  return (
    <Header>

      {/* PERFIL */}
      <ProfileIcon to="/adm/profileadm" $comFoto={!!foto}>
        {foto ? (
          <ProfilePhoto src={foto} alt="Foto de perfil" />
        ) : (
          <FaUser />
        )}
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