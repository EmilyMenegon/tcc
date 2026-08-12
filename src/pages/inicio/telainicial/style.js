import styled from "styled-components";


/* ============================================================
   PAGE
============================================================ */

export const Page = styled.div`

  width: 100%;
  min-height: 100vh;

  background: #fff;

  font-family: "Poppins", sans-serif;

  overflow-x: hidden;

  position: relative;

  margin: 0;
  padding: 0;

  box-sizing: border-box;


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

`;


/* ============================================================
   HERO WRAPPER
============================================================ */

export const HeroWrapper = styled.div`

  width: 100%;

  height: 100vh;
  min-height: 100vh;

  position: fixed;

  top: 0;
  left: 0;

  z-index: 1;

  background: #fff;

  margin: 0;
  padding: 0;

  overflow: hidden;

`;


/* ============================================================
   HERO
============================================================ */

export const Hero = styled.section`

  width: 100%;

  height: 100vh;
  min-height: 100vh;

  background: #fff;

  position: relative;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  margin: 0;
  padding: 0;

`;


/* ============================================================
   HEADER
============================================================ */

export const Header = styled.header`

  width: 90%;

  margin: 25px auto 0;

  display: flex;

  align-items: center;

  justify-content: space-between;

  position: relative;

  z-index: 20;

  flex-shrink: 0;


  @media (max-width: 768px) {

    width: 92%;

    margin-top: 20px;

  }

`;


export const Logo = styled.div`

  width: 120px;

  flex-shrink: 0;


  img {

    width: 100%;
    height: auto;

    display: block;

    object-fit: contain;

  }


  @media (max-width: 768px) {

    width: 90px;

  }

`;


export const HeaderBar = styled.div`

  flex: 1;

  height: 1px;

  margin: 0 30px;

  background: #111;


  @media (max-width: 768px) {

    margin: 0 15px;

  }

`;


export const SocialIcons = styled.div`

  display: flex;

  align-items: center;

  gap: 18px;


  @media (max-width: 768px) {

    gap: 12px;

  }

`;


export const SocialIcon = styled.a`

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: clamp(1.5rem, 2.2vw, 2.3rem);

  color: #111;

  text-decoration: none;

  transition:
    color 0.25s ease,
    transform 0.25s ease;


  &:hover {

    color: #f9be06;

    transform: translateY(-3px);

  }

`;


/* ============================================================
   HERO CONTENT
============================================================ */

export const Container = styled.main`

  width: 85%;

  flex: 1;

  min-height: 0;

  margin: 30px auto 0;

  padding-bottom: 30px;

  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 50px;

  position: relative;

  z-index: 2;


  @media (max-width: 768px) {

    width: 90%;

    margin-top: 25px;

    padding-bottom: 25px;

    flex-direction: column;

    justify-content: center;

    text-align: center;

    gap: 25px;

  }

`;


export const LeftSide = styled.div`

  width: 48%;

  display: flex;

  flex-direction: column;

  justify-content: center;


  @media (max-width: 768px) {

    width: 100%;

    align-items: center;

  }

`;


export const BigText = styled.h1`

  margin: 0 0 25px;

  color: #111;

  font-size: clamp(2.5rem, 4vw, 4.5rem);

  line-height: 1.15;

  font-weight: 900;


  span {

    color: #f9be06;

  }


  @media (max-width: 768px) {

    font-size: 2.2rem;

  }


  @media (max-width: 480px) {

    font-size: 1.9rem;

  }

`;


export const SmallText = styled.p`

  width: 85%;

  margin: 0 0 30px;

  color: #444;

  font-size: clamp(1rem, 1.2vw, 1.2rem);

  line-height: 1.7;


  @media (max-width: 768px) {

    width: 100%;

  }

`;


/* ============================================================
   BUTTONS
============================================================ */

export const Buttons = styled.div`

  display: flex;

  align-items: center;

  width: 100%;

  margin-top: 0;


  a {

    width: auto;

    text-decoration: none;

  }


  @media (max-width: 768px) {

    justify-content: center;

    a {

      width: auto !important;

    }

  }

`;


export const PrimaryButton = styled.button`

  width: auto;

  padding: 18px 28px;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 10px;

  border: none;

  border-radius: 12px;

  background: #f9be06;

  color: #111;

  font-size: 1rem;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    transform 0.25s ease;


  &:hover {

    background: #111;

    color: #f9be06;

    transform: translateY(-3px);

  }


  svg {

    transition: transform 0.25s ease;

  }


  &:hover svg {

    transform: translateX(6px);

  }

`;



/* ============================================================
   HERO IMAGE
============================================================ */

export const ImageBox = styled.div`

  width: 50%;

  display: flex;

  justify-content: center;

  align-items: center;

  position: relative;


  @media (max-width: 768px) {

    display: none;

  }

`;


export const Image = styled.img`

  width: 100%;

  max-width: 650px;

  height: auto;

  display: block;

  object-fit: contain;

  position: relative;

  z-index: 2;

`;


export const Circle = styled.span`

  position: absolute;

  width: ${({ $size }) => $size || "50px"};

  height: ${({ $size }) => $size || "50px"};

  top: ${({ $top }) => $top || "auto"};

  left: ${({ $left }) => $left || "auto"};

  right: ${({ $right }) => $right || "auto"};

  bottom: ${({ $bottom }) => $bottom || "auto"};

  border-radius: 50%;

  background: #f9be06;

  opacity: 0.9;

  box-shadow:
    0 0 20px rgba(249, 190, 6, 0.4);

  z-index: 1;


  @media (max-width: 768px) {

    display: none;

  }

`;


/* ============================================================
   MARQUEE
============================================================ */

export const MarqueeSection = styled.section`

  width: 100%;

  height: 180px;

  position: relative;

  z-index: 30;

  overflow: hidden;

  display: flex;

  align-items: center;

  justify-content: center;

  background: #f9be06;

  margin: 100vh 0 0 !important;

  padding: 0 !important;

  border: 0;

  box-shadow: none;

  flex-shrink: 0;

`;


export const MarqueeReveal = styled.div`

  width: 100%;

  height: 180px;

  display: flex;

  align-items: center;

  position: relative;

  overflow: hidden;

  opacity: 1;

  visibility: visible;

  will-change: transform;

  z-index: 31;

  margin: 0;

  padding: 0;

`;


export const MarqueeTrack = styled.div`

  display: flex;

  align-items: center;

  width: max-content;

  min-width: max-content;

  min-height: 180px;

  height: 180px;

  flex-shrink: 0;

  will-change: transform;

  margin: 0;

  padding: 0;

`;


export const Phrase = styled.span`

  flex-shrink: 0;

  margin: 0 10px;

  color: #111;

  font-size: clamp(1.3rem, 2.5vw, 1.8rem);

  font-weight: 800;

  white-space: nowrap;

  letter-spacing: 1px;

`;


export const AnimatedImage = styled.img`

  width: 180px;

  height: 110px;

  object-fit: cover;

  border-radius: 15px;

  margin: 0 20px;

  flex-shrink: 0;

  display: block;

  transition: transform 0.3s ease;


  &:hover {

    transform: scale(1.08);

  }


  @media (max-width: 768px) {

    width: 130px;

    height: 80px;

    margin: 0 12px;

  }

`;


/* ============================================================
   ABOUT
============================================================ */

export const AboutSection = styled.section`

  width: 100%;

  background: #f5f5f5;

  padding: 70px 0 85px;

  overflow: hidden;

  position: relative;

  z-index: 12;

  margin: 0;


  @media (max-width: 900px) {

    padding: 55px 0 65px;

  }

`;


/* ============================================================
   TÍTULO DO SOBRE
============================================================ */

export const AboutTitle = styled.h2`

  width: 100%;

  margin: 0 0 55px;

  padding: 0 20px;

  text-align: center;

  color: #111;

  font-size: clamp(2.2rem, 4vw, 3.2rem);

  font-weight: 900;

  line-height: 1;


  span {

    color: #f9be06;

  }


  @media (max-width: 900px) {

    margin-bottom: 40px;

  }

`;


/* ============================================================
   CONTEÚDO DO ABOUT
============================================================ */

export const AboutContainer = styled.div`

  width: 82%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(0, 1fr);

  align-items: center;

  gap: 70px;


  @media (max-width: 1050px) {

    gap: 45px;

  }


  @media (max-width: 900px) {

    width: 90%;

    grid-template-columns: 1fr;

    gap: 45px;

  }

`;


/* ============================================================
   LADO ESQUERDO DO ABOUT
============================================================ */

export const AboutContent = styled.div`

  width: 100%;

  display: flex;

  flex-direction: column;

  justify-content: center;

`;


export const AboutText = styled.p`

  margin: 0;

  color: #333;

  font-size: clamp(0.95rem, 1.25vw, 1.08rem);

  line-height: 1.75;

  text-align: justify;


  b {

    font-weight: 800;

    color: #111;

  }


  @media (max-width: 900px) {

    text-align: left;

  }

`;


/* ============================================================
   ENCONTRE
============================================================ */

export const AboutFindBox = styled.div`

  width: 100%;

  margin-top: 35px;


  h3 {

    margin: 0 0 18px;

    color: #111;

    font-size: clamp(1.25rem, 2vw, 1.7rem);

    font-weight: 900;

  }

`;


export const AboutWords = styled.div`

  width: 100%;

  display: flex;

  flex-wrap: wrap;

  gap: 10px;

`;


export const AboutWord = styled.span`

  position: relative;

  padding: 8px 14px;

  border-radius: 20px;

  background: ${({ $found }) =>
    $found
      ? "#f9be06"
      : "#e5e5e5"};

  color: #111;

  font-size: clamp(
    0.68rem,
    1vw,
    0.9rem
  );

  font-weight: 800;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    color 0.2s ease;


  ${({ $found }) =>
    $found &&
    `
      transform: scale(1.03);
    `}


  /* ==========================================================
     RISCO DA PALAVRA ENCONTRADA
  ========================================================== */

  ${({ $found }) =>
    $found &&
    `
      &::after {
        content: "";

        position: absolute;

        left: 8px;
        right: 8px;

        top: 50%;

        height: 3px;

        background: #111;

        transform:
          translateY(-50%);

        border-radius: 5px;

        pointer-events: none;
      }
    `}

`;


/* ============================================================
   LADO DIREITO — JOGO
============================================================ */

export const AboutGame = styled.div`

  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  position: relative;

`;


/* ============================================================
   TABULEIRO
============================================================ */

export const AboutBoard = styled.div`

  width: min(100%, 570px);

  aspect-ratio: 1;

  background: #f9be06;

  padding: 3.5%;

  border-radius: 22px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  position: relative;

  overflow: hidden;

  box-shadow:
    0 12px 30px
    rgba(0, 0, 0, 0.14);


  &::after {

    content: "";

    position: absolute;

    inset: 0;

    background: rgba(0, 0, 0, 0);

    border-radius: inherit;

    pointer-events: none;

    z-index: 10;

    transition:
      background 0.5s ease;


    ${({ $completed }) =>
      $completed &&
      `
        background: rgba(0, 0, 0, 0.42);
      `}

  }

`;


/* ============================================================
   MENSAGEM DO JOGO
============================================================ */

export const GameFeedback = styled.div`

  position: absolute;

  left: 50%;

  top: 50%;

  transform:
    translate(-50%, -50%);

  z-index: 20;

  width: max-content;

  max-width: 90%;

  padding: 16px 25px;

  border-radius: 14px;

  background: ${({ $success }) =>
    $success
      ? "#f9be06"
      : "#111"};

  color: ${({ $success }) =>
    $success
      ? "#111"
      : "#fff"};

  font-size: ${({ $success }) =>
    $success
      ? "clamp(1rem, 2vw, 1.5rem)"
      : "clamp(1.5rem, 4vw, 2.8rem)"};

  font-weight: 900;

  text-align: center;

  line-height: 1.2;

  box-shadow:
    0 12px 30px
    rgba(0, 0, 0, 0.25);

  pointer-events: none;

  white-space: normal;

`;


/* ============================================================
   LINHAS DO TABULEIRO
============================================================ */

export const AboutRow = styled.div`

  display: flex;

  width: 100%;

  justify-content: center;

`;


/* ============================================================
   LETRAS
============================================================ */

export const AboutLetter = styled.button`

  width: 8%;

  aspect-ratio: 1;

  margin: 0.35%;

  padding: 0;

  border: none;

  border-radius: 10%;

  background:
    ${({ $active, $found }) =>

      $active
        ? "#111"
        : $found
        ? "#32c36c"
        : "#fff"};

  color:
    ${({ $active }) =>
      $active
        ? "#fff"
        : "#111"};

  font-size: clamp(
    0.5rem,
    1.6vw,
    0.9rem
  );

  font-weight: 800;

  cursor: pointer;

  user-select: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;


  &:hover {

    background: #111;

    color: #fff;

    transform: scale(1.08);

  }


  &:active {

    transform: scale(0.95);

  }


  @media (max-width: 900px) {

    font-size: clamp(
      0.55rem,
      3vw,
      0.9rem
    );

  }

`;


/* ============================================================
   FEATURES
============================================================ */

export const FeaturesSection = styled.section`

  width: 100%;

  background: #fff;

  position: relative;

  z-index: 12;

  margin: 0 !important;

  padding: 50px 0 80px !important;

  overflow: hidden;

  border: 0;

`;


export const SectionTitle = styled.h2`

  width: 100%;

  margin: 0 0 50px !important;

  padding: 15px 0 0 !important;

  text-align: center;

  color:
    ${({ $dark }) =>
      $dark
        ? "#fff"
        : "#111"};

  font-size: clamp(
    1.8rem,
    4vw,
    2.7rem
  );

  font-weight: 900;

  line-height: 1.1;

  box-sizing: border-box;


  span {

    color: #f9be06;

  }

`;


export const FeaturesGrid = styled.div`

  width: 82%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 0;


  @media (max-width: 900px) {

    grid-template-columns:
      repeat(2, 1fr);

  }


  @media (max-width: 550px) {

    width: 88%;

    grid-template-columns: 1fr;

  }

`;


export const FeatureCard = styled.div`

  min-height: 220px;

  padding: 20px 30px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: flex-start;

  text-align: center;

  border-right: 1px solid #f9be06;

  opacity: 1;


  &:last-child {

    border-right: none;

  }


  @media (max-width: 900px) {

    &:nth-child(2) {

      border-right: none;

    }


    &:nth-child(1),
    &:nth-child(2) {

      border-bottom:
        1px solid #f9be06;

    }


    &:nth-child(3),
    &:nth-child(4) {

      border-bottom: none;

    }

  }


  @media (max-width: 550px) {

    border-right: none;

    border-bottom:
      1px solid #f9be06 !important;


    &:last-child {

      border-bottom:
        none !important;

    }

  }

`;


export const FeatureIcon = styled.div`

  width: 85px;

  height: 85px;

  margin-bottom: 15px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #111;

  background: #f9be06;

  border-radius:
    45% 55% 50% 50%;

  font-size: 2.7rem;

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;


  ${FeatureCard}:hover & {

    transform:
      translateY(-6px)
      rotate(-4deg);

    box-shadow:
      0 10px 25px
      rgba(
        249,
        190,
        6,
        0.3
      );

  }

`;


export const FeatureTitle = styled.h3`

  margin: 5px 0 10px;

  color: #111;

  font-size: 1rem;

  font-weight: 900;

`;


export const FeatureText = styled.p`

  max-width: 190px;

  margin: 0;

  color: #444;

  font-size: 0.9rem;

  line-height: 1.5;

`;


/* ============================================================
   NUMBERS
============================================================ */

export const NumbersSection = styled.section`

  width: 100%;

  padding: 70px 0;

  background: #111;

  position: relative;

  overflow: hidden;

  z-index: 12;

  margin: 0;


  &::after {

    content: "";

    position: absolute;

    right: -70px;

    bottom: -80px;

    width: 220px;

    height: 220px;

    border: 35px solid #fff;

    border-radius: 50%;

    opacity: 0.08;

  }

`;


export const NumbersContainer = styled.div`

  width: 82%;

  max-width: 1200px;

  margin: 0 auto;

  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr
    auto
    1fr
    auto
    1fr;

  align-items: center;

  gap: 35px;

  position: relative;

  z-index: 1;


  ${SectionTitle} {

    grid-column: 1 / 8;

  }


  @media (max-width: 800px) {

    width: 90%;

    grid-template-columns:
      repeat(2, 1fr);

    gap: 35px 15px;


    ${SectionTitle} {

      grid-column: 1 / 3;

    }

  }


  @media (max-width: 500px) {

    grid-template-columns: 1fr;


    ${SectionTitle} {

      grid-column: 1;

    }

  }

`;


export const NumberItem = styled.div`

  text-align: center;

  opacity: 1;

`;


export const NumberValue = styled.div`

  color: #f9be06;

  font-size:
    clamp(
      2.5rem,
      5vw,
      4rem
    );

  font-weight: 900;

  line-height: 1;

  margin-bottom: 10px;

  font-variant-numeric:
    tabular-nums;

`;


export const NumberLabel = styled.div`

  color: #fff;

  font-size: 0.85rem;

  font-weight: 700;

  line-height: 1.5;

`;


export const NumberDivider = styled.div`

  width: 1px;

  height: 100px;

  background: #f9be06;

  opacity: 0.8;


  @media (max-width: 800px) {

    display: none;

  }

`;


/* ============================================================
   CTA
============================================================ */

export const CTASection = styled.section`

  width: 100%;

  padding: 30px 0;

  background: #f9be06;

  overflow: hidden;

  position: relative;

  z-index: 12;

  margin: 0;

`;


export const CTAContainer = styled.div`

  width: 82%;

  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  align-items: center;

  gap: 30px;


  @media (max-width: 850px) {

    flex-direction: column;

    text-align: center;

    gap: 15px;

  }

`;


export const CTAIcon = styled.div`

  color: #111;

  font-size: 5rem;

  transform: rotate(-15deg);


  @media (max-width: 850px) {

    font-size: 3.5rem;

  }

`;


export const CTAText = styled.div`

  flex: 1;

`;


export const CTATitle = styled.h2`

  margin: 0;

  color: #111;

  font-size:
    clamp(
      1.5rem,
      3vw,
      2.2rem
    );

  font-weight: 900;

  line-height: 1.1;

`;


export const CTASubtitle = styled.p`

  margin: 5px 0 0;

  color: #111;

  font-size:
    clamp(
      0.9rem,
      2vw,
      1.2rem
    );

  font-weight: 700;

`;


export const CTALink = styled.a`

  min-width: 190px;

  padding: 15px 22px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  border-radius: 12px;

  background: #111;

  color: #fff;

  text-decoration: none;

  font-size: 0.85rem;

  font-weight: 800;

  transition:
    color 0.25s ease,
    transform 0.25s ease;


  &:hover {

    color: #f9be06;

    transform: translateY(-3px);

  }


  svg {

    transition:
      transform 0.25s ease;

  }


  &:hover svg {

    transform:
      translateX(5px);

  }

`;