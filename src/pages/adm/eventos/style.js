import styled from "styled-components";


/* =========================================
   PAGE
========================================= */

export const Page = styled.div`

  min-height: 100vh;

  background: #fff;

  font-family:
    "Poppins",
    sans-serif;

  color: #222;

`;


/* =========================================
   CONTENT
========================================= */

export const Content = styled.div`

  width: 90%;

  max-width: 1400px;

  margin: 10px auto;

  padding-bottom: 120px;


  @media (max-width: 768px) {

    width: 92%;

    margin-top: 20px;

  }

`;


/* =========================================
   HEADER
========================================= */

export const Header = styled.div`

  display: flex;

  justify-content: center;

  align-items: center;

  margin-bottom: 35px;

  padding-top: 10px;

`;


export const TitleArea = styled.div`

  text-align: center;

`;


export const Title = styled.h1`

  margin: 0;

  color: #222;

  font-size: 40px;

  font-weight: 700;

  line-height: 1.2;


  @media (max-width: 768px) {

    font-size: 32px;

  }


  @media (max-width: 480px) {

    font-size: 28px;

  }

`;


export const Subtitle = styled.p`

  margin: 8px 0 0;

  color: #777;

  font-size: 14px;


  @media (max-width: 480px) {

    font-size: 13px;

  }

`;


/* =========================================
   CARDS
========================================= */

export const Cards = styled.div`

  display: grid;

  grid-template-columns:
    repeat(
      auto-fill,
      minmax(280px, 1fr)
    );

  gap: 30px;

  align-items: stretch;


  @media (max-width: 768px) {

    grid-template-columns:
      repeat(
        auto-fill,
        minmax(240px, 1fr)
      );

    gap: 22px;

  }


  @media (max-width: 550px) {

    grid-template-columns: 1fr;

    gap: 20px;

  }

`;


/* =========================================
   CARD EVENTO
========================================= */

export const EventCard = styled.div`

  position: relative;

  min-height: 450px;

  background: #fff;

  border-radius: 18px;

  cursor: pointer;

  overflow: hidden;

  display: flex;

  flex-direction: column;

  border: 1px solid #eeeeee;

  box-shadow:
    0 5px 18px
    rgba(0, 0, 0, .09);

  transition:
    transform .25s ease,
    box-shadow .25s ease;


  &:hover {

    transform:
      translateY(-5px);

    box-shadow:
      0 12px 28px
      rgba(0, 0, 0, .13);

  }


  @media (max-width: 550px) {

    min-height: 420px;

  }

`;


/* =========================================
   IMAGEM DO EVENTO
========================================= */

export const EventImage = styled.div`

  width: 100%;

  height: 210px;

  background: #eee;

  overflow: hidden;


  img {

    width: 100%;

    height: 100%;

    object-fit: cover;

    display: block;

    transition: .4s;

  }


  ${EventCard}:hover & img {

    transform:
      scale(1.04);

  }


  @media (max-width: 550px) {

    height: 190px;

  }

`;


/* =========================================
   PLACEHOLDER
========================================= */

export const EventImagePlaceholder = styled.div`

  width: 100%;

  height: 210px;

  background: #f5f5f5;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #b5b5b5;

  font-size: 50px;


  @media (max-width: 550px) {

    height: 190px;

  }

`;


/* =========================================
   CONTEÚDO
========================================= */

export const EventContent = styled.div`

  padding:
    22px
    24px
    24px;

  display: flex;

  flex-direction: column;

  flex: 1;

`;


/* =========================================
   TÍTULO
========================================= */

export const EventTitle = styled.h2`

  margin:
    0 0 10px;

  color: #222;

  font-size: 23px;

  line-height: 1.25;

  font-weight: 700;

  word-break: break-word;

`;


/* =========================================
   DESCRIÇÃO
========================================= */

export const EventDescription = styled.p`

  margin:
    0 0 18px;

  color:
    rgba(0,0,0,.65);

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
   INFORMAÇÕES
========================================= */

export const InfoList = styled.div`

  display: flex;

  flex-direction: column;

  gap: 9px;

`;


export const InfoItem = styled.div`

  display: flex;

  align-items: center;

  gap: 9px;

  color:
    rgba(0,0,0,.72);

  font-size: 14px;


  svg {

    flex-shrink: 0;

    color: #555;

    font-size: 17px;

  }


  span {

    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;

  }

`;


/* =========================================
   FOOTER
========================================= */

export const EventFooter = styled.div`

  margin-top: auto;

  padding-top: 20px;

  display: flex;

  align-items: center;

  gap: 12px;

`;


/* =========================================
   BOTÃO VER EVENTO
========================================= */

export const AccessButton = styled.button`

  flex: 1;

  min-height: 42px;

  border: none;

  border-radius: 9px;

  background: #000;

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

    color: #111;

    transform:
      translateY(-2px);

  }

`;


/* =========================================
   AÇÕES
========================================= */

export const Actions = styled.div`

  display: flex;

  align-items: center;

  gap: 13px;


  svg {

    cursor: pointer;

    color:
      rgba(0,0,0,.55);

    font-size: 19px;

    transition: .2s;

  }


  svg:hover {

    color: #000;

    transform:
      scale(1.2);

  }


  svg:last-child:hover {

    color: #d62828;

  }

`;


/* =========================================
   ESTADO VAZIO
========================================= */

export const EmptyState = styled.div`

  grid-column:
    1 / -1;

  min-height: 300px;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  padding: 40px;

  border-radius: 15px;

  background: #fafafa;

  border:
    2px dashed #ddd;

`;


export const EmptyIcon = styled.div`

  width: 70px;

  height: 70px;

  display: flex;

  align-items: center;

  justify-content: center;

  margin-bottom: 15px;

  border-radius: 50%;

  background: #fff7d6;

  color: #f9be06;

  font-size: 30px;

`;


export const EmptyTitle = styled.h2`

  margin:
    0 0 8px;

  color: #333;

  font-size: 22px;

`;


export const EmptyText = styled.p`

  margin: 0;

  color: #888;

  font-size: 14px;

  max-width: 400px;

  line-height: 1.6;

`;


/* =========================================
   BOTÃO +
========================================= */

export const FloatingButton = styled.button`

  position: fixed;

  right: 35px;

  bottom: 35px;

  z-index: 100;

  width: 70px;

  height: 70px;

  border: none;

  border-radius: 50%;

  background: #f9be06;

  color: #111;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  box-shadow:
    0 10px 25px
    rgba(0,0,0,.20);

  transition: .2s;


  svg {

    font-size: 30px;

    transition: .2s;

  }


  &:hover {

    background: #000;

    color: #f9be06;

    transform:
      translateY(-3px);

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

    right: 20px;

    bottom: 20px;

    width: 60px;

    height: 60px;


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
    rgba(0,0,0,.70);

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
    calc(100vh - 40px);

  overflow-y: auto;

  box-sizing: border-box;

  padding: 30px;

  background: #fff;

  border-radius: 20px;

  box-shadow:
    0 25px 70px
    rgba(0,0,0,.35);

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
      calc(100vh - 20px);

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


export const ModalTitle = styled.h2`

  margin: 0;

  color: #222;

  font-size: 25px;

  font-weight: 700;

`;


export const CloseButton = styled.button`

  width: 40px;

  height: 40px;

  flex-shrink: 0;

  border: none;

  border-radius: 50%;

  background: #f4f4f4;

  color: #444;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: .2s;


  svg {

    font-size: 20px;

  }


  &:hover {

    background: #000;

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


export const Label = styled.label`

  margin-bottom: 8px;

  color: #333;

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
    1px solid #ddd;

  border-radius: 10px;

  outline: none;

  color: #222;

  background: #fff;

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
      rgba(249,190,6,.15);

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
    1px solid #ddd;

  border-radius: 10px;

  outline: none;

  color: #222;

  background: #fff;

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
      rgba(249,190,6,.15);

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


export const ImageUploadInput = styled.input`

  display: none;

`;


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

  color: #aaa;

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
      rgba(0,0,0,.08);

  }

`;


export const ImageUploadIcon = styled.div`

  width: 62px;

  height: 62px;

  border-radius: 50%;

  background:
    #fff3c4;

  display: flex;

  align-items: center;

  justify-content: center;

  color:
    #f9be06;


  svg {

    font-size: 30px;

    color:
      #f9be06;

  }

`;


export const ImageUploadText = styled.div`

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 4px;

  text-align: center;


  strong {

    color: #333;

    font-size: 15px;

  }


  span {

    color: #999;

    font-size: 12px;

  }


  small {

    margin-top: 3px;

    color: #aaa;

    font-size: 10px;

  }

`;


/* =========================================
   PREVIEW
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
    rgba(0,0,0,.12);

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
        rgba(0,0,0,.02),
        rgba(0,0,0,.12)
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
    rgba(0,0,0,.75);

  color: white;

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


export const ParticipantsText = styled.div`

  display: flex;

  flex-direction: column;

  gap: 3px;


  strong {

    color: #333;

    font-size: 13px;

  }


  span {

    color: #999;

    font-size: 11px;

    line-height: 1.4;

  }

`;


/* =========================================
   FOOTER FORM
========================================= */

export const FormFooter = styled.div`

  display: flex;

  justify-content: flex-end;

  margin-top: 8px;

`;


/* =========================================
   SALVAR
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
    #111;

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
      #000;

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

  background: #fff;

  border-radius: 20px;

  text-align: center;

  box-shadow:
    0 20px 45px
    rgba(0,0,0,.25);

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


export const DeleteModalTitle = styled.h3`

  margin:
    0 0 12px;

  color: #111;

  font-size: 24px;

  font-weight: 700;


  @media (max-width: 600px) {

    font-size: 21px;

  }

`;


export const DeleteModalText = styled.p`

  margin:
    0 0 10px;

  color: #666;

  font-size: 15px;

  line-height: 1.5;


  strong {

    color: #111;

  }


  &:last-of-type {

    margin-bottom: 28px;

  }

`;


/* =========================================
   BOTÕES DO MODAL
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
   CANCELAR
========================================= */

export const CancelButton = styled.button`

  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111;

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
   CONFIRMAR EXCLUSÃO
========================================= */

export const ConfirmButton = styled.button`

  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #fff;

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