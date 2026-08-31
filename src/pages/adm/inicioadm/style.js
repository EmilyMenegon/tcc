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
    transform: translate(10px, -15px);
  }

  100% {
    transform: translate(0, 0);
  }
`;

const pixelOneFloat = keyframes`
  0% {
    transform: translate(0, 0) rotate(-4deg);
  }

  50% {
    transform: translate(-8px, -12px) rotate(4deg);
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
    transform: translate(8px, -10px) rotate(-4deg);
  }

  100% {
    transform: translate(0, 0) rotate(3deg);
  }
`;

/* ============================================================
   PAGE
============================================================ */

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  background: #fff;
  color: #111;

  font-family: "Poppins", sans-serif;

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
   MAIN
============================================================ */

export const Main = styled.main`
  width: 100%;

  min-height: calc(100vh - 80px);

  position: relative;

  padding: 55px 0 70px;

  overflow: hidden;

  background: #fff;
`;

/* ============================================================
   HEADER
============================================================ */

export const Header = styled.header`
  width: 85%;

  max-width: 1200px;

  margin: 0 auto 45px;

  position: relative;

  z-index: 3;

  animation: ${fadeUp} .8s ease both;

  @media (max-width: 768px) {
    width: 90%;

    text-align: center;

    margin-bottom: 35px;
  }
`;

/* ============================================================
   BADGE
============================================================ */

export const Badge = styled.div`
  width: fit-content;

  margin-bottom: 20px;

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
    0 8px 20px rgba(0, 0, 0, .12);

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;

    font-size: .68rem;
  }
`;

/* ============================================================
   BADGE DOT
============================================================ */

export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background: #ffdb53;

  animation:
    pulse
    1.8s
    ease
    infinite;
`;

/* ============================================================
   TITLE
============================================================ */

export const Title = styled.h1`
  margin: 0 0 18px;

  color: #111;

  font-size:
    clamp(
      2.6rem,
      5vw,
      4.8rem
    );

  line-height: 1.05;

  font-weight: 900;

  letter-spacing: -2px;

  @media (max-width: 768px) {
    font-size:
      clamp(
        2.4rem,
        9vw,
        4rem
      );

    letter-spacing: -1.5px;
  }
`;

/* ============================================================
   HIGHLIGHT
============================================================ */

export const Highlight = styled.span`
  color: #ffdb53;
`;

/* ============================================================
   DESCRIPTION
============================================================ */

export const Description = styled.p`
  width: 100%;

  max-width: 700px;

  margin: 0;

  color: #555;

  font-size:
    clamp(
      .95rem,
      1.2vw,
      1.08rem
    );

  line-height: 1.7;

  strong {
    color: #111;

    font-weight: 800;
  }

  @media (max-width: 768px) {
    margin: 0 auto;

    font-size: .95rem;
  }
`;

/* ============================================================
   GRID
============================================================ */

export const CardsGrid = styled.section`
  width: 85%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(
      2,
      minmax(0, 1fr)
    );

  /*
    TODOS OS CARDS DA GRID
    POSSUEM EXATAMENTE A MESMA ALTURA
  */
  grid-auto-rows: 290px;

  gap: 20px;

  position: relative;

  z-index: 3;

  align-items: stretch;

  @media (max-width: 700px) {
    width: 90%;

    grid-template-columns: 1fr;

    grid-auto-rows: 290px;

    gap: 16px;
  }
`;

/* ============================================================
   LINKS DOS CARDS
============================================================ */

export const CardLink = styled.div`
  width: 100%;

  height: 290px;

  min-height: 290px;

  display: block;

  text-decoration: none;

  @media (max-width: 700px) {
    height: 290px;

    min-height: 290px;
  }
`;

/* ============================================================
   CARD
============================================================ */

export const Card = styled.div`
  width: 100%;

  /*
    ALTURA ÚNICA PARA TODOS
  */
  height: 290px;

  min-height: 290px;

  max-height: 290px;

  padding: 27px;

  display: flex;

  flex-direction: column;

  position: relative;

  overflow: hidden;

  border:
    1.5px solid
    ${({ $featured }) =>
      $featured
        ? "#ffdb53"
        : "#e5e5e5"};

  border-radius: 18px;

  background:
    ${({ $featured }) =>
      $featured
        ? "#fff9e5"
        : "#fff"};

  box-shadow:
    0 8px 25px
    rgba(0, 0, 0, .05);

  cursor: pointer;

  animation:
    ${fadeUp}
    .7s
    ease
    both;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    border-color .25s ease,
    background .25s ease;

  /*
    DECORAÇÃO
  */

  &::after {
    content: "";

    position: absolute;

    width: 100px;
    height: 100px;

    right: -35px;
    top: -35px;

    border-radius: 50%;

    background:
      ${({ $featured }) =>
        $featured
          ? "#ffdb53"
          : "#f5f5f5"};

    opacity: .65;

    transition:
      transform .3s ease;

    pointer-events: none;
  }

  &:hover {
    transform:
      translateY(-7px);

    border-color:
      #111;

    box-shadow:
      0 18px 40px
      rgba(0, 0, 0, .10);
  }

  &:hover::after {
    transform:
      scale(1.35);
  }

  @media (max-width: 700px) {
    height: 290px;

    min-height: 290px;

    max-height: 290px;

    padding: 23px;
  }
`;

/* ============================================================
   ÍCONE
   MANTIDO IGUAL
============================================================ */

export const CardIcon = styled.div`
  width: 52px;

  height: 52px;

  display: flex;

  align-items: center;

  justify-content: center;

  position: relative;

  z-index: 2;

  border-radius: 13px;

  background:
    ${({ $featured }) =>
      $featured
        ? "#111"
        : "#ffdb53"};

  color:
    ${({ $featured }) =>
      $featured
        ? "#ffdb53"
        : "#111"};

  font-size: 1.25rem;

  transition:
    transform .25s ease,
    background .25s ease,
    color .25s ease;

  ${Card}:hover & {
    transform:
      rotate(-5deg)
      scale(1.05);

    background: #111;

    color: #ffdb53;
  }
`;

/* ============================================================
   CARD CONTENT
============================================================ */

export const CardContent = styled.div`
  position: relative;

  z-index: 2;

  margin-top: 20px;

  flex: 1;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;

  min-height: 0;
`;

/* ============================================================
   CARD TITLE
============================================================ */

export const CardTitle = styled.h2`
  margin: 0 0 8px;

  color: #111;

  font-size: 1.35rem;

  line-height: 1.2;

  font-weight: 900;

  letter-spacing: -.5px;
`;

/* ============================================================
   CARD DESCRIPTION
============================================================ */

export const CardDescription = styled.p`
  max-width: 470px;

  margin: 0;

  color: #666;

  font-size: .88rem;

  line-height: 1.6;

  font-weight: 500;
`;

/* ============================================================
   CARD ACTION
============================================================ */

export const CardAction = styled.div`
  width: fit-content;

  min-height: 24px;

  margin-top: auto;

  display: flex;

  align-items: center;

  gap: 9px;

  position: relative;

  z-index: 2;

  color:
    ${({ $featured }) =>
      $featured
        ? "#111"
        : "#555"};

  font-size: .82rem;

  font-weight: 800;

  transition:
    color .25s ease;

  svg {
    color: #ffdb53;

    transition:
      transform .25s ease;
  }

  ${Card}:hover & {
    color: #111;
  }

  ${Card}:hover & svg {
    transform:
      translateX(5px);
  }
`;

/* ============================================================
   BOTÕES DO REGULAMENTO
   MESMA ANIMAÇÃO LÍQUIDA DA PÁGINA INICIAL
============================================================ */

export const RegulationButton = styled.button`
  position: relative;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  padding: 10px 14px;

  border: none;

  border-radius: 10px;

  background:
    ${({ $variant }) =>
      $variant === "yellow"
        ? "#f9be06"
        : "#111"};

  color:
    ${({ $variant }) =>
      $variant === "yellow"
        ? "#111"
        : "#fff"};

  font-family:
    "Poppins",
    sans-serif;

  font-size: 13px;

  font-weight:
    ${({ $variant }) =>
      $variant === "yellow"
        ? 800
        : 700};

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transform: translateZ(0);

  transition:
    color 0.3s ease,
    transform 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);

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
      transform 0.65s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );
  }

  .button-content {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    color: inherit;

    transition:
      color 0.3s ease;
  }

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

  svg {
    flex-shrink: 0;

    transition:
      transform 0.3s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );
  }

  &:hover svg {
    transform:
      translateX(6px);
  }

  &:active {
    transform:
      translateY(0)
      scale(0.98);
  }
`;

/* ============================================================
   CÍRCULOS DECORATIVOS
============================================================ */

export const DecorativeCircle = styled.span`
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

  z-index: 1;

  pointer-events: none;

  animation:
    ${floating}
    ${({ $duration }) =>
      $duration || "5s"}
    ease-in-out
    infinite;

  animation-delay:
    ${({ $delay }) =>
      $delay || "0s"};

  @media (max-width: 768px) {
    display: none;
  }
`;

/* ============================================================
   PIXELS
============================================================ */

export const Pixel = styled.img`
  position: absolute;

  width:
    ${({ $size }) =>
      $size || "55px"};

  height: auto;

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

  z-index: 2;

  pointer-events: none;

  user-select: none;

  object-fit: contain;

  animation:
    ${({ $animation }) =>
      $animation === "two"
        ? pixelTwoFloat
        : pixelOneFloat}
    4.8s
    ease-in-out
    infinite;

  @media (max-width: 768px) {
    display: none;
  }
`;
