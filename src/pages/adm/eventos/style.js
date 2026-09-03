
import styled from "styled-components";


/* =====================================================
   PAGE
   MESMAS MEDIDAS DA GALERIA
===================================================== */

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


/* =====================================================
   CONTENT
   IGUAL À GALERIA
===================================================== */

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


/* =====================================================
   HEADER
   IGUAL À GALERIA
===================================================== */

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


export const TitleArea = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;
`;

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


/* =====================================================
   SUBTITLE
   IGUAL À GALERIA
===================================================== */

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


/* =====================================================
   CARDS
   MESMA ESTRUTURA DE GRID DA GALERIA
===================================================== */

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


/* =====================================================
   EVENT CARD
   DIMENSÕES ALINHADAS AO PADRÃO DA GALERIA
===================================================== */

export const EventCard = styled.article`
  position: relative;

  width: 100%;

  min-height: 0;

  background: #ffffff;

  border-radius: 18px;

  overflow: hidden;

  cursor: pointer;

  display: flex;

  flex-direction: column;

  border: 1px solid #eeeeee;

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


  &:focus-visible {
    outline:
      3px solid #f9be06;

    outline-offset: 4px;
  }
`;


/* =====================================================
   EVENT IMAGE
   PADRÃO PROPORCIONAL DA GALERIA
===================================================== */

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

    object-fit: cover;

    display: block;

    transition:
      transform .5s ease;
  }


  ${EventCard}:hover & img {
    transform:
      scale(1.07);
  }
`;


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


/* =====================================================
   EVENT CONTENT
===================================================== */

export const EventContent = styled.div`
  width: 100%;

  padding: 18px;

  display: flex;

  flex-direction: column;

  box-sizing: border-box;

  flex: 1;
`;


/* =====================================================
   EVENT TITLE
===================================================== */

export const EventTitle = styled.h2`
  width: 100%;

  margin:
    0 0 8px;

  color: #222222;

  font-size: 19px;

  line-height: 1.3;

  font-weight: 700;

  word-break: break-word;
`;


/* =====================================================
   DESCRIPTION
===================================================== */

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

  font-size: 13px;

  line-height: 1.5;

  display:
    -webkit-box;

  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;

  overflow: hidden;
`;


/* =====================================================
   INFO
===================================================== */

export const InfoList = styled.div`
  width: 100%;

  display: flex;

  flex-direction: column;

  gap: 8px;
`;


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
    overflow: hidden;

    text-overflow: ellipsis;

    white-space: nowrap;
  }
`;


/* =====================================================
   FOOTER
===================================================== */

export const EventFooter = styled.div`
  width: 100%;

  margin-top: auto;

  padding-top: 18px;

  display: flex;

  align-items: center;

  gap: 10px;
`;


export const AccessButton = styled.button`
  flex: 1;

  min-height: 38px;

  border: none;

  border-radius: 9px;

  background: #000000;

  color: #f9be06;

  font-family: "Poppins";

  font-weight: 700;

  cursor: pointer;

  transition: .2s;


  &:hover {
    background: #f9be06;

    color: #111111;
  }
`;


export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;


  svg {
    cursor: pointer;

    color: #666666;

    font-size: 18px;

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


/* =====================================================
   EMPTY
   IGUAL À GALERIA
===================================================== */

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
    2px dashed
    #dddddd;

  border-radius: 15px;

  background: #fafafa;
`;


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


export const EmptyTitle = styled.h2`
  margin:
    0 0 8px;

  color: #333333;

  font-size: 22px;

  font-weight: 600;
`;


export const EmptyText = styled.p`
  max-width: 450px;

  margin: 0;

  color: #888888;

  font-size: 14px;

  line-height: 1.6;
`;

export const FloatingButton = styled.button`
  position: fixed;

  right: 35px;

  bottom: 35px;

  width: 70px;

  height: 70px;

  border: none;

  border-radius: 50%;

  background: #ffdb53;

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
    font-size: 28px;

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
  }
`;


/* =====================================================
   MODAL OVERLAY
===================================================== */

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
      .7
    );

  backdrop-filter:
    blur(4px);
`;


/* =====================================================
   MODAL
   MANTIDO, APENAS ORGANIZADO
===================================================== */

export const Modal = styled.div`
  width: 100%;

  max-width: 1100px;

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


  @media (max-width: 600px) {
    padding: 20px;

    max-height:
      calc(
        100vh - 20px
      );
  }
`;


export const ModalHeader = styled.div`
  display: flex;

  align-items: center;

  justify-content: space-between;

  margin-bottom: 25px;
`;


export const ModalTitle = styled.h2`
  margin: 0;

  color: #222222;

  font-size: 25px;

  font-weight: 700;
`;


export const CloseButton = styled.button`
  width: 40px;

  height: 40px;

  border: none;

  border-radius: 50%;

  background: #f4f4f4;

  color: #444444;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  transition: .2s;


  &:hover {
    background: #000000;

    color: #f9be06;
  }
`;


/* =====================================================
   FORM
===================================================== */

export const Form = styled.form`
  width: 100%;

  display: flex;

  flex-direction: column;
`;


export const Label = styled.label`
  margin-bottom: 8px;

  color: #333333;

  font-size: 14px;

  font-weight: 600;
`;


export const Input = styled.input`
  width: 100%;

  height: 48px;

  box-sizing: border-box;

  margin-bottom: 20px;

  padding: 0 15px;

  border:
    1px solid
    #dddddd;

  border-radius: 10px;

  outline: none;

  font-family: "Poppins";


  &:focus {
    border-color: #f9be06;

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


export const TextArea = styled.textarea`
  width: 100%;

  min-height: 130px;

  margin-bottom: 20px;

  padding:
    14px 15px;

  resize: vertical;

  box-sizing: border-box;

  border:
    1px solid
    #dddddd;

  border-radius: 10px;

  outline: none;

  font-family: "Poppins";


  &:focus {
    border-color: #f9be06;
  }
`;


export const FormRow = styled.div`
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 15px;


  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;


export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;
`;


/* =====================================================
   UPLOAD
===================================================== */

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
    2px dashed
    #d8d8d8;

  border-radius: 17px;

  background: #fafafa;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 12px;

  cursor: pointer;

  color: #aaaaaa;

  position: relative;


  &:hover {
    border-color: #f9be06;

    background: #fffaf0;
  }


  & > svg {
    position: absolute;

    right: 18px;

    bottom: 18px;

    color: #f9be06;
  }
`;


export const ImageUploadIcon = styled.div`
  width: 62px;

  height: 62px;

  border-radius: 50%;

  background: #fff3c4;

  display: flex;

  align-items: center;

  justify-content: center;

  color: #f9be06;

  font-size: 30px;
`;


export const ImageUploadText = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 4px;

  text-align: center;


  strong {
    color: #333333;
  }


  span,
  small {
    color: #999999;

    font-size: 12px;
  }
`;


export const ImagePreview = styled.div`
  position: relative;

  width: 100%;

  height: 230px;

  border-radius: 17px;

  overflow: hidden;

  background: #f5f5f5;

  margin-bottom: 20px;


  img {
    width: 100%;

    height: 100%;

    object-fit: cover;
  }
`;


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


  &:hover {
    background: #e74c3c;
  }
`;


/* =====================================================
   PARTICIPANTES
===================================================== */

export const ParticipantsBox = styled.div`
  min-height: 75px;

  margin-bottom: 20px;

  padding: 13px;

  border:
    1px dashed
    #d5d5d5;

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

  background: #fff3c4;

  color: #f9be06;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 20px;
`;


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
  }
`;


export const FormFooter = styled.div`
  display: flex;

  justify-content: flex-end;

  margin-top: 8px;
`;


export const SaveButton = styled.button`
  min-height: 48px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #f9be06;

  color: #111111;

  font-family: "Poppins";

  font-weight: 700;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 8px;

  cursor: pointer;


  &:hover {
    background: #000000;

    color: #f9be06;
  }
`;


/* =====================================================
   DELETE
===================================================== */

export const DeleteModal = styled.div`
  width: 400px;

  max-width: 100%;

  padding: 30px;

  box-sizing: border-box;

  background: #ffffff;

  border-radius: 20px;

  text-align: center;
`;


export const DeleteModalTitle = styled.h3`
  margin:
    0 0 12px;

  color: #111111;

  font-size: 24px;
`;


export const DeleteModalText = styled.p`
  margin:
    0 0 10px;

  color: #666666;

  font-size: 15px;


  strong {
    color: #111111;
  }
`;


export const ModalButtons = styled.div`
  display: flex;

  justify-content: center;

  gap: 15px;

  margin-top: 25px;
`;


export const CancelButton = styled.button`
  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111111;

  font-weight: 600;

  cursor: pointer;
`;


export const ConfirmButton = styled.button`
  min-height: 45px;

  padding:
    0 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: #ffffff;

  font-weight: 600;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 7px;

  cursor: pointer;
`;


/* =====================================================
   RANKING
   MANTIDO INTEIRO
===================================================== */

export const RankingSection = styled.section`
  width: 100%;

  margin-top: 35px;

  padding-top: 30px;

  border-top:
    1px solid
    #eeeeee;
`;


export const RankingHeader = styled.div`
  margin-bottom: 20px;
`;


export const RankingTitle = styled.h3`
  margin: 0;

  display: flex;

  align-items: center;

  gap: 9px;

  color: #222222;

  font-size: 20px;

  font-weight: 700;


  svg {
    color: #f9be06;

    font-size: 23px;
  }
`;


export const RankingDescription = styled.p`
  margin:
    7px 0 0;

  color: #888888;

  font-size: 12px;

  line-height: 1.5;
`;


/* =====================================================
   PLANILHA
===================================================== */

export const RankingTableWrapper = styled.div`
  width: 100%;

  overflow-x: auto;

  overflow-y: hidden;

  border:
    1px solid
    #e5e5e5;

  border-radius: 14px;

  background: #ffffff;

  box-shadow:
    0 5px 18px
    rgba(
      0,
      0,
      0,
      .06
    );

  scrollbar-width: thin;

  scrollbar-color:
    #bbbbbb
    #f5f5f5;


  &::-webkit-scrollbar {
    height: 8px;
  }


  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }


  &::-webkit-scrollbar-thumb {
    background: #bbbbbb;

    border-radius: 10px;
  }
`;


export const RankingTable = styled.table`
  width: 100%;

  min-width: 1150px;

  border-collapse: collapse;

  table-layout: auto;

  font-family:
    "Poppins",
    sans-serif;


  thead {
    background: #000000;
  }


  th {
    padding:
      14px 12px;

    color: #ffffff;

    font-size: 11px;

    font-weight: 600;

    text-align: center;

    white-space: nowrap;

    border-right:
      1px solid
      rgba(
        255,
        255,
        255,
        .1
      );
  }


  th:first-child {
    width: 70px;
  }


  th:nth-child(2) {
    min-width: 190px;

    text-align: left;
  }


  th:nth-child(n + 3) {
    min-width: 80px;
  }


  td {
    padding:
      13px 12px;

    color: #444444;

    font-size: 12px;

    text-align: center;

    white-space: nowrap;

    border-bottom:
      1px solid
      #eeeeee;

    border-right:
      1px solid
      #f1f1f1;

    background: inherit;
  }


  td:nth-child(2) {
    text-align: left;

    min-width: 190px;
  }


  tbody tr:last-child td {
    border-bottom: none;
  }


  tbody tr:hover {
    background:
      #fffaf0;
  }
`;


/* =====================================================
   LINHA DO RANKING
===================================================== */

export const RankingRow = styled.tr`
  background:
    ${({ $primeiro }) =>
      $primeiro
        ? "rgba(249, 190, 6, 0.10)"
        : "#ffffff"};

  transition:
    background
    .2s ease;


  ${({ $primeiro }) =>
    $primeiro &&
    `
      td {
        font-weight: 600;
      }
    `}
`;


/* =====================================================
   POSIÇÃO
===================================================== */

export const Position = styled.div`
  min-width: 50px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 4px;

  color: #222222;

  font-weight: 700;

  font-size: 13px;


  svg {
    color: #f9be06;

    font-size: 17px;
  }
`;


/* =====================================================
   NOME
===================================================== */

export const ParticipantName = styled.span`
  display: block;

  max-width: 210px;

  overflow: hidden;

  text-overflow: ellipsis;

  white-space: nowrap;

  color: #222222;

  font-size: 12px;

  font-weight: 600;
`;


/* =====================================================
   NOTA
===================================================== */

export const Score = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 38px;

  height: 30px;

  padding:
    0 6px;

  border-radius: 7px;

  background: #f5f5f5;

  color: #333333;

  font-size: 11px;

  font-weight: 600;
`;


/* =====================================================
   MÉDIA
===================================================== */

export const Average = styled.span`
  color: #222222;

  font-weight: 700;

  font-size: 12px;
`;


/* =====================================================
   PENALIDADE
===================================================== */

export const Penalty = styled.span`
  color:
    ${({ $penalidade }) =>
      $penalidade
        ? "#d62828"
        : "#3a9d5d"};

  font-weight: 700;

  font-size: 12px;
`;


/* =====================================================
   TEMPO
===================================================== */

export const Time = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 5px;

  color: #555555;

  font-size: 12px;

  font-weight: 600;


  svg {
    color: #777777;

    font-size: 14px;
  }
`;


/* =====================================================
   NOTA FINAL
===================================================== */

export const FinalScore = styled.span`
  display: inline-flex;

  align-items: center;

  justify-content: center;

  min-width: 60px;

  min-height: 32px;

  padding:
    0 9px;

  border-radius: 7px;

  background: #000000;

  color: #f9be06;

  font-size: 12px;

  font-weight: 700;

  box-shadow:
    0 3px 8px
    rgba(
      0,
      0,
      0,
      .12
    );
`;


/* =====================================================
   RANKING VAZIO
===================================================== */

export const RankingEmpty = styled.div`
  min-height: 180px;

  padding: 30px;

  box-sizing: border-box;

  border:
    1px dashed
    #d8d8d8;

  border-radius: 14px;

  background: #fafafa;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  text-align: center;

  gap: 7px;

  color: #999999;


  svg {
    margin-bottom: 5px;

    color: #f9be06;

    font-size: 28px;
  }


  strong {
    color: #444444;

    font-size: 14px;
  }


  span {
    max-width: 400px;

    color: #999999;

    font-size: 12px;

    line-height: 1.5;
  }
`;

export const PoetsSection = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eeeeee;
`;

export const PoetsSectionTitle = styled.h3`
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #222222;
  font-size: 16px;
  font-weight: 700;

  svg {
    color: #f9be06;
    font-size: 18px;
  }
`;

export const PoetsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PoetItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  background: #fafafa;
`;

export const PoetName = styled.span`
  color: #222222;
  font-size: 13px;
  font-weight: 600;
`;

export const PoetDetails = styled.span`
  color: #888888;
  font-size: 11px;
  text-align: right;
`;