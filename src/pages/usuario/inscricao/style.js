import styled from "styled-components";

/* ============================================================
   PAGE
============================================================ */

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: #ffffff;

  color: #111;

  font-family: "Poppins", sans-serif;

  overflow-x: hidden;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

/* ============================================================
   TITLE AREA
============================================================ */

export const TitleArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 34px 20px 25px;

  text-align: center;

  .title-description {
    max-width: 520px;

    margin: 9px auto 0;

    color: #777;

    font-size: 0.86rem;

    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 28px 18px 20px;

    .title-description {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 23px 14px 16px;

    .title-description {
      font-size: 0.74rem;
    }
  }
`;

/* ============================================================
   TITLE
============================================================ */

export const Title = styled.h1`
  margin: 0;

  color: #831614;

  font-size: clamp(
    1.8rem,
    3.3vw,
    2.8rem
  );

  font-weight: 700;

  line-height: 1.12;

  letter-spacing: -0.025em;
`;

/* ============================================================
   CONTAINER
============================================================ */

export const Container = styled.div`
  position: relative;

  width: min(1120px, 91%);

  min-height: 535px;

  display: flex;

  align-items: stretch;

  margin: 12px auto 55px;

  overflow: hidden;

  border-radius: 28px;

  background: #fff;

  box-shadow:
    0 35px 90px rgba(0, 0, 0, 0.13),
    0 10px 30px rgba(0, 0, 0, 0.06);

  @media (max-width: 900px) {
    width: 93%;
  }

  @media (max-width: 768px) {
    width: 92%;

    min-height: 0;

    flex-direction: column;

    margin: 8px auto 35px;

    border-radius: 23px;
  }

  @media (max-width: 480px) {
    width: 94%;

    border-radius: 19px;
  }
`;

/* ============================================================
   LEFT SIDE
============================================================ */

export const LeftSide = styled.div`
  position: relative;

  width: 38%;

  min-height: 535px;

  padding: 52px 46px;

  display: flex;

  justify-content: center;

  background: linear-gradient(
    145deg,
    #ffdb53 0%,
    #ffd442 100%
  );

  color: #831614;

  overflow: hidden;

  /*
    Círculos decorativos removidos.
  */

  .left-content {
    position: relative;

    z-index: 2;

    width: 100%;

    display: flex;

    flex-direction: column;
  }

  .contact-description {
    margin: 0 0 32px;

    color: rgba(131, 22, 20, 0.72);

    font-size: 0.76rem;

    line-height: 1.55;

    text-align: center;
  }

  @media (max-width: 1000px) {
    padding: 45px 34px;
  }

  @media (max-width: 768px) {
    width: 100%;

    min-height: 0;

    padding: 34px 30px 30px;

    .contact-description {
      max-width: 450px;

      margin: 0 auto 25px;
    }
  }

  @media (max-width: 480px) {
    padding: 28px 20px 25px;

    .contact-description {
      margin-bottom: 20px;

      font-size: 0.7rem;
    }
  }
`;

/* ============================================================
   SECTION TITLE
============================================================ */

export const SectionTitle = styled.h2`
  /*
    Mantemos exatamente o mesmo tamanho,
    altura de linha e margem do título
    "Dados do poeta".
  */

  margin: 0 0 26px;

  width: 100%;

  color: #831614;

  font-size: clamp(
    1.35rem,
    2.2vw,
    1.8rem
  );

  font-weight: 700;

  line-height: 1.2;

  text-align: center;

  border: none;

  text-decoration: none;

  &::before,
  &::after {
    display: none !important;
    content: none !important;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;

    font-size: 1.3rem;
  }
`;

/* ============================================================
   SOCIAL CONTAINER
============================================================ */

export const SocialContainer = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 13px;
`;

/* ============================================================
   INFO TEXT
============================================================ */

export const InfoText = styled.div`
  width: 100%;

  min-height: 70px;

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 11px 13px;

  border: 1px solid
    rgba(131, 22, 20, 0.1);

  border-radius: 14px;

  background: rgba(
    255,
    255,
    255,
    0.16
  );

  transition:
    transform 0.25s ease,
    background 0.25s ease,
    border-color 0.25s ease;

  .icon-box {
    width: 43px;
    height: 43px;

    flex-shrink: 0;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 12px;

    background: rgba(
      255,
      255,
      255,
      0.38
    );

    svg {
      width: 21px;
      height: 21px;

      color: #831614;
    }
  }

  .info-content {
    min-width: 0;

    display: flex;

    flex-direction: column;
  }

  strong {
    color: #831614;

    font-size: 0.82rem;

    font-weight: 700;
  }

  p {
    margin: 3px 0 0;

    color: rgba(
      131,
      22,
      20,
      0.65
    );

    font-size: 0.7rem;

    line-height: 1.3;

    overflow-wrap: anywhere;
  }

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(
      131,
      22,
      20,
      0.18
    );

    background: rgba(
      255,
      255,
      255,
      0.3
    );
  }

  @media (max-width: 768px) {
    max-width: 500px;

    margin: 0 auto;

    min-height: 64px;

    .icon-box {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 480px) {
    min-height: 59px;

    gap: 12px;

    padding: 9px 10px;

    border-radius: 12px;

    .icon-box {
      width: 37px;
      height: 37px;

      border-radius: 10px;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    strong {
      font-size: 0.76rem;
    }

    p {
      font-size: 0.64rem;
    }
  }
`;

/* ============================================================
   RIGHT SIDE
============================================================ */

export const RightSide = styled.div`
  width: 62%;

  min-width: 0;

  display: flex;

  align-items: flex-start;

  justify-content: center;

  padding: 52px 70px;

  background: #fff;

  .form-area {
    width: 100%;

    max-width: 620px;
  }

  /*
    O título começa exatamente no mesmo
    ponto vertical que "Contatos".
  */

  .form-header {
    margin: 0 0 26px;

    h2 {
      margin: 0;

      color: #831614;

      font-size: clamp(
        1.35rem,
        2.2vw,
        1.8rem
      );

      font-weight: 700;

      line-height: 1.2;
    }

    p {
      margin: 7px 0 0;

      color: #777;

      font-size: 0.75rem;

      line-height: 1.5;
    }
  }

  .form-row {
    display: grid;

    grid-template-columns: 1fr 1fr;

    gap: 13px;
  }

  .loading {
    display: flex;

    flex-direction: column;

    align-items: center;

    gap: 12px;

    color: #777;

    p {
      margin: 0;

      font-size: 0.8rem;
    }
  }

  .loading-spinner {
    width: 30px;
    height: 30px;

    border: 3px solid #fff0a6;

    border-top-color: #831614;

    border-radius: 50%;

    animation:
      loadingSpin
      0.75s linear
      infinite;
  }

  @keyframes loadingSpin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 1000px) {
    padding: 45px 40px;
  }

  @media (max-width: 768px) {
    width: 100%;

    padding: 38px 30px;

    .form-area {
      max-width: 560px;
    }
  }

  @media (max-width: 600px) {
    padding: 32px 22px;

    .form-row {
      grid-template-columns: 1fr;

      gap: 10px;
    }
  }

  @media (max-width: 480px) {
    padding: 28px 17px;

    .form-header {
      margin-bottom: 20px;

      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 0.68rem;
      }
    }
  }
`;

/* ============================================================
   FORM
============================================================ */

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 13px;

  .form-message {
    width: 100%;

    padding: 10px 13px;

    border-radius: 10px;

    text-align: center;

    font-size: 0.75rem;

    line-height: 1.4;

    animation:
      messageAppear
      0.2s ease;
  }

  .form-message.error {
    color: #a51d1d;

    background: rgba(
      198,
      40,
      40,
      0.07
    );

    border: 1px solid
      rgba(
        198,
        40,
        40,
        0.12
      );
  }

  .form-message.success {
    color: #2e7d32;

    background: rgba(
      46,
      125,
      50,
      0.07
    );

    border: 1px solid
      rgba(
        46,
        125,
        50,
        0.12
      );
  }

  @keyframes messageAppear {
    from {
      opacity: 0;

      transform: translateY(-4px);
    }

    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    gap: 11px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

/* ============================================================
   INPUT WRAPPER
============================================================ */

export const InputWrapper = styled.div`
  position: relative;

  width: 100%;

  height: 68px;

  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 57px;
  }
`;

/* ============================================================
   INPUT LABEL
============================================================ */

export const InputLabel = styled.label`
  position: absolute;

  top: 9px;
  left: 24px;

  z-index: 2;

  color: #a09870;

  font-size: 0.72rem;

  font-weight: 500;

  line-height: 1;

  pointer-events: none;

  transition: color 0.25s ease;

  @media (max-width: 768px) {
    top: 8px;
    left: 19px;

    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    top: 7px;
    left: 17px;

    font-size: 0.62rem;
  }
`;

/* ============================================================
   INPUT
============================================================ */

export const Input = styled.input`
  display: block;

  width: 100%;
  height: 68px;

  padding: 27px 24px 8px;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  outline: none;

  background: #fff7d0;

  color: #111;

  font-family: inherit;

  font-size: 0.95rem;

  font-weight: 500;

  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::placeholder {
    color: transparent;
  }

  &:hover {
    background: #fff5c2;
  }

  &:focus {
    border-color: #f9be06;

    background: #fff5c2;

    box-shadow:
      0 7px 22px
        rgba(
          249,
          190,
          6,
          0.11
        );
  }

  @media (max-width: 768px) {
    height: 60px;

    padding: 23px 19px 7px;

    border-radius: 13px;

    font-size: 0.88rem;
  }

  @media (max-width: 480px) {
    height: 57px;

    padding: 21px 17px 6px;

    border-radius: 12px;

    font-size: 0.82rem;
  }
`;

/* ============================================================
   SELECT WRAPPER
============================================================ */

export const SelectWrapper = styled.div`
  position: relative;

  width: 100%;

  height: 68px;

  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 60px;
  }

  @media (max-width: 480px) {
    height: 57px;
  }
`;

/* ============================================================
   SELECT LABEL
============================================================ */

export const SelectLabel = styled.label`
  position: absolute;

  top: 9px;
  left: 24px;

  z-index: 2;

  color: #a09870;

  font-size: 0.72rem;

  font-weight: 500;

  line-height: 1;

  pointer-events: none;

  @media (max-width: 768px) {
    top: 8px;
    left: 19px;

    font-size: 0.65rem;
  }

  @media (max-width: 480px) {
    top: 7px;
    left: 17px;

    font-size: 0.62rem;
  }
`;

/* ============================================================
   SELECT
============================================================ */

export const Select = styled.select`
  display: block;

  width: 100%;
  height: 68px;

  padding: 27px 42px 8px 24px;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  outline: none;

  background-color: #fff7d0;

  color: #111;

  font-family: inherit;

  font-size: 0.95rem;

  font-weight: 500;

  cursor: pointer;

  appearance: none;

  -webkit-appearance: none;

  background-image:
    linear-gradient(
      45deg,
      transparent 50%,
      #831614 50%
    ),
    linear-gradient(
      135deg,
      #831614 50%,
      transparent 50%
    );

  background-position:
    calc(100% - 22px) 31px,
    calc(100% - 16px) 31px;

  background-size:
    6px 6px,
    6px 6px;

  background-repeat: no-repeat;

  transition:
    background-color 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    background-color: #fff5c2;
  }

  &:focus {
    border-color: #f9be06;

    background-color: #fff5c2;

    box-shadow:
      0 7px 22px
        rgba(
          249,
          190,
          6,
          0.11
        );
  }

  option {
    color: #111;

    background: #fff;
  }

  @media (max-width: 768px) {
    height: 60px;

    padding: 23px 38px 7px 19px;

    border-radius: 13px;

    font-size: 0.88rem;

    background-position:
      calc(100% - 19px) 27px,
      calc(100% - 13px) 27px;
  }

  @media (max-width: 480px) {
    height: 57px;

    padding: 21px 36px 6px 17px;

    border-radius: 12px;

    font-size: 0.82rem;

    background-position:
      calc(100% - 18px) 25px,
      calc(100% - 12px) 25px;
  }
`;

/* ============================================================
   BUTTON
============================================================ */

/* ============================================================
   BUTTON
============================================================ */

export const Button = styled.button`
  --mouse-x: 50%;
  --mouse-y: 50%;

  position: relative;

  width: 100%;
  height: 62px;

  margin-top: 4px;

  padding: 0 24px;

  border: 0;
  border-radius: 17px;

  background: #ffdb53;

  color: #000;

  font-family: inherit;

  font-size: 1rem;

  font-weight: 700;

  cursor: pointer;

  overflow: hidden;

  isolation: isolate;

  transition:
    color 0.3s ease,
    transform 0.25s ease,
    box-shadow 0.3s ease;

  /*
   * ==========================================================
   * CÍRCULO
   * ==========================================================
   */

  &::before {
    content: "";

    position: absolute;

    left: var(--mouse-x);
    top: var(--mouse-y);

    width: 50px;
    height: 50px;

    border-radius: 50%;

    background: #831614;

    pointer-events: none;

    z-index: 0;

    transform:
      translate(-50%, -50%)
      scale(0);

    /*
     * A posição acompanha o mouse
     * instantaneamente.
     *
     * A escala é animada.
     */
    transition:
      transform 0.6s
      cubic-bezier(
        0.16,
        1,
        0.3,
        1
      );
  }

  /*
   * ==========================================================
   * ENTRANDO / DENTRO DO BOTÃO
   * ==========================================================
   */

  &.button-hovering::before {
    transform:
      translate(-50%, -50%)
      scale(18);
  }

  /*
   * ==========================================================
   * SAINDO DO BOTÃO
   * ==========================================================
   *
   * IMPORTANTE:
   *
   * Não mudamos --mouse-x nem --mouse-y.
   *
   * Portanto o círculo continua exatamente
   * no último ponto em que o mouse estava.
   */

  &.button-leaving::before {
    transform:
      translate(-50%, -50%)
      scale(0);
  }

  /*
   * ==========================================================
   * TEXTO
   * ==========================================================
   */

  .button-content {
    position: relative;

    z-index: 2;

    display: flex;

    align-items: center;

    justify-content: center;

    color: inherit;

    pointer-events: none;
  }

  /*
   * ==========================================================
   * HOVER
   * ==========================================================
   */

  &:hover {
    color: #fff;

    transform: translateY(-3px);

    box-shadow:
      0 12px 28px
      rgba(
        0,
        0,
        0,
        0.16
      );
  }

  /*
   * ==========================================================
   * ACTIVE
   * ==========================================================
   */

  &:active {
    transform:
      translateY(1px)
      scale(0.98);
  }

  /*
   * ==========================================================
   * RESPONSIVO
   * ==========================================================
   */

  @media (max-width: 768px) {
    height: 54px;

    border-radius: 14px;

    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    height: 50px;

    border-radius: 13px;

    font-size: 0.86rem;
  }
`;


/* ============================================================
   ALREADY BOX
============================================================ */

export const AlreadyBox = styled.div`
  width: 100%;

  max-width: 570px;

  display: flex;

  flex-direction: column;

  align-items: center;

  padding: 35px 40px;

  border: 1px solid
    rgba(
      255,
      219,
      83,
      0.8
    );

  border-radius: 22px;

  background: #fff;

  box-shadow:
    0 15px 45px
      rgba(
        0,
        0,
        0,
        0.06
      );

  .success-icon {
    width: 64px;
    height: 64px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin-bottom: 14px;

    border-radius: 50%;

    background: #fff7d0;

    svg {
      width: 38px;
      height: 38px;

      color: #f9be06;
    }
  }

  @media (max-width: 768px) {
    padding: 32px 25px;

    border-radius: 19px;
  }

  @media (max-width: 480px) {
    padding: 27px 17px;

    .success-icon {
      width: 55px;
      height: 55px;

      svg {
        width: 32px;
        height: 32px;
      }
    }
  }
`;

/* ============================================================
   ALREADY TITLE
============================================================ */

export const AlreadyTitle = styled.h3`
  margin: 0;

  color: #831614;

  font-size: clamp(
    1.1rem,
    2vw,
    1.4rem
  );

  font-weight: 700;

  text-align: center;
`;

/* ============================================================
   ALREADY TEXT
============================================================ */

export const AlreadyText = styled.p`
  max-width: 430px;

  margin: 8px 0 23px;

  color: #6d6d6d;

  font-size: 0.78rem;

  line-height: 1.6;

  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

/* ============================================================
   ALREADY DETAILS
============================================================ */

export const AlreadyDetails = styled.div`
  width: 100%;

  max-width: 400px;

  padding: 17px 20px;

  border: 1px solid
    rgba(
      255,
      219,
      83,
      0.65
    );

  border-radius: 15px;

  background: #fff7d0;

  .detail-header {
    display: flex;

    align-items: center;

    gap: 9px;

    margin-bottom: 13px;

    span {
      flex: 1;

      height: 1px;

      background: rgba(
        131,
        22,
        20,
        0.14
      );
    }

    strong {
      color: #831614;

      font-size: 0.66rem;

      text-transform: uppercase;

      letter-spacing: 0.1em;
    }
  }

  .detail-row {
    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 20px;

    padding: 8px 0;

    border-bottom: 1px solid
      rgba(
        131,
        22,
        20,
        0.07
      );

    &:last-child {
      border-bottom: 0;

      padding-bottom: 0;
    }

    span {
      color: #8c8c8c;

      font-size: 0.7rem;
    }

    strong {
      max-width: 65%;

      color: #222;

      font-size: 0.72rem;

      font-weight: 600;

      text-align: right;

      overflow-wrap: anywhere;
    }
  }

  @media (max-width: 480px) {
    padding: 14px 15px;

    .detail-row {
      span,
      strong {
        font-size: 0.65rem;
      }
    }
  }
`;

/* ============================================================
   MODAL OVERLAY
============================================================ */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  z-index: 9999;

  display: flex;

  align-items: center;

  justify-content: center;

  padding: 20px;

  background: rgba(
    17,
    17,
    17,
    0.55
  );

  backdrop-filter: blur(6px);

  -webkit-backdrop-filter: blur(6px);

  animation:
    overlayAppear
    0.2s ease;

  @keyframes overlayAppear {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

/* ============================================================
   MODAL
============================================================ */

export const Modal = styled.div`
  width: 430px;

  max-width: 100%;

  padding: 32px;

  border-radius: 22px;

  background: #fff;

  text-align: center;

  box-shadow:
    0 30px 80px
      rgba(
        0,
        0,
        0,
        0.25
      );

  animation:
    modalAppear
    0.3s
    cubic-bezier(
      0.16,
      1,
      0.3,
      1
    );

  .modal-icon {
    width: 54px;
    height: 54px;

    display: flex;

    align-items: center;
    justify-content: center;

    margin: 0 auto 15px;

    border-radius: 50%;

    background: #fff7d0;

    span {
      width: 28px;
      height: 28px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 50%;

      background: #ffdb53;

      color: #831614;

      font-size: 1rem;

      font-weight: 800;
    }
  }

  h3 {
    margin: 0 0 8px;

    color: #831614;

    font-size: 1.4rem;

    font-weight: 700;
  }

  > p {
    margin: 0 0 20px;

    color: #777;

    font-size: 0.78rem;

    line-height: 1.5;
  }

  .modal-summary {
    width: 100%;

    margin-bottom: 23px;

    padding: 13px 15px;

    display: flex;

    flex-direction: column;

    gap: 8px;

    border-radius: 13px;

    background: #f8f8f8;

    text-align: left;

    > div {
      display: flex;

      justify-content: space-between;

      align-items: center;

      gap: 15px;

      span {
        color: #888;

        font-size: 0.67rem;
      }

      strong {
        max-width: 65%;

        color: #222;

        font-size: 0.7rem;

        text-align: right;

        overflow-wrap: anywhere;
      }
    }
  }

  @keyframes modalAppear {
    from {
      opacity: 0;

      transform:
        translateY(18px)
        scale(0.96);
    }

    to {
      opacity: 1;

      transform:
        translateY(0)
        scale(1);
    }
  }

  @media (max-width: 600px) {
    padding: 27px 20px;

    border-radius: 19px;

    h3 {
      font-size: 1.2rem;
    }

    > p {
      font-size: 0.72rem;
    }
  }
`;

/* ============================================================
   MODAL BUTTONS
============================================================ */

export const ModalButtons = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 10px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

/* ============================================================
   CANCEL BUTTON
============================================================ */

export const CancelButton = styled.button`
  height: 47px;

  padding: 0 20px;

  border: 1px solid #ddd;

  border-radius: 12px;

  background: #fff;

  color: #333;

  font-family: inherit;

  font-size: 0.78rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: #ccc;

    background: #f5f5f5;

    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

/* ============================================================
   CONFIRM BUTTON
============================================================ */

export const ConfirmButton = styled.button`
  height: 47px;

  padding: 0 20px;

  border: 0;

  border-radius: 12px;

  background: #831614;

  color: #fff;

  font-family: inherit;

  font-size: 0.78rem;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: #68110f;

    transform: translateY(-2px);

    box-shadow:
      0 9px 20px
        rgba(
          131,
          22,
          20,
          0.2
        );
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
