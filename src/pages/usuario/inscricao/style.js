import styled from "styled-components";


/* ==========================================
   PAGE
========================================== */

export const Page = styled.div`

  font-family:
    'Poppins',
    sans-serif;

  background: white;

  width: 100%;

  min-height: 100vh;

  display: flex;

  flex-direction: column;

  align-items: center;

`;


/* ==========================================
   TITLE
========================================== */

export const TitleArea = styled.div`

  width: 100%;

  text-align: center;

  padding: 2% 0;


  @media (max-width: 768px) {

    padding: 4% 0;

  }


  @media (max-width: 480px) {

    padding: 5% 0;

  }

`;


export const Title = styled.h1`

  font-size:
    clamp(
      24px,
      3vw,
      40px
    );

  margin: 0;

  text-align: center;

`;


/* ==========================================
   CONTAINER
========================================== */

export const Container = styled.div`

  width: 80%;

  min-height: 450px;

  margin: 2% auto;

  display: flex;

  border-radius: 20px;

  overflow: hidden;

  box-shadow:
    0 4px 15px
    rgba(
      0,
      0,
      0,
      0.1
    );


  /* ========================================
     TABLET
  ======================================== */

  @media (max-width: 768px) {

    width: 90%;

    flex-direction: column;

    margin: 4% auto;

    min-height: auto;

    align-items: center;

  }


  /* ========================================
     CELULAR
  ======================================== */

  @media (max-width: 480px) {

    width: 94%;

    margin: 5% auto;

    border-radius: 15px;

  }

`;


/* ==========================================
   LEFT SIDE
========================================== */

export const LeftSide = styled.div`

  width: 40%;

  background: #f9be06;

  color: black;

  padding: 5%;

  box-sizing: border-box;

  display: flex;

  flex-direction: column;

  align-items: center;


  @media (max-width: 768px) {

    width: 100%;

    padding: 7% 6%;

    align-items: center;

    text-align: center;

  }


  @media (max-width: 480px) {

    padding: 9% 8%;

  }

`;


/* ==========================================
   SECTION TITLE
========================================== */

export const SectionTitle = styled.h2`

  margin:
    0 0 8%;

  display: flex;

  justify-content: center;

  align-items: center;

  font-size:
    clamp(
      20px,
      2.5vw,
      30px
    );

  text-align: center;

  width: 100%;

`;


/* ==========================================
   INFO TEXT
========================================== */

export const InfoText = styled.div`

  width: 80%;

  display: grid;

  grid-template-columns:
    25% 75%;

  align-items: center;

  margin-bottom: 7%;

  box-sizing: border-box;


  svg {

    width:
      clamp(
        28px,
        3vw,
        40px
      );

    height:
      clamp(
        28px,
        3vw,
        40px
      );

    color: black;

    justify-self: center;

    flex-shrink: 0;

  }


  div {

    display: flex;

    flex-direction: column;

    justify-content: center;

    text-align: left;

    min-width: 0;

    padding-left: 8%;

  }


  strong {

    font-size:
      clamp(
        15px,
        1.5vw,
        18px
      );

    color: black;

  }


  p {

    margin:
      2% 0 0;

    font-size:
      clamp(
        12px,
        1.2vw,
        15px
      );

    opacity: .85;

    color: black;

    overflow-wrap: anywhere;

  }


  /* ========================================
     TABLET
  ======================================== */

  @media (max-width: 768px) {

    width: 65%;

    grid-template-columns:
      25% 75%;

    margin-bottom: 6%;


    div {

      padding-left: 6%;

    }

  }


  /* ========================================
     CELULAR
  ======================================== */

  @media (max-width: 480px) {

    width: 85%;

    grid-template-columns:
      25% 75%;

    margin-bottom: 8%;


    div {

      padding-left: 7%;

    }

  }

`;


/* ==========================================
   SOCIAL CONTAINER
========================================== */

export const SocialContainer = styled.div`

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 8%;

  width: 100%;

  min-height: 200px;

  flex: 1;


  @media (max-width: 768px) {

    min-height: auto;

    width: 100%;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 0;

  }


  @media (max-width: 480px) {

    min-height: auto;

    gap: 0;

  }

`;


/* ==========================================
   RIGHT SIDE
========================================== */

export const RightSide = styled.div`

  width: 60%;

  background: #ecf0f1;

  padding: 5%;

  box-sizing: border-box;

  display: flex;

  justify-content: center;


  @media (max-width: 768px) {

    width: 100%;

    padding: 7% 6%;

    justify-content: center;

  }


  @media (max-width: 480px) {

    padding: 9% 8%;

  }

`;


/* ==========================================
   FORM
========================================== */

export const Form = styled.form`

  display: flex;

  flex-direction: column;

  gap: 25px;

  width: 100%;


  @media (max-width: 768px) {

    width: 90%;

    gap: 25px;

  }


  @media (max-width: 480px) {

    width: 100%;

    gap: 20px;

  }

`;


/* ==========================================
   INPUT
========================================== */

export const Input = styled.input`

  width: 100%;

  height: 42px;

  padding:
    0 15px;

  box-sizing: border-box;

  border: none;

  border-radius: 20px;

  outline: none;

  transition: .2s;

  font-size: 14px;


  &:focus {

    box-shadow:
      0 0 0 2px
      #f9be06;

  }


  @media (max-width: 480px) {

    height: 42px;

    padding:
      0 15px;

    font-size: 14px;

  }

`;


/* ==========================================
   JÁ INSCRITO
========================================== */

export const AlreadyBox = styled.div`

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  text-align: center;

  gap: 14px;

  padding: 10% 5%;

  background: #fff;

  border-radius: 18px;

  box-shadow:
    0 4px 15px
    rgba(0, 0, 0, 0.08);


  svg {

    font-size: 48px;

    color: #f9be06;

  }

`;


export const AlreadyTitle = styled.h3`

  margin: 0;

  font-size:
    clamp(
      18px,
      2vw,
      22px
    );

  color: #111;

`;


export const AlreadyText = styled.p`

  margin: 0;

  font-size: 14px;

  color: #555;

  line-height: 1.5;

`;


export const AlreadyDetails = styled.div`

  width: 100%;

  max-width: 320px;

  margin-top: 6px;

  background: #ecf0f1;

  border-radius: 14px;

  padding: 16px 20px;

  display: flex;

  flex-direction: column;

  gap: 8px;

  text-align: left;


  span {

    font-size: 13px;

    color: #333;

  }


  strong {

    color: #111;

  }

`;


/* ==========================================
   SELECT
========================================== */

export const Select = styled.select`

  width: 100%;

  height: 42px;

  padding:
    0 15px;

  box-sizing: border-box;

  border: none;

  border-radius: 20px;

  outline: none;

  transition: .2s;

  font-size: 14px;

  background: #fff;

  color: #111;

  cursor: pointer;


  &:focus {

    box-shadow:
      0 0 0 2px
      #f9be06;

  }


  @media (max-width: 480px) {

    height: 42px;

    padding:
      0 15px;

    font-size: 14px;

  }

`;


/* ==========================================
   BUTTON
========================================== */

export const Button = styled.button`

  width: 100%;

  padding: 12px;

  border: none;

  border-radius: 20px;

  background: #f9be06;

  color: black;

  cursor: pointer;

  font-size: 15px;

  font-weight: bold;

  transition: .2s;


  &:hover {

    background: black;

    color: #f9be06;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(1px);

  }

`;