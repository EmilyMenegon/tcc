import styled, { keyframes } from "styled-components";

const floating = keyframes`
  0%{
    transform: translateY(0px) translateX(0px);
  }

  50%{
    transform: translateY(-18px) translateX(10px);
  }

  100%{
    transform: translateY(0px) translateX(0px);
  }
`;
export const Page = styled.div`
  font-family: "Poppins", sans-serif;
  background: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TitleArea = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  margin: 70px;
`;

export const Container = styled.div`
  width: 80%;
  height: 450px;
  margin: 15px auto 0 auto;
  display: flex;
  border-radius: 20px;

  /* IMPORTANTE */
  overflow: visible;
`;

export const RightSide = styled.div`
  width: 100%;
  background: white;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const BigText = styled.h2`
  font-size: 40px;
  color: black;
`;

export const SmallText = styled.p`
  font-size: 19px;
  color: black;

  margin-top: -8px; /* aproxima do BigText sem mover o título */

  a {
    color: #f9be06;
    margin-left: 5px;
    text-decoration: none;
  }
`;

export const BottomArea = styled.div`
  margin-top: 5px;

  a {
    text-decoration: none;
  }
`;

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 16px 25px;
  border-radius: 10px;

  border: none;

  background: #f9be06;
  color: black;

  font-size: 15px;
  font-weight: bold;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: black;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  svg {
    transition: .25s;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

export const ImageBox = styled.div`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  overflow: visible;
`;

export const Image = styled.img`
  width: 130%;
  object-fit: contain;

  position: relative;
  z-index: 2;
`;

export const Circle = styled.span`
  position: absolute;

  width: ${({ size }) => size || "25px"};
  height: ${({ size }) => size || "25px"};

  border-radius: 50%;
  background: #f9be06;

  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};

  animation: ${floating}
    ${({ duration }) => duration || "5s"}
    ease-in-out
    infinite;

  animation-delay: ${({ delay }) => delay || "0s"};

  filter: blur(.5px);
  opacity: .9;

  box-shadow: 0 0 20px rgba(249,190,6,.45);

  z-index: 1;
  pointer-events: none;

  will-change: transform;
`;