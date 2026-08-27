import styled from "styled-components";

export const Page = styled.div`
  font-family: "Poppins", sans-serif;
  background: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleArea = styled.div`
  width: 100%;
  text-align: center;
  padding: 2% 0;

  @media (max-width: 768px) {
    padding: 4% 0;
  }

  @media (max-width: 480px) {
    padding: 5% 0;
  }
`;

export const Title = styled.h1`
  font-size: clamp(24px, 3vw, 40px);
  margin: 0;
  text-align: center;
`;

export const Container = styled.div`
  width: 80%;
  min-height: 450px;
  margin: 2% auto;
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    margin: 4% auto;
    min-height: auto;
    align-items: center;
  }

  @media (max-width: 480px) {
    width: 94%;
    margin: 5% auto;
    border-radius: 15px;
  }
`;

export const LeftSide = styled.div`
  width: 40%;
  background: #f9be06;
  color: black;
  padding: 5%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 7% 6%;
    text-align: center;
  }

  @media (max-width: 480px) {
    padding: 9% 8%;
  }
`;

export const SectionTitle = styled.h2`
  margin: 0 0 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(20px, 2.5vw, 30px);
  text-align: center;
  width: 100%;
`;

export const InfoText = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 25% 75%;
  align-items: center;
  margin-bottom: 7%;
  box-sizing: border-box;

  svg {
    width: clamp(28px, 3vw, 40px);
    height: clamp(28px, 3vw, 40px);
    color: black;
    justify-self: center;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    min-width: 0;
    padding-left: 8%;
  }

  strong {
    font-size: clamp(15px, 1.5vw, 18px);
    color: black;
  }

  p {
    margin: 2% 0 0;
    font-size: clamp(12px, 1.2vw, 15px);
    opacity: 0.85;
    color: black;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    width: 65%;
    margin-bottom: 6%;

    div {
      padding-left: 6%;
    }
  }

  @media (max-width: 480px) {
    width: 85%;
    margin-bottom: 8%;

    div {
      padding-left: 7%;
    }
  }
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8%;
  width: 100%;
  min-height: 200px;
  flex: 1;

  @media (max-width: 768px) {
    min-height: auto;
    width: 100%;
    gap: 0;
  }
`;

export const RightSide = styled.div`
  width: 60%;
  background: #ecf0f1;
  padding: 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 7% 6%;
  }

  @media (max-width: 480px) {
    padding: 9% 8%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 100%;

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    gap: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  outline: none;
  transition: 0.2s;
  font-size: 14px;

  &:focus {
    box-shadow: 0 0 0 2px #f9be06;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 42px;
  padding: 0 15px;
  box-sizing: border-box;
  border: none;
  border-radius: 20px;
  outline: none;
  transition: 0.2s;
  font-size: 14px;
  background: #fff;
  color: #111;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 2px #f9be06;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 20px;
  background: #f9be06;
  color: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background: black;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const AlreadyBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 14px;
  padding: 10% 5%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);

  svg {
    font-size: 48px;
    color: #f9be06;
  }
`;

export const AlreadyTitle = styled.h3`
  margin: 0;
  font-size: clamp(18px, 2vw, 22px);
  color: #111;
`;

export const AlreadyText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.5;
`;

export const AlreadyDetails = styled.div`
  width: 100%;
  max-width: 320px;
  margin-top: 6px;
  background: #ecf0f1;
  border-radius: 14px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: left;

  span {
    font-size: 13px;
    color: #333;
  }

  strong {
    color: #111;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
  padding: 20px;
  box-sizing: border-box;
`;

export const Modal = styled.div`
  width: 400px;
  max-width: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);
  animation: modalAppear 0.25s ease;
  box-sizing: border-box;

  h3 {
    margin: 0 0 12px;
    color: #111;
    font-size: 24px;
  }

  p {
    color: #666;
    font-size: 16px;
    margin: 0 0 30px;
    line-height: 1.5;
  }

  @keyframes modalAppear {
    from {
      opacity: 0;
      transform: translateY(15px) scale(0.95);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 600px) {
    padding: 24px 18px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 14px;
      margin-bottom: 22px;
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const CancelButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background: #ececec;
  color: #111;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #d9d9d9;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const ConfirmButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background: #d62828;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #b71c1c;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;
