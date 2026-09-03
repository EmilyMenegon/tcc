import styled, {
  createGlobalStyle,
} from "styled-components";

/* ============================================================
   REMOVE MARGENS PADRÃO DO NAVEGADOR
============================================================ */

export const GlobalStyle =
  createGlobalStyle`

  html,
  body,
  #root {
    margin: 0 !important;
    padding: 0 !important;

    width: 100%;
    min-width: 100%;

    min-height: 100%;
  }

  html,
  body {
    overflow-x: hidden;
  }

  body {
    background: #fff;

    font-family:
      "Poppins",
      sans-serif;
  }

  #root {
    margin: 0 !important;
    padding: 0 !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

/* ============================================================
   PAGE
============================================================ */

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 0;

  background: #fff;

  font-family:
    "Poppins",
    sans-serif;

  overflow-x: hidden;

  position: relative;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

/* ============================================================
   HERO FIXO
============================================================ */

export const HeroWrapper =
  styled.div`
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

  margin: 0;
  padding: 0;

  background: #fff;

  position: relative;

  display: flex;
  flex-direction: column;

  overflow: hidden;
`;

/* ============================================================
   HEADER
============================================================ */

export const Header = styled.header`
  width: 90%;

  margin: 25px auto 0;
  padding: 0;

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
  width: 150px;

  flex-shrink: 0;

  margin: 0;
  padding: 0;

  img {
    width: 100%;
    height: auto;

    margin: 0;
    padding: 0;

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
  padding: 0;

  background: #111;

  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;

  align-items: center;

  gap: 18px;

  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

export const SocialIcon = styled.a`
  display: flex;

  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  font-size:
    clamp(
      1.5rem,
      2.2vw,
      2.3rem
    );

  color: #111;

  text-decoration: none;

  transition:
    color 0.25s ease,
    transform 0.25s ease;

  &:hover {
    color: #ffdb53;

    transform:
      translateY(-3px);
  }
`;

/* ============================================================
   HERO CONTENT
============================================================ */

export const Container =
  styled.main`
    width: 85%;

    flex: 1;

    min-height: 0;

    margin: 30px auto 0;

    padding:
      0 0 30px;

    display: flex;

    align-items: center;

    justify-content:
      space-between;

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

export const LeftSide =
  styled.div`
    width: 48%;

    margin: 0;
    padding: 0;

    display: flex;

    flex-direction: column;

    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;

      align-items: center;
    }
  `;

export const BigText =
  styled.h1`
    margin: 0 0 25px;
    padding: 0;

    color: #111;
    

    font-size:
      clamp(
        2.5rem,
        4vw,
        4.5rem
      );

    line-height: 1.15;

    font-weight: 900;

  span {
  color: #ffdb53;
}

    @media (max-width: 768px) {
      font-size: 2.2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.9rem;
    }
  `;

export const SmallText =
  styled.p`
    width: 85%;

    margin: 0 0 30px;
    padding: 0;

    color: #444;

    font-size:
      clamp(
        1rem,
        1.2vw,
        1.2rem
      );

    line-height: 1.7;

    @media (max-width: 768px) {
      width: 100%;
    }
  `;

/* ============================================================
   BUTTONS
============================================================ */

export const Buttons =
  styled.div`
    display: flex;

    align-items: center;

    width: 100%;

    margin: 0;
    padding: 0;

    a {
      display: inline-flex;

      width: fit-content;

      margin: 0;
      padding: 0;

      text-decoration: none;
    }

    @media (max-width: 768px) {
      justify-content: center;
    }
  `;

/* ============================================================
   PRIMARY BUTTON
============================================================ */

export const PrimaryButton =
  styled.button`
    position: relative;

    width: auto;
    min-height: 64px;

    padding: 18px 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    border-radius: 12px;

    background: #ffdb53;

    color: #000;

    font-family:
      "Poppins",
      sans-serif;

    font-size:
      clamp(
        1rem,
        1.2vw,
        1.2rem
      );

    font-weight: 700;

    line-height: 1.7;

    cursor: pointer;

    overflow: hidden;

    isolation: isolate;

    transform: translateZ(0);

    transition:
      color 0.3s ease,
      transform 0.25s ease;

    &::before {
      content: "";

      position: absolute;

      left: var(--mouse-x, 50%);
      top: var(--mouse-y, 50%);

      width: 40px;
      height: 40px;

      border-radius: 50%;

      background: #831614;

      transform:
        translate(-50%, -50%)
        scale(0);

      pointer-events: none;

      z-index: 0;

      transition:
        transform 0.65s
        cubic-bezier(
          0.16,
          1,
          0.3,
          1
        );
    }

    .button-content {
      position: relative;

      z-index: 2;

      display: flex;

      align-items: center;
      justify-content: center;

      gap: 12px;

      color: inherit;

      transition:
        color 0.3s ease;
    }

    &:hover {
      color: #ffffff;

      transform:
        translateY(-3px);
    }

    &:hover::before {
      transform:
        translate(-50%, -50%)
        scale(18);
         color: #ffffff;
    }

    svg {
      flex-shrink: 0;

      transition:
        transform 0.3s
        cubic-bezier(
          0.16,
          1,
          0.3,
          1
        );
    }

    &:hover svg {
      transform:
        translateX(6px);
    }

    &:active {
      transform:
        translateY(0)
        scale(0.98);
    }

    @media (max-width: 768px) {
      min-height: 58px;

      padding:
        15px 22px;

      font-size: 0.95rem;
    }

    @media (max-width: 480px) {
      min-height: 54px;

      padding:
        14px 18px;

      font-size: 0.85rem;

      .button-content {
        gap: 9px;
      }
    }
  `;


/* ============================================================
   HERO IMAGE
============================================================ */

export const ImageBox =
  styled.div`
    width: 50%;

    margin: 0;
    padding: 0;

    display: flex;

    justify-content: center;
    align-items: center;

    position: relative;

    isolation: isolate;

    @media (max-width: 768px) {
      display: none;
    }
  `;

export const Image =
  styled.img`
    width: 100%;

    max-width: 750px;

    height: auto;

    margin: 0;
    padding: 0;

    display: block;

    object-fit: contain;

    position: relative;

    z-index: 2;
  `;

export const Circle =
  styled.span`
    position: absolute;

    width:
      ${({ $size }) =>
        $size || "50px"};

    height:
      ${({ $size }) =>
        $size || "50px"};

    top:
      ${({ $top }) =>
        $top || "auto"};

    left:
      ${({ $left }) =>
        $left || "auto"};

    right:
      ${({ $right }) =>
        $right || "auto"};

    bottom:
      ${({ $bottom }) =>
        $bottom || "auto"};

    border-radius: 50%;

    background: #ffdb53;

    opacity: 0.9;

    box-shadow:
      0 0 20px
      rgba(
        249,
        190,
        6,
        0.4
      );

    z-index: 1;

    @media (max-width: 768px) {
      display: none;
    }
  `;

export const PixelImage =
  styled.img`
    position: absolute;

    object-fit: contain;

    display: block;

    pointer-events: none;

    user-select: none;

    will-change: transform;

    z-index: 3;

    &.hero-pixel-01 {
      width: 100px;
      height: 100px;

      top: 7%;
      left: 16%;
    }

    &.hero-pixel-02 {
      width: 100px;
      height: 100px;

      top: 27%;
      right: 3%;
    }

    &.hero-pixel-03 {
      width: 120px;
      height: 120px;

      bottom: -13%;
      left: 16%;
    }

    @media (max-width: 1100px) {
      &.hero-pixel-01 {
        width: 60px;
        height: 60px;

        left: 12%;
      }

      &.hero-pixel-02 {
        width: 48px;
        height: 48px;

        right: 1%;
      }

      &.hero-pixel-03 {
        width: 65px;
        height: 65px;

        left: 8%;
      }
    }

    @media (max-width: 768px) {
      display: none;
    }
  `;

/* ============================================================
   MARQUEE
============================================================ */

export const MarqueeSection =
  styled.section`
    width: 100%;

    height: 180px;

    position: relative;

    z-index: 30;

    overflow: hidden;

    display: flex;

    align-items: center;
    justify-content: center;

    background: #ffdb53;

    margin:
      100vh 0 0 !important;

    padding: 0 !important;

    border: 0;

    box-shadow: none;

    flex-shrink: 0;
  `;

export const MarqueeReveal =
  styled.div`
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

export const MarqueeTrack =
  styled.div`
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

export const Phrase =
  styled.span`
    flex-shrink: 0;

    margin: 0 10px;
    padding: 0;

    color: #111;

    font-size:
      clamp(
        1.3rem,
        2.5vw,
        1.8rem
      );

    font-weight: 800;

    white-space: nowrap;

    letter-spacing: 1px;
  `;

export const AnimatedImage =
  styled.img`
    width: 180px;

    height: 110px;

    object-fit: cover;

    border-radius: 15px;

    margin: 0 20px;
    padding: 0;

    flex-shrink: 0;

    display: block;

    transition:
      transform 0.3s ease;

    &:hover {
      transform:
        scale(1.08);
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

export const AboutSection =
  styled.section`
    width: 100%;

    background: #f5f5f5;

    padding: 70px 0 85px;

    margin: 0;

    overflow: hidden;

    position: relative;

    z-index: 12;

    @media (max-width: 900px) {
      padding:
        55px 0 65px;
    }
  `;

export const AboutTitle =
  styled.h2`
    width: 100%;

    margin: 0 0 55px;

    padding: 0 20px;

    text-align: center;

    color: #111;

    font-size:
      clamp(
        2.2rem,
        4vw,
        3.2rem
      );

    font-weight: 900;

    line-height: 1;

    span {
      color: #ffdb53;
    }

    @media (max-width: 900px) {
      margin-bottom: 40px;
    }
  `;

export const AboutContainer =
  styled.div`
    width: 82%;

    max-width: 1200px;

    margin: 0 auto;
    padding: 0;

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

      grid-template-columns:
        1fr;

      gap: 45px;
    }
  `;

export const AboutContent =
  styled.div`
    width: 100%;

    margin: 0;
    padding: 0;

    display: flex;

    flex-direction: column;

    justify-content: center;
  `;

export const AboutText =
  styled.p`
    margin: 0;
    padding: 0;

    color: #333;

    font-size:
      clamp(
        0.95rem,
        1.25vw,
        1.08rem
      );

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

export const AboutFindBox =
  styled.div`
    width: 100%;

    margin-top: 35px;

    h3 {
      margin: 0 0 18px;

      padding: 0;

      color: #111;

      font-size:
        clamp(
          1.25rem,
          2vw,
          1.7rem
        );

      font-weight: 900;
    }
  `;

export const AboutWords =
  styled.div`
    width: 100%;

    display: flex;

    flex-wrap: wrap;

    gap: 10px;

    margin: 0;
    padding: 0;
  `;

export const AboutWord =
  styled.span`
    position: relative;

    padding: 8px 14px;

    border-radius: 20px;

    background:
      ${({ $found }) =>
        $found
          ? "#ffdb53"
          : "#e5e5e5"};

    color: #111;

    font-size:
      clamp(
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
   GAME
============================================================ */

export const AboutGame =
  styled.div`
    width: 100%;

    display: flex;

    justify-content: center;

    align-items: center;

    position: relative;

    margin: 0;
    padding: 0;
  `;

export const AboutBoard =
  styled.div`
    width:
      min(
        100%,
        570px
      );

    aspect-ratio: 1;

    background: #ffdb53;

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
      rgba(
        0,
        0,
        0,
        0.14
      );

    &::after {
      content: "";

      position: absolute;

      inset: 0;

      background:
        rgba(
          0,
          0,
          0,
          0
        );

      border-radius:
        inherit;

      pointer-events: none;

      z-index: 10;

      transition:
        background 0.5s ease;

      ${({ $completed }) =>
        $completed &&
        `
          background:
            rgba(
              0,
              0,
              0,
              0.42
            );
        `}
    }
  `;

export const GameFeedback =
  styled.div`
    position: absolute;

    left: 50%;
    top: 50%;

    transform:
      translate(
        -50%,
        -50%
      );

    z-index: 20;

    width: max-content;

    max-width: 90%;

    padding: 16px 25px;

    border-radius: 14px;

    background:
      ${({ $success }) =>
        $success
          ? "#ffdb53"
          : "#831614"};

    color:
      ${({ $success }) =>
        $success
          ? "#111"
          : "#fff"};

    font-size:
      ${({ $success }) =>
        $success
          ? "clamp(1rem, 2vw, 1.5rem)"
          : "clamp(1.5rem, 4vw, 2.8rem)"};

    font-weight: 900;

    text-align: center;

    line-height: 1.2;

    box-shadow:
      0 12px 30px
      rgba(
        0,
        0,
        0,
        0.25
      );

    pointer-events: none;

    white-space: normal;
  `;

export const AboutRow =
  styled.div`
    display: flex;

    width: 100%;

    justify-content: center;

    margin: 0;
    padding: 0;
  `;

export const AboutLetter =
  styled.button`
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

    font-size:
      clamp(
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
      background: #831614;

      color: #fff;

      transform:
        scale(1.08);
    }

    &:active {
      transform:
        scale(0.95);
    }

    @media (max-width: 900px) {
      font-size:
        clamp(
          0.55rem,
          3vw,
          0.9rem
        );
    }
  `;

/* ============================================================
   FEATURES
============================================================ */

export const FeaturesSection =
  styled.section`
    width: 100%;

    background: #fff;

    position: relative;

    z-index: 12;

    margin: 0 !important;

    padding:
      50px 0 80px !important;

    overflow: hidden;

    border: 0;
  `;

export const SectionTitle =
  styled.h2`
    width: 100%;

    margin:
      0 0 50px !important;

    padding:
      15px 0 0 !important;

    text-align: center;

    color:
      ${({ $dark }) =>
        $dark
          ? "#fff"
          : "#111"};

    font-size:
      clamp(
        1.8rem,
        4vw,
        2.7rem
      );

    font-weight: 900;

    line-height: 1.1;

    span {
      color: #ffdb53;
    }
  `;

export const FeaturesGrid =
  styled.div`
    width: 82%;

    max-width: 1200px;

    margin: 0 auto;

    padding: 0;

    display: grid;

    grid-template-columns:
      repeat(
        4,
        1fr
      );

    gap: 0;

    @media (max-width: 900px) {
      grid-template-columns:
        repeat(
          2,
          1fr
        );
    }

    @media (max-width: 550px) {
      width: 88%;

      grid-template-columns:
        1fr;
    }
  `;

export const FeatureCard =
  styled.div`
    width: 100%;
    min-width: 0;
    min-height: 220px;

    padding: 20px 30px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: flex-start;

    text-align: center;

    position: relative;

    z-index: 10;

    background: #fff !important;

    border: 0 !important;
    outline: 0 !important;

    box-shadow: none !important;

    /*
      DIVISOR VERTICAL
      Fica exatamente entre os cards,
      como os divisores da seção "NÚMEROS".
    */
    &:not(:last-child)::after {
      content: "";

      position: absolute;

      top: 50%;
      right: 0;

      width: 1px;
      height: 100px;

      transform: translateY(-50%);

      background: #111;

      opacity: 0.8;

      pointer-events: none;
    }

    /*
      Remove os divisores no tablet,
      porque os cards passam para 2 colunas.
    */
    @media (max-width: 900px) {
      min-height: 220px;

      padding: 20px;

      &:not(:last-child)::after {
        display: none;
      }
    }

    /*
      Mobile: uma coluna, sem linhas.
    */
    @media (max-width: 550px) {
      min-height: auto;

      padding: 15px 10px;

      &:not(:last-child)::after {
        display: none;
      }
    }
  `;


export const FeatureIcon =
  styled.div`
    width: 85px;
    height: 85px;

    margin-bottom: 15px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #111;

    background: #ffdb53;

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

export const FeatureTitle =
  styled.h3`
    margin: 5px 0 10px;

    padding: 0;

    color: #111;

    font-size: 1rem;

    font-weight: 900;
  `;

export const FeatureText =
  styled.p`
    max-width: 190px;

    margin: 0;
    padding: 0;

    color: #444;

    font-size: 0.9rem;

    line-height: 1.5;
  `;

/* ============================================================
   NUMBERS
============================================================ */

export const NumbersSection =
  styled.section`
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

      border:
        35px solid #fff;

      border-radius: 50%;

      opacity: 0.08;
    }
  `;

export const NumbersContainer =
  styled.div`
    width: 82%;

    max-width: 1200px;

    margin: 0 auto;

    padding: 0;

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
        repeat(
          2,
          1fr
        );

      gap: 35px 15px;

      ${SectionTitle} {
        grid-column: 1 / 3;
      }
    }

    @media (max-width: 500px) {
      grid-template-columns:
        1fr;

      ${SectionTitle} {
        grid-column: 1;
      }
    }
  `;

export const NumberItem =
  styled.div`
    text-align: center;

    opacity: 1;

    margin: 0;
    padding: 0;
  `;

export const NumberValue =
  styled.div`
    color: #ffdb53;

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

export const NumberLabel =
  styled.div`
    color: #fff;

    font-size: 0.85rem;

    font-weight: 700;

    line-height: 1.5;

    margin: 0;
    padding: 0;
  `;

export const NumberDivider =
  styled.div`
    width: 1px;

    height: 100px;

    background: #ffdb53;

    opacity: 0.8;

    @media (max-width: 800px) {
      display: none;
    }
  `;

/* ============================================================
   CTA
============================================================ */

export const CTASection =
  styled.section`
    width: 100%;

    padding: 30px 0;

    background: #ffdb53;

    overflow: hidden;

    position: relative;

    z-index: 12;

    margin: 0;
  `;

export const CTAContainer =
  styled.div`
    width: 82%;

    max-width: 1200px;

    margin: 0 auto;

    padding: 0;

    display: flex;

    align-items: center;

    gap: 30px;

    @media (max-width: 850px) {
      flex-direction: column;

      text-align: center;

      gap: 15px;
    }
  `;

export const CTAIcon =
  styled.div`
    color: #111;

    font-size: 5rem;

    margin: 0;
    padding: 0;

    transform:
      rotate(-15deg);

    @media (max-width: 850px) {
      font-size: 3.5rem;
    }
  `;

export const CTAText =
  styled.div`
    flex: 1;

    margin: 0;
    padding: 0;
  `;

export const CTATitle =
  styled.h2`
    margin: 0;
    padding: 0;

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

export const CTASubtitle =
  styled.p`
    margin: 5px 0 0;
    padding: 0;

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
  position: relative;

  width: 310px;
  min-height: 64px;

  padding: 18px 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 12px;

  background: #111;

  color: #fff;

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    clamp(
      1rem,
      1.2vw,
      1.2rem
    );

  font-weight: 700;

  line-height: 1.7;

  text-decoration: none;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transform: translateZ(0);

  transition:
    color 0.3s ease,
    transform 0.25s ease;


  /* =========================================
     EFEITO LÍQUIDO
  ========================================= */

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);

    width: 40px;
    height: 40px;

    border-radius: 50%;

    background: #831614;

    transform:
      translate(-50%, -50%)
      scale(0);

    pointer-events: none;

    z-index: 0;

    transition:
      transform 0.65s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );
  }


  /* =========================================
     CONTEÚDO DO BOTÃO
  ========================================= */

  .button-content {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;
    justify-content: center;

    gap: 12px;

    color: inherit;

    transition:
      color 0.3s ease;
  }


  /* =========================================
     HOVER
  ========================================= */

  &:hover {
    color: #ffdb53;

    transform:
      translateY(-3px);
  }

  &:hover::before {
    transform:
      translate(-50%, -50%)
      scale(18);
  }


  /* =========================================
     SETA
  ========================================= */

  svg {
    flex-shrink: 0;

    transition:
      transform 0.3s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );
  }

  &:hover svg {
    transform:
      translateX(6px);
  }


  /* =========================================
     CLIQUE
  ========================================= */

  &:active {
    transform:
      translateY(0)
      scale(0.98);
  }


  /* =========================================
     RESPONSIVO
  ========================================= */

  @media (max-width: 768px) {
    width: 280px;

    min-height: 58px;

    padding:
      15px 22px;

    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    width: 260px;

    min-height: 54px;

    padding:
      14px 18px;

    font-size: 0.85rem;

    .button-content {
      gap: 9px;
    }
  }
`;