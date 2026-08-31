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
   POST IT
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
      $color || "#fff176"};

  color: #222;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  box-shadow:
    4px 8px 18px
    rgba(
      0,
      0,
      0,
      .14
    );

  transform:
    rotate(
      ${({ $rotation, $index }) => {

        if (
          $rotation !== undefined &&
          $rotation !== null
        ) {

          return `${$rotation}deg`;

        }

        if ($index % 3 === 0) {

          return "-1.2deg";

        }

        if ($index % 3 === 1) {

          return "1deg";

        }

        return "-.5deg";

      }}
    );

  transition:
    transform .25s ease,
    box-shadow .25s ease;


  /* papel */

  &::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 7px;

    background:
      rgba(
        255,
        255,
        255,
        .22
      );

  }


  /* dobrinha */

  &::after {

    content: "";

    position: absolute;

    right: 0;
    bottom: 0;

    width: 0;
    height: 0;

    border-style: solid;

    border-width:
      0
      0
      28px
      28px;

    border-color:
      transparent
      transparent
      rgba(
        0,
        0,
        0,
        .07
      )
      transparent;

  }


  &:hover {

    transform:
      translateY(-8px)
      rotate(0deg)
      scale(1.015);

    box-shadow:
      8px 18px 30px
      rgba(
        0,
        0,
        0,
        .20
      );

    z-index: 5;

  }


  &:focus-visible {

    outline:
      3px solid #000000;

    outline-offset: 4px;

  }


  @media (max-width: 600px) {

    min-height: 250px;

    padding:
      36px
      22px
      22px;

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

  z-index: 2;

`;


/* ==========================================
   POST IT TITLE
========================================== */

export const PostItTitle = styled.h2`

  margin:
    0
    0
    15px;

  color: #222222;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 22px;

  font-weight: 700;

  line-height: 1.25;

  word-break: break-word;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   POST IT MESSAGE
========================================== */

export const PostItMessage = styled.p`

  margin: 0;

  color: #333333;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 15px;

  line-height: 1.65;

  word-break: break-word;

  white-space: pre-wrap;

  display:
    -webkit-box;

  -webkit-line-clamp: 6;

  -webkit-box-orient: vertical;

  overflow: hidden;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   FOOTER
========================================== */

export const PostItFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

  position: relative;

  z-index: 2;

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

  font-family:
    "Poppins",
    sans-serif;

  font-size: 12px;

  font-weight: 600;

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

  color: #ffdb53;

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
      .70
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
      850px,
      100%
    );

  min-height: 500px;

  max-height:
    calc(
      100vh - 60px
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
      $color || "#fff176"};

  box-shadow:
    10px
    22px
    50px
    rgba(
      0,
      0,
      0,
      .30
    );

  overflow-y: auto;

  transform:
    rotate(
      ${({ $rotation }) =>
        $rotation || 0
      }deg
    );

  animation:
    postOpen .25s ease;


  @keyframes postOpen {

    from {

      opacity: 0;

      transform:
        scale(.93)
        rotate(-2deg);

    }

    to {

      opacity: 1;

      transform:
        scale(1)
        rotate(
          ${({ $rotation }) =>
            $rotation || 0
          }deg
        );

    }

  }


  @media (max-width: 600px) {

    width: 100%;

    min-height: 400px;

    max-height:
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

  transition: .2s;

  z-index: 5;


  svg {

    width: 21px;
    height: 21px;

  }


  &:hover {

    background: #000000;

    color: #ffdb53;

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
      700px,
      100%
    );

  min-height: 100%;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

  justify-content: flex-start;

`;


/* ==========================================
   FULL POST TITLE
========================================== */

export const FullPostItTitle = styled.h2`

  margin:
    0 0 35px;

  color: #222222;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

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

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

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