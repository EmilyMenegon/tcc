
import styled, { css } from "styled-components";

/*
==========================================
EFEITO DOS BOTÕES
==========================================
*/

const ButtonEffect = css`

  position: relative;

  overflow: hidden;

  isolation: isolate;

  --mouse-x: 50%;
  --mouse-y: 50%;


  &::before {

    content: "";

    position: absolute;

    left: var(--mouse-x);

    top: var(--mouse-y);

    width: 35px;

    height: 35px;

    border-radius: 50%;

    background: #ffdb53;

    transform:
      translate(-50%, -50%)
      scale(0);

    transition:
      transform 0.5s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );

    z-index: 0;

    pointer-events: none;

  }


  &:hover::before {

    transform:
      translate(-50%, -50%)
      scale(18);

  }


  svg,
  span {

    position: relative;

    z-index: 2;

  }

`;


/*
==========================================
PAGE
==========================================
*/

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


/*
==========================================
CONTENT
==========================================
*/

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


/*
==========================================
HEADER
==========================================
*/

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


export const Title = styled.h1`

  margin: 0 0 14px;

  color: #831614;

  font-size:
    clamp(
      2.8rem,
      5vw,
      4.8rem
    );

  font-weight: 900;

  letter-spacing: -2px;

  line-height: 1.05;


  @media (max-width: 768px) {

    font-size:
      clamp(
        2.5rem,
        9vw,
        4rem
      );

    letter-spacing: -1.5px;

  }


  @media (max-width: 480px) {

    font-size: 2.3rem;

  }

`;


export const Subtitle = styled.p`

  width: 100%;

  max-width: 700px;

  margin: 10px auto 0;

  color: #777;

  font-size: 1.55rem;

  line-height: 1.6;

  text-align: center;


  @media (max-width: 768px) {

    font-size: 1.1rem;

  }


  @media (max-width: 480px) {

    font-size: 1rem;

  }

`;


/*
==========================================
GALERIA
==========================================
*/

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
      repeat(3, 1fr);

    gap: 24px;

  }


  @media (max-width: 750px) {

    grid-template-columns:
      repeat(2, 1fr);

    gap: 20px;

  }


  @media (max-width: 500px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/*
==========================================
CARD
==========================================
*/

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


  &:focus-visible {

    outline:
      3px solid #ffdb53;

    outline-offset:
      4px;

  }


  &:active {

    transform:
      translateY(-3px);

  }

`;


/*
==========================================
IMAGE BOX
==========================================
*/

export const ImageBox = styled.div`

  width: 100%;

  height: 100%;

  position: relative;

  overflow: hidden;

  background: #eeeeee;


  img,
  video {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform .5s ease;

  }


  &:hover img,
  &:hover video {

    transform:
      scale(1.07);

  }

`;


/*
==========================================
EMPTY STATE
==========================================
*/

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

  color: #ffdb53;

  font-size: 30px;

`;


export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;

`;


export const EmptyText = styled.p`

  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;

`;


/*
==========================================
MODAL
==========================================
*/

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


/*
==========================================
MODAL CONTENT
==========================================
*/

export const ModalContent = styled.div`

  position: relative;

  max-width: 95vw;

  max-height: 95vh;

  display: flex;

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


/*
==========================================
MODAL IMAGE
==========================================
*/

export const ModalImage = styled.img`

  display: block;

  max-width: 90vw;

  max-height: 90vh;

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

    max-height: 85vh;

    border-radius: 10px;

  }

`;


/*
==========================================
CLOSE BUTTON
==========================================
*/

export const CloseButton = styled.button`

  ${ButtonEffect}

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
    background .2s ease,
    color .2s ease,
    transform .2s ease;

  z-index: 10000;


  svg {

    width: 28px;

    height: 28px;

  }


  &:hover {

    background: #ffdb53;

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


/*
==========================================
NAV BUTTON
==========================================
*/

export const NavButton = styled.button`

  ${ButtonEffect}

  position: fixed;

  top: 50%;

  ${({ $direction }) =>
    $direction === "left"
      ? "left: 30px;"
      : "right: 30px;"
  }

  transform:
    translateY(-50%);

  width: 55px;

  height: 55px;

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
    background .2s ease,
    color .2s ease,
    transform .2s ease;

  z-index: 10000;


  svg {

    width: 26px;

    height: 26px;

  }


  &:hover {

    background: #ffdb53;

    color: #000000;

    transform:
      translateY(-50%)
      scale(1.08);

  }


  @media (max-width: 600px) {

    width: 44px;

    height: 44px;


    ${({ $direction }) =>
      $direction === "left"
        ? "left: 12px;"
        : "right: 12px;"
    }


    svg {

      width: 20px;

      height: 20px;

    }

  }

`;


/*
==========================================
CARDS DE ANOS
==========================================
*/

export const YearsWrapper = styled.div`

  width: 100%;

  margin: 40px auto 60px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 16px;

  box-sizing: border-box;


  @media (max-width: 700px) {

    gap: 8px;

    margin:
      30px auto
      45px;

  }


  @media (max-width: 480px) {

    gap: 6px;

    margin:
      25px auto
      38px;

  }

`;


/*
==========================================
CONTAINER DOS ANOS
==========================================
*/

export const YearsContainer = styled.div`

  width: auto;

  max-width: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 14px;

  min-width: 0;

  box-sizing: border-box;


  @media (max-width: 900px) {

    gap: 10px;

  }


  @media (max-width: 700px) {

    width: 100%;

    gap: 6px;

  }


  @media (max-width: 480px) {

    gap: 4px;

  }

`;


/*
==========================================
SETA DOS ANOS
==========================================
*/

export const YearArrow = styled.button`

  position: relative;

  width: 44px;

  height: 44px;

  flex-shrink: 0;

  padding: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border: none;

  border-radius: 12px;

  background: #831614;

  color: #ffffff;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transition:
    transform .25s
      cubic-bezier(.22, 1, .36, 1),
    box-shadow .25s ease,
    opacity .2s ease;


  &::before {

    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 18px;

    height: 18px;

    border-radius: 50%;

    background: #f9be06;

    transform:
      translate(-50%, -50%)
      scale(0);

    transition:
      transform .55s
        cubic-bezier(.16, 1, .3, 1);

    z-index: -1;

    pointer-events: none;

  }


  svg {

    position: relative;

    z-index: 2;

    width: 20px;

    height: 20px;

    stroke-width: 2.5;

  }


  &:hover:not(:disabled) {

    color: #111111;

    transform:
      translateY(-2px);

    box-shadow:
      0 8px 18px
        rgba(131, 22, 20, .2);


    &::before {

      transform:
        translate(-50%, -50%)
        scale(8);

    }

  }


  &:active:not(:disabled) {

    transform: scale(.94);

  }


  &:disabled {

    opacity: .25;

    cursor: not-allowed;

    box-shadow: none;

  }


  &:focus-visible {

    outline:
      2px solid #f9be06;

    outline-offset: 3px;

  }


  @media (max-width: 700px) {

    width: 34px;

    height: 42px;

    border-radius: 10px;


    svg {

      width: 17px;

      height: 17px;

    }

  }


  @media (max-width: 480px) {

    width: 30px;

    height: 38px;

    border-radius: 9px;


    svg {

      width: 16px;

      height: 16px;

    }

  }


  @media (max-width: 380px) {

    width: 27px;

    height: 36px;


    svg {

      width: 15px;

      height: 15px;

    }

  }

`;


/*
==========================================
YEAR CARD
==========================================
*/

export const YearCard = styled.button`

  position: relative;

  width: 230px;

  height: 155px;

  flex: 1 1 0;

  max-width: 230px;

  min-width: 0;

  padding: 20px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 12px;

  box-sizing: border-box;

  border:
    2px solid
      ${({ $active }) =>
        $active
          ? "#831614"
          : "#eeeeee"};

  border-radius: 22px;

  background:
    ${({ $active }) =>
      $active
        ? "#831614"
        : "#ffffff"};

  color:
    ${({ $active }) =>
      $active
        ? "#ffffff"
        : "#111111"};

  font-family: inherit;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transition:
    transform .3s
      cubic-bezier(.22, 1, .36, 1),
    border-color .25s ease,
    background .25s ease,
    box-shadow .3s ease;


  &::before {

    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);

    top: var(--mouse-y, 50%);

    width: 35px;

    height: 35px;

    border-radius: 50%;

    background: #ffdb53;

    transform:
      translate(-50%, -50%)
      scale(0);

    transition:
      transform .65s
        cubic-bezier(.16, 1, .3, 1);

    z-index: -1;

    pointer-events: none;

  }


  &:hover {

    transform:
      translateY(-8px);

    border-color: #831614;

    box-shadow:
      0 18px 35px
        rgba(131, 22, 20, .16);


    &::before {

      transform:
        translate(-50%, -50%)
        scale(11);

    }

  }


  &:active {

    transform:
      translateY(-3px)
      scale(.98);

  }


  &:focus-visible {

    outline:
      3px solid #f9be06;

    outline-offset: 4px;

  }


  @media (max-width: 900px) {

    width: 200px;

    height: 140px;

    padding: 17px;

  }


  /*
  ==========================================
  TABLET / MOBILE
  ==========================================
  */

  @media (max-width: 700px) {

    width: 100%;

    max-width: none;

    height: 115px;

    padding: 10px 6px;

    border-radius: 17px;

    gap: 7px;

  }


  @media (max-width: 480px) {

    height: 100px;

    padding: 8px 4px;

    border-radius: 15px;

    gap: 5px;

  }


  @media (max-width: 380px) {

    height: 90px;

    padding: 6px 3px;

    border-radius: 13px;

    gap: 4px;

  }

`;


/*
==========================================
YEAR ICON
==========================================
*/

export const YearIcon = styled.div`

  width: 48px;

  height: 48px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background:
    ${({ $active }) =>
      $active
        ? "#ffdb53"
        : "rgba(249, 190, 6, .22)"};

  color: #831614;

  font-size: 22px;

  transition:
    transform .3s ease,
    background .25s ease;


  ${YearCard}:hover & {

    transform:
      scale(1.12)
      rotate(2deg);

  }


  @media (max-width: 900px) {

    width: 43px;

    height: 43px;

    font-size: 20px;

  }


  @media (max-width: 700px) {

    width: 34px;

    height: 34px;

    font-size: 16px;

  }


  @media (max-width: 480px) {

    width: 30px;

    height: 30px;

    font-size: 14px;

  }


  @media (max-width: 380px) {

    width: 27px;

    height: 27px;

    font-size: 13px;

  }

`;


/*
==========================================
YEAR NUMBER
==========================================
*/

export const YearNumber = styled.strong`

  position: relative;

  z-index: 2;

  color:
    ${({ $active }) =>
      $active
        ? "#ffffff"
        : "#831614"};

  font-size: 2rem;

  font-weight: 850;

  line-height: 1;

  transition:
    color .25s ease,
    transform .3s ease;


  ${YearCard}:hover & {

    color: #111111;

    transform: scale(1.05);

  }


  @media (max-width: 900px) {

    font-size: 1.8rem;

  }


  @media (max-width: 700px) {

    font-size: 1.35rem;

  }


  @media (max-width: 480px) {

    font-size: 1.15rem;

  }


  @media (max-width: 380px) {

    font-size: 1rem;

  }

`;


/*
==========================================
YEAR DESCRIPTION
==========================================
*/

export const YearDescription = styled.span`

  position: relative;

  z-index: 2;

  color:
    ${({ $active }) =>
      $active
        ? "rgba(255, 255, 255, .72)"
        : "#999999"};

  font-size: 10px;

  font-weight: 500;

  line-height: 1.2;

  text-align: center;

  white-space: nowrap;

  transition:
    color .25s ease;


  ${YearCard}:hover & {

    color: #5e4900;

  }


  @media (max-width: 700px) {

    font-size: 8px;

  }


  @media (max-width: 480px) {

    font-size: 7px;

  }


  @media (max-width: 380px) {

    font-size: 6.5px;

  }

`;
