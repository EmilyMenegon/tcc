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

  color: #000000;

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

  margin: 10px 0 0;

  color: #777777;

  font-size:
    clamp(
      .85rem,
      1.5vw,
      1rem
    );

  line-height: 1.5;

  max-width: 600px;


  @media (max-width: 600px) {

    max-width: 90%;

    font-size: 14px;

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
        280px,
        1fr
      )
    );

  gap: 30px;

  align-items: stretch;


  @media (max-width: 900px) {

    grid-template-columns:
      repeat(
        auto-fill,
        minmax(
          250px,
          1fr
        )
      );

    gap: 24px;

  }


  @media (max-width: 600px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/* ==========================================
   POST-IT
========================================== */

export const PostIt = styled.article`

  position: relative;

  min-width: 0;

  min-height: 280px;

  padding:
    38px
    25px
    23px;

  box-sizing: border-box;

  background:
    ${({ $color }) =>
      $color || "#f9be06"};

  cursor: pointer;

  display: flex;

  flex-direction: column;

  box-shadow:
    0 5px 15px
      rgba(
        0,
        0,
        0,
        .10
      );

  transform:
    rotate(
      ${({ $index }) => {

        if (
          $index % 3 === 0
        ) {

          return "-1deg";

        }

        if (
          $index % 3 === 1
        ) {

          return "1deg";

        }

        return "-.4deg";

      }}
    );

  transition:
    .3s;


  &:hover {

    transform:
      translateY(-8px)
      rotate(0deg);

    box-shadow:
      0 15px 35px
        rgba(
          0,
          0,
          0,
          .16
        );

  }


  &:focus-visible {

    outline:
      3px solid #000000;

    outline-offset:
      4px;

  }


  @media (max-width: 600px) {

    min-height: 250px;

    padding:
      36px
      22px
      22px;

    transform: none;


    &:hover {

      transform:
        translateY(-5px);

    }

  }

`;


/* ==========================================
   PIN
========================================== */

export const PostItPin = styled.span`

  position: absolute;

  top: 13px;

  left: 50%;

  width: 15px;

  height: 15px;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background: #e44747;

  box-shadow:

    inset
      2px
      2px
      3px
      rgba(
        255,
        255,
        255,
        .45
      ),

    2px
    3px
    5px
    rgba(
      0,
      0,
      0,
      .22
    );

`;


/* ==========================================
   POST-IT TITLE
========================================== */

export const PostItTitle = styled.h2`

  margin: 0 0 15px;

  color: #222222;

  font-size: 22px;

  font-weight: 700;

  line-height: 1.25;

  word-break: break-word;

`;


/* ==========================================
   POST-IT MESSAGE
========================================== */

export const PostItMessage = styled.p`

  margin: 0;

  color: #333333;

  font-size: 15px;

  line-height: 1.65;

  word-break: break-word;

  display:
    -webkit-box;

  -webkit-line-clamp: 6;

  -webkit-box-orient: vertical;

  overflow: hidden;

`;


/* ==========================================
   POST-IT FOOTER
========================================== */

export const PostItFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

`;


/* ==========================================
   READ MORE
========================================== */

export const ReadMore = styled.span`

  color:
    rgba(
      0,
      0,
      0,
      .55
    );

  font-size: 12px;

  font-weight: 600;

`;


/* ==========================================
   ESTADO VAZIO
========================================== */

export const EmptyState = styled.div`

  grid-column:
    1 / -1;

  min-height: 320px;

  padding: 50px 25px;

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

  margin: 0 0 8px;

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
   MODAL
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


/* ==========================================
   FULL POST IT
========================================== */

export const FullPostIt = styled.div`

  position: relative;

  width:
    min(
      1000px,
      100%
    );

  height:
    min(
      750px,
      calc(
        100vh - 60px
      )
    );

  padding:
    85px
    clamp(
      30px,
      8vw,
      90px
    )
    50px;

  box-sizing: border-box;

  background:
    ${({ $color }) =>
      $color || "#f9be06"};

  box-shadow:
    0 25px 80px
      rgba(
        0,
        0,
        0,
        .35
      );

  overflow-y: auto;

  animation:
    postOpen .25s ease;


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

    width: 100%;

    height:
      calc(
        100vh - 24px
      );

    padding:
      75px
      25px
      35px;

  }

`;


/* ==========================================
   FULL POST PIN
========================================== */

export const FullPostItPin = styled.span`

  position: absolute;

  top: 22px;

  left: 50%;

  width: 18px;

  height: 18px;

  transform:
    translateX(-50%);

  border-radius: 50%;

  background: #e44747;

  box-shadow:

    inset
      2px
      2px
      4px
      rgba(
        255,
        255,
        255,
        .4
      ),

    2px
    3px
    6px
    rgba(
      0,
      0,
      0,
      .25
    );

`;


/* ==========================================
   CLOSE BUTTON
========================================== */

export const CloseButton = styled.button`

  position: absolute;

  top: 18px;

  right: 20px;

  width: 42px;

  height: 42px;

  border: none;

  border-radius: 50%;

  background:
    rgba(
      0,
      0,
      0,
      .08
    );

  color: #222222;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition:
    .2s;

  z-index: 2;


  svg {

    font-size: 21px;

  }


  &:hover {

    background: #000000;

    color: #f9be06;

    transform:
      rotate(90deg);

  }


  @media (max-width: 600px) {

    top: 14px;

    right: 14px;

    width: 38px;

    height: 38px;

  }

`;


/* ==========================================
   FULL POST CONTENT
========================================== */

export const FullPostItContent = styled.div`

  width:
    min(
      850px,
      100%
    );

  min-height: 100%;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

`;


/* ==========================================
   FULL POST TITLE
========================================== */

export const FullPostItTitle = styled.h2`

  margin: 0 0 35px;

  color: #222222;

  font-size:
    clamp(
      2rem,
      6vw,
      4rem
    );

  line-height: 1.05;

  font-weight: 800;

  letter-spacing: -1px;

  word-break: break-word;


  @media (max-width: 600px) {

    margin-bottom: 25px;

    font-size: 32px;

  }

`;


/* ==========================================
   FULL POST MESSAGE
========================================== */

export const FullPostItMessage = styled.p`

  margin: 0;

  color: #292929;

  font-size:
    clamp(
      1.1rem,
      3vw,
      1.8rem
    );

  line-height: 1.75;

  white-space: pre-wrap;

  word-break: break-word;


  @media (max-width: 600px) {

    font-size: 18px;

    line-height: 1.65;

  }

`;