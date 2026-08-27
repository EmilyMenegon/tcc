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


export default function Layout() {

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

      {/* ==========================================
          PERFIL
      ========================================== */}

      <ProfileIcon to="/usuario/profile" $comFoto={!!foto}>

        {foto ? (
          <ProfilePhoto src={foto} alt="Foto de perfil" />
        ) : (
          <FaUser />
        )}

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