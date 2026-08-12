import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
`;

export const Card = styled.div`
  width: 600px;
  background: white;
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0 8px 25px rgba(0,0,0,.08);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
  margin-bottom: 8px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 15px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  resize: none;
  font-size: 15px;
`;
export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;

export const CancelButton = styled.button`
  flex: 1;

  padding: 16px;

  border: none;
  border-radius: 10px;

  background: #bebebe;
  color: #111;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .2s;

  &:hover {
    background: #000;
    color: #bebebe;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const SaveButton = styled.button`
  flex: 1;

  padding: 16px;

  border: none;
  border-radius: 10px;

  background: #f9be06;
  color: #111;

  font-size: 16px;
  font-weight: bold;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .2s;

  &:hover {
    background: #000;
    color: #f9be06;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;