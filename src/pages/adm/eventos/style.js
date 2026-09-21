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
    transition: transform .5s cubic-bezier(.16, 1, .3, 1);
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

export const TitleArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
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

export const YearsWrapper = styled.div`
  width: 100%;
  margin: 0 auto 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width: 600px) {
    gap: 8px;
    margin-bottom: 35px;
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
  border: 2px solid ${({ $active }) => ($active ? COLORS.primary : "#eee")};
  border-radius: 22px;
  background: ${({ $active }) => ($active ? COLORS.primary : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
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
  color: ${({ $active }) => ($active ? "#fff" : COLORS.primary)};
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
  color: ${({ $active }) => ($active ? "rgba(255, 255, 255, .72)" : "#999")};
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

export const Cards = styled.section`
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
  background: #fff;
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  border: 1px solid #eee;
  box-shadow: 0 7px 25px rgba(0, 0, 0, .08);
  transition: transform .3s ease, box-shadow .3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, .15);
  }

  &:focus-visible {
    outline: 3px solid #f9be06;
    outline-offset: 4px;
  }
`;

export const EventImage = styled.div`
  width: 100%;
  height: 145px;
  flex-shrink: 0;
  overflow: hidden;
  background: #eee;

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
  height: 145px;
  flex-shrink: 0;
  background: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b5b5b5;
  font-size: 40px;

  @media (max-width: 600px) {
    height: 125px;
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

export const EventTitle = styled.h2`
  width: 100%;
  margin: 0 0 8px;
  color: #222;
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
  display: flex;
  align-items: center;
  gap: 8px;
  color: #555;
  font-size: 12px;
  min-width: 0;

  svg {
    flex-shrink: 0;
    color: #555;
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
  min-height: 38px;
  border: none;
  border-radius: 9px;
  background: #831614;
  color: #ffdb53;
  font-family: "Poppins";
  font-weight: 700;
  cursor: pointer;
  transition: .2s;

  &:hover {
    background: #ffdb53;
    color: #831614;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    cursor: pointer;
    color: #666;
    font-size: 18px;
    transition: .2s;
  }

  svg:hover {
    color: #000;
    transform: scale(1.2);
  }

  svg:last-child:hover {
    color: #d62828;
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
  color: #f9be06;
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

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(0, 0, 0, .7);
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 1100px;
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  box-sizing: border-box;
  padding: 30px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 25px 70px rgba(0, 0, 0, .35);

  @media (max-width: 600px) {
    padding: 20px;
    max-height: calc(100vh - 20px);
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
  color: #222;
  font-size: 25px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  ${ButtonEffect}
  width: 40px;
  height: 40px;
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
    transition: transform .3s ease;
  }

  &:hover {
    background: #ffdb53;
    color: #831614;
  }

  &:hover svg {
    transform: rotate(90deg);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 0 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-family: "Poppins";

  &:focus {
    border-color: #f9be06;
    box-shadow: 0 0 0 3px rgba(249, 190, 6, .15);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 130px;
  margin-bottom: 20px;
  padding: 14px 15px;
  resize: vertical;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-family: "Poppins";

  &:focus {
    border-color: #f9be06;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

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
  border: 2px dashed #d8d8d8;
  border-radius: 17px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  color: #aaa;
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
    color: #333;
  }

  span,
  small {
    color: #999;
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
  background: rgba(0, 0, 0, .75);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: #e74c3c;
  }
`;

export const ParticipantsBox = styled.div`
  min-height: 75px;
  margin-bottom: 20px;
  padding: 13px;
  border: 1px dashed #d5d5d5;
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
    color: #333;
    font-size: 13px;
  }

  span {
    color: #999;
    font-size: 11px;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`;

export const SaveButton = styled.button`
  ${ButtonEffect}
  min-height: 48px;
  padding: 0 22px;
  border: none;
  border-radius: 10px;
  background: #831614;
  color: #ffdb53;
  font-family: "Poppins";
  font-weight: 700;
  cursor: pointer;
  transition: background .2s ease, color .2s ease;

  &:hover {
    background: #ffdb53;
    color: #831614;
  }
`;

export const DeleteModal = styled.div`
  width: 400px;
  max-width: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  border-radius: 20px;
  text-align: center;
`;

export const DeleteModalTitle = styled.h3`
  margin: 0 0 12px;
  color: #111;
  font-size: 24px;
`;

export const DeleteModalText = styled.p`
  margin: 0 0 10px;
  color: #666;
  font-size: 15px;

  strong {
    color: #111;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 25px;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const CancelButton = styled.button`
  position: relative;
  min-height: 45px;
  padding: 0 22px;
  border: none;
  border-radius: 10px;
  background: #ececec;
  color: #111;
  font-family: "Poppins";
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
`;

export const ConfirmButton = styled.button`
  position: relative;
  min-height: 45px;
  padding: 0 22px;
  border: none;
  border-radius: 10px;
  background: #d62828;
  color: #fff;
  font-family: "Poppins";
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
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
    gap: 7px;
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
`;

export const RankingSection = styled.section`
  width: 100%;
  margin-top: 35px;
  padding-top: 30px;
  border-top: 1px solid #eee;
`;

export const RankingHeader = styled.div`
  margin-bottom: 20px;
`;

export const RankingTitle = styled.h3`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 9px;
  color: #222;
  font-size: 20px;
  font-weight: 700;

  svg {
    color: #f9be06;
    font-size: 23px;
  }
`;

export const RankingDescription = styled.p`
  margin: 7px 0 0;
  color: #888;
  font-size: 12px;
  line-height: 1.5;
`;

export const RankingTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  border: 1px solid #e5e5e5;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 5px 18px rgba(0, 0, 0, .06);
  scrollbar-width: thin;
  scrollbar-color: #bbb #f5f5f5;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px;
  }
`;

export const RankingTable = styled.table`
  width: 100%;
  min-width: 1150px;
  border-collapse: collapse;
  table-layout: auto;
  font-family: "Poppins", sans-serif;

  thead {
    background: #000;
  }

  th {
    padding: 14px 12px;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    text-align: center;
    white-space: nowrap;
    border-right: 1px solid rgba(255, 255, 255, .1);
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
    color: #444;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #f1f1f1;
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
    background: #fffaf0;
  }
`;

export const RankingRow = styled.tr`
  background: ${({ $primeiro }) =>
    $primeiro ? "rgba(249, 190, 6, .10)" : "#fff"};
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
  color: #222;
  font-weight: 700;
  font-size: 13px;

  svg {
    color: #f9be06;
    font-size: 17px;
  }
`;

export const ParticipantName = styled.span`
  display: block;
  max-width: 210px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #222;
  font-size: 12px;
  font-weight: 600;
`;

export const Score = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 38px;
  height: 30px;
  padding: 0 6px;
  border-radius: 7px;
  background: #f5f5f5;
  color: #333;
  font-size: 11px;
  font-weight: 600;
`;

export const Average = styled.span`
  color: #222;
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
  color: #555;
  font-size: 12px;
  font-weight: 600;

  svg {
    color: #777;
    font-size: 14px;
  }
`;

export const FinalScore = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  min-height: 32px;
  padding: 0 9px;
  border-radius: 7px;
  background: #000;
  color: #f9be06;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 3px 8px rgba(0, 0, 0, .12);
`;

export const RankingEmpty = styled.div`
  min-height: 180px;
  padding: 30px;
  box-sizing: border-box;
  border: 1px dashed #d8d8d8;
  border-radius: 14px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 7px;
  color: #999;

  svg {
    margin-bottom: 5px;
    color: #f9be06;
    font-size: 28px;
  }

  strong {
    color: #444;
    font-size: 14px;
  }

  span {
    max-width: 400px;
    color: #999;
    font-size: 12px;
    line-height: 1.5;
  }
`;

export const PoetsSection = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
`;

export const PoetsSectionTitle = styled.h3`
  margin: 0 0 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #222;
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
  border: 1px solid #eee;
  border-radius: 10px;
  background: #fafafa;
`;

export const PoetName = styled.span`
  color: #222;
  font-size: 13px;
  font-weight: 600;
`;

export const PoetDetails = styled.span`
  color: #888;
  font-size: 11px;
  text-align: right;
`;

export const ErrorText = styled.p`
  width: 100%;
  margin: 0 0 20px;
  color: #c62828;
  font-size: 14px;
  text-align: center;
`;