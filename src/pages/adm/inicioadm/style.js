import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
 
const COLORS = {
  primary: "#831614",
  primaryDark: "#571111",
  yellow: "#ffdb53",
  yellowDark: "#e3b900",
};
 
const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
 
const floating = keyframes`
  0% { transform: translate(0, 0); }
  50% { transform: translate(10px, -15px); }
  100% { transform: translate(0, 0); }
`;
 
const pulse = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .45; transform: scale(.75); }
`;
 
const pixelOneFloat = keyframes`
  0% { transform: translate(0, 0) rotate(-4deg); }
  50% { transform: translate(-8px, -12px) rotate(4deg); }
  100% { transform: translate(0, 0) rotate(-4deg); }
`;
 
const pixelTwoFloat = keyframes`
  0% { transform: translate(0, 0) rotate(3deg); }
  50% { transform: translate(8px, -10px) rotate(-4deg); }
  100% { transform: translate(0, 0) rotate(3deg); }
`;
 
/* =====================================================
   PÁGINA
===================================================== */
 
export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  color: #1c1c1c;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
 
export const Main = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  position: relative;
  padding: 55px 0 80px;
  overflow: hidden;
  background: #fff;
 
  @media (max-width: 700px) {
    padding: 35px 0 60px;
  }
`;
 
export const Header = styled.header`
  width: min(94%, 1300px);
  margin: 0 auto 40px;
  position: relative;
  z-index: 3;
  animation: ${fadeUp} .8s ease both;
 
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 30px;
  }
`;
 
export const Badge = styled.div`
  width: fit-content;
  margin-bottom: 22px;
  padding: 9px 15px;
  display: flex;
  align-items: center;
  gap: 9px;
  border-radius: 30px;
  background: #111;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1.2px;
  box-shadow: 0 8px 20px rgba(131, 22, 20, .16);
 
  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    font-size: .68rem;
  }
`;
 
export const BadgeDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${COLORS.yellow};
  animation: ${pulse} 1.8s ease infinite;
`;
 
export const Title = styled.h1`
  margin: 0 0 14px;
  color: #111;
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
 
export const Highlight = styled.span`
  color: ${COLORS.yellow};
`;
 
export const Description = styled.p`
  width: 100%;
  max-width: 700px;
  margin: 0;
  color: #383131;
  font-size: 1.55rem;
  line-height: 1.6;
 
  strong {
    color: ${COLORS.primary};
  }
 
  @media (max-width: 768px) {
    margin: 0 auto;
    font-size: 1.1rem;
  }
 
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;
 
/* =====================================================
   GRADE DE CARDS
===================================================== */
 
export const CardsGrid = styled.section`
  width: min(94%, 1300px);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
  position: relative;
  z-index: 3;
  align-items: stretch;
 
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
 
export const CardLink = styled(Link)`
  display: block;
  height: 100%;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
 
  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }
`;
 
/* =====================================================
   CARD (mesma interface dos blocos)
===================================================== */
 
export const Card = styled.div`
  grid-column: ${({ $featured }) => ($featured ? "1 / -1" : "auto")};
  width: 100%;
  height: 100%;
  min-height: 240px;
  padding: 28px 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  border: 2px solid ${({ $featured }) => ($featured ? COLORS.primary : "#d2d2d2")};
  border-radius: 20px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, .10), 0 3px 8px rgba(0, 0, 0, .045);
  cursor: ${({ $featured }) => ($featured ? "default" : "pointer")};
  animation: ${fadeUp} .7s ease backwards;
  transition:
    transform .3s cubic-bezier(.22, 1, .36, 1),
    border-color .25s ease,
    box-shadow .3s ease;
 
  &:hover {
    transform: translateY(-6px);
    border-color: ${COLORS.primary};
    box-shadow: 0 24px 55px rgba(131, 22, 20, .16), 0 3px 8px rgba(0, 0, 0, .05);
  }
 
  @media (max-width: 900px) {
    padding: 24px 21px 26px;
  }
 
  @media (max-width: 600px) {
    min-height: 0;
    padding: 19px 16px 22px;
    gap: 20px;
    border-radius: 16px;
  }
`;
 
export const CardHeader = styled.div`
  padding-bottom: 19px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 2px solid #ddd;
 
  @media (max-width: 600px) {
    padding-bottom: 14px;
    gap: 12px;
    flex-wrap: wrap;
  }
`;
 
export const CardIcon = styled.div`
  width: 56px;
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #fff5c9;
  border: 1px solid #e5ce73;
  color: ${COLORS.primary};
  font-size: 24px;
  transition: background .25s ease, color .25s ease, border-color .25s ease, transform .3s ease;
 
  ${Card}:hover & {
    background: ${COLORS.primary};
    border-color: ${COLORS.primary};
    color: ${COLORS.yellow};
    transform: rotate(-5deg) scale(1.05);
  }
 
  @media (max-width: 600px) {
    width: 46px;
    height: 46px;
    font-size: 20px;
  }
`;
 
export const CardInfo = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
 
export const CardTitle = styled.h2`
  margin: 0;
  color: #252525;
  font-size: 26px;
  font-weight: 750;
  line-height: 1.2;
  transition: color .25s ease;
 
  ${Card}:hover & {
    color: ${COLORS.primary};
  }
 
  @media (max-width: 600px) {
    font-size: 21px;
  }
`;
 
export const CardDescription = styled.p`
  margin: 0;
  color: #777;
  font-size: 16px;
  line-height: 1.5;
 
  @media (max-width: 600px) {
    font-size: 13.5px;
  }
`;
 
export const CardStatus = styled.span`
  flex-shrink: 0;
  min-height: 34px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border-radius: 999px;
  background: #eefaf1;
  border: 1px solid #bfe5c8;
  color: #1e7a3a;
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
 
  svg {
    font-size: 15px;
  }
 
  @media (max-width: 600px) {
    min-height: 28px;
    padding: 0 10px;
    font-size: 12px;
  }
`;
 
/* =====================================================
   CORPO DO CARD DO REGULAMENTO
===================================================== */
 
export const CardBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`;
 
export const FileBox = styled.div`
  min-width: 0;
  flex: 1 1 320px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f8f8f8;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
`;
 
export const FileIcon = styled.div`
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #fff;
  border: 1px solid #e0e0e0;
  color: ${COLORS.primary};
  font-size: 18px;
`;
 
export const FileInfo = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
 
export const FileLabel = styled.span`
  color: #888;
  font-size: 13px;
  font-weight: 600;
`;
 
export const FileName = styled.strong`
  overflow: hidden;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
 
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
 
export const ButtonsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
 
  @media (max-width: 600px) {
    width: 100%;
 
    > * {
      flex: 1 1 140px;
    }
  }
`;
 
export const RegulationButton = styled.button`
  position: relative;
  min-height: 48px;
  padding: 0 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
  border: 2px solid ${({ $variant }) => ($variant === "yellow" ? COLORS.yellow : COLORS.primary)};
  border-radius: 9px;
  background: ${({ $variant }) => ($variant === "yellow" ? COLORS.yellow : COLORS.primary)};
  color: ${({ $variant }) => ($variant === "yellow" ? "#111" : "#fff")};
  font-family: inherit;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: color .25s ease, transform .25s cubic-bezier(.22, 1, .36, 1), box-shadow .25s ease;
 
  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x, 50%);
    top: var(--mouse-y, 50%);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${({ $variant }) => ($variant === "yellow" ? COLORS.primary : COLORS.yellow)};
    transform: translate(-50%, -50%) scale(0);
    transition: transform .6s cubic-bezier(.16, 1, .3, 1);
    z-index: -1;
    pointer-events: none;
  }
 
  .button-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
  }
 
  svg {
    flex-shrink: 0;
    width: 17px;
    height: 17px;
  }
 
  &:hover {
    color: ${({ $variant }) => ($variant === "yellow" ? "#fff" : "#111")};
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, .2);
 
    &::before {
      transform: translate(-50%, -50%) scale(16);
    }
  }
 
  &:active {
    transform: scale(.97);
  }
 
  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 3px;
  }
`;
 
/* =====================================================
   RODAPÉ / BOTÃO "ACESSAR"
===================================================== */
 
export const CardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;
 
export const CardAction = styled.div`
  min-height: 48px;
  padding: 0 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 9px;
  background: ${COLORS.primary};
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  transition: background .25s ease, color .25s ease, box-shadow .25s ease;
 
  svg {
    transition: transform .25s ease;
  }
 
  ${Card}:hover & {
    background: ${COLORS.yellow};
    color: #111;
    box-shadow: 0 8px 18px rgba(131, 22, 20, .18);
  }
 
  ${Card}:hover & svg {
    transform: translateX(6px);
  }
 
  @media (max-width: 600px) {
    width: 100%;
  }
`;
 
/* =====================================================
   DECORAÇÃO DO FUNDO DA PÁGINA
===================================================== */
 
export const DecorativeCircle = styled.span`
  position: absolute;
  width: ${({ $size }) => $size || "50px"};
  height: ${({ $size }) => $size || "50px"};
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  border-radius: 50%;
  background: ${COLORS.yellow};
  border: 3px solid ${COLORS.primary};
  opacity: .9;
  z-index: 1;
  pointer-events: none;
  animation: ${floating} ${({ $duration }) => $duration || "5s"} ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || "0s"};
 
  @media (max-width: 768px) {
    display: none;
  }
`;
 
export const Pixel = styled.img`
  position: absolute;
  width: ${({ $size }) => $size || "55px"};
  height: auto;
  top: ${({ $top }) => $top || "auto"};
  left: ${({ $left }) => $left || "auto"};
  right: ${({ $right }) => $right || "auto"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  z-index: 2;
  pointer-events: none;
  user-select: none;
  object-fit: contain;
  animation: ${({ $animation }) =>
      $animation === "two" ? pixelTwoFloat : pixelOneFloat}
    4.8s ease-in-out infinite;
 
  @media (max-width: 768px) {
    display: none;
  }
`;
 
