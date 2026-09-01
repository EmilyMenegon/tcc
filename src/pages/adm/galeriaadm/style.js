import styled from "styled-components";


/* ==========================================
   PAGE
========================================== */

export const Page = styled.div`

  width: 100%;

  min-height: 100vh;

  background: #ffffff;

  font-family:
    "Poppins",
    sans-serif;

  color: #000000;

  overflow-x: hidden;

`;


/* ==========================================
   CONTENT
========================================== */

export const Content = styled.main`

  width: 90%;

  max-width: 1400px;

  margin: 0 auto;

  padding:
    35px 0
    100px;

  box-sizing: border-box;


  @media (max-width: 768px) {

    width: 92%;

    padding:
      25px 0
      80px;

  }


  @media (max-width: 480px) {

    width: 90%;

    padding:
      20px 0
      70px;

  }

`;


/* ==========================================
   HEADER
========================================== */

export const Header = styled.header`

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  margin-bottom: 40px;


  @media (max-width: 600px) {

    margin-bottom: 28px;

  }

`;


/* ==========================================
   TITLE
========================================== */

export const Title = styled.h1`

  margin: 0;

  color: #831614;

  font-size:
    clamp(
      2rem,
      4vw,
      2.8rem
    );

  font-weight: 700;

  line-height: 1.2;


  @media (max-width: 600px) {

    font-size:
      clamp(
        1.8rem,
        8vw,
        2.2rem
      );

  }

`;


/* ==========================================
   SUBTITLE
========================================== */

export const Subtitle = styled.p`

  max-width: 600px;

  margin:
    10px 0 0;

  color: #777777;

  font-size:
    clamp(
      .85rem,
      1.5vw,
      1rem
    );

  line-height: 1.5;


  @media (max-width: 600px) {

    width: 90%;

    font-size: 14px;

  }

`;


/* ==========================================
   GALLERY
========================================== */

export const Gallery = styled.section`

  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(
        280px,
        1fr
      )
    );

  gap: 30px;

  align-items: stretch;


  @media (max-width: 1000px) {

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap: 24px;

  }


  @media (max-width: 750px) {

    grid-template-columns:
      repeat(
        2,
        1fr
      );

    gap: 20px;

  }


  @media (max-width: 500px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/* ==========================================
   CARD
========================================== */

export const Card = styled.article`

  position: relative;

  width: 100%;

  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  cursor: pointer;

  box-shadow:
    0 7px 25px
      rgba(
        0,
        0,
        0,
        .08
      );

  transition:
    transform .3s ease,
    box-shadow .3s ease;

  aspect-ratio: 4 / 3;


  &:hover {

    transform:
      translateY(-8px);

    box-shadow:
      0 18px 40px
        rgba(
          0,
          0,
          0,
          .15
        );

  }


  &:active {

    transform:
      translateY(-3px);

  }

`;


/* ==========================================
   IMAGE BOX
========================================== */

export const ImageBox = styled.div`

  width: 100%;

  height: 100%;

  position: relative;

  overflow: hidden;

  background: #eeeeee;


  img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform .5s ease;

  }


  &:hover img {

    transform:
      scale(1.07);

  }

`;


/* ==========================================
   DELETE BUTTON
========================================== */

export const DeleteButton = styled.button`

  position: absolute;

  top: 14px;

  right: 14px;

  width: 42px;

  height: 42px;

  border: none;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    rgba(
      214,
      40,
      40,
      .95
    );

  color: #ffffff;

  cursor: pointer;

  opacity: 0;

  transform:
    scale(.85);

  box-shadow:
    0 6px 15px
      rgba(
        0,
        0,
        0,
        .2
      );

  transition:
    .2s;

  z-index: 5;


  svg {

    width: 20px;

    height: 20px;

  }


  ${Card}:hover & {

    opacity: 1;

    transform:
      scale(1);

  }


  &:hover {

    background: #b71c1c;

    transform:
      scale(1.1);

  }


  &:active {

    transform:
      scale(.95);

  }


  @media (max-width: 700px) {

    opacity: 1;

    transform:
      scale(1);

  }

`;


/* ==========================================
   EMPTY STATE
========================================== */

export const EmptyState = styled.div`

  grid-column:
    1 / -1;

  min-height: 320px;

  padding:
    50px 25px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  border:
    2px dashed #dddddd;

  border-radius: 15px;

  background: #fafafa;

`;


/* ==========================================
   EMPTY ICON
========================================== */

export const EmptyIcon = styled.div`

  width: 70px;

  height: 70px;

  margin-bottom: 18px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background:
    rgba(
      249,
      190,
      6,
      .15
    );

  color: #f9be06;

  font-size: 30px;

`;


/* ==========================================
   EMPTY TITLE
========================================== */

export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;

`;


/* ==========================================
   EMPTY TEXT
========================================== */

export const EmptyText = styled.p`

  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;

`;


/* ==========================================
   FLOATING BUTTON
========================================== */

export const FloatingButton = styled.button`

  position: fixed;

  right: 35px;

  bottom: 35px;

  width: 70px;

  height: 70px;

  border: none;

  border-radius: 50%;

  background: #f9be06;

  color: #111111;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 10px 25px
      rgba(
        0,
        0,
        0,
        .2
      );

  transition: .2s;

  z-index: 100;


  svg {

    font-size: 28px;

    transition: .2s;

  }


  &:hover {

    background: #000000;

    color: #f9be06;

    transform:
      translateY(-2px);

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

    width: 60px;

    height: 60px;

    right: 20px;

    bottom: 20px;

  }

`;


/* ==========================================
   IMAGE MODAL
========================================== */

export const Modal = styled.div`

  position: fixed;

  inset: 0;

  z-index: 9999;

  padding: 20px;

  box-sizing: border-box;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    rgba(
      0,
      0,
      0,
      .88
    );

  backdrop-filter:
    blur(5px);

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


/* ==========================================
   IMAGE MODAL CONTENT
========================================== */

export const ModalContent = styled.div`

  position: relative;

  max-width: 95vw;

  max-height: 95vh;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  animation:
    zoomIn .25s ease;


  @keyframes zoomIn {

    from {

      opacity: 0;

      transform:
        scale(.9);

    }

    to {

      opacity: 1;

      transform:
        scale(1);

    }

  }

`;


/* ==========================================
   MODAL IMAGE
========================================== */

export const ModalImage = styled.img`

  display: block;

  max-width: 90vw;

  max-height: 88vh;

  width: auto;

  height: auto;

  object-fit: contain;

  border-radius: 15px;

  box-shadow:
    0 20px 60px
      rgba(
        0,
        0,
        0,
        .4
      );


  @media (max-width: 600px) {

    max-width: 94vw;

    max-height: 84vh;

    border-radius: 10px;

  }

`;


/* ==========================================
   CLOSE BUTTON
========================================== */

export const CloseButton = styled.button`

  position: fixed;

  top: 25px;

  right: 30px;

  width: 50px;

  height: 50px;

  border: none;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background:
    rgba(
      255,
      255,
      255,
      .12
    );

  color: #ffffff;

  cursor: pointer;

  transition:
    .2s;

  z-index: 10000;


  svg {

    width: 28px;

    height: 28px;

  }


  &:hover {

    background: #f9be06;

    color: #000000;

    transform:
      rotate(90deg);

  }


  @media (max-width: 600px) {

    top: 15px;

    right: 15px;

    width: 42px;

    height: 42px;


    svg {

      width: 24px;

      height: 24px;

    }

  }

`;


/* ==========================================
   DELETE MODAL OVERLAY
========================================== */

export const DeleteModalOverlay = styled.div`

  position: fixed;

  inset: 0;

  background:
    rgba(
      0,
      0,
      0,
      .45
    );

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 10001;

  backdrop-filter:
    blur(3px);

  padding: 20px;

  box-sizing: border-box;

`;


/* ==========================================
   DELETE MODAL
========================================== */

export const DeleteModal = styled.div`

  width: 400px;

  max-width: 90%;

  background: #ffffff;

  border-radius: 20px;

  padding: 30px;

  text-align: center;

  box-shadow:
    0 20px 45px
      rgba(
        0,
        0,
        0,
        .2
      );

  animation:
    aparecer .25s ease;


  h2,
  h3 {

    margin:
      0 0 12px;

    color: #111111;

    font-size: 24px;

  }


  p {

    color: #666666;

    margin:
      0 0 30px;

    line-height: 1.5;

  }


  @keyframes aparecer {

    from {

      opacity: 0;

      transform:
        scale(.9);

    }

    to {

      opacity: 1;

      transform:
        scale(1);

    }

  }


  @media (max-width: 500px) {

    padding: 25px 20px;

  }

`;


/* ==========================================
   MODAL BUTTONS
========================================== */

export const ModalButtons = styled.div`

  display: flex;

  justify-content: center;

  gap: 15px;


  @media (max-width: 450px) {

    flex-direction: column;

  }

`;


/* ==========================================
   CANCEL BUTTON
========================================== */

export const CancelButton = styled.button`

  padding:
    12px 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111111;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #d8d8d8;

  }

`;


/* ==========================================
   CONFIRM BUTTON
========================================== */

export const ConfirmButton = styled.button`

  padding:
    12px 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #ffffff;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #b71c1c;

  }

`;

/* ==========================================
   SETA DE NAVEGAÇÃO
========================================== */

export const ArrowButton = styled.button`

  position: fixed;

  top: 50%;

  transform: translateY(-50%);

  width: 55px;

  height: 55px;

  border: none;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: rgba(255, 255, 255, .12);

  color: #ffffff;

  cursor: pointer;

  transition: .2s;

  z-index: 10000;


  &.left {
    left: 25px;
  }

  &.right {
    right: 25px;
  }


  svg {
    width: 26px;
    height: 26px;
  }


  &:hover {
    background: #f9be06;
    color: #000000;
  }


  @media (max-width: 600px) {

    width: 42px;

    height: 42px;


    &.left {
      left: 10px;
    }

    &.right {
      right: 10px;
    }


    svg {
      width: 20px;
      height: 20px;
    }

  }

`;


/* ==========================================
   BOTÃO NAVEGAR (ANTERIOR / PRÓXIMA)
========================================== */

export const NavButton = styled.button`

  position: fixed;

  top: 50%;

  ${({ $direction }) => ($direction === "left" ? "left: 30px;" : "right: 30px;")}

  transform: translateY(-50%);

  width: 55px;

  height: 55px;

  border: none;

  border-radius: 50%;

  display: flex;

  align-items: center;

  justify-content: center;

  background: rgba(255, 255, 255, .12);

  color: #ffffff;

  cursor: pointer;

  transition: .2s;

  z-index: 10000;


  svg {

    width: 26px;

    height: 26px;

  }


  &:hover {

    background: #f9be06;

    color: #000000;

    transform: translateY(-50%) scale(1.08);

  }


  @media (max-width: 600px) {

    width: 44px;

    height: 44px;

    ${({ $direction }) => ($direction === "left" ? "left: 12px;" : "right: 12px;")}


    svg {

      width: 20px;

      height: 20px;

    }

  }

`;