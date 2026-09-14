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
   NÃO ALTERADO
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


export const Title = styled.h1`

  margin: 0;

  color: #831614;

  font-size:
    clamp(
      2.6rem,
      5vw,
      4.8rem
    );

  font-weight: 900;

  line-height: 1.05;

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


export const Subtitle = styled.p`

  margin: 10px 0 0;

  color: #777777;

  font-size:
    clamp(
      .95rem,
      1.2vw,
      1.08rem
    );

  line-height: 1.7;

  max-width: 700px;


  @media (max-width: 768px) {

    width: 90%;

    max-width: 90%;

    font-size: .95rem;

  }

`;


/* ==========================================
   CARDS
========================================== */

export const Cards = styled.section`

  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(
        310px,
        1fr
      )
    );

  gap: 26px;

  align-items: stretch;


  @media (max-width: 1100px) {

    grid-template-columns:
      repeat(
        2,
        minmax(
          0,
          1fr
        )
      );

  }


  @media (max-width: 700px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/* ==========================================
   CARD COLORIDO
========================================== */

export const PostIt = styled.article`

  --card-color:
    ${({ $color }) =>
      $color || "#ffdb53"};

  position: relative;

  min-width: 0;

  min-height: 300px;

  padding:
    30px
    28px
    22px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  cursor: pointer;

  border-radius: 20px;

  background:
    var(--card-color);

  color: #222222;

  box-shadow:
    0
    12px
    30px
    rgba(
      0,
      0,
      0,
      .12
    );

  transition:
    transform .3s
    cubic-bezier(
      .16,
      1,
      .3,
      1
    ),
    box-shadow .3s ease;


  /* ======================================
     BRILHO DECORATIVO
  ====================================== */

  &::before {

    content: "";

    position: absolute;

    width: 220px;

    height: 220px;

    top: -110px;

    right: -90px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        .20
      );

    pointer-events: none;

  }


  /* ======================================
     SEGUNDO BRILHO
  ====================================== */

  &::after {

    content: "";

    position: absolute;

    width: 140px;

    height: 140px;

    bottom: -80px;

    left: -60px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        .12
      );

    pointer-events: none;

  }


  /* ======================================
     HOVER
  ====================================== */

  &:hover {

    transform:
      translateY(-9px)
      scale(1.015);

    box-shadow:
      0
      22px
      45px
      rgba(
        0,
        0,
        0,
        .18
      );

  }


  &:focus-visible {

    outline:
      3px solid
      #000000;

    outline-offset: 4px;

  }


  @media (max-width: 600px) {

    min-height: 280px;

    padding:
      26px
      22px
      20px;

  }

`;


/* ==========================================
   BADGE
========================================== */

export const PostItBadge = styled.span`

  position: relative;

  z-index: 2;

  width: fit-content;

  margin-bottom: 18px;

  padding:
    7px
    13px;

  border-radius: 50px;

  background:
    rgba(
      255,
      255,
      255,
      .75
    );

  color:
    #831614;

  font-size: 10px;

  font-weight: 900;

  letter-spacing:
    1px;

  line-height: 1;

`;


/* ==========================================
   TÍTULO
========================================== */

export const PostItTitle = styled.h2`

  position: relative;

  z-index: 2;

  margin:
    0
    0
    14px;

  color:
    #171717;

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    clamp(
      1.25rem,
      2vw,
      1.5rem
    );

  font-weight: 900;

  line-height: 1.25;

  letter-spacing:
    -.4px;

  word-break: break-word;

`;


/* ==========================================
   MENSAGEM
========================================== */

export const PostItMessage = styled.p`

  position: relative;

  z-index: 2;

  margin: 0;

  color:
    rgba(
      20,
      20,
      20,
      .72
    );

  font-family:
    "Poppins",
    sans-serif;

  font-size: 15px;

  line-height: 1.7;

  word-break: break-word;

  white-space: pre-wrap;

  display:
    -webkit-box;

  -webkit-line-clamp: 5;

  -webkit-box-orient: vertical;

  overflow: hidden;

`;


/* ==========================================
   FOOTER
========================================== */

export const PostItFooter = styled.div`

  position: relative;

  z-index: 2;

  margin-top: auto;

  padding-top: 25px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 15px;

  border-top:
    1px solid
    rgba(
      0,
      0,
      0,
      .15
    );

`;


/* ==========================================
   LER MAIS
========================================== */

export const ReadMore = styled.span`

  color:
    #831614;

  font-size: 12px;

  font-weight: 800;

  letter-spacing:
    .2px;

`;


/* ==========================================
   SETA
========================================== */

export const ReadMoreIcon = styled.span`

  width: 34px;

  height: 34px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      .75
    );

  color:
    #831614;

  font-size: 16px;

  transition:
    transform .3s
    cubic-bezier(
      .16,
      1,
      .3,
      1
    );


  ${PostIt}:hover & {

    transform:
      translateX(5px);

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

  border-radius: 20px;

  background: #fafafa;

`;


export const EmptyIcon = styled.div`

  width: 70px;

  height: 70px;

  margin-bottom: 18px;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 18px;

  background:
    #fff4c4;

  color:
    #d69e00;

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


/* ==========================================
   MODAL OVERLAY
========================================== */

export const ModalOverlay = styled.div`

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
      .72
    );

  backdrop-filter:
    blur(8px);

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
   MODAL COLORIDO
========================================== */

export const FullPostIt = styled.div`

  --modal-color:
    ${({ $color }) =>
      $color || "#ffdb53"};

  position: relative;

  width:
    min(
      850px,
      100%
    );

  max-height:
    calc(
      100vh - 60px
    );

  box-sizing: border-box;

  overflow-y: auto;

  border-radius: 25px;

  background:
    var(--modal-color);

  box-shadow:
    0
    30px
    80px
    rgba(
      0,
      0,
      0,
      .35
    );

  animation:
    postOpen .3s
    cubic-bezier(
      .16,
      1,
      .3,
      1
    );


  @keyframes postOpen {

    from {

      opacity: 0;

      transform:
        translateY(25px)
        scale(.94);

    }

    to {

      opacity: 1;

      transform:
        translateY(0)
        scale(1);

    }

  }


  @media (max-width: 600px) {

    width: 100%;

    max-height:
      calc(
        100vh - 24px
      );

    border-radius: 20px;

  }

`;


/* ==========================================
   TOPO MODAL
========================================== */

export const FullPostItTop = styled.div`

  min-height: 120px;

  padding:
    30px
    40px;

  display: flex;

  align-items: center;


  @media (max-width: 600px) {

    min-height: 100px;

    padding:
      25px;

  }

`;


/* ==========================================
   BADGE MODAL
========================================== */

export const FullPostItBadge = styled.span`

  padding:
    8px
    14px;

  border-radius: 50px;

  background:
    rgba(
      255,
      255,
      255,
      .75
    );

  color:
    #831614;

  font-size: 11px;

  font-weight: 900;

  letter-spacing:
    1px;

`;


/* ==========================================
   BOTÃO FECHAR
========================================== */

export const CloseButton = styled.button`

  position: absolute;

  top: 22px;

  right: 22px;

  width: 44px;

  height: 44px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      .8
    );

  color:
    #222222;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  z-index: 10;

  transition:
    transform .25s ease,
    color .25s ease;


  &::before {

    content: "";

    position: absolute;

    left:
      var(
        --mouse-x,
        50%
      );

    top:
      var(
        --mouse-y,
        50%
      );

    width: 30px;

    height: 30px;

    border-radius: 50%;

    background:
      #831614;

    transform:
      translate(
        -50%,
        -50%
      )
      scale(0);

    transition:
      transform .5s
      cubic-bezier(
        .16,
        1,
        .3,
        1
      );

    z-index: 0;

  }


  .buttonContent {

    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

  }


  svg {

    width: 21px;

    height: 21px;

  }


  &:hover {

    color: #ffffff;

    transform:
      rotate(90deg);

  }


  &:hover::before {

    transform:
      translate(
        -50%,
        -50%
      )
      scale(18);

  }


  &:focus {

    outline: none;

  }


  &:focus-visible {

    outline:
      3px solid
      #831614;

    outline-offset: 3px;

  }


  @media (max-width: 600px) {

    top: 15px;

    right: 15px;

    width: 38px;

    height: 38px;

  }

`;


/* ==========================================
   CONTEÚDO MODAL
========================================== */

export const FullPostItContent = styled.div`

  width:
    min(
      700px,
      100%
    );

  margin: 0 auto;

  padding:
    25px
    55px
    50px;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;


  @media (max-width: 600px) {

    padding:
      20px
      25px
      35px;

  }

`;


/* ==========================================
   TÍTULO MODAL
========================================== */

export const FullPostItTitle = styled.h2`

  margin:
    0
    0
    25px;

  color:
    #171717;

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    clamp(
      2rem,
      5vw,
      3.4rem
    );

  line-height: 1.1;

  font-weight: 900;

  letter-spacing:
    -1.5px;

  word-break: break-word;

`;


/* ==========================================
   MENSAGEM MODAL
========================================== */

export const FullPostItMessage = styled.p`

  margin: 0;

  color:
    rgba(
      20,
      20,
      20,
      .78
    );

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    clamp(
      1rem,
      2vw,
      1.25rem
    );

  line-height: 1.85;

  white-space: pre-wrap;

  word-break: break-word;

`;