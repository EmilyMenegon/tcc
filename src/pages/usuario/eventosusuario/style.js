import styled, { css } from "styled-components";
 
const COLORS = {
  primary: "#831614",
  primaryDark: "#65100f",
  yellow: "#ffdb53",
  yellowDark: "#e3b900",
  danger: "#d62828",
};
 
/* =====================================================
   EFEITO DE BOTÃO (bolinha que cresce a partir do cursor)
===================================================== */
 
const ButtonEffect = css`
  position: relative;
  overflow: hidden;
  isolation: isolate;
  --mouse-x: 50%;
  --mouse-y: 50%;
 
  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x);
    top: var(--mouse-y);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: ${COLORS.yellow};
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    z-index: 0;
    pointer-events: none;
  }
 
  &:hover::before {
    transform: translate(-50%, -50%) scale(18);
  }
 
  .buttonContent {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    height: 100%;
  }
`;
 
/* =====================================================
   PÁGINA
===================================================== */
 
export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: "Poppins", sans-serif;
  color: #1c1c1c;
  overflow-x: hidden;
  box-sizing: border-box;
`;
 
export const Content = styled.main`
  width: min(97%, 1650px);
  margin: 35px auto 70px;
  box-sizing: border-box;
 
  @media (max-width: 1100px) {
    width: 96%;
    margin-top: 30px;
  }
 
  @media (max-width: 700px) {
    width: 94%;
    margin: 22px auto 55px;
  }
`;
 
export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 25px;
 
  @media (max-width: 600px) {
    margin-bottom: 20px;
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
  margin: 0 0 10px;
  color: ${COLORS.primary};
  font-size: clamp(2.8rem, 5vw, 4.8rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -2px;
 
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
  color: #777777;
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
 
/* =====================================================
   BLOCOS (mesma interface das páginas de Inscrições e Galeria)
===================================================== */
 
export const Bloco = styled.section`
  width: 100%;
  margin-bottom: 28px;
  padding: 28px 30px 32px;
  box-sizing: border-box;
  background: #fff;
  border: 2px solid #d2d2d2;
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, .10), 0 3px 8px rgba(0, 0, 0, .045);
 
  @media (max-width: 900px) {
    padding: 24px 21px 28px;
  }
 
  @media (max-width: 600px) {
    margin-bottom: 20px;
    padding: 19px 14px 22px;
    border-radius: 16px;
  }
`;
 
// Bloco usado dentro do modal (sombra mais leve, menos espaçamento)
export const BlocoInterno = styled(Bloco)`
  margin-bottom: 20px;
  padding: 22px 24px 26px;
  box-shadow: 0 8px 22px rgba(0, 0, 0, .06);
 
  &:last-child {
    margin-bottom: 0;
  }
 
  @media (max-width: 600px) {
    padding: 16px 13px 18px;
  }
`;
 
export const BlocoHeader = styled.div`
  margin-bottom: 25px;
  padding-bottom: 19px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 2px solid #ddd;
 
  @media (max-width: 600px) {
    margin-bottom: 19px;
    padding-bottom: 14px;
    gap: 11px;
  }
`;
 
export const BlocoIcone = styled.div`
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fff5c9;
  border: 1px solid #e5ce73;
  color: ${COLORS.primary};
  font-size: 21px;
 
  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
    font-size: 17px;
  }
`;
 
export const BlocoInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
 
export const BlocoTitulo = styled.h2`
  margin: 0;
  color: #252525;
  font-size: 24px;
  font-weight: 750;
 
  @media (max-width: 600px) {
    font-size: 19px;
  }
`;
 
export const BlocoDescricao = styled.p`
  margin: 0;
  color: #777;
  font-size: 16px;
  line-height: 1.45;
 
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
 
export const BlocoContador = styled.span`
  margin-left: auto;
  flex-shrink: 0;
  min-height: 34px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background: #fff5c9;
  border: 1px solid #e5ce73;
  color: #735c00;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
 
  @media (max-width: 600px) {
    min-height: 28px;
    padding: 0 10px;
    font-size: 12px;
  }
`;
 
export const ErrorText = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto 20px;
  padding: 15px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: #fff0f0;
  border: 1px solid #e7bcbc;
  border-radius: 10px;
  color: ${COLORS.danger};
  font-size: 15px;
  text-align: center;
`;
 
/* =====================================================
   ANOS
===================================================== */
 
export const YearsWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
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
  border: 2px solid ${({ $active }) => ($active ? COLORS.primary : "#eeeeee")};
  border-radius: 22px;
  background: ${({ $active }) => ($active ? COLORS.primary : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#111111")};
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
    transition: transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
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
    $active ? COLORS.yellow : "rgba(255, 219, 83, 0.22)"};
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
  color: ${({ $active }) => ($active ? "#ffffff" : COLORS.primary)};
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
    $active ? "rgba(255,255,255,0.72)" : "#999999"};
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
 
/* =====================================================
   LISTA DE EVENTOS
===================================================== */
 
export const Cards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  align-items: stretch;
 
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
 
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
 
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
 
export const EventCard = styled.article`
  position: relative;
  width: 100%;
  min-height: 0;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 2px solid #e3e3e3;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
  transition:
    transform .3s ease,
    box-shadow .3s ease,
    border-color .25s ease;
 
  &:hover {
    transform: translateY(-8px);
    border-color: ${COLORS.primary};
    box-shadow: 0 18px 40px rgba(131, 22, 20, .16);
  }
 
  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }
`;
 
export const EventImage = styled.div`
  width: 100%;
  height: 145px;
  flex-shrink: 0;
  overflow: hidden;
  background: #eeeeee;
 
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .5s ease;
  }
 
  ${EventCard}:hover & img {
    transform: scale(1.07);
  }
 
  @media (max-width: 600px) {
    height: 125px;
  }
`;
 
export const EventImagePlaceholder = styled.div`
  width: 100%;
  height: ${({ $grande }) => ($grande ? "220px" : "145px")};
  margin-bottom: ${({ $grande }) => ($grande ? "22px" : "0")};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $grande }) => ($grande ? "14px" : "0")};
  background: #eeeeee;
  color: #b5b5b5;
  font-size: 40px;
 
  @media (max-width: 600px) {
    height: ${({ $grande }) => ($grande ? "180px" : "125px")};
  }
`;
 
export const EventContent = styled.div`
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  flex: 1;
`;
 
export const EventTitle = styled.h3`
  width: 100%;
  margin: 0 0 8px;
  color: #222222;
  font-size: 19px;
  line-height: 1.3;
  font-weight: 700;
  word-break: break-word;
`;
 
export const EventDescription = styled.p`
  width: 100%;
  margin: 0 0 14px;
  color: rgba(0, 0, 0, .65);
  font-size: 13px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
 
export const InfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
 
export const InfoItem = styled.div`
  width: 100%;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555555;
  font-size: 12px;
 
  svg {
    flex-shrink: 0;
    color: ${COLORS.primary};
    font-size: 15px;
  }
 
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
 
export const EventFooter = styled.div`
  width: 100%;
  margin-top: auto;
  padding-top: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
 
export const AccessButton = styled.button`
  ${ButtonEffect}
  flex: 1;
  min-height: 42px;
  border: none;
  border-radius: 9px;
  background: ${COLORS.primary};
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: color .25s ease, transform .25s cubic-bezier(.22, 1, .36, 1), box-shadow .25s ease;
 
  &:hover {
    color: #111111;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, .2);
  }
 
  &:active {
    transform: scale(.97);
  }
 
  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 3px;
  }
`;
 
/* =====================================================
   ESTADO VAZIO
===================================================== */
 
export const EmptyState = styled.div`
  grid-column: 1 / -1;
  min-height: 250px;
  padding: 35px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 2px dashed #ddd;
  border-radius: 15px;
  background: #fafafa;
`;
 
export const EmptyIcon = styled.div`
  width: 62px;
  height: 62px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff5c9;
  border: 1px solid #e5ce73;
  color: #a27e00;
  font-size: 27px;
`;
 
export const EmptyTitle = styled.h3`
  margin: 0 0 6px;
  color: #333;
  font-size: 20px;
  font-weight: 750;
`;
 
export const EmptyText = styled.p`
  max-width: 450px;
  margin: 0;
  color: #777;
  font-size: 15px;
  line-height: 1.6;
`;
 
/* =====================================================
   MODAL
===================================================== */
 
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: rgba(20, 15, 15, .62);
  backdrop-filter: blur(6px);
`;
 
export const Modal = styled.div`
  width: 100%;
  max-width: 1100px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 28px 30px 30px;
  background: #ffffff;
  border: 2px solid #d4d4d4;
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, .3);
 
  @media (max-width: 600px) {
    padding: 20px 14px 22px;
    max-height: calc(100vh - 20px);
    border-radius: 17px;
  }
`;
 
export const ModalHeader = styled.div`
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
 
export const ModalTitle = styled.h2`
  margin: 0;
  color: ${COLORS.primary};
  font-size: 26px;
  font-weight: 750;
`;
 
export const CloseButton = styled.button`
  ${ButtonEffect}
  width: 40px;
  height: 40px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #f4f4f4;
  color: #444444;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: color .25s ease, transform .25s ease, box-shadow .25s ease;
 
  svg {
    transition: transform .3s ease;
  }
 
  &:hover {
    color: #111111;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, .12);
  }
 
  &:hover svg {
    transform: rotate(90deg);
  }
 
  &:focus-visible {
    outline: 2px solid ${COLORS.yellow};
    outline-offset: 2px;
  }
`;
 
export const ModalImage = styled.div`
  width: 100%;
  height: 280px;
  margin-bottom: 22px;
  border-radius: 14px;
  overflow: hidden;
  background: #eeeeee;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .10);
 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
 
  @media (max-width: 500px) {
    height: 210px;
  }
`;
 
export const ModalEventTitle = styled.h3`
  margin: 0 0 12px;
  color: #222222;
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  line-height: 1.2;
  font-weight: 800;
  word-break: break-word;
`;
 
export const ModalDescription = styled.p`
  margin: 0 0 20px;
  color: #444444;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;
 
export const ModalInfoList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
 
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
 
export const ModalInfoItem = styled.div`
  min-width: 0;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
 
  & > svg {
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: ${COLORS.primary};
  }
 
  div {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
 
  strong {
    color: #333333;
    font-size: 13px;
    font-weight: 650;
  }
 
  span {
    color: #666666;
    font-size: 14px;
    word-break: break-word;
  }
`;
 
/* =====================================================
   RESULTADOS (RANKING)
===================================================== */
 
export const RankingTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 0 5px 18px rgba(0, 0, 0, .06);
  scrollbar-width: thin;
  scrollbar-color: ${COLORS.yellow} #e8e8e8;
 
  &::-webkit-scrollbar {
    height: 9px;
  }
 
  &::-webkit-scrollbar-track {
    background: #e8e8e8;
  }
 
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.yellow};
    border-radius: 20px;
  }
`;
 
export const RankingTable = styled.table`
  width: 100%;
  min-width: 1150px;
  border-collapse: collapse;
  table-layout: auto;
  font-family: "Poppins", sans-serif;
 
  thead {
    background: ${COLORS.yellow};
  }
 
  th {
    padding: 14px 12px;
    color: #111111;
    font-size: 11px;
    font-weight: 750;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .6px;
    white-space: nowrap;
    border-right: 1px solid rgba(0, 0, 0, .08);
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
    padding: 13px 12px;
    color: #444444;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #f1f1f1;
    background: inherit;
  }
 
  td:nth-child(2) {
    min-width: 190px;
    text-align: left;
  }
 
  tbody tr:last-child td {
    border-bottom: none;
  }
 
  tbody tr:hover {
    background: #fff8dc;
  }
`;
 
export const RankingRow = styled.tr`
  background: ${({ $primeiro }) =>
    $primeiro ? "rgba(255, 219, 83, 0.20)" : "#ffffff"};
  transition: background .2s ease;
 
  ${({ $primeiro }) =>
    $primeiro &&
    `
      td {
        font-weight: 600;
      }
    `}
`;
 
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
    color: ${COLORS.primary};
    font-size: 17px;
  }
`;
 
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
 
export const Score = styled.span`
  min-width: 38px;
  height: 30px;
  padding: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: #f5f5f5;
  color: #333333;
  font-size: 11px;
  font-weight: 600;
`;
 
export const Average = styled.span`
  color: #222222;
  font-weight: 700;
  font-size: 12px;
`;
 
export const Penalty = styled.span`
  color: ${({ $penalidade }) => ($penalidade ? "#d62828" : "#3a9d5d")};
  font-weight: 700;
  font-size: 12px;
`;
 
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
 
export const FinalScore = styled.span`
  min-width: 60px;
  min-height: 32px;
  padding: 0 9px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  background: ${COLORS.primary};
  color: ${COLORS.yellow};
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 3px 8px rgba(131, 22, 20, .18);
`;
 
export const RankingEmpty = styled.div`
  min-height: 180px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 7px;
  border: 2px dashed #ddd;
  border-radius: 14px;
  background: #fafafa;
  color: #999999;
 
  svg {
    margin-bottom: 5px;
    color: #a27e00;
    font-size: 28px;
  }
 
  strong {
    color: #444444;
    font-size: 15px;
  }
 
  span {
    max-width: 400px;
    color: #888888;
    font-size: 13px;
    line-height: 1.5;
  }
`;