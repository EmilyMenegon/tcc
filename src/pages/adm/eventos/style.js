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
   MESMAS MEDIDAS DA GALERIA
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
   MESMO DA GALERIA
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
   MESMO TAMANHO DA GALERIA
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
   MESMO TAMANHO DA GALERIA
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
   MESMA GRID DA GALERIA
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
   CARD EVENTO
   MESMA PROPORÇÃO DA GALERIA
========================================= */

export const EventCard = styled.article`

  position: relative;

  width: 100%;

  height: 100%;

  min-height: 0;

  aspect-ratio: 4 / 3;

  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  box-sizing: border-box;

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


  &:active {

    transform:
      translateY(-3px);

  }

`;


/* =========================================
   IMAGEM DO EVENTO
========================================= */

export const EventImage = styled.div`

  width: 100%;

  height: 45%;

  flex-shrink: 0;

  position: relative;

  overflow: hidden;

  background: #eeeeee;


  img {

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    transition:
      transform .5s ease;

  }


  &:hover img {

    transform:
      scale(1.07);

  }

`;


/* =========================================
   PLACEHOLDER DA IMAGEM
========================================= */

export const EventImagePlaceholder = styled.div`

  width: 100%;

  height: 45%;

  flex-shrink: 0;

  background: #eeeeee;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #b5b5b5;

  font-size: 45px;

`;


/* =========================================
   CONTEÚDO DO EVENTO
========================================= */

export const EventContent = styled.div`

  width: 100%;

  padding:
    16px 18px 18px;

  display: flex;

  flex-direction: column;

  flex: 1;

  min-height: 0;

  box-sizing: border-box;

  overflow: hidden;

`;


/* =========================================
   TÍTULO DO EVENTO
========================================= */

export const EventTitle = styled.h2`

  margin:
    0 0 7px;

  color: #222222;

  font-size: 18px;

  line-height: 1.25;

  font-weight: 700;

  word-break: break-word;

`;


/* =========================================
   DESCRIÇÃO
========================================= */

export const EventDescription = styled.p`

  margin:
    0 0 10px;

  color:
    rgba(
      0,
      0,
      0,
      .65
    );

  font-size: 12px;

  line-height: 1.45;

  display:
    -webkit-box;

  -webkit-line-clamp: 2;

  -webkit-box-orient:
    vertical;

  overflow: hidden;

`;


/* =========================================
   LISTA DE INFORMAÇÕES
========================================= */

export const InfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 6px;

  min-height: 0;

`;


/* =========================================
   ITEM DE INFORMAÇÃO
========================================= */

export const InfoItem = styled.div`

  display: flex;

  align-items: center;

  gap: 7px;

  color:
    rgba(
      0,
      0,
      0,
      .72
    );

  font-size: 12px;


  svg {

    flex-shrink: 0;

    color: #555555;

    font-size: 15px;

  }


  span {

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

  }

`;


/* =========================================
   FOOTER DO EVENTO
========================================= */

export const EventFooter = styled.div`

  margin-top: auto;

  padding-top: 10px;

  display: flex;

  align-items: center;

  gap: 8px;

  flex-shrink: 0;

`;


/* =========================================
   BOTÃO VER EVENTO
========================================= */

export const AccessButton = styled.button`

  flex: 1;

  min-height: 34px;

  border: none;

  border-radius: 9px;

  background: #000000;

  color: #f9be06;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 11px;

  font-weight: 700;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #f9be06;

    color: #111111;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(0);

  }

`;


/* =========================================
   AÇÕES
========================================= */

export const Actions = styled.div`

  display: flex;

  align-items: center;

  gap: 10px;


  svg {

    cursor: pointer;

    color:
      rgba(
        0,
        0,
        0,
        .55
      );

    font-size: 17px;

    transition: .2s;

  }


  svg:hover {

    color: #000000;

    transform:
      scale(1.2);

  }


  svg:last-child:hover {

    color: #d62828;

  }

`;


/* =========================================
   ESTADO VAZIO
   MESMO DA GALERIA
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
   ÍCONE ESTADO VAZIO
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
   TÍTULO ESTADO VAZIO
========================================= */

export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;

`;


/* =========================================
   TEXTO ESTADO VAZIO
========================================= */

export const EmptyText = styled.p`

  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;

`;


/* =========================================
   BOTÃO FLUTUANTE
   MESMO DA GALERIA
========================================= */

export const FloatingButton = styled.button`

  position: fixed;

  right: 35px;

  bottom: 35px;

  width: 70px;

  height: 70px;

  border: none;

  border-radius: 50%;

  background: #f9be06;

  color: #111111;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 10px 25px
    rgba(
      0,
      0,
      0,
      .2
    );

  transition: .2s;

  z-index: 100;


  svg {

    font-size: 30px;

    transition: .2s;

  }


  &:hover {

    background: #000000;

    color: #f9be06;

    transform:
      translateY(-2px);

  }


  &:hover svg {

    transform:
      rotate(90deg);

  }


  &:active {

    transform:
      translateY(1px);

  }


  @media (max-width: 600px) {

    width: 60px;

    height: 60px;

    right: 20px;

    bottom: 20px;


    svg {

      font-size: 26px;

    }

  }

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
   FORM
========================================= */

export const Form = styled.form`

  display: flex;

  flex-direction: column;

`;


/* =========================================
   LABEL
========================================= */

export const Label = styled.label`

  margin-bottom: 8px;

  color: #333333;

  font-size: 14px;

  font-weight: 600;

`;


/* =========================================
   INPUT
========================================= */

export const Input = styled.input`

  width: 100%;

  height: 48px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding:
    0 15px;

  border:
    1px solid #dddddd;

  border-radius: 10px;

  outline: none;

  color: #222222;

  background: #ffffff;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  transition: .2s;


  &:focus {

    border-color:
      #f9be06;

    box-shadow:
      0 0 0 3px
      rgba(
        249,
        190,
        6,
        .15
      );

  }

`;


/* =========================================
   TEXTAREA
========================================= */

export const TextArea = styled.textarea`

  width: 100%;

  min-height: 130px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding:
    14px 15px;

  resize: vertical;

  border:
    1px solid #dddddd;

  border-radius: 10px;

  outline: none;

  color: #222222;

  background: #ffffff;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  line-height: 1.5;

  transition: .2s;


  &:focus {

    border-color:
      #f9be06;

    box-shadow:
      0 0 0 3px
      rgba(
        249,
        190,
        6,
        .15
      );

  }

`;


/* =========================================
   DATA + HORÁRIO
========================================= */

export const FormRow = styled.div`

  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;


  @media (max-width: 500px) {

    grid-template-columns: 1fr;

    gap: 0;

  }

`;


/* =========================================
   FORM GROUP
========================================= */

export const FormGroup = styled.div`

  display: flex;

  flex-direction: column;

`;


/* =========================================
   UPLOAD
========================================= */

export const ImageUpload = styled.div`

  width: 100%;

  margin-bottom: 22px;

`;


/* =========================================
   INPUT UPLOAD
========================================= */

export const ImageUploadInput = styled.input`

  display: none;

`;


/* =========================================
   ÁREA DE UPLOAD
========================================= */

export const ImageUploadContent = styled.label`

  width: 100%;

  min-height: 190px;

  box-sizing: border-box;

  border:
    2px dashed #d8d8d8;

  border-radius: 17px;

  background:
    linear-gradient(
      145deg,
      #fafafa,
      #fffdf5
    );

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 12px;

  cursor: pointer;

  transition: .25s;

  color: #aaaaaa;

  position: relative;

  overflow: hidden;


  & > svg {

    position: absolute;

    right: 18px;

    bottom: 18px;

    font-size: 20px;

    color: #f9be06;

  }


  &:hover {

    border-color:
      #f9be06;

    background:
      #fffaf0;

    transform:
      translateY(-2px);

    box-shadow:
      0 8px 20px
      rgba(
        0,
        0,
        0,
        .08
      );

  }

`;


/* =========================================
   ÍCONE UPLOAD
========================================= */

export const ImageUploadIcon = styled.div`

  width: 62px;

  height: 62px;

  border-radius: 50%;

  background:
    #fff3c4;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #f9be06;


  svg {

    font-size: 30px;

    color: #f9be06;

  }

`;


/* =========================================
   TEXTO UPLOAD
========================================= */

export const ImageUploadText = styled.div`

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 4px;

  text-align: center;


  strong {

    color: #333333;

    font-size: 15px;

  }


  span {

    color: #999999;

    font-size: 12px;

  }


  small {

    margin-top: 3px;

    color: #aaaaaa;

    font-size: 10px;

  }

`;


/* =========================================
   PREVIEW DA IMAGEM
========================================= */

export const ImagePreview = styled.div`

  position: relative;

  width: 100%;

  height: 230px;

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

  margin-bottom: 20px;


  img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

  }


  &::after {

    content: "";

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        to bottom,
        rgba(
          0,
          0,
          0,
          .02
        ),
        rgba(
          0,
          0,
          0,
          .12
        )
      );

    pointer-events: none;

  }


  @media (max-width: 500px) {

    height: 190px;

  }

`;


/* =========================================
   REMOVER IMAGEM
========================================= */

export const RemoveImageButton = styled.button`

  position: absolute;

  top: 12px;

  right: 12px;

  z-index: 3;

  width: 40px;

  height: 40px;

  border: none;

  border-radius: 50%;

  background:
    rgba(
      0,
      0,
      0,
      .75
    );

  color: #ffffff;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: .2s;

  backdrop-filter:
    blur(5px);


  svg {

    font-size: 19px;

  }


  &:hover {

    background:
      #e74c3c;

    transform:
      scale(1.08);

  }

`;


/* =========================================
   PARTICIPANTES
========================================= */

export const ParticipantsBox = styled.div`

  min-height: 75px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding: 13px;

  border:
    1px dashed #d5d5d5;

  border-radius: 12px;

  background: #fafafa;

  display: flex;

  align-items: center;

  gap: 12px;

`;


/* =========================================
   ÍCONE PARTICIPANTES
========================================= */

export const ParticipantsIcon = styled.div`

  width: 42px;

  height: 42px;

  flex-shrink: 0;

  border-radius: 10px;

  background:
    #fff3c4;

  color:
    #f9be06;

  display: flex;

  align-items: center;

  justify-content: center;


  svg {

    font-size: 20px;

  }

`;


/* =========================================
   TEXTO PARTICIPANTES
========================================= */

export const ParticipantsText = styled.div`

  display: flex;

  flex-direction: column;

  gap: 3px;


  strong {

    color: #333333;

    font-size: 13px;

  }


  span {

    color: #999999;

    font-size: 11px;

    line-height: 1.4;

  }

`;


/* =========================================
   FOOTER DO FORMULÁRIO
========================================= */

export const FormFooter = styled.div`

  display: flex;

  justify-content: flex-end;

  margin-top: 8px;

`;


/* =========================================
   BOTÃO SALVAR
========================================= */

export const SaveButton = styled.button`

  min-height: 48px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background:
    #f9be06;

  color:
    #111111;

  font-family:
    "Poppins",
    sans-serif;

  font-size: 14px;

  font-weight: 700;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  cursor: pointer;

  transition: .2s;


  svg {

    font-size: 18px;

  }


  &:hover {

    background:
      #000000;

    color:
      #f9be06;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(1px);

  }


  @media (max-width: 600px) {

    width: 100%;

  }

`;


/* =========================================
   MODAL DE EXCLUSÃO
========================================= */

export const DeleteModal = styled.div`

  width: 400px;

  max-width: 100%;

  box-sizing: border-box;

  padding: 30px;

  background: #ffffff;

  border-radius: 20px;

  text-align: center;

  box-shadow:
    0 20px 45px
    rgba(
      0,
      0,
      0,
      .25
    );

  animation:
    deleteModalAppear .25s ease;


  @keyframes deleteModalAppear {

    from {

      opacity: 0;

      transform:
        translateY(15px)
        scale(.95);

    }

    to {

      opacity: 1;

      transform:
        translateY(0)
        scale(1);

    }

  }


  @media (max-width: 600px) {

    padding:
      25px 20px;

    border-radius: 18px;

  }

`;


/* =========================================
   TÍTULO MODAL EXCLUSÃO
========================================= */

export const DeleteModalTitle = styled.h3`

  margin:
    0 0 12px;

  color: #111111;

  font-size: 24px;

  font-weight: 700;


  @media (max-width: 600px) {

    font-size: 21px;

  }

`;


/* =========================================
   TEXTO MODAL EXCLUSÃO
========================================= */

export const DeleteModalText = styled.p`

  margin:
    0 0 10px;

  color: #666666;

  font-size: 15px;

  line-height: 1.5;


  strong {

    color: #111111;

  }


  &:last-of-type {

    margin-bottom: 28px;

  }

`;


/* =========================================
   BOTÕES MODAL
========================================= */

export const ModalButtons = styled.div`

  display: flex;

  justify-content: center;

  gap: 15px;


  @media (max-width: 400px) {

    flex-direction: column;

    gap: 10px;

  }

`;


/* =========================================
   BOTÃO CANCELAR
========================================= */

export const CancelButton = styled.button`

  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111111;

  font-size: 14px;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #d9d9d9;

  }


  @media (max-width: 400px) {

    width: 100%;

  }

`;


/* =========================================
   BOTÃO CONFIRMAR
========================================= */

export const ConfirmButton = styled.button`

  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #ffffff;

  font-size: 14px;

  font-weight: 600;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 7px;

  cursor: pointer;

  transition: .2s;


  &:hover {

    background: #b71c1c;

    transform:
      translateY(-2px);

  }


  &:active {

    transform:
      translateY(0);

  }


  @media (max-width: 400px) {

    width: 100%;

  }

`;