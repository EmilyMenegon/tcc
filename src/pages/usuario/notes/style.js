import styled from "styled-components";


// =====================================================
// THEME
// =====================================================

const theme = {
  primary: "#831614",
  primaryDark: "#64100f",

  black: "#171717",
  text: "#292929",
  muted: "#777777",

  white: "#ffffff",
  background: "#ffffff",

  border: "#e9e9e9",

  shadow: "rgba(0, 0, 0, .10)",
};


// =====================================================
// PAGE
// =====================================================

export const Page = styled.div`

  width: 100%;

  min-height: 100vh;

  background:
    ${theme.background};

  font-family:
    "Poppins",
    sans-serif;

  color:
    ${theme.black};

  overflow-x:
    hidden;

  box-sizing:
    border-box;


  &,
  & *,
  & *::before,
  & *::after {

    font-family:
      "Poppins",
      sans-serif;

    box-sizing:
      border-box;

  }

`;


// =====================================================
// CONTENT
// =====================================================

export const Content = styled.main`

  width: 90%;

  max-width: 1400px;

  margin: 0 auto;

  padding:
    35px 0
    100px;

  box-sizing:
    border-box;


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


// =====================================================
// HEADER
// =====================================================

export const Header = styled.header`

  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  margin-bottom: 45px;


  @media (max-width: 600px) {

    margin-bottom: 30px;

  }

`;


// =====================================================
// TITLE
// =====================================================

export const Title = styled.h1`

  margin:
    0 0 14px;

  color:
    ${theme.primary};

  font-size:
    clamp(
      2.8rem,
      5vw,
      4.8rem
    );

  font-weight:
    900;

  letter-spacing:
    -2px;

  line-height:
    1.05;


  @media (max-width: 768px) {

    font-size:
      clamp(
        2.5rem,
        9vw,
        4rem
      );

    letter-spacing:
      -1.5px;

  }


  @media (max-width: 480px) {

    font-size:
      2.3rem;

  }

`;


// =====================================================
// SUBTITLE
// =====================================================

export const Subtitle = styled.p`

  width: 100%;

  max-width: 700px;

  margin:
    10px auto 0;

  color:
    #777;

  font-size:
    1.55rem;

  line-height:
    1.6;

  text-align:
    center;


  @media (max-width: 768px) {

    font-size:
      1.1rem;

  }


  @media (max-width: 480px) {

    font-size:
      1rem;

  }

`;


// =====================================================
// NOTEBOOK
// =====================================================

export const Notebook = styled.section`

  position: relative;

  width: 100%;

  padding:
    35px;

  background:
    ${theme.primary};

  border:
    1px solid
    ${theme.border};

  border-radius:
    28px;

  box-shadow:
    0
    15px
    45px
    rgba(
      0,
      0,
      0,
      .07
    );

  box-sizing:
    border-box;


  @media (max-width: 900px) {

    padding:
      25px;

  }


  @media (max-width: 600px) {

    padding:
      18px;

    border-radius:
      22px;

  }

`;


// =====================================================
// NOTEBOOK HEADER
// =====================================================

export const NotebookHeader = styled.div`

  width: 100%;

  margin-bottom:
    22px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    20px;


  @media (max-width: 600px) {

    align-items:
      flex-start;

    flex-direction:
      column;

    gap:
      8px;

  }

`;


// =====================================================
// NOTEBOOK HEADER TITLE
// =====================================================

export const NotebookHeaderTitle =
  styled.h2`

  margin:
    0;

  color:
    ${theme.white};

  font-size:
    20px;

  font-weight:
    600;

  line-height:
    1.35;

`;


// =====================================================
// NOTEBOOK HEADER INFO
// =====================================================

export const NotebookHeaderInfo =
  styled.span`

  color:
    rgba(
      255,
      255,
      255,
      .75
    );

  font-size:
    13px;

  font-weight:
    500;

  white-space:
    nowrap;

`;


// =====================================================
// PAGES
// =====================================================

export const Pages = styled.div`

  position:
    relative;

  width:
    100%;

  min-height:
    650px;

  display:
    flex;

  align-items:
    stretch;

  justify-content:
    center;

  perspective:
    2200px;

  perspective-origin:
    center center;

  overflow:
    hidden;

  cursor:
    grab;

  user-select:
    none;

  touch-action:
    pan-y;


  &:active {

    cursor:
      grabbing;

  }


  @media (max-width: 900px) {

    min-height:
      570px;

  }


  @media (max-width: 700px) {

    min-height:
      480px;

  }

`;


// =====================================================
// PAGE CARD
// =====================================================

export const PageCard = styled.article`

  position:
    relative;

  width:
    100%;

  min-height:
    650px;

  display:
    grid;

  grid-template-columns:
    1fr 1fr;

  background:
    ${theme.white};

  border-radius:
    24px;

  box-shadow:
    0
    10px
    28px
    rgba(
      0,
      0,
      0,
      .10
    );

  transform-style:
    preserve-3d;

  overflow:
    visible;


  @media (max-width: 900px) {

    min-height:
      570px;

  }


  @media (max-width: 700px) {

    min-height:
      480px;

  }


  @media (max-width: 500px) {

    min-height:
      430px;

    border-radius:
      20px;

  }

`;


// =====================================================
// PAGE SIDE
// =====================================================

export const PageSide = styled.div`

  position:
    relative;

  min-width:
    0;

  min-height:
    100%;

  padding:
    35px
    40px
    28px;

  display:
    flex;

  flex-direction:
    column;

  background:
    ${theme.white};

  overflow:
    hidden;

  backface-visibility:
    hidden;

  transform-style:
    preserve-3d;


  /*
   * LINHAS DO CADERNO
   */

  &::before {

    content:
      "";

    position:
      absolute;

    inset:
      0;

    z-index:
      0;

    pointer-events:
      none;

    background:
      repeating-linear-gradient(
        to bottom,
        transparent 0,
        transparent 31px,
        rgba(
          17,
          17,
          17,
          .045
        ) 32px
      );

  }


  /*
   * ILUMINAÇÃO LATERAL
   */

  &::after {

    content:
      "";

    position:
      absolute;

    inset:
      0;

    z-index:
      1;

    pointer-events:
      none;

    background:
      linear-gradient(
        90deg,
        rgba(
          0,
          0,
          0,
          .025
        ),
        transparent 9%,
        transparent 91%,
        rgba(
          0,
          0,
          0,
          .018
        )
      );

  }


  /*
   * NÃO EXISTE BORDA CENTRAL.
   * As páginas ficam unidas visualmente.
   */


  /*
   * =================================================
   * FOLHAS DE ANIMAÇÃO
   * =================================================
   */

  &.turning-page {

    position:
      absolute;

    top:
      0;

    bottom:
      0;

    width:
      50%;

    z-index:
      50;

    padding:
      35px
      40px
      28px;

    pointer-events:
      none;

    transform-style:
      preserve-3d;

    backface-visibility:
      hidden;

    will-change:
      transform;

    box-shadow:
      none;

  }


  /*
   * FOLHA DIREITA
   * Gira para a esquerda.
   */

  &.turning-page.next-page {

    left:
      50%;

    right:
      auto;

    transform-origin:
      left center;

  }


  /*
   * FOLHA ESQUERDA
   * Gira para a direita.
   */

  &.turning-page.previous-page {

    left:
      0;

    right:
      auto;

    transform-origin:
      right center;

  }


  /*
   * Durante a animação,
   * aumenta a profundidade.
   */

  &.turning-page.active {

    z-index:
      100;

  }


  @media (max-width: 900px) {

    padding:
      30px
      28px
      24px;


    &.turning-page {

      padding:
        30px
        28px
        24px;

    }

  }


  @media (max-width: 700px) {

    padding:
      25px
      22px
      20px;


    &.turning-page {

      padding:
        25px
        22px
        20px;

    }

  }


  @media (max-width: 500px) {

    padding:
      25px
      22px
      20px;


    &.turning-page {

      padding:
        25px
        22px
        20px;

    }

  }

`;


// =====================================================
// PAGE HEADER
// =====================================================

export const PageHeader = styled.header`

  position:
    relative;

  z-index:
    3;

  min-height:
    48px;

  flex-shrink:
    0;

  display:
    flex;

  align-items:
    center;

  justify-content:
    space-between;

  gap:
    15px;

  margin-bottom:
    18px;

  padding-bottom:
    14px;

  background:
    ${theme.white};

  border-bottom:
    3px solid
    ${theme.primary};

`;


// =====================================================
// PAGE TITLE
// =====================================================

export const PageTitle = styled.h3`

  margin:
    0;

  color:
    ${theme.primary};

  font-size:
    18px;

  font-weight:
    600;

  line-height:
    1.35;

  word-break:
    break-word;


  @media (max-width: 500px) {

    font-size:
      16px;

  }

`;


// =====================================================
// PAGE NUMBER
// =====================================================

export const PageNumber = styled.span`

  flex-shrink:
    0;

  display:
    inline-flex;

  align-items:
    center;

  justify-content:
    center;

  min-width:
    38px;

  height:
    30px;

  padding:
    0 10px;

  border-radius:
    999px;

  background:
    ${theme.primary};

  color:
    ${theme.white};

  font-size:
    11px;

  font-weight:
    700;

`;


// =====================================================
// WRITING AREA
// =====================================================

export const WritingArea = styled.textarea`

  position:
    relative;

  z-index:
    3;

  width:
    100%;

  flex:
    1;

  min-height:
    0;

  padding:
    0 3px;

  resize:
    none;

  border:
    none;

  outline:
    none;

  background:
    transparent;

  color:
    ${theme.text};

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    16px;

  font-weight:
    400;

  line-height:
    32px;

  caret-color:
    ${theme.primary};

  user-select:
    text;

  overflow-y:
    auto;

  overflow-x:
    hidden;

  scrollbar-width:
    thin;

  scrollbar-color:
    ${theme.primary}
    transparent;


  &::placeholder {

    color:
      rgba(
        17,
        17,
        17,
        .32
      );

  }


  &::-webkit-scrollbar {

    width:
      5px;

  }


  &::-webkit-scrollbar-track {

    background:
      transparent;

  }


  &::-webkit-scrollbar-thumb {

    background:
      ${theme.primary};

    border-radius:
      999px;

  }


  &:read-only {

    cursor:
      default;

  }


  @media (max-width: 500px) {

    font-size:
      14px;

    line-height:
      30px;

  }

`;


// =====================================================
// PAGE FOOTER
// =====================================================

export const PageFooter = styled.footer`

  position:
    relative;

  z-index:
    3;

  flex-shrink:
    0;

  margin-top:
    15px;

  padding-top:
    12px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  background:
    ${theme.white};

  border-top:
    1px solid
    ${theme.border};

  color:
    ${theme.muted};

  font-size:
    10px;

  font-weight:
    500;

`;


// =====================================================
// NAVIGATION
// =====================================================

export const PageNavigation = styled.div`

  width:
    100%;

  margin-top:
    25px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    18px;


  @media (max-width: 600px) {

    gap:
      10px;

  }

`;


// =====================================================
// NAVIGATION BUTTON
// =====================================================

export const NavigationButton =
  styled.button`

  min-height:
    44px;

  padding:
    9px 20px;

  border:
    1px solid
    ${theme.border};

  border-radius:
    999px;

  background:
    ${theme.white};

  color:
    ${theme.black};

  font-family:
    "Poppins",
    sans-serif;

  font-size:
    13px;

  font-weight:
    600;

  cursor:
    pointer;

  transition:
    background .2s ease,
    color .2s ease,
    transform .2s ease,
    border-color .2s ease;


  &:hover:not(:disabled) {

    background:
      ${theme.primary};

    border-color:
      ${theme.primary};

    color:
      ${theme.white};

    transform:
      translateY(-2px);

  }


  &:disabled {

    opacity:
      .35;

    cursor:
      not-allowed;

  }


  &:focus-visible {

    outline:
      3px solid
      rgba(
        131,
        22,
        20,
        .25
      );

    outline-offset:
      3px;

  }


  @media (max-width: 500px) {

    padding:
      8px 14px;

    font-size:
      11px;

  }

`;


// =====================================================
// COUNTER
// =====================================================

export const PageCounter = styled.div`

  min-width:
    125px;

  min-height:
    44px;

  padding:
    8px 16px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    7px;

  border-radius:
    999px;

  background:
    ${theme.primary};

  color:
    ${theme.white};

  box-shadow:
    0
    7px
    18px
    rgba(
      131,
      22,
      20,
      .18
    );


  strong {

    color:
      ${theme.white};

    font-size:
      13px;

    font-weight:
      800;

  }


  span {

    opacity:
      .7;

    font-weight:
      700;

  }


  small {

    margin-left:
      2px;

    color:
      rgba(
        255,
        255,
        255,
        .72
      );

    font-size:
      9px;

    font-weight:
      500;

  }


  @media (max-width: 500px) {

    min-width:
      90px;

    padding:
      7px 10px;

    gap:
      5px;

  }

`;


// =====================================================
// DRAG HINT
// =====================================================

export const DragHint = styled.div`

  margin-top:
    14px;

  display:
    flex;

  align-items:
    center;

  justify-content:
    center;

  gap:
    7px;

  color:
    rgba(
      255,
      255,
      255,
      .75
    );

  font-size:
    11px;

  font-weight:
    500;


  span {

    width:
      24px;

    height:
      24px;

    display:
      inline-flex;

    align-items:
      center;

    justify-content:
      center;

    border-radius:
      50%;

    background:
      ${theme.white};

    color:
      ${theme.primary};

    font-size:
      13px;

    font-weight:
      800;

  }


  @media (max-width: 500px) {

    font-size:
      10px;

  }

`;
