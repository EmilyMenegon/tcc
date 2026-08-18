import styled from "styled-components";


/* =========================================
   PAGE
========================================= */

export const Page = styled.div`

  min-height: 100vh;

  background: #fff;

  font-family:
    "Poppins",
    sans-serif;

  color: #222;

`;


/* =========================================
   CONTENT
========================================= */

export const Content = styled.div`

  width: 90%;

  max-width: 1400px;

  margin: 10px auto;

  padding-bottom: 100px;

  @media (max-width: 768px) {

    width: 92%;

    margin-top: 20px;

  }

`;


/* =========================================
   HEADER
========================================= */

export const Header = styled.div`

  display: flex;

  justify-content: center;

  align-items: center;

  margin-bottom: 35px;

  padding-top: 10px;

`;


export const TitleArea = styled.div`

  text-align: center;

`;


export const Title = styled.h1`

  margin: 0;

  color: #222;

  font-size: 40px;

  font-weight: 700;

  line-height: 1.2;

  @media (max-width: 768px) {

    font-size: 32px;

  }

  @media (max-width: 480px) {

    font-size: 28px;

  }

`;


export const Subtitle = styled.p`

  margin: 8px 0 0;

  color: #777;

  font-size: 14px;

  @media (max-width: 480px) {

    font-size: 13px;

  }

`;


/* =========================================
   CARDS
========================================= */

export const Cards = styled.div`

  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(280px, 1fr)
    );

  gap: 30px;

  align-items: stretch;

  @media (max-width: 768px) {

    grid-template-columns:
      repeat(
        auto-fill,
        minmax(240px, 1fr)
      );

    gap: 22px;

  }

  @media (max-width: 550px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/* =========================================
   POST-IT
========================================= */

export const PostIt = styled.div`

  position: relative;

  min-height: 270px;

  padding: 32px 25px 22px;

  box-sizing: border-box;

  background:
    ${({ $color }) => $color};

  cursor: pointer;

  box-shadow:
    0 5px 15px
      rgba(0, 0, 0, 0.10);

  transition:
    .3s;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  transform:
    rotate(
      ${({ $index }) =>
        $index % 3 === 0
          ? "-1deg"
          : $index % 3 === 1
          ? "1deg"
          : "0deg"}
    );

  &:hover {

    transform:
      translateY(-8px)
      rotate(0deg);

    box-shadow:
      0 15px 35px
        rgba(0, 0, 0, 0.16);

  }

  @media (max-width: 550px) {

    min-height: 240px;

    transform: none;

    &:hover {

      transform:
        translateY(-5px);

    }

  }

`;


/* =========================================
   PIN
========================================= */

export const PostItPin = styled.div`

  position: absolute;

  top: 12px;

  left: 50%;

  transform:
    translateX(-50%);

  width: 14px;

  height: 14px;

  border-radius: 50%;

  background: #e44747;

  box-shadow:

    inset 2px 2px 3px
      rgba(255,255,255,.4),

    2px 3px 5px
      rgba(0,0,0,.2);

`;


/* =========================================
   POST HEADER
========================================= */

export const PostItHeader = styled.div`

  margin-bottom: 14px;

`;


export const PostItTitle = styled.h2`

  margin: 0;

  color: #222;

  font-size: 22px;

  font-weight: 700;

  line-height: 1.25;

  word-break: break-word;

`;


/* =========================================
   MESSAGE
========================================= */

export const PostItMessage = styled.p`

  margin: 0;

  color: #333;

  font-size: 15px;

  line-height: 1.65;

  word-break: break-word;

  display: -webkit-box;

  -webkit-line-clamp: 6;

  -webkit-box-orient: vertical;

  overflow: hidden;

`;


/* =========================================
   FOOTER DO POST
========================================= */

export const PostItFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

`;


export const ReadMore = styled.span`

  color:
    rgba(0,0,0,.55);

  font-size: 12px;

  font-weight: 600;

`;


/* =========================================
   ESTADO VAZIO
========================================= */

export const EmptyState = styled.div`

  grid-column:
    1 / -1;

  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  padding: 40px;

  border-radius: 15px;

  background: #fafafa;

  border:
    2px dashed #ddd;

`;


export const EmptyIcon = styled.div`

  width: 70px;

  height: 70px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 15px;

  border-radius: 50%;

  background: #fff7d6;

  color: #f9be06;

  font-size: 30px;

`;


export const EmptyTitle = styled.h2`

  margin: 0 0 8px;

  color: #333;

  font-size: 22px;

`;


export const EmptyText = styled.p`

  margin: 0;

  color: #888;

  font-size: 14px;

  max-width: 400px;

  line-height: 1.6;

`;


/* =========================================
   FLOATING BUTTON
========================================= */

export const FloatingButton = styled.button`

  position: fixed;

  right: 35px;

  bottom: 35px;

  z-index: 100;

  width: 70px;

  height: 70px;

  border: none;

  border-radius: 50%;

  background: #f9be06;

  color: #111;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 10px 25px
      rgba(0, 0, 0, 0.20);

  transition:
    .2s;

  svg {

    font-size: 30px;

    transition:
      .2s;

  }

  &:hover {

    background: #000;

    color: #f9be06;

    transform:
      translateY(-3px);

  }

  &:hover svg {

    transform:
      rotate(90deg);

  }

  &:active {

    transform:
      translateY(1px);

  }

  @media (max-width: 600px) {

    right: 20px;

    bottom: 20px;

    width: 60px;

    height: 60px;

    svg {

      font-size: 26px;

    }

  }

`;


/* =========================================
   MODAL OVERLAY
========================================= */

export const ModalOverlay = styled.div`

  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

  box-sizing: border-box;

  background:
    rgba(0, 0, 0, .70);

  backdrop-filter:
    blur(4px);

  animation:
    fadeIn .2s ease;

  @keyframes fadeIn {

    from {

      opacity: 0;

    }

    to {

      opacity: 1;

    }

  }

  @media (max-width: 600px) {

    padding: 12px;

  }

`;


/* =========================================
   MODAL DE CRIAÇÃO
========================================= */

export const Modal = styled.div`

  width: 100%;

  max-width: 550px;

  max-height:
    calc(100vh - 40px);

  overflow-y: auto;

  padding: 30px;

  box-sizing: border-box;

  background: #fff;

  border-radius: 15px;

  box-shadow:
    0 20px 60px
      rgba(0,0,0,.30);

  animation:
    modalOpen .25s ease;

  @keyframes modalOpen {

    from {

      opacity: 0;

      transform:
        translateY(20px)
        scale(.96);

    }

    to {

      opacity: 1;

      transform:
        translateY(0)
        scale(1);

    }

  }

  @media (max-width: 600px) {

    padding: 22px;

    max-height:
      calc(100vh - 24px);

  }

`;


/* =========================================
   MODAL HEADER
========================================= */

export const ModalHeader = styled.div`

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;

`;


export const ModalTitle = styled.h2`

  margin: 0;

  color: #222;

  font-size: 25px;

  font-weight: 700;

`;


export const CloseButton = styled.button`

  width: 40px;

  height: 40px;

  border: none;

  border-radius: 50%;

  background: #f4f4f4;

  color: #444;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: .2s;

  flex-shrink: 0;

  svg {

    font-size: 20px;

  }

  &:hover {

    background: #000;

    color: #f9be06;

    transform:
      rotate(90deg);

  }

`;


/* =========================================
   FORM
========================================= */

export const Form = styled.form`

  display: flex;

  flex-direction: column;

`;


export const Label = styled.label`

  margin-bottom: 8px;

  color: #333;

  font-size: 14px;

  font-weight: 600;

`;


export const Input = styled.input`

  width: 100%;

  height: 48px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding: 0 15px;

  border:
    1px solid #ddd;

  border-radius: 10px;

  outline: none;

  color: #222;

  background: #fff;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  transition: .2s;

  &:focus {

    border-color: #f9be06;

    box-shadow:
      0 0 0 3px
      rgba(249,190,6,.15);

  }

`;


export const TextArea = styled.textarea`

  width: 100%;

  min-height: 150px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding: 14px 15px;

  resize: vertical;

  border:
    1px solid #ddd;

  border-radius: 10px;

  outline: none;

  color: #222;

  background: #fff;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  line-height: 1.5;

  transition: .2s;

  &:focus {

    border-color: #f9be06;

    box-shadow:
      0 0 0 3px
      rgba(249,190,6,.15);

  }

`;


/* =========================================
   CORES
========================================= */

export const ColorArea = styled.div`

  margin-top: 5px;

`;


export const ColorLabel = styled.div`

  margin-bottom: 10px;

  color: #333;

  font-size: 14px;

  font-weight: 600;

`;


export const Colors = styled.div`

  display: flex;

  align-items: center;

  flex-wrap: wrap;

  gap: 10px;

`;


export const ColorButton = styled.button`

  width: 32px;

  height: 32px;

  padding: 0;

  border-radius: 50%;

  border:
    3px solid
    ${({ $selected }) =>
      $selected
        ? "#222"
        : "transparent"};

  background:
    ${({ $color }) =>
      $color};

  box-shadow:
    0 2px 6px
      rgba(0,0,0,.15);

  cursor: pointer;

  transition: .2s;

  &:hover {

    transform:
      scale(1.12);

  }

`;


/* =========================================
   FORM FOOTER
========================================= */

export const FormFooter = styled.div`

  display: flex;

  justify-content: flex-end;

  margin-top: 25px;

`;


export const SaveButton = styled.button`

  min-height: 48px;

  padding: 0 22px;

  border: none;

  border-radius: 10px;

  background: #f9be06;

  color: #111;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  font-weight: 700;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  cursor: pointer;

  transition: .2s;

  svg {

    font-size: 18px;

  }

  &:hover {

    background: #000;

    color: #f9be06;

    transform:
      translateY(-2px);

  }

  &:active {

    transform:
      translateY(1px);

  }

  @media (max-width: 600px) {

    width: 100%;

  }

`;


/* =========================================
   POST-IT EM TELA GRANDE
========================================= */

export const FullPostIt = styled.div`

  position: relative;

  width: min(
    1000px,
    100%
  );

  height: min(
    750px,
    calc(100vh - 60px)
  );

  padding:
    80px
    clamp(
      30px,
      8vw,
      90px
    );

  box-sizing: border-box;

  background:
    ${({ $color }) =>
      $color};

  box-shadow:
    0 25px 80px
      rgba(0,0,0,.35);

  animation:
    postOpen .25s ease;

  overflow-y: auto;

  @keyframes postOpen {

    from {

      opacity: 0;

      transform:
        scale(.93);

    }

    to {

      opacity: 1;

      transform:
        scale(1);

    }

  }

  @media (max-width: 600px) {

    height:
      calc(100vh - 24px);

    padding:
      70px
      25px
      35px;

  }

`;


/* =========================================
   PIN GRANDE
========================================= */

export const FullPostItPin = styled.div`

  position: absolute;

  top: 20px;

  left: 50%;

  transform:
    translateX(-50%);

  width: 17px;

  height: 17px;

  border-radius: 50%;

  background: #e44747;

  box-shadow:

    inset 2px 2px 4px
      rgba(255,255,255,.4),

    2px 3px 6px
      rgba(0,0,0,.25);

`;


/* =========================================
   CONTEÚDO GRANDE
========================================= */

export const FullPostItContent = styled.div`

  width: min(
    850px,
    100%
  );

  min-height: 100%;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

`;


export const FullPostItTitle = styled.h2`

  margin: 0 0 30px;

  color: #222;

  font-size:
    clamp(
      32px,
      6vw,
      60px
    );

  line-height: 1.05;

  font-weight: 800;

  word-break: break-word;

`;


export const FullPostItMessage = styled.p`

  margin: 0;

  color: #292929;

  font-size:
    clamp(
      18px,
      3vw,
      28px
    );

  line-height: 1.7;

  white-space: pre-wrap;

  word-break: break-word;

`;


/* =========================================
   FOOTER POST GRANDE
========================================= */

export const FullPostItFooter = styled.div`

  margin-top: auto;

  padding-top: 50px;

`;


export const DeleteButton = styled.button`

  min-height: 46px;

  padding: 0 20px;

  border: none;

  border-radius: 10px;

  background: #e74c3c;

  color: #fff;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 13px;

  font-weight: 700;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  cursor: pointer;

  transition: .2s;

  &:hover {

    background: #c0392b;

    transform:
      translateY(-2px);

  }

  @media (max-width: 600px) {

    width: 100%;

  }

`;