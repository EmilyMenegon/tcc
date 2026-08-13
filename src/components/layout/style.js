import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";


/* =====================================================
   HEADER

   É ele que cria o espaço entre o perfil e a navbar.
===================================================== */

export const Header = styled.header`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 30px;

  margin-top: 20px;

  box-sizing: border-box;

  padding: 0 5%;


  /* =================================================
     NOTEBOOK
  ================================================= */

  @media (max-width: 1200px) {
    gap: 25px;

    padding: 0 6%;
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    gap: 20px;

    padding: 0 7%;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    gap: 15px;

    padding: 0 4%;

    align-items: center;
  }
`;


/* =====================================================
   NAVBAR AMARELA
===================================================== */

export const Navbar = styled.nav`
  width: 70%;

  height: 50px;

  background: #f9be06;

  border-radius: 40px;

  display: flex;

  align-items: center;

  justify-content: center;

  position: relative;

  box-sizing: border-box;

  box-shadow:
    0 4px 10px
    rgba(0, 0, 0, 0.1);

  flex-shrink: 1;


  /* =================================================
     NOTEBOOK
  ================================================= */

  @media (max-width: 1200px) {
    width: 75%;
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    width: 80%;

    height: 52px;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    width: 100%;

    height: 55px;

    border-radius: 30px;

    justify-content: flex-end;

    padding: 0 5%;
  }
`;


/* =====================================================
   MENU
===================================================== */

export const NavCenter = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 25px;


  /* NOTEBOOK */

  @media (max-width: 1200px) {
    gap: 18px;
  }


  /* TABLET */

  @media (max-width: 900px) {
    gap: 12px;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    position: absolute;

    top: calc(100% + 10px);

    right: 0;

    width: 100%;

    padding: 20px;

    background: #f9be06;

    border-radius: 20px;

    flex-direction: column;

    gap: 20px;

    box-sizing: border-box;

    box-shadow:
      0 8px 20px
      rgba(0, 0, 0, 0.15);

    z-index: 100;

    opacity: ${({ $open }) =>
      $open ? 1 : 0};

    visibility: ${({ $open }) =>
      $open
        ? "visible"
        : "hidden"};

    transform: ${({ $open }) =>
      $open
        ? "translateY(0)"
        : "translateY(-10px)"};

    pointer-events: ${({ $open }) =>
      $open
        ? "auto"
        : "none"};

    transition:
      opacity 0.2s ease,
      transform 0.2s ease,
      visibility 0.2s ease;
  }
`;


/* =====================================================
   LINKS
===================================================== */

export const NavItem = styled(NavLink)`
  color: #000;

  text-decoration: none;

  font-weight: 500;

  font-size: 16px;

  padding: 5px;

  position: relative;

  white-space: nowrap;

  transition: 0.2s;


  &:hover {
    color: white;
  }


  &.active::after {
    content: "";

    position: absolute;

    left: 50%;

    bottom: -8px;

    transform:
      translateX(-50%);

    width: 70%;

    height: 3px;

    background: #000;

    border-radius: 10px;
  }


  /* TABLET */

  @media (max-width: 900px) {
    font-size: 14px;
  }


  /* CELULAR */

  @media (max-width: 600px) {
    font-size: 16px;

    padding: 5px 10px;

    &.active::after {
      width: 50%;

      height: 2px;

      bottom: -5px;
    }
  }
`;


/* =====================================================
   PERFIL

   AGORA ELE NÃO ESTÁ DENTRO DA NAVBAR.

   O GAP DO HEADER cria o espaço REAL.
===================================================== */

export const ProfileIcon = styled(Link)`
  width: 60px;

  height: 60px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #000;

  display: flex;

  align-items: center;

  justify-content: center;

  text-decoration: none;

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.18);

  transition: 0.2s;


  svg {
    color: #fff;

    font-size: 22px;

    transition: 0.2s;
  }


  &:hover {
    background: #f9be06;

    transform: translateY(-2px);
  }


  &:hover svg {
    color: #000;
  }


  /* =================================================
     NOTEBOOK
  ================================================= */

  @media (max-width: 1200px) {
    width: 56px;

    height: 56px;

    svg {
      font-size: 20px;
    }
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    width: 52px;

    height: 52px;

    svg {
      font-size: 19px;
    }
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    width: 44px;

    height: 44px;

    svg {
      font-size: 17px;
    }
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    width: 40px;

    height: 40px;

    svg {
      font-size: 15px;
    }
  }
`;


/* =====================================================
   BOTÃO HAMBURGER
===================================================== */

export const MenuButton = styled.button`
  display: none;

  border: none;

  background: transparent;

  padding: 5px;

  cursor: pointer;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 5px;


  span {
    width: 25px;

    height: 3px;

    background: #000;

    border-radius: 5px;

    display: block;
  }


  &:hover span {
    background: #fff;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    display: flex;
  }
`;