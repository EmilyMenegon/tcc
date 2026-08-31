import styled, { keyframes } from "styled-components";


/* ============================================================
   ANIMAÇÕES
============================================================ */

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;


const floating = keyframes`
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(12px, -18px);
  }

  100% {
    transform: translate(0, 0);
  }
`;


const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: .9;
  }

  50% {
    transform: scale(1.12);
    opacity: .6;
  }

  100% {
    transform: scale(1);
    opacity: .9;
  }
`;


const pixelOneFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(-4deg);
  }

  50% {
    transform: translate(-8px, -14px) rotate(4deg);
  }

  100% {
    transform: translate(0, 0) rotate(-4deg);
  }
`;


const pixelTwoFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(3deg);
  }

  50% {
    transform: translate(10px, -12px) rotate(-5deg);
  }

  100% {
    transform: translate(0, 0) rotate(3deg);
  }
`;


const pixelThreeFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(-3deg);
  }

  50% {
    transform: translate(9px, 13px) rotate(5deg);
  }

  100% {
    transform: translate(0, 0) rotate(-3deg);
  }
`;


/* ============================================================
   PAGE
============================================================ */

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  background: #fff;

  font-family: "Poppins", sans-serif;

  color: #111;

  overflow-x: hidden;

  margin: 0;
  padding: 0;

  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;


/* ============================================================
   HERO
============================================================ */

export const Hero = styled.main`
  width: 100%;

  min-height:
    calc(100vh - 80px);

  position: relative;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  background: #fff;
`;


export const HeroContent = styled.div`
  width: 85%;

  max-width: 1400px;

  flex: 1;

  margin: 0 auto;

  padding: 40px 0 55px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 70px;

  position: relative;

  z-index: 3;


  @media (max-width: 1100px) {
    width: 88%;
    gap: 40px;
  }


  @media (max-width: 768px) {
    width: 90%;

    padding:
      45px 0 40px;

    flex-direction: column;

    justify-content: center;

    text-align: center;

    gap: 30px;
  }
`;


/* ============================================================
   LEFT CONTENT
============================================================ */

export const LeftContent = styled.div`
  width: 52%;

  max-width: 680px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  animation:
    ${fadeUp} .8s ease both;


  @media (max-width: 900px) {
    width: 55%;
  }


  @media (max-width: 768px) {
    width: 100%;

    max-width: 650px;

    align-items: center;
  }
`;


/* ============================================================
   BADGE
============================================================ */

export const EventBadge = styled.div`
  width: fit-content;

  margin-bottom: 22px;

  padding: 9px 15px;

  display: flex;

  align-items: center;

  gap: 9px;

  border-radius: 30px;

  background: #111;

  color: #fff;

  font-size: .72rem;

  font-weight: 800;

  letter-spacing: 1.2px;

  box-shadow:
    0 8px 20px
    rgba(0, 0, 0, .12);

  animation:
    ${fadeUp} .7s ease both;


  @media (max-width: 768px) {
    font-size: .68rem;
  }
`;


export const BadgeDot = styled.span`
  width: 8px;

  height: 8px;

  border-radius: 50%;

  background: #ffdb53;

  animation:
    ${pulse} 1.8s ease infinite;
`;


/* ============================================================
   TEXTOS
============================================================ */

export const BigText = styled.h1`
  margin: 0 0 25px;

  color: #111;

  font-size:
    clamp(
      2.8rem,
      5vw,
      5rem
    );

  line-height: 1.04;

  font-weight: 900;

  letter-spacing: -2px;

  animation:
    ${fadeUp}
    .85s ease .1s both;


  @media (max-width: 1100px) {
    font-size:
      clamp(
        2.5rem,
        5vw,
        4rem
      );
  }


  @media (max-width: 768px) {
    font-size:
      clamp(
        2.4rem,
        9vw,
        4rem
      );

    letter-spacing: -1.5px;
  }


  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;


export const Highlight = styled.span`
  color: #ffdb53;
`;


export const Description = styled.p`
  width: 90%;

  margin: 0 0 30px;

  color: #444;

  font-size:
    clamp(
      1rem,
      1.25vw,
      1.18rem
    );

  line-height: 1.7;

  animation:
    ${fadeUp}
    .85s ease .2s both;


  strong {
    color: #111;

    font-weight: 800;
  }


  @media (max-width: 768px) {
    width: 100%;

    max-width: 550px;
  }
`;


/* ============================================================
   AÇÕES
============================================================ */

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 13px;

  animation:
    ${fadeUp}
    .85s ease .3s both;


  a {
    text-decoration: none;
  }


  @media (max-width: 600px) {
    flex-direction: column;

    width: 100%;
  }
`;


/* ============================================================
   PRIMARY LINK
   ANIMAÇÃO IGUAL À TELA INICIAL
============================================================ */

export const PrimaryLink = styled.button`
  position: relative;

  min-height: 56px;

  padding: 16px 24px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 14px;

  border: none;

  border-radius: 12px;

  background: #ffdb53;

  color: #000;

  font-family:
    "Poppins",
    sans-serif;

  font-size: .95rem;

  font-weight: 800;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transform: translateZ(0);

  transition:
    color .3s ease,
    transform .25s ease;


  /* ==========================================================
     EFEITO LÍQUIDO
  ========================================================== */

  &::before {
    content: "";

    position: absolute;

    left:
      var(--mouse-x, 50%);

    top:
      var(--mouse-y, 50%);

    width: 40px;

    height: 40px;

    border-radius: 50%;

    background: #831614;

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform .65s
      cubic-bezier(
        .16,
        1,
        .3,
        1
      );
  }


  /* ==========================================================
     CONTEÚDO
  ========================================================== */

  span {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 14px;

    color: inherit;

    transition:
      color .3s ease;
  }


  /* ==========================================================
     HOVER
  ========================================================== */

  &:hover {
    color: #fff;

    transform:
      translateY(-3px);
  }


  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(18);
  }


  /* ==========================================================
     SETA
  ========================================================== */

  svg {
    flex-shrink: 0;

    transition:
      transform .3s
      cubic-bezier(
        .16,
        1,
        .3,
        1
      );
  }


  &:hover svg {
    transform:
      translateX(6px);
  }


  /* ==========================================================
     ACTIVE
  ========================================================== */

  &:active {
    transform:
      translateY(0)
      scale(.98);
  }


  /* ==========================================================
     RESPONSIVO
  ========================================================== */

  @media (max-width: 600px) {
    width: 100%;

    min-width: 250px;
  }
`;


/* ============================================================
   SECONDARY LINK
============================================================ */

export const SecondaryLink = styled.div`
  min-height: 56px;

  padding: 16px 20px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  border:
    1.5px solid #ddd;

  border-radius: 12px;

  background: #fff;

  color: #111;

  font-family:
    "Poppins",
    sans-serif;

  font-size: .9rem;

  font-weight: 700;

  transition:
    border-color .25s ease,
    background .25s ease,
    transform .25s ease;


  svg {
    color: #ffdb53;

    transition:
      transform .25s ease;
  }


  &:hover {
    border-color: #111;

    background: #f7f7f7;

    transform:
      translateY(-3px);
  }


  &:hover svg {
    transform:
      translateY(-2px);
  }


  @media (max-width: 600px) {
    width: 100%;

    min-width: 250px;
  }
`;


/* ============================================================
   IMAGEM
============================================================ */

export const ImageBox = styled.div`
  width: 46%;

  max-width: 600px;

  min-height: 560px;

  display: flex;

  align-items: center;

  justify-content: center;

  position: relative;

  animation:
    ${fadeUp}
    .9s ease .15s both;


  @media (max-width: 1100px) {
    width: 43%;
    min-height: 500px;
  }


  @media (max-width: 900px) {
    width: 40%;
    min-height: 450px;
  }


  @media (max-width: 768px) {
    width: 75%;

    min-height: 400px;

    max-width: 500px;
  }


  @media (max-width: 500px) {
    width: 90%;

    min-height: 330px;
  }
`;


export const Image = styled.img`
  width: 100%;

  max-width: 650px;

  height: auto;

  display: block;

  object-fit: contain;

  position: relative;

  z-index: 2;

  filter: none;

  box-shadow: none;
`;


/* ============================================================
   PIXELS DECORATIVOS
============================================================ */

export const PixelOne = styled.img`
  position: absolute;

  width: 75px;

  height: auto;

  top: 27%;

  left: -9%;

  z-index: 7;

  display: block;

  object-fit: contain;

  pointer-events: none;

  user-select: none;

  animation:
    ${pixelOneFloat}
    4.5s ease-in-out infinite;

  will-change: transform;


  @media (max-width: 1100px) {
    width: 65px;
    left: -8%;
  }


  @media (max-width: 900px) {
    width: 58px;
    left: -8%;
  }


  @media (max-width: 768px) {
    width: 52px;
    top: 22%;
    left: -6%;
  }


  @media (max-width: 500px) {
    width: 44px;
    left: -3%;
  }
`;


export const PixelTwo = styled.img`
  position: absolute;

  width: 68px;

  height: auto;

  top: 7%;

  right: -6%;

  z-index: 7;

  display: block;

  object-fit: contain;

  pointer-events: none;

  user-select: none;

  animation:
    ${pixelTwoFloat}
    5s ease-in-out infinite;

  animation-delay: .7s;

  will-change: transform;


  @media (max-width: 1100px) {
    width: 60px;
    right: -5%;
  }


  @media (max-width: 900px) {
    width: 53px;
    right: -6%;
  }


  @media (max-width: 768px) {
    width: 48px;
    top: 5%;
    right: -4%;
  }


  @media (max-width: 500px) {
    width: 40px;
    right: -2%;
  }
`;


export const PixelThree = styled.img`
  position: absolute;

  width: 78px;

  height: auto;

  bottom: 10%;

  right: -8%;

  z-index: 7;

  display: block;

  object-fit: contain;

  pointer-events: none;

  user-select: none;

  animation:
    ${pixelThreeFloat}
    4.8s ease-in-out infinite;

  animation-delay: 1.2s;

  will-change: transform;


  @media (max-width: 1100px) {
    width: 68px;
    right: -7%;
  }


  @media (max-width: 900px) {
    width: 60px;
    right: -7%;
  }


  @media (max-width: 768px) {
    width: 55px;
    bottom: 7%;
    right: -5%;
  }


  @media (max-width: 500px) {
    width: 46px;
    right: -3%;
  }
`;


/* ============================================================
   CÍRCULOS
============================================================ */

export const Circle = styled.span`
  position: absolute;

  width:
    ${({ $size }) =>
      $size || "50px"};

  height:
    ${({ $size }) =>
      $size || "50px"};

  top:
    ${({ $top }) =>
      $top || "auto"};

  left:
    ${({ $left }) =>
      $left || "auto"};

  right:
    ${({ $right }) =>
      $right || "auto"};

  bottom:
    ${({ $bottom }) =>
      $bottom || "auto"};

  border-radius: 50%;

  background: #ffdb53;

  opacity: .9;

  box-shadow: none;

  filter: none;

  z-index: 1;

  pointer-events: none;

  animation:
    ${floating}
    ${({ $duration }) =>
      $duration || "5s"}
    ease-in-out infinite;

  animation-delay:
    ${({ $delay }) =>
      $delay || "0s"};

  will-change: transform;


  @media (max-width: 768px) {
    display: none;
  }
`;
