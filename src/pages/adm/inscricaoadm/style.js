import styled, { keyframes } from "styled-components";

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

export const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #fff;
  color: ${COLORS.text};
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Content = styled.main`
  width: min(97%, 1650px);
  margin: 35px auto 55px;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: 96%;
    margin-top: 30px;
  }

  @media (max-width: 700px) {
    width: 94%;
    margin: 22px auto 40px;
  }
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 25px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  color: #831614;
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  font-weight: 900;
  letter-spacing: -2px;
  line-height: 1.05;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 9vw, 4rem);
    letter-spacing: -1.5px;
  }

  @media (max-width: 480px) {
    font-size: 2.3rem;
  }
`;

export const Subtitle = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 8px auto 0;
  color: #777;
  font-size: 1.55rem;
  line-height: 1.6;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

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

export const StatCard = styled.div`
  min-width: 190px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.border};
  border-radius: 14px;
  box-shadow: 0 10px 18px rgba(0, 0, 0, 0.045);

  @media (max-width: 500px) {
    flex: 1;
    min-width: 0;
  }
`;

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

export const StatContent = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const StatNumber = styled.strong`
  color: #222;
  font-size: 20px;
  font-weight: 750;
  line-height: 1.2;
`;

export const StatLabel = styled.span`
  color: #888;
  font-size: 11px;
  white-space: nowrap;
`;

export const FilterContainer = styled.div`
  width: fit-content;
  max-width: 100%;
  margin: 0 auto 22px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 13px;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.045);

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FilterButton = styled.button`
  position: relative;
  min-width: 160px;
  height: 55px;
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
  font-size: 16px;
  font-weight: 650;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ $active }) =>
      $active ? COLORS.primaryDark : COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, 0.18);

    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }

  strong {
    position: relative;
    z-index: 2;
    min-width: 27px;
    height: 27px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${({ $active }) =>
      $active ? "rgba(255,255,255,0.16)" : "#f1f1f1"};
    color: ${({ $active }) =>
      $active ? "#ffffff" : "#777777"};
    font-size: 12px;
    font-weight: 700;
  }

  span {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 600px) {
    flex: 1;
    min-width: 0;
    height: 41px;
    padding: 0 8px;
    font-size: 12px;
  }
`;

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
   TABELA
===================================================== */

export const TableContainer = styled.section`
  width: 100%;
  background: #ffffff;
  border: 1px solid ${COLORS.border};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 45px rgba(0, 0, 0, 0.075);
`;

export const TableHeader = styled.div`
  min-height: 88px;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;

  @media (max-width: 600px) {
    padding: 16px 17px;
    min-height: 70px;
  }
`;

export const TableHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const TableTitle = styled.h2`
  margin: 0;
  color: #252525;
  font-size: 19px;
  font-weight: 700;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const TableDescription = styled.p`
  margin: 0;
  color: #999999;
  font-size: 13px;

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export const DownloadButton = styled.button`
  position: relative;
  min-height: 44px;
  padding: 0 17px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-shrink: 0;
  border: 1px solid ${COLORS.primary};
  border-radius: 9px;
  background: ${COLORS.primary};
  color: #ffffff;
  font-family: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 17px;
    height: 17px;
    flex-shrink: 0;
    stroke-width: 2.3;
  }

  span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    color: #111111;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, 0.2);

    &::before {
      transform: translate(-50%, -50%) scale(14);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 3px;
  }

  @media (max-width: 600px) {
    min-height: 38px;
    padding: 0 11px;
    font-size: 11px;
    gap: 6px;

    span {
      display: none;
    }

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #d9b72c #f5f5f5;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #c9aa1f;
    border-radius: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  min-width: 1050px;
  border-collapse: collapse;
  table-layout: fixed;

  thead {
    background: linear-gradient(135deg, #8d1a18, #741311);
  }

  th {
    height: 60px;
    padding: 0 27px;
    color: #ffffff;
    text-align: left;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.75px;
    white-space: nowrap;

    &:last-child {
      text-align: center;
    }
  }

  td {
    height: 92px;
    padding: 12px 27px;
    color: #333333;
    font-size: 14px;
    border-bottom: 1px solid #eeeeee;
    vertical-align: middle;
    white-space: nowrap;
    transition: background 0.2s ease;
  }

  tbody tr {
    background: #ffffff;
    transition: background 0.2s ease;
  }

  tbody tr:nth-child(even) {
    background: #fdfdfd;
  }

  tbody tr:hover {
    background: #fffbed;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 32%;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 16%;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: 21%;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 16%;
  }

  th:nth-child(5),
  td:nth-child(5) {
    width: 15%;
  }

  @media (max-width: 1100px) {
    min-width: 980px;

    th {
      padding: 0 22px;
    }

    td {
      padding: 11px 22px;
    }
  }

  @media (max-width: 900px) {
    min-width: 900px;

    th {
      height: 55px;
      padding: 0 18px;
      font-size: 11px;
    }

    td {
      height: 84px;
      padding: 10px 18px;
      font-size: 13px;
    }
  }

  @media (max-width: 600px) {
    min-width: 850px;

    th {
      height: 50px;
      padding: 0 14px;
      font-size: 10px;
    }

    td {
      height: 74px;
      padding: 8px 14px;
      font-size: 12px;
    }
  }
`;

export const StudentCell = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
`;

export const StudentAvatar = styled.div`
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: linear-gradient(135deg, ${COLORS.yellow}, #f5c62d);
  color: #5e4900;
  font-size: 15px;
  font-weight: 750;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.04);

  @media (max-width: 600px) {
    width: 39px;
    height: 39px;
    font-size: 13px;
  }
`;

export const StudentInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const StudentName = styled.span`
  display: block;
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #222;
  font-size: 14px;
  font-weight: 650;
  line-height: 1.3;

  @media (max-width: 600px) {
    max-width: 250px;
    font-size: 12px;
  }
`;

export const Badge = styled.span`
  min-height: 30px;
  padding: 0 11px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 7px;
  background: ${({ $type }) =>
    $type === "course" ? "#f4f4f5" : "#fff8d9"};
  color: ${({ $type }) =>
    $type === "course" ? "#555" : "#735c00"};
  border: 1px solid
    ${({ $type }) =>
      $type === "course" ? "#e9e9ea" : "#f2df8c"};
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;

  svg {
    font-size: 13px;
  }

  @media (max-width: 600px) {
    min-height: 27px;
    padding: 0 9px;
    font-size: 10px;
  }
`;

export const TurnoBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: #555;
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;

  span {
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({ $turno }) => {
      if ($turno === "Manhã") return "#f0b900";
      if ($turno === "Tarde") return "#e87927";
      if ($turno === "Noite") return "#6256b7";
      return "#999";
    }};
  }

  @media (max-width: 600px) {
    font-size: 11px;

    span {
      width: 7px;
      height: 7px;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const ActionButton = styled.button`
  position: relative;
  width: 35px;
  height: 35px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: ${({ $variant }) =>
    $variant === "delete" ? "#d62828" : "#831614"};
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  appearance: none;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${({ $variant }) =>
      $variant === "delete" ? "#111" : COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 19px;
    height: 19px;
    stroke-width: 2;
  }

  &:hover {
    color: ${({ $variant }) =>
      $variant === "delete" ? "#ffffff" : "#111111"};
    transform: translateY(-2px) scale(1.08);
    box-shadow: 0 7px 16px rgba(0, 0, 0, 0.16);

    &::before {
      transform: translate(-50%, -50%) scale(5);
    }
  }

  &:active {
    transform: scale(0.9);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  &:disabled::before {
    display: none;
  }

  @media (max-width: 600px) {
    width: 31px;
    height: 31px;

    svg {
      width: 17px;
      height: 17px;
    }
  }
`;

export const EmptyState = styled.div`
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 20px;
  text-align: center;
`;

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

export const EmptyTitle = styled.h3`
  margin: 0 0 5px;
  color: #333;
  font-size: 15px;
  font-weight: 700;
`;

export const EmptyText = styled.p`
  max-width: 400px;
  margin: 0;
  color: #999;
  font-size: 12px;
  line-height: 1.5;
`;

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

const modalAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
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
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.25);
  animation: ${modalAppear} 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 600px) {
    padding: 23px 19px;
    border-radius: 17px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 22px;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 5px;
  color: ${({ $danger }) =>
    $danger ? COLORS.danger : COLORS.primary};
  font-size: 21px;
  font-weight: 750;
  line-height: 1.2;
`;

export const ModalDescription = styled.p`
  margin: 0;
  color: #999;
  font-size: 12px;
  line-height: 1.5;
`;

export const ModalClose = styled.button`
  position: relative;
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
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #eeeeee;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 18px;
    height: 18px;
  }

  &:hover {
    color: #222;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.12);

    &::before {
      transform: translate(-50%, -50%) scale(5);
    }
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Label = styled.label`
  color: #444;
  font-size: 12px;
  font-weight: 650;

  strong {
    color: ${COLORS.danger};
  }
`;

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

  &:focus {
    border-color: ${COLORS.yellowDark};
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 219, 83, 0.16);
  }
`;

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

  &:focus {
    border-color: ${COLORS.yellowDark};
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(255, 219, 83, 0.16);
  }
`;

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

export const SaveButton = styled.button`
  position: relative;
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
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: #111111;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, 0.2);

    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  position: relative;
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
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    color: #111;
    border-color: ${COLORS.yellow};
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.12);

    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }

  &:active {
    transform: scale(0.97);
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const ConfirmButton = styled.button`
  position: relative;
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
  overflow: hidden;
  isolation: isolate;
  transition:
    color 0.25s ease,
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease,
    opacity 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #111111;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover:not(:disabled) {
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(214, 40, 40, 0.2);

    &::before {
      transform: translate(-50%, -50%) scale(15);
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.97);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

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

/* =====================================================
   ANOS
===================================================== */

export const YearsWrapper = styled.div`
  width: 100%;
  margin: 70px auto 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    gap: 7px;
    margin: 55px auto 35px;
  }

  @media (max-width: 430px) {
    gap: 5px;
  }
`;

export const YearsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: stretch;
  justify-content: center;
  gap: 18px;

  @media (max-width: 900px) {
    gap: 12px;
  }

  @media (max-width: 700px) {
    gap: 9px;
  }

  @media (max-width: 520px) {
    gap: 6px;
  }
`;

/* =====================================================
   SETAS DOS ANOS
===================================================== */

export const YearArrow = styled.button`
  position: relative;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: ${COLORS.primary};
  color: #ffffff;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.25s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.25s ease,
    opacity 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 21px;
    height: 21px;
    stroke-width: 2.5;
  }

  &:hover:not(:disabled) {
    color: #111111;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, 0.2);

    &::before {
      transform: translate(-50%, -50%) scale(8);
    }
  }

  &:active:not(:disabled) {
    transform: scale(0.94);
  }

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
    box-shadow: none;
  }

  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 3px;
  }

  @media (max-width: 700px) {
    width: 38px;
    height: 38px;
    border-radius: 10px;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 430px) {
    width: 32px;
    height: 32px;
    border-radius: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const YearCard = styled.button`
  position: relative;
  width: 100%;
  min-width: 0;
  height: 175px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  box-sizing: border-box;
  border: 2px solid
    ${({ $active }) =>
      $active ? COLORS.primary : "#eeeeee"};
  border-radius: 22px;
  background: ${({ $active }) =>
    $active ? COLORS.primary : "#ffffff"};
  color: ${({ $active }) =>
    $active ? "#ffffff" : "#111111"};
  font-family: inherit;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition:
    transform 0.3s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.25s ease,
    background 0.25s ease,
    box-shadow 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition:
      transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${COLORS.primary};
    box-shadow: 0 18px 35px rgba(131, 22, 20, 0.16);

    &::before {
      transform: translate(-50%, -50%) scale(11);
    }
  }

  &:active {
    transform: translateY(-3px) scale(0.98);
  }

  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }

  @media (max-width: 900px) {
    height: 155px;
    padding: 17px;
    border-radius: 20px;
  }

  @media (max-width: 700px) {
    height: 135px;
    padding: 13px;
    border-radius: 17px;
    gap: 9px;
  }

  @media (max-width: 520px) {
    height: 115px;
    padding: 10px;
    border-radius: 15px;
    gap: 7px;
  }

  @media (max-width: 390px) {
    height: 105px;
    padding: 8px;
    border-radius: 13px;
  }
`;

export const YearIcon = styled.div`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active
      ? COLORS.yellow
      : "rgba(255, 219, 83, 0.22)"};
  color: ${COLORS.primary};
  font-size: 23px;
  transition:
    transform 0.3s ease,
    background 0.25s ease;

  ${YearCard}:hover & {
    transform: scale(1.12) rotate(2deg);
  }

  @media (max-width: 900px) {
    width: 46px;
    height: 46px;
    font-size: 21px;
  }

  @media (max-width: 700px) {
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  @media (max-width: 520px) {
    width: 34px;
    height: 34px;
    font-size: 15px;
  }

  @media (max-width: 390px) {
    width: 30px;
    height: 30px;
    font-size: 13px;
  }
`;

export const YearNumber = styled.strong`
  position: relative;
  z-index: 2;
  color: ${({ $active }) =>
    $active ? "#ffffff" : COLORS.primary};
  font-size: 2.1rem;
  font-weight: 850;
  line-height: 1;
  transition:
    color 0.25s ease,
    transform 0.3s ease;

  ${YearCard}:hover & {
    color: #111111;
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.55rem;
  }

  @media (max-width: 520px) {
    font-size: 1.3rem;
  }

  @media (max-width: 390px) {
    font-size: 1.15rem;
  }
`;

export const YearDescription = styled.span`
  position: relative;
  z-index: 2;
  color: ${({ $active }) =>
    $active
      ? "rgba(255,255,255,0.72)"
      : "#999999"};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  transition: color 0.25s ease;

  ${YearCard}:hover & {
    color: #5e4900;
  }

  @media (max-width: 600px) {
    font-size: 9px;
    white-space: normal;
  }

  @media (max-width: 520px) {
    font-size: 8px;
  }
`;