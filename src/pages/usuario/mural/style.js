import styled from "styled-components";


// =====================================================
// PAGE
// =====================================================

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


// =====================================================
// CONTENT
// =====================================================

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


// =====================================================
// HEADER
// =====================================================

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


// =====================================================
// TITLE
// =====================================================

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


// =====================================================
// SUBTITLE
// =====================================================

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


// =====================================================
// CARDS
// =====================================================

export const Cards = styled.section`
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

  gap: 26px;

  align-items: stretch;


  @media (max-width: 1000px) {

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap: 22px;

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

    gap: 18px;

  }
`;


// =====================================================
// CARD
// IGUAL AO ADM
// =====================================================

export const PostIt = styled.article`
  position: relative;

  width: 100%;

  min-width: 0;

  min-height: 220px;

  padding:
    28px 25px
    22px;

  box-sizing: border-box;

  background:
    ${({ $color }) =>
      $color || "#ffcf70"};

  color: #222222;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  border-radius: 17px;

  overflow: hidden;

  box-shadow:
    0
    7px
    18px
    rgba(
      0,
      0,
      0,
      0.10
    );

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;


  &:hover {

    transform:
      translateY(-7px);

    box-shadow:
      0
      14px
      28px
      rgba(
        0,
        0,
        0,
        0.16
      );

  }


  &:focus-visible {

    outline:
      3px solid #000000;

    outline-offset: 4px;

  }


  @media (max-width: 500px) {

    min-height: 205px;

    padding:
      25px 22px
      20px;

  }
`;


// =====================================================
// CARD TITLE
// IGUAL AO ADM
// =====================================================

export const PostItTitle = styled.h2`
  margin:
    0 0 18px;

  color: #222222;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 20px;

  font-weight: 600;

  line-height: 1.35;

  word-break: break-word;
`;


// =====================================================
// CARD MESSAGE
// IGUAL AO ADM
// =====================================================

export const PostItMessage = styled.p`
  margin: 0;

  color: #292929;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  font-weight: 400;

  line-height: 1.55;

  word-break: break-word;

  white-space: pre-wrap;

  display:
    -webkit-box;

  -webkit-line-clamp: 5;

  -webkit-box-orient: vertical;

  overflow: hidden;
`;


// =====================================================
// CARD FOOTER
// IGUAL AO ADM
// =====================================================

export const PostItFooter = styled.div`
  margin-top: auto;

  padding-top: 20px;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 7px;
`;


// =====================================================
// CLIQUE PARA VISUALIZAR
// IGUAL AO ADM
// =====================================================

export const ReadMore = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  width: fit-content;

  min-height: 27px;

  padding:
    4px 13px;

  box-sizing: border-box;

  border-radius: 999px;

  background:
    rgba(
      255,
      255,
      255,
      0.45
    );

  color:
    rgba(
      0,
      0,
      0,
      0.62
    );

  font-family:
    "Poppins",
    sans-serif;

  font-size: 11px;

  font-weight: 500;

  line-height: 1.3;

  white-space: nowrap;
`;


// =====================================================
// DATA
// IGUAL AO ADM
// =====================================================

export const PostDate = styled.span`
  display: block;

  color: #555555;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 11px;

  font-weight: 500;

  line-height: 1.4;
`;


// =====================================================
// EMPTY STATE
// =====================================================

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


// =====================================================
// EMPTY ICON
// =====================================================

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


// =====================================================
// EMPTY TITLE
// =====================================================

export const EmptyTitle = styled.h2`
  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;
`;


// =====================================================
// EMPTY TEXT
// =====================================================

export const EmptyText = styled.p`
  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;
`;


// =====================================================
// MODAL OVERLAY
// =====================================================

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


// =====================================================
// MODAL
// =====================================================

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


// =====================================================
// CONTEÚDO MODAL
// =====================================================

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


// =====================================================
// TÍTULO MODAL
// =====================================================

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


// =====================================================
// MENSAGEM MODAL
// =====================================================

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