import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

/* ==========================================
   RESET GLOBAL
========================================== */

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

  html,
  body {
    min-height: 100vh;
    min-height: 100dvh;
  }

  body {
    margin: 0;
    padding: 0;

    font-family: "Poppins", sans-serif;
  }
`;


/* ==========================================
   PAGE
========================================== */

export const Page = styled.div`
  width: 100%;

  min-height: 100vh;
  min-height: 100dvh;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  font-family: "Poppins", sans-serif;

  background: linear-gradient(
    to bottom,
    #ffdb53 0%,
    #ffdb53 32%,
    #f8f8f8 32%,
    #f8f8f8 100%
  );

  overflow-x: hidden;

  @media (max-width: 600px) {
    width: 100%;

    min-height: 100vh;
    min-height: 100dvh;

    margin: 0;
    padding: 0;

    background: linear-gradient(
      to bottom,
      #ffdb53 0%,
      #ffdb53 25%,
      #f8f8f8 25%,
      #f8f8f8 100%
    );
  }
`;


/* ==========================================
   BOTÃO VOLTAR
========================================== */

export const BackButton = styled(Link)`
  position: fixed;

  top: 25px;
  left: 25px;

  width: 60px;
  height: 60px;

  border-radius: 50%;

  background: #fff;

  display: flex;

  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: #111;

  font-size: 28px;
  font-weight: bold;

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, 0.15);

  transition: 0.2s;

  z-index: 999;

  &:hover {
    background: #000;

    color: #fff;

    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    top: 15px;
    left: 15px;

    width: 45px;
    height: 45px;

    font-size: 20px;
  }
`;


/* ==========================================
   CONTAINER
========================================== */

export const Container = styled.div`
  width: 100%;
  max-width: 460px;

  box-sizing: border-box;

  margin: 70px auto 30px;

  background: #fff;

  border-radius: 28px;

  padding: 40px;

  display: flex;

  flex-direction: column;

  gap: 22px;

  box-shadow:
    0 18px 45px
    rgba(0, 0, 0, 0.12);

  @media (max-width: 600px) {
    width: 100%;
    max-width: none;

    min-height: 100vh;
    min-height: 100dvh;

    margin: 0;

    padding: 80px 20px 30px;

    border-radius: 0;

    box-shadow: none;

    gap: 18px;
  }

  @media (max-width: 360px) {
    padding: 75px 16px 25px;
  }
`;


/* ==========================================
   PROFILE BOX
========================================== */

export const ProfileBox = styled.div`
  display: flex;

  justify-content: center;

  width: 100%;
`;


/* ==========================================
   AVATAR WRAPPER
========================================== */

export const AvatarWrapper = styled.div`
  position: relative;

  width: 170px;
  height: 170px;

  @media (max-width: 600px) {
    width: 130px;
    height: 130px;
  }
`;


/* ==========================================
   AVATAR
========================================== */

export const Avatar = styled.img`
  width: 170px;
  height: 170px;

  display: block;

  border-radius: 50%;

  object-fit: cover;

  border: 6px solid #f9be06;

  box-shadow:
    0 12px 25px
    rgba(0, 0, 0, 0.18);

  @media (max-width: 600px) {
    width: 130px;
    height: 130px;

    border-width: 5px;
  }
`;


/* ==========================================
   EDITAR FOTO
========================================== */

export const EditButton = styled.label`
  position: absolute;

  bottom: 8px;
  right: -5px;

  background: #111;

  color: white;

  padding: 8px 14px;

  border-radius: 20px;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  white-space: nowrap;

  &:hover {
    background: #ffdb53;

    color: #111;
  }

  input {
    display: none;
  }

  @media (max-width: 600px) {
    bottom: 2px;
    right: -8px;

    padding: 7px 11px;

    font-size: 11px;
  }
`;


/* ==========================================
   NOME
========================================== */

export const UserName = styled.h2`
  margin-top: -8px;
  margin-bottom: -18px;

  text-align: center;

  font-size: 28px;

  font-weight: 700;

  color: #111;

  word-break: break-word;

  overflow-wrap: anywhere;

  @media (max-width: 600px) {
    margin-top: 0;
    margin-bottom: -10px;

    font-size: 22px;

    line-height: 1.3;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;


/* ==========================================
   EMAIL
========================================== */

export const UserEmail = styled.p`
  text-align: center;

  color: #666;

  font-size: 15px;

  word-break: break-word;

  overflow-wrap: anywhere;

  margin: 0;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;


/* ==========================================
   FIELD
========================================== */

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  width: 100%;

  box-sizing: border-box;
`;


/* ==========================================
   LABEL
========================================== */

export const Label = styled.label`
  font-size: 14px;

  font-weight: 600;

  color: #333;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;


/* ==========================================
   INPUT
========================================== */

export const Input = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 14px 16px;

  border-radius: 12px;

  border: none;

  background: #f3f3f3;

  font-size: 15px;

  color: #111;

  outline: none;

  transition: 0.2s;

  &:focus {
    outline: none;

    background: #f3f3f3;

    border: none;

    box-shadow: none;
  }

  &::placeholder {
    color: #888;
  }

  @media (max-width: 600px) {
    padding: 13px 14px;

    font-size: 14px;
  }
`;


/* ==========================================
   PASSWORD
========================================== */

export const PasswordBox = styled.div`
  position: relative;

  width: 100%;

  span {
    position: absolute;

    right: 16px;

    top: 50%;

    transform: translateY(-50%);

    display: flex;

    align-items: center;

    cursor: pointer;

    color: #666;

    transition: 0.2s;

    &:hover {
      color: #ffdb53;
    }
  }
`;


/* ==========================================
   SAVE BUTTON
========================================== */

export const SaveButton = styled.button`
  margin-top: 10px;

  height: 50px;

  border: none;

  border-radius: 12px;

  background: #ffdb53;

  color: #111;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #000;

    color: #fff;

    transform: translateY(-2px);
  }
`;


/* ==========================================
   SAIR DA CONTA
========================================== */

export const LogoutLink = styled.span`
  margin-top: 10px;

  text-align: center;

  color: #d62828;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    color: #000;

    opacity: 0.7;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;


/* ==========================================
   MODAL OVERLAY
========================================== */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.45);

  display: flex;

  align-items: center;
  justify-content: center;

  z-index: 9999;

  backdrop-filter: blur(3px);

  padding: 20px;

  box-sizing: border-box;
`;


/* ==========================================
   MODAL
========================================== */

export const Modal = styled.div`
  width: 400px;

  max-width: 100%;

  background: #fff;

  border-radius: 20px;

  padding: 30px;

  text-align: center;

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.2);

  animation: modalAppear 0.25s ease;

  box-sizing: border-box;

  h2,
  h3 {
    margin: 0 0 12px;

    color: #111;

    font-size: 24px;
  }

  p {
    color: #666;

    font-size: 16px;

    margin: 0 0 30px;

    line-height: 1.5;
  }

  @keyframes modalAppear {
    from {
      opacity: 0;

      transform:
        translateY(15px)
        scale(0.95);
    }

    to {
      opacity: 1;

      transform:
        translateY(0)
        scale(1);
    }
  }

  @media (max-width: 600px) {
    padding: 24px 18px;

    border-radius: 18px;

    h2,
    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;

      margin-bottom: 22px;
    }
  }
`;


/* ==========================================
   MODAL BUTTONS
========================================== */

export const ModalButtons = styled.div`
  display: flex;

  justify-content: center;

  gap: 15px;

  @media (max-width: 400px) {
    flex-direction: column;

    gap: 10px;
  }
`;


/* ==========================================
   CANCELAR
========================================== */

export const CancelButton = styled.button`
  padding: 12px 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #d9d9d9;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;


/* ==========================================
   CONFIRMAR
========================================== */

export const ConfirmButton = styled.button`
  padding: 12px 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #fff;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #b71c1c;

    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;