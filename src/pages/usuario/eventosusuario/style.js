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
   ESTILO DO ADMIN
========================================== */

export const EventCard = styled.article`

  position: relative;

  width: 100%;

  min-width: 0;

  min-height: 0;

  background: #ffffff;

  border: 1px solid #eeeeee;

  border-radius: 18px;

  overflow: hidden;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  box-sizing: border-box;

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

    z-index: 5;

  }


  &:focus-visible {

    outline:
      3px solid #f9be06;

    outline-offset: 4px;

  }

`;


/* ==========================================
   EVENT IMAGE
   ESTILO DO ADMIN
========================================== */

export const EventImage = styled.div`

  width: 100%;

  height: auto;

  aspect-ratio: 4 / 3;

  overflow: hidden;

  background: #eeeeee;

  flex-shrink: 0;


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


/* ==========================================
   IMAGE PLACEHOLDER
   ESTILO DO ADMIN
========================================== */

export const EventImagePlaceholder = styled.div`

  width: 100%;

  height: auto;

  aspect-ratio: 4 / 3;

  flex-shrink: 0;

  background: #eeeeee;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #b5b5b5;

  font-size: 45px;

`;


/* ==========================================
   EVENT CONTENT
   ESTILO DO ADMIN
========================================== */

export const EventContent = styled.div`

  width: 100%;

  padding: 18px;

  display: flex;

  flex-direction: column;

  flex: 1;

  min-height: 0;

  box-sizing: border-box;

  background: #ffffff;

`;


/* ==========================================
   EVENT TITLE
   ESTILO DO ADMIN
========================================== */

export const EventTitle = styled.h2`

  width: 100%;

  margin:
    0 0 8px;

  color: #222222;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 19px;

  font-weight: 700;

  line-height: 1.3;

  word-break: break-word;

`;


/* ==========================================
   EVENT DESCRIPTION
   ESTILO DO ADMIN
========================================== */

export const EventDescription = styled.p`

  width: 100%;

  margin:
    0 0 14px;

  color:
    rgba(
      0,
      0,
      0,
      .65
    );

  font-family:
    "Poppins",
    sans-serif;

  font-size: 13px;

  line-height: 1.5;

  display:
    -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;

`;


/* ==========================================
   INFO LIST
   ESTILO DO ADMIN
========================================== */

export const InfoList = styled.div`

  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 8px;

  margin-top: 0;

`;


/* ==========================================
   INFO ITEM
   ESTILO DO ADMIN
========================================== */

export const InfoItem = styled.div`

  width: 100%;

  display: flex;

  align-items: center;

  gap: 8px;

  color: #555555;

  font-size: 12px;

  min-width: 0;


  svg {

    flex-shrink: 0;

    color: #555555;

    font-size: 15px;

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
   ESTILO DO ADMIN
========================================== */

export const EventFooter = styled.div`

  width: 100%;

  margin-top: auto;

  padding-top: 18px;

  display: flex;

  align-items: center;

  gap: 10px;

`;


/* ==========================================
   ACCESS BUTTON
   ESTILO DO ADMIN
========================================== */

export const AccessButton = styled.button`

  flex: 1;

  width: 100%;

  min-height: 38px;

  height: 38px;

  padding:
    0 14px;

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

  transition: .2s ease;


  &:hover {

    background: #f9be06;

    color: #111111;

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