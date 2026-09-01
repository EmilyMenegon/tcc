import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

// =========================================================
// HEADER
// =========================================================

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 28px;

  padding: 28px 5% 0;

  box-sizing: border-box;

  position: relative;

  z-index: 100;

  @media (max-width: 1000px) {
    gap: 20px;
    padding: 24px 4%;
  }

  @media (max-width: 700px) {
    justify-content: space-between;

    gap: 15px;

    padding: 20px 4%;
  }
`;

// =========================================================
// NAVBAR
// =========================================================

export const Navbar = styled.nav`
  width: min(1250px, 82vw);

  height: 86px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background: #ffdb53;

  border: 1px solid rgba(255, 255, 255, 0.5);

  border-radius: 45px;

  box-sizing: border-box;

  box-shadow:
    0 16px 40px rgba(0, 0, 0, 0.09),
    0 5px 14px rgba(0, 0, 0, 0.06);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  @media (max-width: 1200px) {
    width: min(1100px, 82vw);

    height: 82px;

    border-radius: 30px;
  }

  @media (max-width: 1000px) {
    width: 82vw;

    height: 76px;

    border-radius: 27px;
  }

  @media (max-width: 700px) {
    width: calc(100% - 67px);

    height: 64px;

    border-radius: 22px;
  }

  @media (max-width: 500px) {
    width: calc(100% - 63px);

    height: 60px;

    border-radius: 20px;
  }
`;

// =========================================================
// NAV CENTER
// =========================================================

export const NavCenter = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  padding: 0 18px;

  box-sizing: border-box;

  position: relative;

  /*
    Cria um novo contexto de composição.
    Isso ajuda a manter o indicador independente
    visualmente dos outros elementos.
  */
  isolation: isolate;

  // =======================================================
  // RETÂNGULO PRETO
  // =======================================================

  & > span {
    position: absolute;

    top: 0;
    left: 0;

    width: 0;
    height: 0;

    display: block;

    /*
      COR PRETA TOTALMENTE SÓLIDA
    */
    background-color: #111;

    /*
      Nunca fica transparente.
    */
    opacity: 1;

    border-radius: 58px;

    z-index: 0;

    pointer-events: none;

    /*
      O navegador prepara o elemento
      para a animação do GSAP.
    */
    will-change:
      transform,
      width,
      height;

    /*
      Não usamos transition aqui.
      O GSAP controla a animação.
    */
    transition: none;

    box-shadow:
      0 8px 20px rgba(0, 0, 0, 0.2);
  }

  // =======================================================
  // TABLET
  // =======================================================

  @media (max-width: 1000px) {
    gap: 5px;

    padding: 0 12px;
  }

  // =======================================================
  // MOBILE
  // =======================================================

  @media (max-width: 700px) {
    position: absolute;

    top: calc(100% + 12px);

    right: 0;

    width: 250px;

    height: auto;

    padding: 12px;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    justify-content: flex-start;

    gap: 5px;

    background: #ffdb53;

    border-radius: 22px;

    box-shadow:
      0 18px 40px rgba(0, 0, 0, 0.14);

    z-index: 1000;

    opacity: ${({ $open }) =>
      $open ? 1 : 0};

    visibility: ${({ $open }) =>
      $open ? "visible" : "hidden"};

    pointer-events: ${({ $open }) =>
      $open ? "auto" : "none"};

    transform: ${({ $open }) =>
      $open
        ? "translateY(0)"
        : "translateY(-10px)"};

    transition:
      opacity 0.25s ease,
      transform 0.25s ease,
      visibility 0.25s ease;

    /*
      No mobile o indicador preto do desktop
      não é utilizado.
    */
    & > span {
      display: none;
    }
  }
`;

// =========================================================
// NAV ITEM
// =========================================================

export const NavItem = styled(NavLink)`
  position: relative;

  z-index: 1;

  min-height: 58px;

  padding: 0 25px;

  display: flex;

  align-items: center;

  justify-content: center;

  box-sizing: border-box;

  border-radius: 18px;

  color: #111;

  text-decoration: none;

  font-size: 18px;

  font-weight: 600;

  letter-spacing: 0.1px;

  white-space: nowrap;

  /*
    IMPORTANTE:
    O GSAP controla color e transform.
    Não deixamos o CSS disputar essas propriedades.
  */
  transition: none;

  &:hover {
    color: #fff;
  }

  &.active {
    color: #111;
  }

  &:focus-visible {
    outline: 3px solid rgba(0, 0, 0, 0.35);

    outline-offset: 3px;
  }

  // =======================================================
  // 1100px
  // =======================================================

  @media (max-width: 1100px) {
    min-height: 54px;

    padding: 0 20px;

    font-size: 17px;

    border-radius: 16px;
  }

  // =======================================================
  // 1000px
  // =======================================================

  @media (max-width: 1000px) {
    min-height: 50px;

    padding: 0 15px;

    font-size: 15px;

    border-radius: 15px;
  }

  // =======================================================
  // MOBILE
  // =======================================================

  @media (max-width: 700px) {
    width: 100%;

    min-height: 46px;

    padding: 0 17px;

    justify-content: flex-start;

    font-size: 16px;

    border-radius: 13px;

    color: #111;

    /*
      No mobile o hover não precisa deixar
      o texto branco.
    */
    &:hover {
      color: #111;
    }

    /*
      No mobile o item ativo possui seu
      próprio fundo preto.
    */
    &.active {
      color: #fff;

      background: #111;
    }
  }
`;

// =========================================================
// PROFILE ICON
// =========================================================

export const ProfileIcon = styled(Link)`
  width: 68px;

  height: 68px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  box-sizing: border-box;

  overflow: hidden;

  text-decoration: none;

  background: ${({ $comFoto }) =>
    $comFoto ? "#fff" : "#111"};

  border: 3px solid #111;

  box-shadow:
    0 8px 22px rgba(0, 0, 0, 0.14);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  svg {
    color: #fff;

    font-size: 25px;
  }

  &:hover {
    transform: scale(1.08);

    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.18);
  }

  &:focus-visible {
    outline: 3px solid #ffdb53;

    outline-offset: 4px;
  }

  // =======================================================
  // 1000px
  // =======================================================

  @media (max-width: 1000px) {
    width: 62px;

    height: 62px;

    svg {
      font-size: 22px;
    }
  }

  // =======================================================
  // 700px
  // =======================================================

  @media (max-width: 700px) {
    width: 52px;

    height: 52px;

    svg {
      font-size: 19px;
    }
  }

  // =======================================================
  // 500px
  // =======================================================

  @media (max-width: 500px) {
    width: 48px;

    height: 48px;

    svg {
      font-size: 17px;
    }
  }
`;

// =========================================================
// PROFILE PHOTO
// =========================================================

export const ProfilePhoto = styled.img`
  width: 100%;

  height: 100%;

  display: block;

  object-fit: cover;

  border-radius: 50%;

  user-select: none;

  pointer-events: none;
`;

// =========================================================
// MENU BUTTON
// =========================================================

export const MenuButton = styled.button`
  display: none;

  width: 52px;

  height: 52px;

  flex-shrink: 0;

  padding: 0;

  border: none;

  border-radius: 15px;

  background: rgba(255, 255, 255, 0.35);

  cursor: pointer;

  align-items: center;

  justify-content: center;

  flex-direction: column;

  gap: 6px;

  box-sizing: border-box;

  span {
    width: 25px;

    height: 3px;

    display: block;

    border-radius: 10px;

    background: #111;

    transition:
      transform 0.25s ease,
      opacity 0.2s ease;
  }

  // =======================================================
  // MENU ABERTO
  // =======================================================

  ${({ $open }) =>
    $open &&
    `
      span:nth-child(1) {
        transform:
          translateY(9px)
          rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform:
          translateY(-9px)
          rotate(-45deg);
      }
    `}

  &:hover {
    background: #111;

    span {
      background: #fff;
    }
  }

  &:focus-visible {
    outline: 3px solid rgba(0, 0, 0, 0.35);

    outline-offset: 3px;
  }

  // =======================================================
  // MOBILE
  // =======================================================

  @media (max-width: 700px) {
    display: flex;
  }

  // =======================================================
  // 500px
  // =======================================================

  @media (max-width: 500px) {
    width: 46px;

    height: 46px;

    span {
      width: 23px;
    }
  }
`;
