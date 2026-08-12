import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Content = styled.div`
  width: 90%;
  margin: 10px auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  margin-bottom: 30px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: .3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const Image = styled.div`
  height: 220px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  padding: 22px;
`;

export const EventName = styled.h2`
  margin-bottom: 10px;
  color: #222;
`;

export const Description = styled.p`
  color: #777;
  font-size: 14px;
  margin-bottom: 18px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: #444;
  font-size: 15px;

  svg {
    color: #f9be06;
  }
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 14px;

  border: none;
  border-radius: 10px;

  background: #f9be06;
  color: #111;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  transition: .2s;

  svg {
    font-size: 16px;
    transition: .2s;
  }

  &:hover {
    background: #000;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: translateX(4px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 18px;
  margin-top: 18px;

  svg {
    cursor: pointer;
    transition: .3s;
    color: #555;
  }

  svg:hover {
    color: #f9be06;
    transform: scale(1.15);
  }
`;
export const FloatingButton = styled.button`
  position: fixed;
  right: 35px;
  bottom: 35px;

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

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);

  transition: .2s;

  svg {
    font-size: 28px;
    transition: .2s;
  }

  &:hover {
    background: #000;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:active {
    transform: translateY(1px);
  }
`;