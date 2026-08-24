import styled, { createGlobalStyle } from "styled-components";


/* ============================================================
   RESET GLOBAL
============================================================ */

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    min-width: 100%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  html, body {
    overflow: hidden;
  }

  body {
    background: #fff;
  }

`;


/* ============================================================
   CONTAINER
============================================================ */

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
`;


/* ============================================================
   EQUALIZADOR
============================================================ */

export const MusicVisualizer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 50vh;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
`;


/* ============================================================
   COLUNA
============================================================ */

export const MusicColumn = styled.div`
  flex: 1 1 0;
  width: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6%;
  min-width: 0;
  box-sizing: border-box;
`;


/* ============================================================
   PIXEL
============================================================ */

export const Pixel = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  background: #ffdb53;
  border: none;
  border-radius: 0;
  opacity: 0;
  box-shadow: 0 0.5vw rgba(249, 190, 6, 0.04);
  will-change: opacity;
`;


/* ============================================================
   HOME
============================================================ */

export const HomeButton = styled.button`
  position: fixed;
  top: 2%;
  left: 2%;
  width: 4.5%;
  aspect-ratio: 1;
  min-width: 50px;
  max-width: 65px;
  border: none;
  border-radius: 50%;
  background: #831614;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;
  z-index: 999;
  box-shadow: 0 0.6vw 1.5vw rgba(0, 0, 0, 0.2);

  svg {
    font-size: clamp(20px, 1.5vw, 28px);
    color: #fff;
    transition: color 0.25s ease, transform 0.25s ease;
  }

  &:hover {
    background: #000;
    transform: translateY(-3px);
  }

  &:hover svg {
    color: #fff;
    transform: scale(1.08);
  }

  &:active {
    transform: translateY(0) scale(0.95);
  }

  @media (max-width: 768px) {
    width: 12%;
    min-width: 48px;
  }
`;


/* ============================================================
   CARD
============================================================ */

export const Card = styled.div`
  width: 78%;
  height: auto;
  max-height: 92vh;
  min-height: 0;
  display: flex;
  background: #fff;
  border-radius: 28px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 1vw 2.5vw rgba(0, 0, 0, 0.2);
  will-change: transform, opacity;
  position: relative;
  z-index: 5;

  @media (max-width: 1000px) {
    width: 92%;
    max-height: 92vh;
  }

  @media (max-width: 768px) {
    width: 96%;
    max-height: 94vh;
    flex-direction: column;
    border-radius: 24px;
  }
`;


/* ============================================================
   LEFT SIDE
============================================================ */

export const LeftSide = styled.div`
  width: 50%;
  background: #fff7d0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 4% 8%;
    flex-shrink: 0;
  }
`;


/* ============================================================
   LOGO
============================================================ */

export const LogoImage = styled.div`
  width: 62%;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
  position: relative;
  top: -6%;
  z-index: 2;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  @media (max-width: 768px) {
    width: 32%;
    top: 0;
  }

  @media (max-width: 500px) {
    width: 38%;
    top: 0;
  }
`;


/* ============================================================
   WELCOME
============================================================ */

export const Welcome = styled.h1`
  margin-top: 2%;
  position: relative;
  top: -6%;
  font-size: clamp(2rem, 3vw, 2.6rem);
  color: #831614;
  text-align: center;
  will-change: transform, opacity;
  z-index: 2;
`;


/* ============================================================
   CÍRCULOS DECORATIVOS
============================================================ */

export const DecorativeCircles = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25%;
  pointer-events: none;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;


/* ============================================================
   CÍRCULO VERMELHO
============================================================ */

export const CircleOne = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  max-width: 560px;
  max-height: 560px;
  border-radius: 50%;
  background: #831614;
  left: -30%;
  bottom: -150%;
  z-index: 3;
`;


/* ============================================================
   CÍRCULO PRETO
============================================================ */

export const CircleTwo = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  max-width: 350px;
  max-height: 270px;
  border-radius: 50%;
  background: #383131;
  left: 20%;
  bottom: -97%;
  z-index: 2;
`;


/* ============================================================
   CÍRCULO AMARELO
============================================================ */

export const CircleThree = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vw;
  max-width: 600px;
  max-height: 500px;
  border-radius: 50%;
  background: #ffdb53;
  right: -3%;
  bottom: -150%;
  z-index: 1;
`;


/* ============================================================
   RIGHT SIDE
============================================================ */

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6%;
  box-sizing: border-box;
  overflow: visible;

  @media (max-width: 768px) {
    width: 100%;
    padding: 5% 8%;
    flex-shrink: 0;
  }
`;


/* ============================================================
   TABS
============================================================ */

export const Tabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8%;
  margin-bottom: 8%;
  will-change: transform, opacity;
`;


/* ============================================================
   TAB
============================================================ */

export const Tab = styled.button`
  border: none;
  cursor: pointer;
  padding: 3% 8%;
  border-radius: 999px;
  font-size: clamp(0.9rem, 1vw, 1rem);
  font-weight: bold;
  color: ${({ $active }) => ($active ? "#fff" : "#999")};
  background: ${({ $active }) => ($active ? "#831617" : "transparent")};
  transform: ${({ $active }) => ($active ? "scale(1.05)" : "scale(1)")};
  transition: color 0.25s ease, background 0.25s ease, transform 0.25s ease;
`;


/* ============================================================
   FORM
============================================================ */

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  will-change: transform, opacity;
`;


/* ============================================================
   INPUT WRAPPER
============================================================ */

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4.2rem;
  margin-bottom: 2%;
`;


/* ============================================================
   INPUT LABEL
============================================================ */

export const InputLabel = styled.label`
  position: absolute;
  top: 8px;
  left: 5%;
  z-index: 2;
  color: #a09870;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
  pointer-events: none;
`;


/* ============================================================
   INPUT
============================================================ */

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: 2px solid #ffdb53;
  outline: none;
  border-radius: 15px;
  background: #fff7d0;
  padding: 1.35rem 12% 0.45rem 5%;
  box-sizing: border-box;
  font-size: 0.95rem;
  line-height: 1.2;
  color: #111;
  transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.2s ease, border-color 0.25s ease;
  will-change: transform, opacity;

  &:hover {
    background: #fff7d0;
  }
`;


/* ============================================================
   PASSWORD WRAPPER
============================================================ */

export const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4.2rem;
  margin-bottom: 2%;

  ${Input} {
    height: 100%;
    margin-bottom: 0;
  }
`;


/* ============================================================
   EYE BUTTON
============================================================ */

export const EyeButton = styled.button`
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 1.1rem;
  padding: 0;
  transition: color 0.2s ease;

  &:hover {
    color: #111;
  }
`;


/* ============================================================
   ESQUECI MINHA SENHA
============================================================ */

export const ForgotPassword = styled.button`
  display: block;
  width: 100%;
  border: none;
  background: transparent;
  padding: 0;
  margin-top: -10px;
  margin-bottom: 2px;
  text-align: center;
  color: #831614;
  font-family: inherit;
  font-size: clamp(0.85rem, 0.95vw, 1rem);
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: #000;
    text-decoration: underline;
    transform: translateY(-1px);
  }
`;


/* ============================================================
   LINK INFERIOR
============================================================ */

export const LinkText = styled.p`
  margin-top: 3%;
  text-align: center;
  font-size: clamp(0.85rem, 0.95vw, 1rem);
  cursor: pointer;
  transition: transform 0.2s ease;
  will-change: transform, opacity;

  &:hover {
    transform: translateY(-1px);
  }
`;


/* ============================================================
   PARTE PRETA DO LINK
============================================================ */

export const LinkNormal = styled.span`
  color: #111;
`;


/* ============================================================
   PARTE VERMELHA DO LINK
============================================================ */

export const LinkAction = styled.span`
  color: #831614;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
    text-decoration: underline;
  }
`;


/* ============================================================
   BUTTON
============================================================ */

export const Button = styled.button`
  width: 100%;
  height: 58px;
  flex-shrink: 0;
  border: none;
  border-radius: 18px;
  background: #831614;
  color: #fff;
  font-size: clamp(1rem, 1.1vw, 1.1rem);
  font-weight: bold;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform, opacity;

  &:hover {
    background: #000;
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.16);
  }

  &:active {
    transform: translateY(1px) scale(0.98);
  }

  @media (max-width: 768px) {
    height: 62px;
    border-radius: 18px;
    font-size: 1.05rem;
  }
`;