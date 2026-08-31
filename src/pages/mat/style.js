import styled, { createGlobalStyle } from "styled-components";

// ==================================================
// RESET GLOBAL
// Remove a margem padrão do navegador
// ==================================================

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-width: 100%;
    min-height: 100%;
  }

  body {
    font-family: "Poppins", sans-serif;
  }
`;

// ===============================
// CONTAINER
// ===============================

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 40px 0 60px;

  background: #f5f7fb;

  font-family: "Poppins", sans-serif;
`;

// ===============================
// HEADER
// ===============================

export const Header = styled.header`
  width: 90%;
  max-width: 1400px;

  margin: 0 auto 35px;

  display: flex;
  justify-content: center;

  position: relative;
`;

export const LogoText = styled.div`
  width: 100%;
  max-width: 720px;

  background: #fff;

  padding: 35px;

  border-radius: 22px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;
`;

export const Title = styled.h1`
  margin: 0;

  color: #111;

  font-size: 42px;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

// ===============================
// BOTÃO CASA / LOGIN
// ===============================

export const BackButton = styled.button`
  position: absolute;

  left: 0;
  top: 0;

  width: 58px;
  height: 58px;

  border: none;
  border-radius: 50%;

  background: #ffdb53;
  color: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);

  transition: 0.25s;

  padding: 0;
  margin: 0;

  z-index: 10;

  svg {
    width: 22px;
    height: 22px;

    transition: 0.25s;
  }

  &:hover {
    background: #831614;
    color: #fff;

    transform: translateY(-3px);

    box-shadow: 0 12px 30px rgba(249, 190, 6, 0.35);
  }

  &:hover svg {
    transform: scale(1.08);
  }

  &:active {
    transform: translateY(-1px) scale(0.96);
  }
`;

// ===============================
// SEARCH
// ===============================

export const Search = styled.input`
  width: 100%;
  max-width: 420px;

  padding: 15px 20px;

  border-radius: 14px;
  border: 2px solid transparent;

  background: #f7f7f7;

  font-size: 15px;

  outline: none;

  transition: 0.25s;

  &::placeholder {
    color: #999;
  }

  &:focus {
    background: #fff;

    border-color: #ffdb53;

    box-shadow: 0 0 0 5px rgba(249, 190, 6, 0.18);
  }
`;

// ===============================
// TABS
// ===============================

export const Tabs = styled.div`
  width: fit-content;

  margin: 0 auto 35px;

  padding: 6px;

  display: flex;

  gap: 8px;

  background: #fff;

  border-radius: 18px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

export const Tab = styled.button`
  display: flex;
  align-items: center;

  gap: 8px;

  padding: 14px 26px;

  border: none;
  border-radius: 14px;

  background: ${({ active }) =>
    active ? "#ffdb53" : "transparent"};

  color: ${({ active }) =>
    active ? "#111" : "#666"};

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s;

  svg {
    font-size: 16px;
  }

  &:hover {
    background: ${({ active }) =>
      active ? "#ffdb53" : "#f3f3f3"};

    transform: translateY(-2px);
  }
`;

// ===============================
// CONTENT
// ===============================

export const Content = styled.main`
  width: 90%;
  max-width: 1400px;

  margin: 0 auto;
`;

// ===============================
// LISTA
// ===============================

export const List = styled.div`
  display: grid;

  grid-template-columns:
    repeat(auto-fill, minmax(320px, 1fr));

  gap: 28px;

  align-items: start;

  animation: fadeIn 0.35s ease;

  @keyframes fadeIn {
    from {
      transform: translateY(15px);
    }

    to {
      transform: translateY(0);
    }
  }
`;

// ===============================
// BOTÃO FLUTUANTE
// ===============================

export const Fab = styled.button`
  position: fixed;

  right: 35px;
  bottom: 35px;

  width: 70px;
  height: 70px;

  border: none;
  border-radius: 50%;

  background: #ffdb53;
  color: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  transition: 0.2s;

  padding: 0;
  margin: 0;

  svg {
    width: 25px;
    height: 25px;

    flex-shrink: 0;

    transition: transform 0.2s;
  }

  &:hover {
    background: #000;
    color: #ffdb53;

    transform: translateY(-2px);
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:active {
    transform: translateY(1px);
  }
`;

// ===============================
// MODAL
// ===============================

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(15, 15, 15, 0.45);

  backdrop-filter: blur(6px);

  z-index: 9999;

  animation: fadeOverlay 0.25s ease;
`;

export const Modal = styled.div`
  width: 430px;
  max-width: 92%;

  background: #fff;

  border-radius: 22px;

  padding: 32px;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.18);

  animation: modalShow 0.28s ease;

  @keyframes modalShow {
    from {
      transform: translateY(20px) scale(0.96);
    }

    to {
      transform: translateY(0) scale(1);
    }
  }
`;

export const ModalTitle = styled.h2`
  margin: 0 0 12px;

  text-align: center;

  color: #111;

  font-size: 26px;
  font-weight: 700;
`;

export const ModalText = styled.p`
  margin: 0 0 28px;

  text-align: center;

  color: #666;

  line-height: 1.7;

  font-size: 15px;
`;

export const Buttons = styled.div`
  display: flex;

  gap: 14px;
`;

export const CancelButton = styled.button`
  flex: 1;

  padding: 14px;

  border: 1px solid #e5e5e5;

  border-radius: 12px;

  background: #f7f7f7;
  color: #555;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: #ececec;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const DeleteButton = styled.button`
  flex: 1;

  padding: 14px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(135deg, #111, #2a2a2a);

  color: #ffdb53;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.25s;

  &:hover {
    background: linear-gradient(
      135deg,
      #ffdb53,
      #ffd54f
    );

    color: #111;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px rgba(249, 190, 6, 0.35);
  }

  &:active {
    transform: scale(0.98);
  }
`;