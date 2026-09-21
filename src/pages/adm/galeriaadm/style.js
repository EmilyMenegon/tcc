import styled, { css } from "styled-components";

const COLORS = {
  primary: "#831614",
  primaryDark: "#65100f",
  yellow: "#ffdb53",
  yellowDark: "#e3b900",
};

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
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #831614;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s cubic-bezier(.16, 1, .3, 1);
    z-index: 0;
    pointer-events: none;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(18);
  }

  svg,
  span {
    position: relative;
    z-index: 2;
  }
`;

export const Page = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
  color: #000;
  overflow-x: hidden;
`;

export const Content = styled.main`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 35px 0 100px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 92%;
    padding: 25px 0 80px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 20px 0 70px;
  }
`;

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

export const Title = styled.h1`
  margin: 0 0 14px;
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
  margin: 10px auto 0;
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

export const Gallery = styled.section`
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

export const Card = styled.article`
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
  transition: transform .3s ease, box-shadow .3s ease;
  aspect-ratio: 4 / 3;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, .15);
  }

  &:active {
    transform: translateY(-3px);
  }
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: #eee;

  img,
  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform .5s ease;
  }

  video {
    background: #000;
  }

  &:hover img,
  &:hover video {
    transform: scale(1.07);
  }
`;

export const DeleteButton = styled.button`
  ${ButtonEffect}
  position: absolute;
  top: 14px;
  right: 14px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(214, 40, 40, .95);
  color: #fff;
  cursor: pointer;
  opacity: 0;
  transform: scale(.85);
  box-shadow: 0 6px 15px rgba(0, 0, 0, .2);
  transition: opacity .2s ease, transform .2s ease, box-shadow .2s ease;
  z-index: 5;

  svg {
    width: 20px;
    height: 20px;
  }

  ${Card}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 25px rgba(0, 0, 0, .3);
  }

  &:active {
    transform: scale(.95);
  }

  @media (max-width: 700px) {
    opacity: 1;
    transform: scale(1);
  }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  min-height: 320px;
  padding: 50px 25px;
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
  width: 70px;
  height: 70px;
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(249, 190, 6, .15);
  color: #ffdb53;
  font-size: 30px;
`;

export const EmptyTitle = styled.h2`
  margin: 0 0 8px;
  color: #333;
  font-size: 22px;
  font-weight: 600;
`;

export const EmptyText = styled.p`
  max-width: 450px;
  margin: 0;
  color: #888;
  font-size: 14px;
  line-height: 1.6;
`;

export const FloatingButton = styled.button`
  ${ButtonEffect}
  position: fixed;
  right: 35px;
  bottom: 35px;
  width: 70px;
  height: 70px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: #ffdb53;
  color: #111;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, .20);
  transition: transform .25s ease, box-shadow .25s ease, color .25s ease, background .25s ease;
  z-index: 100;

  .buttonContent {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 30px;
    height: 30px;
    transition: transform .3s ease;
  }

  &:hover {
    color: #ffdb53;
    background: #831614;
    transform: translateY(-4px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, .28);
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:active {
    transform: translateY(1px) scale(.96);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: .6;
    transform: none;
  }

  @media (max-width: 600px) {
    width: 60px;
    height: 60px;
    right: 20px;
    bottom: 20px;

    svg {
      width: 27px;
      height: 27px;
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, .88);
  backdrop-filter: blur(5px);
  animation: fadeIn .2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 95vw;
  max-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: zoomIn .25s ease;

  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalImage = styled.img`
  display: block;
  max-width: 90vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 15px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, .4);

  @media (max-width: 600px) {
    max-width: 94vw;
    max-height: 84vh;
    border-radius: 10px;
  }
`;

export const CloseButton = styled.button`
  ${ButtonEffect}
  position: fixed;
  top: 25px;
  right: 30px;
  width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, .12);
  color: #fff;
  cursor: pointer;
  transition: .2s;
  z-index: 10000;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: #ffdb53;
    color: #000;
    transform: rotate(90deg);
  }

  @media (max-width: 600px) {
    top: 15px;
    right: 15px;
    width: 42px;
    height: 42px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const NavButton = styled.button`
  ${ButtonEffect}
  position: fixed;
  top: 50%;
  ${({ $direction }) =>
    $direction === "left" ? "left: 30px;" : "right: 30px;"}
  transform: translateY(-50%);
  width: 55px;
  height: 55px;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, .12);
  color: #fff;
  cursor: pointer;
  transition: background .2s ease, color .2s ease, transform .2s ease;
  z-index: 10000;

  svg {
    width: 26px;
    height: 26px;
  }

  &:hover {
    background: #ffdb53;
    color: #000;
    transform: translateY(-50%) scale(1.08);
  }

  @media (max-width: 600px) {
    width: 44px;
    height: 44px;

    ${({ $direction }) =>
      $direction === "left" ? "left: 12px;" : "right: 12px;"}

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const DeleteModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, .45);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10001;
  backdrop-filter: blur(3px);
  padding: 20px;
  box-sizing: border-box;
`;

export const DeleteModal = styled.div`
  width: 400px;
  max-width: 90%;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 20px 45px rgba(0, 0, 0, .2);
  animation: aparecer .25s ease;

  h2,
  h3 {
    margin: 0 0 12px;
    color: #111;
    font-size: 24px;
  }

  p {
    color: #666;
    margin: 0 0 30px;
    line-height: 1.5;
  }

  @keyframes aparecer {
    from {
      opacity: 0;
      transform: scale(.9);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (max-width: 500px) {
    padding: 25px 20px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  position: relative;
  width: 140px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: #ececec;
  color: #111;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  --mouse-x: 50%;
  --mouse-y: 50%;
  transition: transform .25s cubic-bezier(.22, 1, .36, 1), color .25s ease, box-shadow .25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x);
    top: var(--mouse-y);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffdb53;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .55s cubic-bezier(.16, 1, .3, 1);
    z-index: 0;
    pointer-events: none;
  }

  .buttonContent {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #111;
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(123, 30, 58, .25);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(15);
  }

  &:active {
    transform: translateY(0) scale(.97);
    transition: transform .08s ease;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #831614;
    outline-offset: 3px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ConfirmButton = styled.button`
  position: relative;
  width: 140px;
  height: 46px;
  padding: 0;
  border: none;
  border-radius: 10px;
  background: #d62828;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  --mouse-x: 50%;
  --mouse-y: 50%;
  transition: transform .25s cubic-bezier(.22, 1, .36, 1), color .25s ease, box-shadow .25s ease;

  &::before {
    content: "";
    position: absolute;
    left: var(--mouse-x);
    top: var(--mouse-y);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #111;
    transform: translate(-50%, -50%) scale(0);
    transition: transform .55s cubic-bezier(.16, 1, .3, 1);
    z-index: 0;
    pointer-events: none;
  }

  .buttonContent {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 22px rgba(123, 30, 58, .3);
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(15);
  }

  &:active {
    transform: translateY(0) scale(.97);
    transition: transform .08s ease;
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #831614;
    outline-offset: 3px;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const YearsWrapper = styled.div`
  width: 100%;
  margin: 70px auto 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 8px;
    margin-bottom: 25px;
  }
`;

export const YearsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  @media (max-width: 700px) {
    gap: 8px;
  }

  @media (max-width: 520px) {
    gap: 6px;
  }
`;

export const YearArrow = styled.button`
  position: relative;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: ${COLORS.primary};
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: transform .25s cubic-bezier(.22, 1, .36, 1), box-shadow .25s ease, opacity .2s ease;

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
    transition: transform .55s cubic-bezier(.16, 1, .3, 1);
    z-index: -1;
    pointer-events: none;
  }

  svg {
    position: relative;
    z-index: 2;
    width: 20px;
    height: 20px;
    stroke-width: 2.5;
  }

  &:hover:not(:disabled) {
    color: #111;
    transform: translateY(-2px);
    box-shadow: 0 8px 18px rgba(131, 22, 20, .2);

    &::before {
      transform: translate(-50%, -50%) scale(8);
    }
  }

  &:active:not(:disabled) {
    transform: scale(.94);
  }

  &:disabled {
    opacity: .25;
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
`;

export const YearCard = styled.button`
  position: relative;
  width: 230px;
  height: 155px;
  flex-shrink: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  border: 2px solid ${({ $active }) =>
    $active ? COLORS.primary : "#eee"};
  border-radius: 22px;
  background: ${({ $active }) =>
    $active ? COLORS.primary : "#fff"};
  color: ${({ $active }) =>
    $active ? "#fff" : "#111"};
  font-family: inherit;
  cursor: pointer;
  overflow: hidden;
  isolation: isolate;
  transition: transform .3s cubic-bezier(.22, 1, .36, 1), border-color .25s ease, background .25s ease, box-shadow .3s ease;

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
    transition: transform .65s cubic-bezier(.16, 1, .3, 1);
    z-index: -1;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: ${COLORS.primary};
    box-shadow: 0 18px 35px rgba(131, 22, 20, .16);

    &::before {
      transform: translate(-50%, -50%) scale(11);
    }
  }

  &:active {
    transform: translateY(-3px) scale(.98);
  }

  &:focus-visible {
    outline: 3px solid ${COLORS.yellow};
    outline-offset: 4px;
  }

  @media (max-width: 900px) {
    width: 200px;
    height: 140px;
  }

  @media (max-width: 700px) {
    width: 165px;
    height: 120px;
    padding: 15px;
    border-radius: 19px;
    gap: 9px;
  }

  @media (max-width: 520px) {
    width: 140px;
    height: 105px;
    padding: 12px;
    border-radius: 16px;
  }

  @media (max-width: 390px) {
    width: 120px;
    height: 95px;
    padding: 9px;
    border-radius: 14px;
  }
`;

export const YearIcon = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active ? COLORS.yellow : "rgba(255, 219, 83, .22)"};
  color: ${COLORS.primary};
  font-size: 22px;
  transition: transform .3s ease, background .25s ease;

  ${YearCard}:hover & {
    transform: scale(1.12) rotate(2deg);
  }

  @media (max-width: 900px) {
    width: 43px;
    height: 43px;
    font-size: 20px;
  }

  @media (max-width: 700px) {
    width: 38px;
    height: 38px;
    font-size: 18px;
  }

  @media (max-width: 520px) {
    width: 32px;
    height: 32px;
    font-size: 15px;
  }
`;

export const YearNumber = styled.strong`
  position: relative;
  z-index: 2;
  color: ${({ $active }) =>
    $active ? "#fff" : COLORS.primary};
  font-size: 2rem;
  font-weight: 850;
  line-height: 1;
  transition: color .25s ease, transform .3s ease;

  ${YearCard}:hover & {
    color: #111;
    transform: scale(1.05);
  }

  @media (max-width: 900px) {
    font-size: 1.8rem;
  }

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media (max-width: 520px) {
    font-size: 1.25rem;
  }

  @media (max-width: 390px) {
    font-size: 1.1rem;
  }
`;

export const YearDescription = styled.span`
  position: relative;
  z-index: 2;
  color: ${({ $active }) =>
    $active ? "rgba(255, 255, 255, .72)" : "#999"};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  white-space: nowrap;
  transition: color .25s ease;

  ${YearCard}:hover & {
    color: #5e4900;
  }

  @media (max-width: 520px) {
    font-size: 8px;
  }
`;