import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

/* =====================================================
   HEADER
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
    width: 100%;

    padding: 0 5%;

    margin-top: 15px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 0;
  }
`;


/* =====================================================
   NAVBAR
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
    width: 45px;

    height: 45px;

    min-width: 45px;

    min-height: 45px;

    padding: 0;

    margin: 0;

    border-radius: 8px;

    background: #f9be06;

    display: flex;

    align-items: center;

    justify-content: center;
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    width: 42px;

    height: 42px;

    min-width: 42px;

    min-height: 42px;
  }
`;


/* =====================================================
   MENU / LINKS
===================================================== */

export const NavCenter = styled.div`
  width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 25px;


  /* =================================================
     NOTEBOOK
  ================================================= */

  @media (max-width: 1200px) {
    gap: 18px;
  }


  /* =================================================
     TABLET
  ================================================= */

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

    width: 180px;

    padding: 20px;

    background: #f9be06;

    border-radius: 15px;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 20px;

    box-sizing: border-box;

    z-index: 100;


    opacity: ${({ $open }) =>
      $open ? 1 : 0};


    visibility: ${({ $open }) =>
      $open ? "visible" : "hidden"};


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


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    font-size: 14px;
  }


  /* =================================================
     CELULAR
  ================================================= */

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

  transition: 0.2s;


  svg {
    color: #fff;

    font-size: 22px;

    transition: 0.2s;
  }


  &:hover {
    background: #f9be06;

    transform:
      translateY(-2px);
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

  width: 45px;

  height: 45px;

  border: none;

  background: transparent;

  padding: 0;

  margin: 0;

  cursor: pointer;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 5px;

  box-sizing: border-box;


  span {
    width: 24px;

    height: 3px;

    background: #000;

    border-radius: 5px;

    display: block;

    transition:
      background 0.2s ease;
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


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    width: 42px;

    height: 42px;


    span {
      width: 22px;

      height: 3px;
    }
  }
`;