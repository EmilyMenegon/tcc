import styled from "styled-components";


/* =========================================
   PAGE
========================================= */

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


/* =========================================
   CONTENT
========================================= */

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


/* =========================================
   HEADER
========================================= */

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


/* =========================================
   TITLE AREA
========================================= */

export const TitleArea = styled.div`

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

`;


/* =========================================
   TITLE
========================================= */

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


/* =========================================
   SUBTITLE
========================================= */

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


/* =========================================
   CARDS
========================================= */

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


/* =========================================
   EVENT CARD
========================================= */

export const EventCard = styled.article`

  position: relative;

  width: 100%;

  min-height: 0;

  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  border: none;

  box-shadow:
    0 7px 25px
    rgba(
      0,
      0,
      0,
      .08
    );

  transition:
    transform .3s ease,
    box-shadow .3s ease;


  &:hover {

    transform:
      translateY(-8px);

    box-shadow:
      0 18px 40px
      rgba(
        0,
        0,
        0,
        .15
      );

  }


  &:focus-visible {

    outline:
      3px solid #f9be06;

    outline-offset:
      4px;

  }


  &:active {

    transform:
      translateY(-3px);

  }

`;


/* =========================================
   EVENT IMAGE
========================================= */

export const EventImage = styled.div`

  width: 100%;

  aspect-ratio: 4 / 3;

  background: #eeeeee;

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
      scale(1.07);

  }

`;


/* =========================================
   IMAGE PLACEHOLDER
========================================= */

export const EventImagePlaceholder = styled.div`

  width: 100%;

  aspect-ratio: 4 / 3;

  background: #eeeeee;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #b5b5b5;

  font-size: 50px;

`;


/* =========================================
   EVENT CONTENT
========================================= */

export const EventContent = styled.div`

  padding:
    22px
    24px
    24px;

  display: flex;

  flex-direction: column;

  flex: 1;

  box-sizing: border-box;

`;


/* =========================================
   EVENT TITLE
========================================= */

export const EventTitle = styled.h2`

  margin:
    0 0 10px;

  color: #222222;

  font-size: 23px;

  line-height: 1.25;

  font-weight: 700;

  word-break: break-word;

`;


/* =========================================
   EVENT DESCRIPTION
========================================= */

export const EventDescription = styled.p`

  margin:
    0 0 18px;

  color:
    rgba(
      0,
      0,
      0,
      .65
    );

  font-size: 14px;

  line-height: 1.6;

  display:
    -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient:
    vertical;

  overflow: hidden;

`;


/* =========================================
   INFO LIST
========================================= */

export const InfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 9px;

`;


/* =========================================
   INFO ITEM
========================================= */

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


  svg {

    flex-shrink: 0;

    color: #555555;

    font-size: 17px;

  }


  span {

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

  }

`;


/* =========================================
   EVENT FOOTER
========================================= */

export const EventFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

  display: flex;

  align-items: center;

  gap: 12px;

`;


/* =========================================
   ACCESS BUTTON
========================================= */

export const AccessButton = styled.button`

  width: 100%;

  min-height: 42px;

  border: none;

  border-radius: 9px;

  background: #000000;

  color: #f9be06;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #f9be06;

    color: #111111;

    transform:
      translateY(-2px);

  }

`;


/* =========================================
   EMPTY STATE
========================================= */

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


/* =========================================
   EMPTY ICON
========================================= */

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


/* =========================================
   EMPTY TITLE
========================================= */

export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;

`;


/* =========================================
   EMPTY TEXT
========================================= */

export const EmptyText = styled.p`

  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;

`;


/* =========================================
   MODAL OVERLAY
========================================= */

export const ModalOverlay = styled.div`

  position: fixed;

  inset: 0;

  z-index: 1000;

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

    padding: 10px;

  }

`;


/* =========================================
   MODAL
========================================= */

export const Modal = styled.div`

  width: 100%;

  max-width: 600px;

  max-height:
    calc(
      100vh - 40px
    );

  overflow-y: auto;

  box-sizing: border-box;

  padding: 30px;

  background: #ffffff;

  border-radius: 20px;

  box-shadow:
    0 25px 70px
    rgba(
      0,
      0,
      0,
      .35
    );

  animation:
    modalOpen .25s ease;


  @keyframes modalOpen {

    from {

      opacity: 0;

      transform:
        translateY(20px)
        scale(.96);

    }

    to {

      opacity: 1;

      transform:
        translateY(0)
        scale(1);

    }

  }


  @media (max-width: 600px) {

    padding: 22px;

    max-height:
      calc(
        100vh - 20px
      );

    border-radius: 16px;

  }

`;


/* =========================================
   MODAL HEADER
========================================= */

export const ModalHeader = styled.div`

  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;

`;


/* =========================================
   MODAL TITLE
========================================= */

export const ModalTitle = styled.h2`

  margin: 0;

  color: #222222;

  font-size: 25px;

  font-weight: 700;

`;


/* =========================================
   CLOSE BUTTON
========================================= */

export const CloseButton = styled.button`

  width: 40px;

  height: 40px;

  flex-shrink: 0;

  border: none;

  border-radius: 50%;

  background: #f4f4f4;

  color: #444444;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: .2s;


  svg {

    font-size: 20px;

  }


  &:hover {

    background: #000000;

    color: #f9be06;

    transform:
      rotate(90deg);

  }

`;


/* =========================================
   MODAL IMAGE
========================================= */

export const ModalImage = styled.div`

  width: 100%;

  height: 280px;

  margin-bottom: 25px;

  border-radius: 17px;

  overflow: hidden;

  background: #f5f5f5;

  box-shadow:
    0 6px 18px
    rgba(
      0,
      0,
      0,
      .12
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


/* =========================================
   MODAL EVENT TITLE
========================================= */

export const ModalEventTitle = styled.h2`

  margin:
    0 0 12px;

  color: #222222;

  font-size: 27px;

  line-height: 1.25;

  font-weight: 700;

`;


/* =========================================
   MODAL DESCRIPTION
========================================= */

export const ModalDescription = styled.p`

  margin:
    0 0 25px;

  color:
    rgba(
      0,
      0,
      0,
      .68
    );

  font-size: 15px;

  line-height: 1.7;

  white-space: pre-wrap;

`;


/* =========================================
   MODAL INFO LIST
========================================= */

export const ModalInfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 12px;

`;


/* =========================================
   MODAL INFO ITEM
========================================= */

export const ModalInfoItem = styled.div`

  display: flex;

  align-items: center;

  gap: 13px;

  padding: 13px;

  border-radius: 12px;

  background: #fafafa;

  border:
    1px solid #eeeeee;


  & > svg {

    flex-shrink: 0;

    width: 20px;

    height: 20px;

    color: #f9be06;

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