import styled from "styled-components";


/* ============================================================
   CONTAINER
============================================================ */

export const Container = styled.div`

  min-height: 100vh;

  width: 100%;

  background: #fff;

  display: flex;

  justify-content: center;

  align-items: center;

  padding: 2%;

  box-sizing: border-box;

  font-family: "Poppins", sans-serif;

  overflow: hidden;

  position: relative;

`;


/* ============================================================
   EQUALIZADOR
============================================================ */

export const MusicVisualizer = styled.div`

  position: fixed;

  left: 0;

  bottom: 0;

  width: 100%;

  height: 330px;

  display: flex;

  align-items: flex-end;

  justify-content: center;

  gap: 5px;

  padding: 0 15px;

  box-sizing: border-box;

  overflow: hidden;

  pointer-events: none;

  z-index: 1;


  @media (max-width: 768px) {

    height: 230px;

    gap: 4px;

    padding: 0 8px;

  }


  @media (max-width: 500px) {

    height: 170px;

    gap: 3px;

    padding: 0 5px;

  }

`;


/* ============================================================
   COLUNA
============================================================ */

export const MusicColumn = styled.div`

  width: 25px;

  height: 300px;

  display: flex;

  flex-direction: column-reverse;

  justify-content: flex-start;

  align-items: center;

  gap: 3px;

  flex-shrink: 0;


  @media (max-width: 768px) {

    width: 19px;

    height: 210px;

    gap: 3px;

  }


  @media (max-width: 500px) {

    width: 15px;

    height: 150px;

    gap: 2px;

  }

`;


/* ============================================================
   PIXEL
============================================================ */

export const Pixel = styled.div`

  width: 25px;

  height: 25px;

  min-width: 25px;

  min-height: 25px;

  flex-shrink: 0;

  background: #f9be06;

  border-radius: 2px;

  opacity: 0.08;

  box-shadow:
    0 0 8px
    rgba(249, 190, 6, 0.04);

  will-change: opacity;

  transition:
    opacity 0.3s ease;


  @media (max-width: 768px) {

    width: 19px;

    height: 19px;

    min-width: 19px;

    min-height: 19px;

  }


  @media (max-width: 500px) {

    width: 15px;

    height: 15px;

    min-width: 15px;

    min-height: 15px;

  }

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

  background: #f9be06;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition:
    background 0.25s ease,
    transform 0.25s ease;

  z-index: 999;

  box-shadow:
    0 0.6vw 1.5vw
    rgba(0, 0, 0, 0.2);


  svg {

    font-size:
      clamp(
        20px,
        1.5vw,
        28px
      );

    color: #111;

    transition:
      color 0.25s ease,
      transform 0.25s ease;

  }


  &:hover {

    background: #111;

    transform:
      translateY(-3px);

  }


  &:hover svg {

    color: #f9be06;

    transform:
      scale(1.08);

  }


  &:active {

    transform:
      translateY(0)
      scale(0.95);

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

  min-height: 78vh;

  display: flex;

  background: #fff;

  border-radius: 2%;

  overflow: hidden;

  box-shadow:
    0 1vw 2.5vw
    rgba(0, 0, 0, 0.2);

  will-change:
    transform,
    opacity;

  position: relative;

  z-index: 5;


  @media (max-width: 1000px) {

    width: 92%;

  }


  @media (max-width: 768px) {

    width: 96%;

    flex-direction: column;

  }

`;


/* ============================================================
   LEFT SIDE
============================================================ */

export const LeftSide = styled.div`

  width: 50%;

  background: #f9be06;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  padding: 5%;

  box-sizing: border-box;


  @media (max-width: 768px) {

    width: 100%;

    padding: 8%;

  }

`;


/* ============================================================
   LOGO
============================================================ */

export const LogoImage = styled.div`

  width: 55%;

  display: flex;

  justify-content: center;

  align-items: center;

  will-change:
    transform,
    opacity;


  img {

    width: 100%;

    height: auto;

    object-fit: contain;

    display: block;

  }


  @media (max-width: 768px) {

    width: 35%;

  }


  @media (max-width: 500px) {

    width: 45%;

  }

`;


/* ============================================================
   WELCOME
============================================================ */

export const Welcome = styled.h1`

  margin-top: 8%;

  font-size:
    clamp(
      2rem,
      3vw,
      2.6rem
    );

  color: #111;

  text-align: center;

  will-change:
    transform,
    opacity;

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

  overflow: hidden;


  @media (max-width: 768px) {

    width: 100%;

    padding: 8%;

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

  will-change:
    transform,
    opacity;

`;


/* ============================================================
   TAB
============================================================ */

export const Tab = styled.button`

  border: none;

  cursor: pointer;

  padding: 3% 8%;

  border-radius: 999px;

  font-size:
    clamp(
      0.9rem,
      1vw,
      1rem
    );

  font-weight: bold;

  color:
    ${({ $active }) =>
      $active
        ? "#111"
        : "#999"};

  background:
    ${({ $active }) =>
      $active
        ? "#f9be06"
        : "transparent"};

  transform:
    ${({ $active }) =>
      $active
        ? "scale(1.05)"
        : "scale(1)"};

  transition:
    color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;


  &:hover {

    color: #111;

  }

`;


/* ============================================================
   FORM
============================================================ */

export const Form = styled.form`

  display: flex;

  flex-direction: column;

  gap: 20px;

  width: 100%;

  will-change:
    transform,
    opacity;

`;


/* ============================================================
   INPUT
============================================================ */

export const Input = styled.input`

  width: 100%;

  height: 3.2rem;

  border: none;

  outline: none;

  border-radius: 999px;

  background: #ececec;

  padding: 0 5%;

  box-sizing: border-box;

  font-size:
    clamp(
      0.9rem,
      1vw,
      1rem
    );

  margin-bottom: 4%;

  transition:
    background 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.2s ease;

  will-change:
    transform,
    opacity;


  &::placeholder {

    color: #888;

  }


  &:hover {

    background: #e8e8e8;

  }


  &:focus {

    background: #e3e3e3;

    box-shadow:
      0 0 0 3px
      rgba(249, 190, 6, 0.18);

  }

`;


/* ============================================================
   PASSWORD WRAPPER
============================================================ */

export const PasswordWrapper = styled.div`

  position: relative;

  width: 100%;

  margin-bottom: 4%;

`;


/* ============================================================
   EYE BUTTON
============================================================ */

export const EyeButton = styled.button`

  position: absolute;

  right: 5%;

  top: 50%;

  transform:
    translateY(-50%);

  background: none;

  border: none;

  cursor: pointer;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #888;

  font-size: 1.1rem;

  padding: 0;

  transition:
    color 0.2s ease;


  &:hover {

    color: #111;

  }

`;


/* ============================================================
   ESQUECI MINHA SENHA
   MESMO TAMANHO DO LINK INFERIOR
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

  color: #008cff;

  font-family: inherit;

  font-size:
    clamp(
      0.85rem,
      0.95vw,
      1rem
    );

  cursor: pointer;

  transition:
    color 0.2s ease,
    transform 0.2s ease;


  &:hover {

    color: #006dcc;

    text-decoration: underline;

    transform:
      translateY(-1px);

  }

`;


/* ============================================================
   LINK INFERIOR
============================================================ */

export const LinkText = styled.p`

  margin-top: 5%;

  text-align: center;

  font-size:
    clamp(
      0.85rem,
      0.95vw,
      1rem
    );

  cursor: pointer;

  transition:
    transform 0.2s ease;

  will-change:
    transform,
    opacity;


  &:hover {

    transform:
      translateY(-1px);

  }

`;


/* ============================================================
   PARTE PRETA DO LINK
============================================================ */

export const LinkNormal = styled.span`

  color: #111;

`;


/* ============================================================
   PARTE AZUL DO LINK
============================================================ */

export const LinkAction = styled.span`

  color: #008cff;

  transition:
    color 0.2s ease;


  &:hover {

    color: #006dcc;

    text-decoration: underline;

  }

`;


/* ============================================================
   BUTTON
============================================================ */

export const Button = styled.button`

  width: 100%;

  height: 45px;

  flex-shrink: 0;

  border: none;

  border-radius: 25px;

  background: #f9be06;

  color: #111;

  font-size:
    clamp(
      0.95rem,
      1vw,
      1rem
    );

  font-weight: bold;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  display: flex;

  align-items: center;

  justify-content: center;

  will-change:
    transform,
    opacity;


  &:hover {

    background: #000;

    color: #f9be06;

    transform:
      translateY(-3px);

    box-shadow:
      0 8px 18px
      rgba(0, 0, 0, 0.16);

  }


  &:active {

    transform:
      translateY(1px)
      scale(0.98);

  }

`;