import styled, {
  createGlobalStyle,
} from "styled-components";

/* ============================================================
   GLOBAL
============================================================ */

export const GlobalStyle =
  createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #root {
      width: 100%;
      min-height: 100%;
    }

    html {
      min-height: 100%;
      background: #fff;
    }

    body {
      min-height: 100vh;

      overflow-x: hidden;

      background: #fff;

      font-family:
        "Poppins",
        sans-serif;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    button,
    input {
      font-family: inherit;
    }

    button {
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
    }

    input {
      -webkit-appearance: none;
      appearance: none;
    }
  `;

/* ============================================================
   CONTAINER
============================================================ */

export const Container =
  styled.div`
    position: relative;

    width: 100%;
    min-height: 100vh;

    min-height: 100dvh;

    display: flex;

    align-items: center;
    justify-content: center;

    overflow: hidden;

    padding: 30px 20px;

    background: #fff;

    @media (max-width: 768px) {
      min-height: 100dvh;

      padding:
        70px
        14px
        18px;
    }

    @media (max-width: 500px) {
      padding:
        64px
        10px
        10px;
    }

    @media (max-height: 700px) and (max-width: 768px) {
      align-items: flex-start;

      padding-top: 62px;
    }
  `;

/* ============================================================
   EQUALIZADOR
============================================================ */

export const MusicVisualizer =
  styled.div`
    position: fixed;

    left: 0;
    bottom: 0;

    width: 100vw;

    height: 50vh;

    display: flex;

    align-items: flex-end;

    overflow: hidden;

    pointer-events: none;

    z-index: 1;

    opacity: 1;

    @media (max-width: 768px) {
      height: 30vh;
    }

    @media (max-width: 500px) {
      height: 25vh;
    }
  `;

export const MusicColumn =
  styled.div`
    flex: 1;

    height: 100%;

    display: flex;

    flex-direction: column-reverse;

    align-items: center;

    gap: 0.6%;
  `;

export const Pixel =
  styled.div`
    width: 100%;

    aspect-ratio: 1;

    flex-shrink: 0;

    background: #f9be06;

    opacity: 0;

    box-shadow:
      0 0.5vw
      rgba(
        249,
        190,
        6,
        0.04
      );

    @media (max-width: 768px) {
      box-shadow:
        0 1px
        rgba(
          249,
          190,
          6,
          0.04
        );
    }
  `;

/* ============================================================
   HOME
============================================================ */

export const HomeButton =
  styled.button`
    position: fixed;

    top: 2%;

    left: 2%;

    width: 58px;
    height: 58px;

    padding: 0;

    border: 0;

    border-radius: 50%;

    background: #f9be06;

    color: #000;

    display: flex;

    align-items: center;
    justify-content: center;

    cursor: pointer;

    overflow: hidden;

    isolation: isolate;

    transform:
      translateZ(0);

    z-index: 999;

    box-shadow:
      0 10px 30px
      rgba(
        0,
        0,
        0,
        0.2
      );

    transition:
      color 0.3s ease,
      transform 0.25s ease;

    &::before {
      content: "";

      position: absolute;

      left:
        var(
          --mouse-x,
          50%
        );

      top:
        var(
          --mouse-y,
          50%
        );

      width: 35px;
      height: 35px;

      border-radius: 50%;

      background: #831614;

      transform:
        translate(
          -50%,
          -50%
        )
        scale(0);

      pointer-events: none;

      z-index: 0;

      transition:
        transform 0.55s
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

      color: inherit;
    }

    &:hover {
      color: #fff;

      transform:
        translateY(-3px);
    }

    &:hover::before {
      transform:
        translate(
          -50%,
          -50%
        )
        scale(3.5);
    }

    &:active {
      transform:
        scale(0.95);
    }

    svg {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      top: 14px;
      left: 14px;

      width: 48px;
      height: 48px;

      svg {
        font-size: 20px;
      }
    }

    @media (max-width: 500px) {
      top: 10px;
      left: 10px;

      width: 44px;
      height: 44px;

      svg {
        font-size: 18px;
      }
    }
  `;

/* ============================================================
   CARD
============================================================ */

export const Card =
  styled.div`
    position: relative;

    z-index: 5;

    width: min(
      92%,
      1500px
    );

    height: min(
      84vh,
      850px
    );

    display: flex;

    border-radius: 32px;

    background: #fff;

    box-shadow:
      0 30px 80px
        rgba(
          0,
          0,
          0,
          0.18
        ),
      0 10px 35px
        rgba(
          0,
          0,
          0,
          0.1
        );

    overflow: hidden;

    transform:
      translateZ(0);

    backface-visibility:
      hidden;

    isolation: isolate;

    will-change:
      transform;

    &.is-login {
      .panel-side {
        order: 2;
      }

      .form-side {
        order: 1;
      }
    }

    &.is-cadastro {
      .panel-side {
        order: 1;
      }

      .form-side {
        order: 2;
      }
    }

    /*
    ==========================================================
    TABLET / MOBILE
    ==========================================================
    */

    @media (max-width: 768px) {
      width: 100%;

      max-width: 560px;

      height: auto;

      min-height: 0;

      flex-direction: column;

      border-radius: 26px;

      /*
        No mobile o painel fica SEMPRE em cima.
      */

      &.is-login,
      &.is-cadastro {
        .panel-side {
          order: 1;
        }

        .form-side {
          order: 2;
        }
      }
    }

    @media (max-width: 500px) {
      border-radius: 22px;
    }

    /*
    ==========================================================
    CELULARES MUITO BAIXOS
    ==========================================================
    */

    @media (
      max-width: 768px
    ) and (
      max-height: 700px
    ) {
      max-width: 520px;
    }
  `;

/* ============================================================
   PAINEL AMARELO
============================================================ */

export const SidePanel =
  styled.div`
    width: 46%;

    flex: 0 0 46%;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 7%;

    background: #f9be06;

    color: #fff;

    text-align: center;

    overflow: hidden;

    will-change:
      transform;

    z-index: 10;

    @media (max-width: 1100px) {
      padding:
        6%
        5%;
    }

    @media (max-width: 768px) {
      width: 100%;

      height: auto;

      min-height: 250px;

      flex: 0 0 auto;

      padding:
        28px
        30px;
    }

    @media (max-width: 500px) {
      min-height: 220px;

      padding:
        24px
        20px;
    }

    @media (
      max-width: 768px
    ) and (
      max-height: 700px
    ) {
      min-height: 190px;

      padding:
        18px
        20px;
    }
  `;

/* ============================================================
   PANEL CONTENT
============================================================ */

export const PanelContent =
  styled.div`
    width: 100%;

    max-width: 560px;

    display: flex;

    flex-direction: column;

    align-items: center;

    will-change:
      transform,
      opacity;
  `;

export const PanelLogo =
  styled.div`
    width: 48%;

    max-width: 240px;

    min-width: 130px;

    margin-bottom: 5%;

    img {
      display: block;

      width: 100%;
      height: auto;
    }

    @media (max-width: 1100px) {
      min-width: 105px;

      max-width: 190px;
    }

    @media (max-width: 768px) {
      width: 25%;

      min-width: 75px;

      max-width: 115px;

      margin-bottom: 12px;
    }

    @media (max-width: 500px) {
      width: 23%;

      min-width: 68px;

      max-width: 100px;

      margin-bottom: 8px;
    }

    @media (
      max-width: 768px
    ) and (
      max-height: 700px
    ) {
      min-width: 58px;

      max-width: 85px;

      margin-bottom: 5px;
    }
  `;

export const PanelTitle =
  styled.h1`
    width: 100%;

    margin-bottom: 4%;

    color: #831614;

    font-size:
      clamp(
        1.8rem,
        3vw,
        3rem
      );

    line-height: 1.15;

    @media (max-width: 1100px) {
      font-size:
        clamp(
          1.6rem,
          3vw,
          2.4rem
        );
    }

    @media (max-width: 768px) {
      margin-bottom: 8px;

      font-size:
        clamp(
          1.4rem,
          5vw,
          2rem
        );
    }

    @media (max-width: 500px) {
      font-size:
        clamp(
          1.25rem,
          5.5vw,
          1.65rem
        );
    }
  `;

export const PanelText =
  styled.p`
    width: 100%;

    max-width: 480px;

    color: #831614;

    margin-bottom: 7%;

    font-size:
      clamp(
        0.8rem,
        1vw,
        1rem
      );

    line-height: 1.6;

    @media (max-width: 768px) {
      max-width: 520px;

      margin-bottom: 5%;

      font-size: 0.85rem;

      line-height: 1.45;
    }

    @media (max-width: 500px) {
      max-width: 340px;

      margin-bottom: 4%;

      font-size: 0.75rem;

      line-height: 1.4;
    }
  `;

/* ============================================================
   PANEL BUTTON
============================================================ */

export const PanelButton =
  styled.button`
    position: relative;

    width: 48%;

    min-width: 160px;

    height: 56px;

    padding: 0 24px;

    border:
      2px solid
      #831614;

    border-radius: 15px;

    background: transparent;

    color: #831614;

    font-size: 1rem;

    font-weight: 600;

    cursor: pointer;

    overflow: hidden;

    isolation: isolate;

    transform:
      translateZ(0);

    transition:
      color 0.3s ease,
      transform 0.25s ease;

    &::before {
      content: "";

      position: absolute;

      left:
        var(
          --mouse-x,
          50%
        );

      top:
        var(
          --mouse-y,
          50%
        );

      width: 40px;
      height: 40px;

      border-radius: 50%;

      background: #831614;

      transform:
        translate(
          -50%,
          -50%
        )
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

      color: inherit;
    }

    &:hover {
      color: #f9be06;

      transform:
        translateY(-3px);
    }

    &:hover::before {
      transform:
        translate(
          -50%,
          -50%
        )
        scale(12);
    }

    &:active {
      transform:
        translateY(0)
        scale(0.97);
    }

    @media (max-width: 1100px) {
      min-width: 140px;

      width: 55%;
    }

    @media (max-width: 768px) {
      width: 48%;

      min-width: 140px;

      height: 46px;

      border-radius: 12px;

      font-size: 0.88rem;
    }

    @media (max-width: 500px) {
      width: 52%;

      min-width: 125px;

      height: 43px;

      font-size: 0.82rem;
    }

    @media (
      max-width: 768px
    ) and (
      max-height: 700px
    ) {
      height: 40px;
    }
  `;

/* ============================================================
   FORM SIDE
============================================================ */

export const FormSide =
  styled.div`
    width: 54%;

    flex: 0 0 54%;

    display: flex;

    align-items: center;
    justify-content: center;

    padding:
      5%
      4%;

    background: #fff;

    min-width: 0;

    @media (max-width: 1100px) {
      padding:
        4%
        5%;
    }

    @media (max-width: 768px) {
      width: 100%;

      flex: 0 0 auto;

      padding:
        28px
        30px;
    }

    @media (max-width: 500px) {
      padding:
        24px
        18px;
    }
  `;

/* ============================================================
   FORM CONTENT
============================================================ */

export const FormContent =
  styled.div`
    width: 100%;

    max-width: 650px;

    margin: 0 auto;

    will-change:
      transform,
      opacity;

    @media (max-width: 768px) {
      max-width: 480px;
    }
  `;

/* ============================================================
   TITLE
============================================================ */

export const FormTitle =
  styled.h2`
    width: 100%;

    margin-bottom: 5%;

    color: #831614;

    text-align: center;

    font-size:
      clamp(
        1.7rem,
        2.5vw,
        2.5rem
      );

    line-height: 1.15;

    will-change:
      transform,
      opacity;

    @media (max-width: 768px) {
      margin-bottom: 20px;

      font-size:
        clamp(
          1.45rem,
          6vw,
          2rem
        );
    }

    @media (max-width: 500px) {
      margin-bottom: 16px;

      font-size:
        clamp(
          1.35rem,
          6vw,
          1.7rem
        );
    }
  `;

/* ============================================================
   FORM
============================================================ */

export const Form =
  styled.form`
    width: 100%;

    display: flex;

    flex-direction: column;

    align-items: stretch;

    gap: 13px;

    .bottom-link {
      margin-top: 3%;

      text-align: center;

      cursor: pointer;

      color: #831614;

      font-size: 0.9rem;

      line-height: 1.4;

      will-change:
        transform,
        opacity;

      span {
        font-weight: 600;

        cursor: pointer;
      }

      &:hover {
        text-decoration: underline;
      }

      @media (max-width: 500px) {
        font-size: 0.78rem;
      }
    }

    @media (max-width: 768px) {
      gap: 10px;
    }

    @media (max-width: 500px) {
      gap: 9px;
    }
  `;

/* ============================================================
   INPUT WRAPPER
============================================================ */

export const InputWrapper =
  styled.div`
    position: relative;

    width: 100%;

    height: 68px;

    flex-shrink: 0;

    will-change:
      transform,
      opacity;

    @media (max-width: 768px) {
      height: 60px;
    }

    @media (max-width: 500px) {
      height: 57px;
    }
  `;

/* ============================================================
   LABEL
============================================================ */

export const InputLabel =
  styled.label`
    position: absolute;

    top: 10px;

    left: 24px;

    z-index: 2;

    color: #a09870;

    font-size: 0.72rem;

    pointer-events: none;

    @media (max-width: 768px) {
      top: 8px;

      left: 19px;

      font-size: 0.65rem;
    }

    @media (max-width: 500px) {
      top: 7px;

      left: 17px;

      font-size: 0.62rem;
    }
  `;

/* ============================================================
   INPUT
============================================================ */

export const Input =
  styled.input`
    display: block;

    width: 100%;

    height: 68px;

    padding:
      27px
      62px
      8px
      24px;

    border:
      2px solid
      #f9be06;

    border-radius: 16px;

    outline: none;

    background: #fff7d0;

    color: #111;

    font-size: 1rem;

    transition:
      background 0.25s ease,
      border-color 0.25s ease;

    &:hover {
      background: #fff5c2;
    }

    &:focus {
      border-color: #f9be06;

      background: #fff5c2;
    }

    @media (max-width: 768px) {
      height: 60px;

      padding:
        23px
        50px
        7px
        19px;

      border-radius: 13px;

      font-size: 0.9rem;
    }

    @media (max-width: 500px) {
      height: 57px;

      padding:
        21px
        46px
        6px
        17px;

      border-radius: 12px;

      font-size: 0.84rem;
    }
  `;

/* ============================================================
   PASSWORD
============================================================ */

export const PasswordWrapper =
  styled.div`
    position: relative;

    width: 100%;

    height: 68px;

    flex-shrink: 0;

    will-change:
      transform,
      opacity;

    ${Input} {
      width: 100%;
    }

    @media (max-width: 768px) {
      height: 60px;
    }

    @media (max-width: 500px) {
      height: 57px;
    }
  `;

/* ============================================================
   EYE
============================================================ */

export const EyeButton =
  styled.button`
    position: absolute;

    top: 50%;

    right: 22px;

    width: 32px;
    height: 32px;

    transform:
      translateY(-50%);

    border: 0;

    background: transparent;

    color: #888;

    cursor: pointer;

    display: flex;

    align-items: center;
    justify-content: center;

    font-size: 1.15rem;

    padding: 0;

    &:hover {
      color: #111;
    }

    @media (max-width: 768px) {
      right: 14px;

      width: 30px;
      height: 30px;

      font-size: 1rem;
    }

    @media (max-width: 500px) {
      right: 11px;

      width: 28px;
      height: 28px;

      font-size: 0.95rem;
    }
  `;

/* ============================================================
   ESQUECI SENHA
============================================================ */

export const ForgotPassword =
  styled.button`
    width: 100%;

    border: 0;

    background: transparent;

    color: #831614;

    cursor: pointer;

    font-size: 0.9rem;

    line-height: 1.3;

    padding: 2px 0;

    will-change:
      transform,
      opacity;

    &:hover {
      color: #000;

      text-decoration: underline;
    }

    @media (max-width: 500px) {
      font-size: 0.78rem;
    }
  `;

/* ============================================================
   BOTÃO PRINCIPAL
============================================================ */

export const Button =
  styled.button`
    position: relative;

    width: 100%;

    height: 62px;

    padding: 0 24px;

    border: 0;

    border-radius: 17px;

    background: #f9be06;

    color: #000;

    font-size: 1.05rem;

    font-weight: 700;

    cursor: pointer;

    overflow: hidden;

    isolation: isolate;

    transform:
      translateZ(0);

    will-change:
      transform,
      opacity;

    transition:
      color 0.3s ease,
      transform 0.25s ease,
      box-shadow 0.3s ease;

    &::before {
      content: "";

      position: absolute;

      left:
        var(
          --mouse-x,
          50%
        );

      top:
        var(
          --mouse-y,
          50%
        );

      width: 40px;
      height: 40px;

      border-radius: 50%;

      background: #831614;

      transform:
        translate(
          -50%,
          -50%
        )
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

      color: inherit;

      transition:
        color 0.3s ease;
    }

    &:hover {
      color: #fff;

      transform:
        translateY(-3px);

      box-shadow:
        0 10px 25px
        rgba(
          0,
          0,
          0,
          0.17
        );
    }

    &:hover::before {
      transform:
        translate(
          -50%,
          -50%
        )
        scale(18);
    }

    &:active {
      transform:
        translateY(1px)
        scale(0.98);
    }

    @media (max-width: 768px) {
      height: 54px;

      border-radius: 14px;

      font-size: 0.95rem;
    }

    @media (max-width: 500px) {
      height: 50px;

      border-radius: 13px;

      font-size: 0.88rem;
    }
  `;

/* ============================================================
   MENSAGENS
============================================================ */

export const ErrorMessage =
  styled.p`
    width: 100%;

    color: #c62828;

    font-size: 0.85rem;

    line-height: 1.3;

    text-align: center;

    will-change:
      transform,
      opacity;

    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
  `;

export const SuccessMessage =
  styled.p`
    width: 100%;

    color: #2e7d32;

    font-size: 0.85rem;

    line-height: 1.3;

    text-align: center;

    will-change:
      transform,
      opacity;

    @media (max-width: 500px) {
      font-size: 0.75rem;
    }
  `;