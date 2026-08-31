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
   TITLE AREA
========================================== */

export const TitleArea = styled.div`

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

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
   EVENT CARD
========================================== */

export const EventCard = styled.article`

  position: relative;

  min-width: 0;

  min-height: 280px;

  background: #eeeeee;

  border-radius: 0;

  overflow: hidden;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  box-sizing: border-box;

  box-shadow:
    4px 8px 18px
    rgba(
      0,
      0,
      0,
      .14
    );

  transition:
    transform .25s ease,
    box-shadow .25s ease;


  &:hover {

    transform:
      translateY(-8px)
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


  &:active {

    transform:
      translateY(-3px);

  }


  @media (max-width: 600px) {

    min-height: 250px;

  }

`;


/* ==========================================
   EVENT IMAGE
========================================== */

export const EventImage = styled.div`

  width: 100%;

  height: 145px;

  flex-shrink: 0;

  background: #d8d8d8;

  overflow: hidden;


  img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform .5s ease;

  }


  ${EventCard}:hover & img {

    transform:
      scale(1.05);

  }


  @media (max-width: 600px) {

    height: 125px;

  }

`;


/* ==========================================
   IMAGE PLACEHOLDER
========================================== */

export const EventImagePlaceholder = styled.div`

  width: 100%;

  height: 145px;

  flex-shrink: 0;

  background: #d8d8d8;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #999999;

  font-size: 40px;


  @media (max-width: 600px) {

    height: 125px;

  }

`;


/* ==========================================
   EVENT CONTENT
========================================== */

export const EventContent = styled.div`

  padding:
    18px
    25px
    23px;

  display: flex;

  flex-direction: column;

  flex: 1;

  min-height: 135px;

  box-sizing: border-box;

  background: #eeeeee;

`;


/* ==========================================
   EVENT TITLE
========================================== */

export const EventTitle = styled.h2`

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
   EVENT DESCRIPTION
========================================== */

export const EventDescription = styled.p`

  margin: 0;

  color: #333333;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 15px;

  line-height: 1.55;

  word-break: break-word;

  display:
    -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;

  overflow: hidden;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   INFO LIST
========================================== */

export const InfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 9px;

  margin-top: 15px;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   INFO ITEM
========================================== */

export const InfoItem = styled.div`

  display: flex;

  align-items: center;

  gap: 9px;

  color:
    rgba(
      0,
      0,
      0,
      .72
    );

  font-size: 14px;

  min-width: 0;


  svg {

    flex-shrink: 0;

    color: #555555;

    font-size: 17px;

  }


  span {

    min-width: 0;

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

  }

`;


/* ==========================================
   EVENT FOOTER
========================================== */

export const EventFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

  display: flex;

  align-items: center;

  gap: 12px;

  position: relative;

  z-index: 2;

`;


/* ==========================================
   ACCESS BUTTON
========================================== */

export const AccessButton = styled.button`

  width: 100%;

  height: 34px;

  min-height: 34px;

  padding:
    0
    12px;

  border: none;

  border-radius: 6px;

  background: #000000;

  color: #ffdb53;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 12px;

  font-weight: 700;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #ffdb53;

    color: #111111;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(0);

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
   MODAL
========================================== */

export const Modal = styled.div`

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

  background: #eeeeee;

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

  animation:
    modalOpen .25s ease;


  @keyframes modalOpen {

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
   MODAL HEADER
========================================== */

export const ModalHeader = styled.div`

  position: absolute;

  top: 18px;

  left: 20px;

  right: 20px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  z-index: 5;

`;


/* ==========================================
   MODAL TITLE
========================================== */

export const ModalTitle = styled.h2`

  margin: 0;

  color: #222222;

  font-family:
    "Comic Sans MS",
    "Trebuchet MS",
    sans-serif;

  font-size: 25px;

  font-weight: 700;

`;


/* ==========================================
   CLOSE BUTTON
========================================== */

export const CloseButton = styled.button`

  width: 42px;

  height: 42px;

  flex-shrink: 0;

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

    width: 38px;

    height: 38px;

  }

`;


/* ==========================================
   MODAL IMAGE
========================================== */

export const ModalImage = styled.div`

  width: 100%;

  height: 280px;

  margin-bottom: 25px;

  border-radius: 0;

  overflow: hidden;

  background: #d8d8d8;

  box-shadow:
    4px 8px 18px
    rgba(
      0,
      0,
      0,
      .14
    );


  img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

  }


  @media (max-width: 500px) {

    height: 210px;

  }

`;


/* ==========================================
   MODAL EVENT TITLE
========================================== */

export const ModalEventTitle = styled.h2`

  margin:
    0 0 25px;

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

    margin-bottom: 20px;

    font-size: 32px;

  }

`;


/* ==========================================
   MODAL DESCRIPTION
========================================== */

export const ModalDescription = styled.p`

  margin:
    0 0 25px;

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

  line-height: 1.65;

  white-space: pre-wrap;

  word-break: break-word;

`;


/* ==========================================
   MODAL INFO LIST
========================================== */

export const ModalInfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 12px;

`;


/* ==========================================
   MODAL INFO ITEM
========================================== */

export const ModalInfoItem = styled.div`

  display: flex;

  align-items: center;

  gap: 13px;

  padding: 13px;

  border-radius: 8px;

  background:
    rgba(
      255,
      255,
      255,
      .45
    );

  border:
    1px solid
    rgba(
      0,
      0,
      0,
      .08
    );


  & > svg {

    flex-shrink: 0;

    width: 20px;

    height: 20px;

    color: #555555;

  }


  div {

    display: flex;

    flex-direction: column;

    gap: 2px;

    min-width: 0;

  }


  strong {

    color: #333333;

    font-size: 12px;

    font-weight: 600;

  }


  span {

    color: #555555;

    font-size: 14px;

    word-break: break-word;

  }

`;
