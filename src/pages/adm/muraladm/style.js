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

  color: #000000;

  font-size:
    clamp(
      2rem,
      4vw,
      2.8rem
    );

  font-weight: 700;

  line-height: 1.2;

`;


/* =====================================================
   SUBTITLE
===================================================== */

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


/* =====================================================
   MURAL
===================================================== */

export const Mural = styled.section`

  width: 100%;

  min-height: 320px;

  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(
        230px,
        1fr
      )
    );

  gap: 35px;

  align-items: start;

  padding: 10px;

  box-sizing: border-box;


  @media (max-width: 1000px) {

    grid-template-columns:
      repeat(
        3,
        1fr
      );

    gap: 25px;

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

  width: 100%;

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
   POST-IT
===================================================== */

export const PostIt = styled.article`

  position: relative;

  width: 100%;

  min-height: 220px;

  box-sizing: border-box;

  padding:
    28px
    25px
    25px;

  background:
    ${({ $cor }) =>
      $cor || "#fff176"};

  color: #333333;

  cursor: pointer;

  border-radius: 2px;

  box-shadow:
    3px
    7px
    14px
    rgba(
      0,
      0,
      0,
      .16
    );

  transform:
    rotate(
      ${({ $rotacao }) =>
        $rotacao || 0
      }deg
    );

  transition:
    transform .25s ease,
    box-shadow .25s ease;

  overflow: hidden;


  /* brilho superior */

  &::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    height: 8px;

    background:
      rgba(
        255,
        255,
        255,
        .18
      );

  }


  /* dobra do papel */

  &::after {

    content: "";

    position: absolute;

    bottom: 0;
    right: 0;

    width: 0;
    height: 0;

    border-style: solid;

    border-width:
      0
      0
      25px
      25px;

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
      rotate(0deg)
      translateY(-7px)
      scale(1.02);

    box-shadow:
      7px
      15px
      28px
      rgba(
        0,
        0,
        0,
        .22
      );

    z-index: 5;

  }


  @media (max-width: 500px) {

    min-height: 190px;

  }

`;


/* =====================================================
   POST-IT TITLE
===================================================== */

export const PostItTitle = styled.h3`

  position: relative;

  z-index: 2;

  margin:
    5px 0
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

`;


/* =====================================================
   POST-IT DESCRIPTION
===================================================== */

export const PostItDescription = styled.p`

  position: relative;

  z-index: 2;

  margin: 0;

  color: #444444;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 15px;

  line-height: 1.55;

  white-space: pre-wrap;

  word-break: break-word;

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

  background: #f9be06;

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
      .2
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
    ${({ $selecionada }) =>
      $selecionada
        ? "#111111"
        : "#ffffff"};

  outline:
    1px solid
    ${({ $selecionada }) =>
      $selecionada
        ? "#111111"
        : "#dddddd"};

  background:
    ${({ $cor }) =>
      $cor};

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

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 25px;

  box-sizing: border-box;

  background:
    rgba(
      0,
      0,
      0,
      .55
    );

  backdrop-filter:
    blur(4px);

`;


/* =====================================================
   VIEW POST-IT
===================================================== */

export const ViewPostIt = styled.div`

  position: relative;

  width: 520px;

  max-width: 90vw;

  min-height: 330px;

  max-height: 80vh;

  box-sizing: border-box;

  padding:
    75px
    45px
    45px;

  background:
    ${({ $cor }) =>
      $cor || "#fff176"};

  box-shadow:
    8px
    18px
    35px
    rgba(
      0,
      0,
      0,
      .25
    );

  overflow-y: auto;

  animation:
    viewAppear
    .25s
    ease;


  @keyframes viewAppear {

    from {

      opacity: 0;

      transform:
        scale(.9)
        rotate(-2deg);

    }

    to {

      opacity: 1;

      transform:
        scale(1)
        rotate(0deg);

    }

  }


  @media (max-width: 600px) {

    width: 92vw;

    min-height: 280px;

    padding:
      70px
      28px
      30px;

  }

`;


/* =====================================================
   VIEW TOP BUTTONS
===================================================== */

export const ViewTopButtons = styled.div`

  position: absolute;

  top: 18px;

  right: 18px;

  display: flex;

  align-items: center;

  gap: 10px;

  z-index: 5;

`;


/* =====================================================
   VIEW CLOSE
===================================================== */

export const ViewCloseButton = styled.button`

  width: 43px;
  height: 43px;

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
      .75
    );

  color: #222222;

  cursor: pointer;

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

  transition: .2s;


  svg {

    width: 23px;
    height: 23px;

  }


  &:hover {

    background: #111111;

    color: #ffffff;

    transform:
      rotate(90deg);

  }

`;


/* =====================================================
   VIEW DELETE
===================================================== */

export const ViewDeleteButton = styled.button`

  width: 43px;
  height: 43px;

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
      .92
    );

  color: #ffffff;

  cursor: pointer;

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

  transition: .2s;


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
   VIEW TITLE
===================================================== */

export const ViewTitle = styled.h2`

  margin:
    0 0 20px;

  color: #222222;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 30px;

  line-height: 1.25;

  word-break: break-word;

`;


/* =====================================================
   VIEW DESCRIPTION
===================================================== */

export const ViewDescription = styled.p`

  margin: 0;

  color: #444444;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 18px;

  line-height: 1.65;

  white-space: pre-wrap;

  word-break: break-word;

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
      .2
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

`;


/* =====================================================
   MODAL BUTTONS
===================================================== */

export const ModalButtons = styled.div`

  display: flex;

  justify-content: center;

  gap: 15px;

`;


/* =====================================================
   CANCEL
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
   CONFIRM
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