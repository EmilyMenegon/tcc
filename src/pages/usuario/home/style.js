import styled, { keyframes } from "styled-components";


/* ==========================================
   ANIMAÇÃO
========================================== */

const floating = keyframes`

  0% {

    transform:
      translate(
        0,
        0
      );

  }


  50% {

    transform:
      translate(
        10%,
        -18%
      );

  }


  100% {

    transform:
      translate(
        0,
        0
      );

  }

`;


/* ==========================================
   PAGE
========================================== */

export const Page = styled.div`

  width: 100%;

  min-height: 100vh;

  background: #ffffff;

  font-family: "Poppins", sans-serif;

  display: flex;

  flex-direction: column;

  overflow-x: hidden;

`;


/* ==========================================
   TITLE
========================================== */

export const TitleArea = styled.div`

  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

`;


export const Title = styled.h1`

  width: 90%;

  margin-top: 5%;

  margin-bottom: 2%;

  text-align: center;

  font-size:
    clamp(
      1.5rem,
      3vw,
      2.5rem
    );


  @media (max-width: 600px) {

    width: 90%;

    margin-top: 8%;

    margin-bottom: 4%;

    font-size:
      clamp(
        1.4rem,
        7vw,
        2rem
      );

  }

`;


/* ==========================================
   CONTAINER
========================================== */

export const Container = styled.div`

  width: 90%;

  min-height: 70vh;

  margin: 2% auto 0;

  display: flex;

  border-radius: 20px;

  overflow: visible;


  @media (max-width: 900px) {

    width: 92%;

    min-height: auto;

  }


  @media (max-width: 600px) {

    width: 90%;

    margin-top: 3%;

  }


  @media (max-width: 400px) {

    width: 94%;

  }

`;


/* ==========================================
   RIGHT SIDE
========================================== */

export const RightSide = styled.div`

  width: 100%;

  padding: 4%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 5%;

  box-sizing: border-box;


  @media (max-width: 900px) {

    padding: 5% 3%;

    gap: 4%;

  }


  @media (max-width: 600px) {

    flex-direction: column;

    padding: 10% 6%;

    gap: 0;

  }

`;


/* ==========================================
   ÁREA DO TEXTO
========================================== */

export const RightContent = styled.div`

  width: 52%;

  display: flex;

  flex-direction: column;

  box-sizing: border-box;


  @media (max-width: 900px) {

    width: 55%;

  }


  @media (max-width: 600px) {

    width: 100%;

    align-items: center;

    text-align: center;

  }

`;


/* ==========================================
   TEXTO GRANDE
========================================== */

export const BigText = styled.h2`

  width: 100%;

  margin: 0;

  margin-bottom: 4%;

  color: #000000;

  font-size:
    clamp(
      1.8rem,
      4vw,
      3rem
    );

  line-height: 1.15;


  @media (max-width: 900px) {

    margin-bottom: 5%;

    font-size:
      clamp(
        1.6rem,
        4.5vw,
        2.4rem
      );

  }


  @media (max-width: 600px) {

    width: 100%;

    margin-bottom: 6%;

    font-size:
      clamp(
        1.6rem,
        8vw,
        2.3rem
      );

    line-height: 1.2;

  }


  @media (max-width: 400px) {

    margin-bottom: 7%;

    font-size: 8vw;

  }

`;


/* ==========================================
   TEXTO MENOR
========================================== */

export const SmallText = styled.p`

  width: 100%;

  margin: 0;

  margin-bottom: 4%;

  color: #000000;

  font-size:
    clamp(
      0.9rem,
      1.5vw,
      1.2rem
    );

  line-height: 1.5;


  a {

    color: #f9be06;

    margin-left: 1%;

    text-decoration: none;

    font-weight: 600;

    transition: 0.2s;

  }


  a:hover {

    text-decoration: underline;

  }


  @media (max-width: 900px) {

    margin-bottom: 5%;

    font-size:
      clamp(
        0.85rem,
        1.8vw,
        1rem
      );

  }


  @media (max-width: 600px) {

    width: 100%;

    margin-bottom: 6%;

    font-size:
      clamp(
        0.85rem,
        4vw,
        1rem
      );

  }


  @media (max-width: 400px) {

    margin-bottom: 7%;

    font-size: 3.8vw;

  }

`;


/* ==========================================
   ÁREA DO BOTÃO
========================================== */

export const BottomArea = styled.div`

  width: 100%;

  margin: 0;


  a {

    text-decoration: none;

    display: inline-block;

  }


  @media (max-width: 600px) {

    width: 100%;

    display: flex;

    justify-content: center;

    margin-top: 5%;

  }

`;


/* ==========================================
   BOTÃO
========================================== */

export const ArrowButton = styled.button`

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 18px;

  min-width: 220px;

  min-height: 52px;

  padding: 14px 22px;

  border: none;

  border-radius: 10px;

  background: #f9be06;

  color: #000000;

  font-size: 16px;

  font-weight: bold;

  cursor: pointer;

  white-space: nowrap;

  transition: 0.2s;

  box-sizing: border-box;


  svg {

    width: 18px;

    height: 18px;

    flex-shrink: 0;

    transition: 0.25s;

  }


  &:hover {

    background: #000000;

    color: #f9be06;

    transform: translateY(-2px);

  }


  &:hover svg {

    transform: translateX(5px);

  }


  &:active {

    transform: translateY(1px);

  }


  @media (max-width: 600px) {

    width: 100%;

    max-width: 280px;

    min-width: 0;

    min-height: 50px;

    padding: 13px 18px;

    font-size: 14px;

    gap: 14px;


    svg {

      width: 17px;

      height: 17px;

    }

  }


  @media (max-width: 400px) {

    max-width: 250px;

    padding: 12px 16px;

    font-size: 13px;

    gap: 12px;

  }

`;


/* ==========================================
   IMAGEM
========================================== */

export const ImageBox = styled.div`

  width: 43%;

  display: flex;

  align-items: center;

  justify-content: center;

  position: relative;

  overflow: visible;


  @media (max-width: 900px) {

    width: 40%;

  }


  @media (max-width: 600px) {

    display: none;

  }

`;


/* ==========================================
   IMAGE
========================================== */

export const Image = styled.img`

  width: 100%;

  height: auto;

  display: block;

  object-fit: contain;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   CÍRCULOS
========================================== */

export const Circle = styled.span`

  position: absolute;


  width:
    ${({ $size }) =>
      $size || "5%"};


  height:
    ${({ $size }) =>
      $size || "5%"};


  aspect-ratio: 1 / 1;

  border-radius: 50%;

  background: #f9be06;


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


  animation:
    ${floating}
    ${({ $duration }) =>
      $duration || "5s"}
    ease-in-out
    infinite;


  animation-delay:
    ${({ $delay }) =>
      $delay || "0s"};


  opacity: 0.9;

  filter: blur(0.5px);


  box-shadow:
    0 0 20px
    rgba(
      249,
      190,
      6,
      0.45
    );


  z-index: 1;

  pointer-events: none;

  will-change: transform;

`;