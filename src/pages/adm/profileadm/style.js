import { Link } from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const colors = {
  yellow: "#FFDB53",
  yellowStrong: "#F9BE06",
  cream: "#FFF7D0",
  input: "#FFFDF0",
  red: "#831614",
  wine: "#571111",
  black: "#010000",
  white: "#fff",
  gray: "#666",
};

const flutuar = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-10px) rotate(3deg);
  }
`;

const aparecer = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    min-height: 100%;
  }

  html {
    background: ${colors.cream};
  }

  body {
    min-height: 100vh;
    overflow-x: hidden;
    background: ${colors.cream};
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button,
  input {
    font-family: inherit;
  }

  button {
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  input {
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const Page = styled.main`
  position: relative;

  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  padding: 40px 20px;

  background: ${colors.cream};

  color: ${colors.black};

  isolation: isolate;

  &::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
      radial-gradient(
        circle at 50% 15%,
        rgba(255, 219, 83, 0.16) 0%,
        rgba(255, 247, 208, 0.08) 28%,
        rgba(255, 247, 208, 0) 58%
      ),
      radial-gradient(
        circle at 12% 80%,
        rgba(87, 17, 17, 0.045) 0%,
        rgba(87, 17, 17, 0) 25%
      ),
      radial-gradient(
        circle at 88% 25%,
        rgba(131, 22, 20, 0.035) 0%,
        rgba(131, 22, 20, 0) 24%
      ),
      linear-gradient(
        180deg,
        #f9f2ce 0%,
        #fff7d0 42%,
        #ffffff 100%
      );

    z-index: -3;

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    left: 0;
    right: 0;

    bottom: 0;

    height: 6px;

    background: ${colors.red};

    z-index: 20;
  }

  @media (max-width: 700px) {
    padding: 78px 14px 25px;

    align-items: flex-start;

    &::before {
      background:
        radial-gradient(
          circle at 50% 12%,
          rgba(255, 219, 83, 0.15) 0%,
          rgba(255, 247, 208, 0) 52%
        ),
        linear-gradient(
          180deg,
          #f9f2ce 0%,
          #fff7d0 38%,
          #ffffff 100%
        );
    }
  }
`;


/* ============================================================
   BICHINHOS
============================================================ */

export const Pixel01 = styled.img`
  position: absolute;

  width: clamp(70px, 10vw, 155px);

  max-height: 20vh;

  top: clamp(20px, 7vh, 70px);

  left: clamp(16px, 5vw, 75px);

  object-fit: contain;

  z-index: 3;

  pointer-events: none;

  user-select: none;

  animation:
    ${flutuar}
    4s
    ease-in-out
    infinite;

  filter:
    drop-shadow(7px 7px 0 #fff)
    drop-shadow(10px 10px 0 ${colors.yellow});

  @media (max-width: 700px) {
    width: clamp(55px, 17vw, 100px);

    top: 18px;

    left: 8px;
  }
`;

export const Pixel02 = styled.img`
  position: absolute;

  width: clamp(75px, 11vw, 175px);

  max-height: 20vh;

  top: clamp(22px, 9vh, 85px);

  right: clamp(16px, 5vw, 75px);

  object-fit: contain;

  z-index: 3;

  pointer-events: none;

  user-select: none;

  animation:
    ${flutuar}
    4.6s
    ease-in-out
    infinite
    reverse;

  filter:
    drop-shadow(-7px 7px 0 #fff)
    drop-shadow(-10px 10px 0 ${colors.yellow});

  @media (max-width: 700px) {
    width: clamp(58px, 19vw, 105px);

    top: 22px;

    right: 8px;
  }
`;

export const Pixel03 = styled.img`
  position: absolute;

  width: clamp(65px, 9vw, 150px);

  max-height: 20vh;

  bottom: clamp(40px, 10vh, 100px);

  left: clamp(12px, 4vw, 55px);

  object-fit: contain;

  z-index: 3;

  pointer-events: none;

  user-select: none;

  animation:
    ${flutuar}
    5s
    ease-in-out
    infinite;

  filter:
    drop-shadow(7px 7px 0 #fff)
    drop-shadow(10px 10px 0 ${colors.yellow});

  @media (max-width: 700px) {
    width: clamp(50px, 16vw, 95px);

    bottom: 18px;

    left: 2px;
  }
`;


/* ============================================================
   VOLTAR
============================================================ */

export const BackButton = styled(Link)`
  position: fixed;

  top: 2%;

  left: 2%;

  width: 58px;

  height: 58px;

  padding: 0;

  border: 0;

  border-radius: 50%;

  background: ${colors.yellow};

  color: ${colors.black};

  display: flex;

  align-items: center;

  justify-content: center;

  text-decoration: none;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transform: translateZ(0);

  z-index: 999;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.18);

  transition:
    color 0.3s ease,
    transform 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 35px;

    height: 35px;

    border-radius: 50%;

    background: ${colors.red};

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform 0.55s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  .button-content {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    color: inherit;
  }

  &:hover {
    color: ${colors.white};

    transform: translateY(-3px);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(3.5);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    top: 14px;

    left: 14px;

    width: 48px;

    height: 48px;

    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    top: 10px;

    left: 10px;

    width: 44px;

    height: 44px;

    svg {
      font-size: 18px;
    }
  }
`;


/* ============================================================
   CONTAINER
============================================================ */

export const Container = styled.div`
  position: relative;

  width: min(92%, 650px);

  z-index: 5;

  display: flex;

  justify-content: center;

  align-items: center;

  animation:
    ${aparecer}
    0.6s
    ease;

  @media (max-width: 700px) {
    width: 100%;
  }
`;


/* ============================================================
   CARD
============================================================ */

export const ProfileCard = styled.div`
  position: relative;

  width: 100%;

  padding: 38px 42px 32px;

  background: ${colors.white};

  border-radius: 30px;

  box-shadow:
    0 25px 65px rgba(0, 0, 0, 0.15),
    10px 10px 0 ${colors.red};

  overflow: hidden;

  isolation: isolate;

  &::before {
    content: "";

    position: absolute;

    width: 220px;

    height: 220px;

    top: -145px;

    right: -100px;

    background: ${colors.yellow};

    border-radius: 50%;

    opacity: 0.75;

    z-index: -1;
  }

  &::after {
    content: "";

    position: absolute;

    width: 130px;

    height: 8px;

    bottom: 20px;

    left: -35px;

    background: ${colors.red};

    border-radius: 10px;

    transform: rotate(-20deg);

    opacity: 0.85;

    z-index: -1;
  }

  @media (max-width: 700px) {
    padding: 30px 22px 28px;

    border-radius: 24px;

    box-shadow:
      0 20px 45px rgba(0, 0, 0, 0.13),
      7px 7px 0 ${colors.red};
  }
`;


/* ============================================================
   HEADER
============================================================ */

export const ProfileHeader = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  margin-bottom: 28px;
`;


/* ============================================================
   AVATAR
============================================================ */

export const AvatarWrapper = styled.div`
  position: relative;

  width: 165px;

  height: 165px;

  margin-bottom: 20px;

  @media (max-width: 600px) {
    width: 135px;

    height: 135px;

    margin-bottom: 16px;
  }
`;

export const Avatar = styled.img`
  width: 100%;

  height: 100%;

  display: block;

  border-radius: 50%;

  object-fit: cover;

  border: 6px solid ${colors.yellow};

  background: ${colors.cream};

  box-shadow:
    0 10px 25px rgba(0, 0, 0, 0.16);
`;


/* ============================================================
   EDITAR
============================================================ */

export const EditButton = styled.label`
  position: absolute;

  right: -8px;

  bottom: 5px;

  min-width: 78px;

  height: 40px;

  padding: 0 16px;

  border-radius: 20px;

  background: ${colors.red};

  color: ${colors.white};

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  font-size: 13px;

  font-weight: 700;

  box-shadow:
    4px 4px 0 ${colors.yellow};

  transition:
    transform 0.25s ease,
    color 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 25px;

    height: 25px;

    border-radius: 50%;

    background: ${colors.yellow};

    transform:
      translate(-50%, -50%)
      scale(0);

    z-index: -1;

    pointer-events: none;

    transition:
      transform 0.6s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  .button-content {
    position: relative;

    z-index: 2;
  }

  &:hover {
    color: ${colors.black};

    transform: translateY(-3px);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(7);
  }

  &:active {
    transform: scale(0.97);
  }

  input {
    display: none;
  }

  @media (max-width: 600px) {
    right: -6px;

    bottom: 2px;

    min-width: 70px;

    height: 35px;

    padding: 0 13px;

    font-size: 11px;
  }
`;


/* ============================================================
   NOME / EMAIL
============================================================ */

export const UserName = styled.h2`
  margin: 0 0 5px;

  color: ${colors.red};

  text-align: center;

  font-size:
    clamp(1.5rem, 4vw, 2.2rem);

  line-height: 1.15;

  font-weight: 900;

  word-break: break-word;

  overflow-wrap: anywhere;
`;

export const UserEmail = styled.p`
  margin: 0;

  color: ${colors.gray};

  text-align: center;

  font-size: 0.92rem;

  word-break: break-word;

  overflow-wrap: anywhere;
`;


/* ============================================================
   FORM
============================================================ */

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 18px;
`;

export const Field = styled.div`
  display: flex;

  flex-direction: column;

  gap: 8px;

  width: 100%;
`;

export const Label = styled.label`
  color: #7c7040;

  font-size: 0.76rem;

  font-weight: 600;

  padding-left: 4px;
`;


/* ============================================================
   INPUTS
============================================================ */

export const Input = styled.input`
  display: block;

  width: 100%;

  height: 60px;

  padding: 14px 18px;

  border: 2px solid ${colors.yellow};

  border-radius: 16px;

  outline: none;

  background: ${colors.input};

  color: #111;

  font-size: 0.95rem;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background: #fffaf0;

    border-color: ${colors.yellowStrong};

    box-shadow:
      0 4px 12px
      rgba(249, 190, 6, 0.1);
  }

  &:focus {
    border-color: ${colors.yellowStrong};

    background: #fffbe6;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, 0.18);
  }

  &::placeholder {
    color: #7c7040;

    opacity: 0.7;
  }

  &:disabled {
    cursor: not-allowed;

    opacity: 0.75;

    background: #f7f5e8;
  }

  @media (max-width: 600px) {
    height: 56px;

    padding: 13px 16px;

    border-radius: 13px;

    font-size: 0.88rem;
  }
`;


/* ============================================================
   SENHA
============================================================ */

export const PasswordBox = styled.div`
  position: relative;

  width: 100%;

  ${Input} {
    padding-right: 55px;
  }

  span {
    position: absolute;

    top: 50%;

    right: 17px;

    transform: translateY(-50%);

    width: 30px;

    height: 30px;

    display: flex;

    align-items: center;

    justify-content: center;

    color: #888;

    cursor: pointer;

    transition: color 0.2s ease;

    &:hover {
      color: ${colors.red};
    }
  }
`;


/* ============================================================
   MENSAGENS
============================================================ */

export const Message = styled.p`
  width: 100%;

  margin: -2px 0 0;

  font-size: 0.82rem;

  line-height: 1.35;

  text-align: center;

  color: ${({ $error, $success }) =>
    $error
      ? "#c62828"
      : $success
      ? "#2e7d32"
      : colors.black};
`;


/* ============================================================
   SALVAR
============================================================ */

export const SaveButton = styled.button`
  position: relative;

  width: 100%;

  height: 58px;

  margin-top: 4px;

  padding: 0 22px;

  border: 0;

  border-radius: 16px;

  background: ${colors.yellow};

  color: ${colors.black};

  font-size: 1rem;

  font-weight: 700;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transform: translateZ(0);

  transition:
    color 0.3s ease,
    transform 0.25s ease,
    box-shadow 0.3s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 40px;

    height: 40px;

    border-radius: 50%;

    background: ${colors.red};

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform 0.65s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  .button-content {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    color: inherit;
  }

  &:hover {
    color: ${colors.white};

    transform: translateY(-3px);

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, 0.17);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(18);
  }

  &:active {
    transform:
      translateY(1px)
      scale(0.98);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline:
      2px solid ${colors.red};

    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    height: 54px;

    border-radius: 14px;

    font-size: 0.92rem;
  }
`;


/* ============================================================
   SAIR
============================================================ */

export const LogoutLink = styled.button`
  width: 100%;

  margin-top: 17px;

  border: 0;

  background: transparent;

  color: ${colors.red};

  font-size: 0.9rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    color: ${colors.black};

    transform: translateY(-1px);
  }
`;


/* ============================================================
   MODAL
============================================================ */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;

  height: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

  background:
    rgba(87, 17, 17, 0.35);

  backdrop-filter: blur(4px);

  z-index: 9999;
`;

export const Modal = styled.div`
  position: relative;

  width: 420px;

  max-width: 100%;

  padding: 32px;

  background: ${colors.white};

  border-radius: 22px;

  text-align: center;

  box-shadow:
    8px 8px 0 ${colors.red},
    0 20px 50px
    rgba(0, 0, 0, 0.2);

  animation:
    ${aparecer}
    0.25s
    ease;

  &::before {
    content: "";

    position: absolute;

    width: 90px;

    height: 90px;

    top: -35px;

    right: -35px;

    background: ${colors.yellow};

    border-radius: 50%;

    z-index: -1;
  }

  h3 {
    margin: 0 0 10px;

    color: ${colors.red};

    font-size: 1.4rem;

    font-weight: 900;
  }

  p {
    margin: 0 0 25px;

    color: ${colors.gray};

    font-size: 0.92rem;

    line-height: 1.5;
  }

  @media (max-width: 500px) {
    padding: 26px 20px;

    border-radius: 18px;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.85rem;
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 12px;

  width: 100%;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;


/* ============================================================
   CANCELAR
============================================================ */

export const CancelButton = styled.button`
  position: relative;

  width: 145px;

  height: 46px;

  border: 2px solid ${colors.yellow};

  border-radius: 12px;

  background: ${colors.cream};

  color: ${colors.black};

  font-size: 0.9rem;

  font-weight: 700;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transition:
    color 0.3s ease,
    transform 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 25px;

    height: 25px;

    border-radius: 50%;

    background: ${colors.yellow};

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform 0.55s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  .button-content {
    position: relative;

    z-index: 2;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(10);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;


/* ============================================================
   CONFIRMAR
============================================================ */

export const ConfirmButton = styled.button`
  position: relative;

  width: 145px;

  height: 46px;

  border: 0;

  border-radius: 12px;

  background: ${colors.red};

  color: ${colors.white};

  font-size: 0.9rem;

  font-weight: 700;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transition:
    color 0.3s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 25px;

    height: 25px;

    border-radius: 50%;

    background: ${colors.yellow};

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform 0.55s
      cubic-bezier(0.16, 1, 0.3, 1);
  }

  .button-content {
    position: relative;

    z-index: 2;
  }

  &:hover {
    color: ${colors.black};

    transform: translateY(-2px);

    box-shadow:
      0 8px 20px
      rgba(131, 22, 20, 0.22);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(10);
  }

  &:active {
    transform: scale(0.97);
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;
