
import styled from "styled-components";


/* =====================================================
   PAGE
===================================================== */

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


/* =====================================================
   CONTENT
===================================================== */

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


/* =====================================================
   HEADER
===================================================== */

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


/* =====================================================
   TITLE
===================================================== */

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


/* =====================================================
   SUBTITLE
===================================================== */

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

    width: 90%;

    max-width: 90%;

    font-size: 14px;

  }

`;


/* =====================================================
   MURAL
   MESMAS DIMENSÕES DA GALLERY
===================================================== */

export const Mural = styled.section`

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


/* =====================================================
   EMPTY STATE
===================================================== */

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


/* =====================================================
   EMPTY ICON
===================================================== */

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


/* =====================================================
   EMPTY TITLE
===================================================== */

export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;

`;


/* =====================================================
   EMPTY TEXT
===================================================== */

export const EmptyText = styled.p`

  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;

`;


/* =====================================================
   POST IT
   MESMA PROPORÇÃO DOS CARDS DA GALLERY
===================================================== */

export const PostIt = styled.article`

  position: relative;

  width: 100%;

  min-width: 0;

  aspect-ratio: 4 / 3;

  min-height: 0;

  padding:
    38px
    25px
    23px;

  box-sizing: border-box;

  background:
    ${({ $color }) =>
      $color || "#fff176"};

  color: #222222;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  box-shadow:
    4px
    8px
    18px
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


  /* faixa superior */

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
      8px
      18px
      30px
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


  @media (max-width: 500px) {

    aspect-ratio: 4 / 3;

    padding:
      36px
      22px
      22px;

  }

`;


/* =====================================================
   PIN
===================================================== */

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


/* =====================================================
   POST IT TITLE
===================================================== */

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


/* =====================================================
   POST IT MESSAGE
===================================================== */

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


/* =====================================================
   POST IT FOOTER
===================================================== */

export const PostItFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

  position: relative;

  z-index: 2;

`;


/* =====================================================
   READ MORE
===================================================== */

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


/* =====================================================
   BOTÃO +
===================================================== */

export const FloatingButton = styled.button`

  position: fixed;

  right: 35px;

  bottom: 35px;

  width: 70px;
  height: 70px;

  border: none;

  border-radius: 50%;

  background:#ffdb53;
;

  color: #111111;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow:
    0
    10px
    25px
    rgba(
      0,
      0,
      0,
      .20
    );

  transition: .2s;

  z-index: 100;


  svg {

    width: 30px;
    height: 30px;

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


/* =====================================================
   CREATE OVERLAY
===================================================== */

export const CreateOverlay = styled.div`

  position: fixed;

  inset: 0;

  z-index: 9999;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 15px;

  box-sizing: border-box;

  background:
    rgba(
      0,
      0,
      0,
      .45
    );

  backdrop-filter:
    blur(3px);

`;


/* =====================================================
   CREATE MODAL
===================================================== */

export const CreateModal = styled.div`

  width: 420px;

  max-width: 100%;

  box-sizing: border-box;

  padding:
    22px
    25px;

  background: #ffffff;

  border-radius: 20px;

  box-shadow:
    0
    20px
    50px
    rgba(
      0,
      0,
      0,
      .25
    );

  animation:
    createAppear
    .2s
    ease;


  @keyframes createAppear {

    from {

      opacity: 0;

      transform:
        scale(.94)
        translateY(10px);

    }

    to {

      opacity: 1;

      transform:
        scale(1)
        translateY(0);

    }

  }


  @media (max-width: 500px) {

    width: 100%;

    border-radius: 18px;

    padding: 18px;

  }

`;


/* =====================================================
   CREATE HEADER
===================================================== */

export const CreateHeader = styled.div`

  width: 100%;

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 16px;

`;


/* =====================================================
   CREATE TITLE
===================================================== */

export const CreateTitle = styled.h2`

  margin: 0;

  color: #111111;

  font-size: 23px;

  font-weight: 700;

`;


/* =====================================================
   CREATE CLOSE
===================================================== */

export const CreateCloseButton = styled.button`

  width: 38px;
  height: 38px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background: #f1f1f1;

  color: #333333;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: .2s;


  svg {

    width: 21px;
    height: 21px;

  }


  &:hover {

    background: #111111;

    color: #ffffff;

  }

`;


/* =====================================================
   FORM
===================================================== */

export const CreateForm = styled.form`

  display: flex;

  flex-direction: column;

  gap: 13px;

`;


/* =====================================================
   FIELD
===================================================== */

export const Field = styled.div`

  display: flex;

  flex-direction: column;

  gap: 6px;

`;


/* =====================================================
   LABEL
===================================================== */

export const Label = styled.label`

  color: #333333;

  font-size: 13px;

  font-weight: 600;

`;


/* =====================================================
   TITLE INPUT
===================================================== */

export const TitleInput = styled.input`

  width: 100%;

  height: 43px;

  box-sizing: border-box;

  padding:
    0 13px;

  border: none;

  border-radius: 10px;

  outline: none;

  background: #f3f3f3;

  color: #111111;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;


  &:focus {

    box-shadow:
      0
      0
      0
      2px
      rgba(
        249,
        190,
        6,
        .4
      );

  }

`;


/* =====================================================
   DESCRIPTION INPUT
===================================================== */

export const DescriptionInput = styled.textarea`

  width: 100%;

  height: 80px;

  min-height: 80px;

  max-height: 100px;

  resize: none;

  box-sizing: border-box;

  padding:
    11px
    13px;

  border: none;

  border-radius: 10px;

  outline: none;

  background: #f3f3f3;

  color: #111111;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  line-height: 1.4;


  &:focus {

    box-shadow:
      0
      0
      0
      2px
      rgba(
        249,
        190,
        6,
        .4
      );

  }

`;


/* =====================================================
   COLOR LABEL
===================================================== */

export const ColorLabel = styled.span`

  color: #333333;

  font-size: 13px;

  font-weight: 600;

`;


/* =====================================================
   COLOR OPTIONS
===================================================== */

export const ColorOptions = styled.div`

  display: flex;

  align-items: center;

  gap: 9px;

  flex-wrap: wrap;

`;


/* =====================================================
   COLOR OPTION
===================================================== */

export const ColorOption = styled.button`

  width: 30px;
  height: 30px;

  flex-shrink: 0;

  padding: 0;

  border-radius: 50%;

  border:
    3px solid
    ${({ $selected }) =>
      $selected
        ? "#111111"
        : "#ffffff"};

  outline:
    1px solid
    ${({ $selected }) =>
      $selected
        ? "#111111"
        : "#dddddd"};

  background:
    ${({ $color }) =>
      $color};

  cursor: pointer;

  transition: .2s;


  &:hover {

    transform:
      scale(1.12);

  }

`;


/* =====================================================
   CREATE BUTTON
===================================================== */

export const CreateButton = styled.button`

  width: 100%;

  height: 45px;

  margin-top: 2px;

  border: none;

  border-radius: 11px;

  background: #f9be06;

  color: #111111;

  font-size: 14px;

  font-weight: 700;

  cursor: pointer;

  transition: .2s;


  &:hover:not(:disabled) {

    background: #111111;

    color: #ffffff;

    transform:
      translateY(-2px);

  }


  &:disabled {

    opacity: .45;

    cursor: not-allowed;

  }

`;


/* =====================================================
   VIEW OVERLAY
===================================================== */

export const ViewOverlay = styled.div`

  position: fixed;

  inset: 0;

  z-index: 9998;

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


/* =====================================================
   VIEW POST IT
   MESMO ESTILO DO MODAL DO USUÁRIO
===================================================== */

export const ViewPostIt = styled.div`

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
    postOpen
    .25s
    ease;


  /* faixa superior */

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
      35px
      35px;

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


/* =====================================================
   VIEW PIN
===================================================== */

export const ViewPostItPin = styled.span`

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

  z-index: 10;

`;


/* =====================================================
   VIEW BUTTONS
===================================================== */

export const ViewTopButtons = styled.div`

  position: absolute;

  top: 18px;

  right: 20px;

  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 10px;

  z-index: 20;

`;


/* =====================================================
   VIEW EDIT
===================================================== */

export const ViewEditButton = styled.button`

  width: 42px;
  height: 42px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      .75
    );

  color: #222222;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: .2s;

  box-shadow:
    0
    4px
    10px
    rgba(
      0,
      0,
      0,
      .12
    );


  svg {

    width: 20px;
    height: 20px;

  }


  &:hover {

    background: #000000;

    color: #ffffff;

    transform:
      scale(1.08);

  }

`;


/* =====================================================
   VIEW CLOSE
===================================================== */

export const ViewCloseButton = styled.button`

  width: 42px;
  height: 42px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background:
    rgba(
      255,
      255,
      255,
      .75
    );

  color: #222222;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: .2s;

  box-shadow:
    0
    4px
    10px
    rgba(
      0,
      0,
      0,
      .12
    );


  svg {

    width: 22px;
    height: 22px;

  }


  &:hover {

    background: #000000;

    color: #ffffff;

    transform:
      rotate(90deg);

  }

`;


/* =====================================================
   VIEW DELETE
===================================================== */

export const ViewDeleteButton = styled.button`

  width: 42px;
  height: 42px;

  padding: 0;

  border: none;

  border-radius: 50%;

  background: #d62828;

  color: #ffffff;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: .2s;

  box-shadow:
    0
    4px
    10px
    rgba(
      0,
      0,
      0,
      .15
    );


  svg {

    width: 20px;
    height: 20px;

  }


  &:hover {

    background: #b71c1c;

    transform:
      scale(1.08);

  }

`;


/* =====================================================
   VIEW CONTENT
===================================================== */

export const ViewContent = styled.div`

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


/* =====================================================
   VIEW TITLE
===================================================== */

export const ViewTitle = styled.h2`

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


/* =====================================================
   VIEW DESCRIPTION
===================================================== */

export const ViewDescription = styled.p`

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


/* =====================================================
   DELETE OVERLAY
===================================================== */

export const DeleteOverlay = styled.div`

  position: fixed;

  inset: 0;

  z-index: 10001;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 20px;

  box-sizing: border-box;

  background:
    rgba(
      0,
      0,
      0,
      .45
    );

  backdrop-filter:
    blur(3px);

`;


/* =====================================================
   DELETE MODAL
===================================================== */

export const DeleteModal = styled.div`

  width: 400px;

  max-width: 100%;

  box-sizing: border-box;

  padding: 30px;

  background: #ffffff;

  border-radius: 20px;

  text-align: center;

  box-shadow:
    0
    20px
    45px
    rgba(
      0,
      0,
      0,
      .20
    );

  animation:
    deleteAppear
    .25s
    ease;


  h3 {

    margin:
      0 0 12px;

    color: #111111;

    font-size: 24px;

  }


  p {

    margin:
      0 0 30px;

    color: #666666;

    font-size: 15px;

    line-height: 1.5;

  }


  @keyframes deleteAppear {

    from {

      opacity: 0;

      transform:
        translateY(15px)
        scale(.95);

    }

    to {

      opacity: 1;

      transform:
        translateY(0)
        scale(1);

    }

  }


  @media (max-width: 500px) {

    padding:
      25px
      20px;

  }

`;


/* =====================================================
   MODAL BUTTONS
===================================================== */

export const ModalButtons = styled.div`

  display: flex;

  justify-content: center;

  gap: 15px;


  @media (max-width: 400px) {

    flex-direction: column;

  }

`;


/* =====================================================
   CANCEL BUTTON
===================================================== */

export const CancelButton = styled.button`

  padding:
    12px
    22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111111;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #d9d9d9;

  }

`;


/* =====================================================
   CONFIRM BUTTON
===================================================== */

export const ConfirmButton = styled.button`

  padding:
    12px
    22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #ffffff;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #b71c1c;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(0);

  }

`;

