import styled, { keyframes } from "styled-components";

/* =====================================================
   CORES
===================================================== */

const COLORS = {
  primary: "#831614",
  primaryDark: "#65100f",
  yellow: "#ffdb53",
  yellowDark: "#e3b900",
  background: "#fff",
  white: "#ffffff",
  text: "#1c1c1c",
  muted: "#777777",
  border: "#e8e8e8",
  danger: "#d62828",
  dangerDark: "#b71c1c",
};


/* =====================================================
   PAGE
===================================================== */

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;

  background: #fff;

  color: ${COLORS.text};

  font-family: "Poppins", sans-serif;

  box-sizing: border-box;

  overflow-x: hidden;
`;


/* =====================================================
   CONTENT
===================================================== */

export const Content = styled.main`
  width: min(94%, 1480px);

  margin: 42px auto 70px;

  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: 94%;
    margin-top: 35px;
  }

  @media (max-width: 700px) {
    width: 92%;
    margin: 25px auto 45px;
  }
`;


/* =====================================================
   HEADER
===================================================== */

export const Header = styled.header`
  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 30px;

  margin-bottom: 30px;

  @media (max-width: 850px) {
    flex-direction: column;

    align-items: center;

    text-align: center;

    gap: 22px;
  }
`;


/* =====================================================
   TITLE AREA
===================================================== */

export const TitleArea = styled.div`
  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 8px;

  text-align: center;
`;


/* =====================================================
   TITLE
===================================================== */

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
===================================================== */

export const Subtitle = styled.p`
  margin: 0;

  color: ${COLORS.muted};

  font-size: 14px;

  line-height: 1.5;

  text-align: center;
`;


/* =====================================================
   STATS
===================================================== */

export const Stats = styled.div`
  position: absolute;

  right: 0;
  bottom: 0;

  display: flex;

  align-items: center;

  gap: 12px;

  @media (max-width: 850px) {
    position: static;

    width: 100%;

    justify-content: center;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;


/* =====================================================
   STAT CARD
===================================================== */

export const StatCard = styled.div`
  min-width: 190px;

  padding: 13px 16px;

  display: flex;

  align-items: center;

  gap: 12px;

  background: ${COLORS.white};

  border: 1px solid ${COLORS.border};

  border-radius: 14px;

  box-shadow:
    0 10px 18px rgba(0, 0, 0, 0.045);

  @media (max-width: 500px) {
    flex: 1;

    min-width: 0;
  }
`;


/* =====================================================
   STAT ICON
===================================================== */

export const StatIcon = styled.div`
  width: 42px;
  height: 42px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 11px;

  background: ${({ $color }) => `${$color}12`};

  color: ${({ $color }) => $color};

  font-size: 20px;
`;


/* =====================================================
   STAT CONTENT
===================================================== */

export const StatContent = styled.div`
  min-width: 0;

  display: flex;

  flex-direction: column;

  gap: 1px;
`;


/* =====================================================
   STAT NUMBER
===================================================== */

export const StatNumber = styled.strong`
  color: #222;

  font-size: 20px;

  font-weight: 750;

  line-height: 1.2;
`;


/* =====================================================
   STAT LABEL
===================================================== */

export const StatLabel = styled.span`
  color: #888;

  font-size: 11px;

  white-space: nowrap;
`;


/* =====================================================
   FILTROS
===================================================== */

export const FilterContainer = styled.div`
  width: fit-content;

  max-width: 100%;

  margin: 0 auto 25px;

  padding: 5px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 5px;

  background: #ffffff;

  border: 1px solid #e6e6e6;

  border-radius: 13px;

  box-shadow:
    0 5px 18px rgba(0, 0, 0, 0.045);

  @media (max-width: 600px) {
    width: 100%;
  }
`;


/* =====================================================
   FILTRO
===================================================== */

export const FilterButton = styled.button`
  min-width: 125px;

  height: 43px;

  padding: 0 16px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 10px;

  border: none;

  border-radius: 9px;

  background: ${({ $active }) =>
    $active ? COLORS.primary : "transparent"};

  color: ${({ $active }) =>
    $active ? "#ffffff" : "#666666"};

  font-family: inherit;

  font-size: 13px;

  font-weight: 650;

  cursor: pointer;

  transition:
    background 0.22s ease,
    color 0.22s ease,
    transform 0.18s ease;

  strong {
    min-width: 21px;
    height: 21px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: ${({ $active }) =>
      $active ? "rgba(255,255,255,0.16)" : "#f1f1f1"};

    color: ${({ $active }) =>
      $active ? "#ffffff" : "#777777"};

    font-size: 10px;

    font-weight: 700;
  }

  &:hover {
    background: ${({ $active }) =>
      $active ? COLORS.primaryDark : "#fff7d8"};

    color: ${({ $active }) =>
      $active ? "#ffffff" : COLORS.primary};

    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};

    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    flex: 1;

    min-width: 0;

    height: 41px;

    padding: 0 8px;

    font-size: 12px;
  }
`;


/* =====================================================
   ERROR
===================================================== */

export const ErrorMessage = styled.div`
  width: 100%;

  max-width: 700px;

  margin: 0 auto 20px;

  padding: 13px 16px;

  display: flex;

  align-items: center;
  justify-content: center;

  gap: 9px;

  box-sizing: border-box;

  background: #fff1f1;

  border: 1px solid #ffd2d2;

  border-radius: 10px;

  color: ${COLORS.danger};

  font-size: 13px;

  text-align: center;

  svg {
    flex-shrink: 0;

    font-size: 17px;
  }
`;


/* =====================================================
   LOADING
===================================================== */

export const LoadingState = styled.div`
  min-height: 300px;

  display: flex;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 13px;

  color: #777;

  font-size: 13px;
`;


/* =====================================================
   SPINNER
===================================================== */

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 30px;
  height: 30px;

  border: 3px solid #eeeeee;

  border-top-color: ${COLORS.primary};

  border-radius: 50%;

  animation: ${spin} 0.8s linear infinite;
`;


/* =====================================================
   TABLE CONTAINER
===================================================== */

export const TableContainer = styled.section`
  width: 100%;

  background: #ffffff;

  border: 1px solid ${COLORS.border};

  border-radius: 18px;

  overflow: hidden;

  box-shadow:
    0 12px 35px rgba(0, 0, 0, 0.065);
`;


/* =====================================================
   TABLE HEADER
===================================================== */

export const TableHeader = styled.div`
  min-height: 76px;

  padding: 18px 24px;

  display: flex;

  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;

  border-bottom: 1px solid #eeeeee;

  @media (max-width: 600px) {
    padding: 16px 17px;

    min-height: 68px;
  }
`;


/* =====================================================
   TABLE HEADER INFO
===================================================== */

export const TableHeaderInfo = styled.div`
  display: flex;

  flex-direction: column;

  gap: 3px;
`;


/* =====================================================
   TABLE TITLE
===================================================== */

export const TableTitle = styled.h2`
  margin: 0;

  color: #252525;

  font-size: 17px;

  font-weight: 700;
`;


/* =====================================================
   TABLE DESCRIPTION
===================================================== */

export const TableDescription = styled.p`
  margin: 0;

  color: #999999;

  font-size: 12px;
`;


/* =====================================================
   TABLE WRAPPER
===================================================== */

export const TableWrapper = styled.div`
  width: 100%;

  overflow-x: auto;

  -webkit-overflow-scrolling: touch;

  scrollbar-width: thin;

  scrollbar-color:
    #d9b72c
    #f5f5f5;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #e1c33a;

    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #c9aa1f;
  }
`;


/* =====================================================
   TABLE
===================================================== */

export const Table = styled.table`
  width: 100%;

  min-width: 850px;

  border-collapse: collapse;

  table-layout: fixed;

  thead {
    background:
      linear-gradient(
        135deg,
        #8d1a18,
        #741311
      );
  }

  th {
    height: 52px;

    padding: 0 22px;

    color: #ffffff;

    text-align: left;

    font-size: 11px;

    font-weight: 700;

    text-transform: uppercase;

    letter-spacing: 0.7px;

    white-space: nowrap;

    &:last-child {
      text-align: center;
    }
  }

  td {
    height: 72px;

    padding: 10px 22px;

    color: #333333;

    font-size: 13px;

    border-bottom: 1px solid #eeeeee;

    vertical-align: middle;

    white-space: nowrap;

    transition:
      background 0.2s ease;
  }

  tbody tr {
    background: #ffffff;

    transition:
      background 0.2s ease;
  }

  tbody tr:nth-child(even) {
    background: #fdfdfd;
  }

  tbody tr:hover {
    background: #fffbed;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 31%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 15%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 22%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 17%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 15%;
  }

  @media (max-width: 900px) {
    min-width: 800px;

    th {
      padding: 0 16px;
    }

    td {
      padding: 9px 16px;
    }
  }

  @media (max-width: 600px) {
    min-width: 760px;

    th {
      height: 48px;

      padding: 0 13px;

      font-size: 10px;
    }

    td {
      height: 66px;

      padding: 8px 13px;

      font-size: 12px;
    }
  }
`;


/* =====================================================
   STUDENT CELL
===================================================== */

export const StudentCell = styled.div`
  display: flex;

  align-items: center;

  gap: 12px;

  min-width: 0;
`;


/* =====================================================
   STUDENT AVATAR
===================================================== */

export const StudentAvatar = styled.div`
  width: 40px;
  height: 40px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background:
    linear-gradient(
      135deg,
      ${COLORS.yellow},
      #f5c62d
    );

  color: #5e4900;

  font-size: 14px;

  font-weight: 750;

  box-shadow:
    inset 0 0 0 1px
    rgba(0, 0, 0, 0.04);
`;


/* =====================================================
   STUDENT INFO
===================================================== */

export const StudentInfo = styled.div`
  min-width: 0;

  display: flex;

  flex-direction: column;

  gap: 2px;
`;


/* =====================================================
   STUDENT NAME
===================================================== */

export const StudentName = styled.span`
  display: block;

  max-width: 250px;

  overflow: hidden;

  text-overflow: ellipsis;

  color: #222;

  font-size: 13px;

  font-weight: 650;

  line-height: 1.3;
`;


/* =====================================================
   BADGE
===================================================== */

export const Badge = styled.span`
  min-height: 28px;

  padding: 0 10px;

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 6px;

  border-radius: 7px;

  background: ${({ $type }) =>
    $type === "course"
      ? "#f4f4f5"
      : "#fff8d9"};

  color: ${({ $type }) =>
    $type === "course"
      ? "#555"
      : "#735c00"};

  border: 1px solid
    ${({ $type }) =>
      $type === "course"
        ? "#e9e9ea"
        : "#f2df8c"};

  font-size: 11px;

  font-weight: 600;

  white-space: nowrap;

  svg {
    font-size: 13px;
  }
`;


/* =====================================================
   TURNO BADGE
===================================================== */

export const TurnoBadge = styled.span`
  display: inline-flex;

  align-items: center;

  gap: 7px;

  color: #555;

  font-size: 12px;

  font-weight: 600;

  white-space: nowrap;

  span {
    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;

    background: ${({ $turno }) => {
      if ($turno === "Manhã") return "#f0b900";
      if ($turno === "Tarde") return "#e87927";
      if ($turno === "Noite") return "#6256b7";

      return "#999";
    }};
  }
`;


/* =====================================================
   ACTIONS
===================================================== */

export const Actions = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  gap: 14px;
`;


/* =====================================================
   ACTION BUTTON
   SEM FUNDO
   SEM BORDA
===================================================== */

export const ActionButton = styled.button`
  width: 32px;
  height: 32px;

  padding: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  background: transparent;

  border: none;

  border-radius: 0;

  color: ${({ $variant }) =>
    $variant === "delete"
      ? "#d62828"
      : "#831614"};

  cursor: pointer;

  box-shadow: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease,
    opacity 0.2s ease;

  appearance: none;

  svg {
    width: 18px;
    height: 18px;

    stroke-width: 2;
  }

  &:hover {
    background: transparent;

    color: ${({ $variant }) =>
      $variant === "delete"
        ? "#a91515"
        : "#5f0d0c"};

    transform: translateY(-2px) scale(1.08);

    box-shadow: none;
  }

  &:active {
    background: transparent;

    transform: scale(0.9);

    box-shadow: none;
  }

  &:focus {
    outline: none;

    background: transparent;
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};

    outline-offset: 3px;

    border-radius: 5px;
  }
`;


/* =====================================================
   EMPTY STATE
===================================================== */

export const EmptyState = styled.div`
  min-height: 250px;

  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  padding: 35px 20px;

  text-align: center;
`;


/* =====================================================
   EMPTY ICON
===================================================== */

export const EmptyIcon = styled.div`
  width: 58px;
  height: 58px;

  margin-bottom: 15px;

  display: flex;

  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: #fff8d9;

  color: #b18a00;

  font-size: 24px;
`;


/* =====================================================
   EMPTY TITLE
===================================================== */

export const EmptyTitle = styled.h3`
  margin: 0 0 5px;

  color: #333;

  font-size: 15px;

  font-weight: 700;
`;


/* =====================================================
   EMPTY TEXT
===================================================== */

export const EmptyText = styled.p`
  max-width: 400px;

  margin: 0;

  color: #999;

  font-size: 12px;

  line-height: 1.5;
`;


/* =====================================================
   MODAL OVERLAY
===================================================== */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 9999;

  padding: 20px;

  display: flex;

  align-items: center;
  justify-content: center;

  box-sizing: border-box;

  background: rgba(20, 15, 15, 0.58);

  backdrop-filter: blur(7px);

  overflow-y: auto;
`;


/* =====================================================
   MODAL
===================================================== */

const modalAppear = keyframes`
  from {
    opacity: 0;

    transform:
      translateY(16px)
      scale(0.97);
  }

  to {
    opacity: 1;

    transform:
      translateY(0)
      scale(1);
  }
`;

export const Modal = styled.div`
  width: 100%;

  max-width: 470px;

  max-height: calc(100vh - 40px);

  overflow-y: auto;

  box-sizing: border-box;

  padding: 28px;

  background: #ffffff;

  border: 1px solid rgba(255, 255, 255, 0.8);

  border-radius: 20px;

  box-shadow:
    0 30px 80px rgba(0, 0, 0, 0.25);

  animation:
    ${modalAppear}
    0.25s
    cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 600px) {
    padding: 23px 19px;

    border-radius: 17px;
  }
`;


/* =====================================================
   MODAL HEADER
===================================================== */

export const ModalHeader = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: space-between;

  gap: 15px;

  margin-bottom: 22px;
`;


/* =====================================================
   MODAL TITLE
===================================================== */

export const ModalTitle = styled.h2`
  margin: 0 0 5px;

  color: ${({ $danger }) =>
    $danger ? COLORS.danger : COLORS.primary};

  font-size: 21px;

  font-weight: 750;

  line-height: 1.2;
`;


/* =====================================================
   MODAL DESCRIPTION
===================================================== */

export const ModalDescription = styled.p`
  margin: 0;

  color: #999;

  font-size: 12px;

  line-height: 1.5;
`;


/* =====================================================
   MODAL CLOSE
===================================================== */

export const ModalClose = styled.button`
  width: 32px;
  height: 32px;

  flex-shrink: 0;

  display: flex;

  align-items: center;
  justify-content: center;

  padding: 0;

  border: none;

  background: transparent;

  color: #888;

  border-radius: 50%;

  cursor: pointer;

  transition:
    color 0.2s ease,
    background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #f4f4f4;

    color: #222;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};

    outline-offset: 2px;
  }
`;


/* =====================================================
   FORM
===================================================== */

export const Form = styled.div`
  display: flex;

  flex-direction: column;

  gap: 15px;
`;


/* =====================================================
   FORM GROUP
===================================================== */

export const FormGroup = styled.div`
  display: flex;

  flex-direction: column;

  gap: 7px;
`;


/* =====================================================
   LABEL
===================================================== */

export const Label = styled.label`
  color: #444;

  font-size: 12px;

  font-weight: 650;

  strong {
    color: ${COLORS.danger};
  }
`;


/* =====================================================
   INPUT
===================================================== */

export const Input = styled.input`
  width: 100%;

  min-height: 47px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid #dedede;

  border-radius: 10px;

  background: #fafafa;

  color: #222;

  font-family: inherit;

  font-size: 13px;

  outline: none;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &::placeholder {
    color: #aaa;
  }

  &:hover {
    border-color: #cfcfcf;
  }

  &:focus {
    border-color: ${COLORS.yellowDark};

    background: #ffffff;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, 0.16);
  }
`;


/* =====================================================
   SELECT
===================================================== */

export const Select = styled.select`
  width: 100%;

  min-height: 47px;

  padding: 0 14px;

  box-sizing: border-box;

  border: 1px solid #dedede;

  border-radius: 10px;

  background: #fafafa;

  color: #222;

  font-family: inherit;

  font-size: 13px;

  outline: none;

  cursor: pointer;

  transition:
    border-color 0.2s ease,
    background 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    border-color: #cfcfcf;
  }

  &:focus {
    border-color: ${COLORS.yellowDark};

    background: #ffffff;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, 0.16);
  }
`;


/* =====================================================
   MODAL BUTTONS
===================================================== */

export const ModalButtons = styled.div`
  display: flex;

  align-items: center;

  justify-content: flex-end;

  gap: 9px;

  margin-top: 8px;

  @media (max-width: 430px) {
    flex-direction: column-reverse;

    width: 100%;
  }
`;


/* =====================================================
   SAVE BUTTON
===================================================== */

export const SaveButton = styled.button`
  min-height: 45px;

  padding: 0 20px;

  border: none;

  border-radius: 9px;

  background: ${COLORS.primary};

  color: #ffffff;

  font-family: inherit;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    background: ${COLORS.primaryDark};

    transform: translateY(-2px);

    box-shadow:
      0 7px 16px
      rgba(131, 22, 20, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;


/* =====================================================
   CANCEL BUTTON
===================================================== */

export const CancelButton = styled.button`
  min-height: 45px;

  padding: 0 19px;

  border: 1px solid #dedede;

  border-radius: 9px;

  background: #ffffff;

  color: #555;

  font-family: inherit;

  font-size: 13px;

  font-weight: 600;

  cursor: pointer;

  transition:
    background 0.2s ease,
    border-color 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: #f5f5f5;

    border-color: #d2d2d2;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;


/* =====================================================
   CONFIRM BUTTON
===================================================== */

export const ConfirmButton = styled.button`
  min-height: 45px;

  padding: 0 19px;

  border: none;

  border-radius: 9px;

  background: ${COLORS.danger};

  color: #ffffff;

  font-family: inherit;

  font-size: 13px;

  font-weight: 700;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background: ${COLORS.dangerDark};

    transform: translateY(-2px);

    box-shadow:
      0 7px 16px
      rgba(214, 40, 40, 0.2);
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.4;

    cursor: not-allowed;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;


/* =====================================================
   WARNING BOX
===================================================== */

export const WarningBox = styled.div`
  margin-bottom: 4px;

  padding: 14px;

  display: flex;

  align-items: flex-start;

  gap: 11px;

  box-sizing: border-box;

  background: #fff6f6;

  border: 1px solid #ffd9d9;

  border-radius: 11px;

  color: ${COLORS.danger};

  svg {
    width: 19px;
    height: 19px;

    flex-shrink: 0;

    margin-top: 2px;
  }

  strong {
    color: ${COLORS.danger};

    font-size: 12px;
  }

  p {
    margin: 3px 0 0;

    color: #777;

    font-size: 11px;

    line-height: 1.55;
  }

  p strong {
    color: #555;

    font-size: 11px;
  }
`;
