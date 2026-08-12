import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.div`
  min-height: 100vh;
  font-family: "Poppins", sans-serif;

  background: linear-gradient(
    to bottom,
    #f9be06 0%,
    #f9be06 32%,
    #f8f8f8 32%,
    #f8f8f8 100%
  );

  padding: 30px;
`;

export const BackButton = styled(Link)`
  position: fixed;
  top: 25px;
  left: 25px;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  background: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;

  color: #111;
  font-size: 28px;
  font-weight: bold;

  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);

  transition: 0.2s;

  z-index: 999;

  &:hover {
    background: #000;
    color: #fff;
    transform: translateY(-2px);
  }
`;

export const Container = styled.div`
  width: 460px;
  margin: 70px auto;

  background: white;

  border-radius: 28px;

  padding: 40px;

  display: flex;
  flex-direction: column;
  gap: 22px;

  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.12);
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const AvatarWrapper = styled.div`
  position: relative;
`;

export const Avatar = styled.img`
  width: 170px;
  height: 170px;

  border-radius: 50%;
  object-fit: cover;

  border: 6px solid #f9be06;

  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.18);
`;

export const EditButton = styled.label`
  position: absolute;

  bottom: 8px;
  right: -5px;

  background: #111;
  color: white;

  padding: 8px 14px;

  border-radius: 20px;

  font-size: 13px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #f9be06;
    color: #111;
  }

  input {
    display: none;
  }
`;

export const UserName = styled.h2`
  margin-top: -8px;
  margin-bottom: -18px;

  text-align: center;

  font-size: 28px;
  font-weight: 700;

  color: #111;
`;

export const UserEmail = styled.p`
  text-align: center;

  color: #666;

  font-size: 15px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #333;
`;
export const Input = styled.input`
  width: 100%;

  padding: 14px 16px;

  border-radius: 12px;

  border: none;

  background: #f3f3f3;

  font-size: 15px;

  color: #111;

  outline: none;

  transition: 0.2s;

  &:focus {
    outline: none;
    background: #f3f3f3;
    border: none;
    box-shadow: none;
  }

  &::placeholder {
    color: #888;
  }
`;

export const PasswordBox = styled.div`
  position: relative;

  span {
    position: absolute;

    right: 16px;
    top: 50%;

    transform: translateY(-50%);

    display: flex;
    align-items: center;

    cursor: pointer;

    color: #666;

    transition: 0.2s;

    &:hover {
      color: #f9be06;
    }
  }
`;

export const SaveButton = styled.button`
  margin-top: 10px;

  height: 50px;

  border: none;
  border-radius: 12px;

  background: #f9be06;
  color: #111;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #000;
    color: #fff;
    transform: translateY(-2px);
  }
`;
export const LogoutLink = styled.span`
  margin-top: 10px;

  text-align: center;

  color: #d62828;

  font-size: 15px;
  font-weight: 600;

  cursor: pointer;

  transition: 0.2s ease;

  &:hover {
    color: #000;
  }
`;
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.45);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;

  backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
  width: 400px;
  max-width: 90%;

  background: #fff;

  border-radius: 20px;

  padding: 30px;

  text-align: center;

  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.2);

  animation: modalAppear 0.25s ease;

  h3 {
    margin: 0 0 12px;
    color: #111;
    font-size: 24px;
  }

  p {
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
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
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
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
`;