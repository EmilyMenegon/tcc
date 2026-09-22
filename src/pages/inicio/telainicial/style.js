import styled, {
  createGlobalStyle
} from "styled-components";

export const GlobalStyle =
  createGlobalStyle`
    html,
    body,
    #root {
      margin: 0 !important;
      padding: 0 !important;
      width: 100%;
      min-height: 100%;
    }

    html,
    body {
      overflow-x: hidden;
    }

    body {
      background: #fff;
      font-family: "Poppins", sans-serif;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    button,
    input,
    textarea,
    select {
      font-family: inherit;
    }

    img,
    svg,
    video {
      max-width: 100%;
    }
  `;

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  position: relative;
`;

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  inset: 0;
  z-index: 1;
  background: #fff;
  overflow: hidden;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100vh;
  background: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Header = styled.header`
  width: 90%;
  margin: 25px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 20;

  @media (max-width: 768px) {
    width: 92%;
    margin-top: 20px;
  }
`;

export const Logo = styled.div`
  width: 150px;

  img {
    width: 100%;
    display: block;
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
  color: #111;
  font-size: 1.7rem;
  text-decoration: none;
  transition: 0.25s ease;

  &:hover {
    color: #831614;
    transform: translateY(-3px);
  }
`;

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
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
    color: #ffdb53;
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
  font-size: 1.05rem;
  line-height: 1.7;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const PrimaryButton = styled.button`
  position: relative;
  min-height: 64px;
  padding: 18px 32px;
  border: none;
  border-radius: 12px;
  background: #ffdb53;
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #831614;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.65s ease;
    z-index: 0;
  }

  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(18);
  }

  svg {
    transition: 0.3s ease;
  }

  &:hover svg {
    transform: translateX(6px);
  }
`;

export const ImageBox = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 750px;
  display: block;
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
  background: #ffdb53;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const PixelImage = styled.img`
  position: absolute;
  object-fit: contain;
  pointer-events: none;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MarqueeSection = styled.section`
  width: 100%;
  height: 180px;
  margin: 100vh 0 0 !important;
  padding: 0 !important;
  position: relative;
  z-index: 30;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: #ffdb53;
`;

export const InkPaint = styled.div`
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 55px;
  background: url("/ink-yellow.svg")
    center bottom / 100% 100%
    no-repeat;
  z-index: 50;
  pointer-events: none;
`;

export const MarqueeReveal = styled.div`
  width: 100%;
  height: 180px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 31;
`;

export const MarqueeTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  min-width: max-content;
  height: 180px;
  will-change: transform;
`;

export const Phrase = styled.span`
  flex-shrink: 0;
  margin: 0 10px;
  color: #111;
  font-size: clamp(1.3rem, 2.5vw, 1.8rem);
  font-weight: 800;
  white-space: nowrap;
`;

export const AnimatedImage = styled.img`
  width: 180px;
  height: 110px;
  object-fit: cover;
  border-radius: 15px;
  margin: 0 20px;
  flex-shrink: 0;
`;

export const AboutSection = styled.section`
  width: 100%;
  background: #f5f5f5;
  padding: 70px 0 85px;
  position: relative;
  z-index: 12;
`;

export const AboutTitle = styled.h2`
  margin: 0 0 55px;
  text-align: center;
  color: #111;
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  font-weight: 900;

  span {
    color: #ffdb53;
  }
`;

export const AboutContainer = styled.div`
  width: 82%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 70px;

  @media (max-width: 900px) {
    width: 90%;
    grid-template-columns: 1fr;
  }
`;

export const AboutContent = styled.div`
  width: 100%;
`;

export const AboutText = styled.p`
  margin: 0;
  color: #333;
  font-size: 1rem;
  line-height: 1.75;
  text-align: justify;

  b {
    color: #111;
    font-weight: 800;
  }
`;

export const AboutFindBox = styled.div`
  margin-top: 35px;

  h3 {
    margin: 0 0 18px;
    color: #111;
    font-size: 1.5rem;
    font-weight: 900;
  }
`;

export const AboutWords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const AboutWord = styled.span`
  position: relative;
  padding: 8px 14px;
  border-radius: 20px;
  background: ${({ $found }) =>
    $found ? "#ffdb53" : "#e5e5e5"};
  color: #111;
  font-size: 0.8rem;
  font-weight: 800;
  transition: 0.2s ease;

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
        transform: translateY(-50%);
        border-radius: 5px;
      }
    `}
`;

export const AboutGame = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const AboutBoard = styled.div`
  width: min(100%, 570px);
  aspect-ratio: 1;
  background: #ffdb53;
  padding: 3.5%;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 12px 30px rgba(0,0,0,.14);

  ${({ $completed }) =>
    $completed &&
    `
      box-shadow:
        0 0 0 5px #831614,
        0 12px 30px rgba(0,0,0,.18);
    `}
`;

export const GameFeedback = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 20;
  max-width: 90%;
  padding: 16px 25px;
  border-radius: 14px;

  background: ${({ $success }) =>
    $success ? "#ffdb53" : "#831614"};

  color: ${({ $success }) =>
    $success ? "#111" : "#fff"};

  font-size: ${({ $success }) =>
    $success
      ? "clamp(1rem, 2vw, 1.5rem)"
      : "clamp(1.5rem, 4vw, 2.8rem)"};

  font-weight: 900;
  text-align: center;
  pointer-events: none;
`;

export const AboutRow = styled.div`
  display: flex;
  width: 100%;
`;

export const AboutLetter = styled.button`
  width: 8%;
  aspect-ratio: 1;
  margin: 0.35%;
  padding: 0;
  border: none;
  border-radius: 10%;

  background: ${({ $active, $found }) =>
    $active
      ? "#111"
      : $found
      ? "#32c36c"
      : "#fff"};

  color: ${({ $active }) =>
    $active ? "#fff" : "#111"};

  font-size: clamp(.5rem, 1.6vw, .9rem);
  font-weight: 800;
  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: #831614;
    color: #fff;
    transform: scale(1.08);
  }
`;

export const FeaturesSection = styled.section`
  width: 100%;
  background: #fff;
  position: relative;
  z-index: 12;
  padding: 50px 0 80px !important;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  margin: 0 0 20px !important;
  padding: 15px 0 0 !important;
  text-align: center;
  color: #111;
  font-size: clamp(1.8rem, 4vw, 2.7rem);
  font-weight: 900;

  span {
    color: #ffdb53;
  }
`;

export const FeaturesGrid = styled.div`
  width: 82%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
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
  text-align: center;
  background: #fff;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 100px;
    background: #111;
  }

  position: relative;

  @media (max-width: 900px) {
    &:not(:last-child)::after {
      display: none;
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
  background: #ffdb53;
  border-radius: 45% 55% 50% 50%;
  font-size: 2.7rem;
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
  font-size: .9rem;
  line-height: 1.5;
`;

/* ==========================================
   GALERIA
========================================== */

export const GallerySection = styled.section`
  width: 100%;
  background: #f5f5f5;
  position: relative;
  z-index: 12;
  padding: 70px 0 90px;
  overflow: hidden;
`;

export const GalleryWrapper = styled.div`
  width: 88%;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
`;

export const GalleryHint = styled.p`
  width: 100%;
  margin: 0 0 22px;
  text-align: center;
  color: #777;
  font-size: .85rem;
  font-weight: 600;
  letter-spacing: .5px;
`;

export const GalleryViewport = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: grab;
  position: relative;

  &:active {
    cursor: grabbing;
  }
`;

export const GalleryTrack = styled.div`
  display: flex;
  align-items: stretch;
  width: max-content;
  will-change: transform;
  padding: 6px 0 16px;
`;

export const GalleryCard = styled.div`
  flex-shrink: 0;
  width: 300px;
  height: 220px;
  margin-right: 22px;
  border-radius: 18px;
  overflow: hidden;
  background: #e5e5e5;
  box-shadow: 0 10px 25px rgba(0,0,0,.12);

  @media (max-width: 768px) {
    width: 230px;
    height: 170px;
    margin-right: 16px;
  }
`;

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
  -webkit-user-drag: none;
`;

export const GalleryState = styled.div`
  width: 100%;
  min-height: 220px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #777;
  font-size: .95rem;
  font-weight: 600;
`;

export const GalleryArrows = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
`;

export const GalleryArrowButton = styled.button`
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: #111;
  color: #ffdb53;
  font-size: 1.1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: .2s ease;

  &:hover {
    background: #831614;
    transform: translateY(-2px);
  }

  &:active {
    transform: scale(.95);
  }
`;

/* ==========================================
   CTA
========================================== */

export const CTASection = styled.section`
  width: 100%;
  padding: 30px 0;
  background: #ffdb53;
  position: relative;
  z-index: 12;
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
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 900;
`;

export const CTASubtitle = styled.p`
  margin: 5px 0 0;
  color: #111;
  font-size: clamp(.9rem, 2vw, 1.2rem);
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

  border-radius: 12px;
  background: #111;
  color: #fff;

  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  overflow: hidden;
  isolation: isolate;

  transition: .3s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #831614;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .65s ease;
    z-index: 0;
  }

  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &:hover {
    color: #ffdb53;
    transform: translateY(-3px);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(18);
  }

  &:hover svg {
    transform: translateX(6px);
  }

  svg {
    transition: .3s ease;
  }

  @media (max-width: 768px) {
    width: 280px;
  }
`;