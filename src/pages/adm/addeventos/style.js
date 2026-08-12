import styled from "styled-components";

export const Page = styled.div`
  min-height: 100vh;
  background: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Content = styled.div`
  width: 92%;
  max-width: 900px;
  margin: auto;
  padding: 40px 0;
`;

export const Header = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background: white;
  border-radius: 18px;
  padding: 35px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, .08);
`;

export const UploadArea = styled.label`
  width: 100%;
  height: 240px;

  border: 3px dashed #f9be06;
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  color: #777;

  margin-bottom: 30px;

  transition: .3s;

  svg{
    color: #f9be06;
    margin-bottom:15px;
  }

  &:hover{
    background:#fffbe7;
  }
`;

export const Form = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;
`;

export const Row = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;

  @media(max-width:700px){
    grid-template-columns:1fr;
  }
`;

export const Input = styled.input`
  height:55px;
  border:1px solid #ddd;
  border-radius:10px;
  padding:0 18px;
  font-size:15px;
  outline:none;

  &:focus{
    border-color:#fbc903;
  }
`;

export const TextArea = styled.textarea`
  border:1px solid #ddd;
  border-radius:10px;
  padding:18px;
  resize:none;
  font-size:15px;
  outline:none;

  &:focus{
    border-color:#fbc903;
  }
`;

export const SectionTitle = styled.h2`
  font-size:22px;
  margin-top:15px;
  color:#111;
`;

export const ParticipantRow = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr auto;
  gap:15px;

  @media(max-width:700px){
    grid-template-columns:1fr;
  }
`;

export const AddButton = styled.button`
  height:55px;

  padding:0 25px;

  border:none;
  border-radius:10px;

  background:#f9be06;
  color:#111;

  font-size:15px;
  font-weight:bold;

  cursor:pointer;

  transition:.2s;

  &:hover{
    background:#000;
    color:#f9be06;
  }
`;

export const ParticipantList = styled.div`
  display:flex;
  flex-direction:column;
  gap:15px;
`;

export const ParticipantCard = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;

  padding:16px 20px;

  border:1px solid #e5e5e5;
  border-radius:12px;

  background:#fafafa;

  transition:.2s;

  &:hover{
    border-color:#f9be06;
    transform:translateY(-2px);
  }

  strong{
    color:#111;
    font-size:16px;
  }

  span{
    color:#666;
    font-size:14px;
  }
`;

export const RemoveButton = styled.button`
  padding:10px 18px;

  border:none;
  border-radius:8px;

  background:#ff4d4f;
  color:white;

  font-weight:bold;

  cursor:pointer;

  transition:.2s;

  &:hover{
    background:#d9363e;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 35px;
`;

export const CancelButton = styled.button`
  flex:1;

  padding:16px;

  border:none;
  border-radius:10px;

  background:#bebebe;
  color:#111;

  font-size:16px;
  font-weight:bold;

  cursor:pointer;

  display:flex;
  align-items:center;
  justify-content:center;

  transition:.2s;

  &:hover{
    background:#000;
    color:#bebebe;
    transform:translateY(-2px);
  }

  &:active{
    transform:translateY(1px);
  }
`;

export const SaveButton = styled.button`
  flex:1;

  padding:16px;

  border:none;
  border-radius:10px;

  background:#f9be06;
  color:#111;

  font-size:16px;
  font-weight:bold;

  cursor:pointer;

  display:flex;
  align-items:center;
  justify-content:center;

  transition:.2s;

  &:hover{
    background:#000;
    color:#f9be06;
    transform:translateY(-2px);
  }

  &:active{
    transform:translateY(1px);
  }
`;