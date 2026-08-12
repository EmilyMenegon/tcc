import styled from "styled-components";

export const Page = styled.div`
  min-height:100vh;
  background:#fff;
  font-family:"Poppins",sans-serif;
`;

export const Content = styled.div`
  width:90%;
  max-width:1400px;
  margin: 40px auto;
`;

export const Header = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const Title = styled.h1`
  font-size:42px;
  color:#000;
  text-align:center;
`;

export const Gallery = styled.div`
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
  gap:30px;
`;

export const Card = styled.div`

  position:relative;

  background:white;

  border-radius:18px;

  overflow:hidden;

  box-shadow:0 8px 25px rgba(0,0,0,.08);

  transition:.3s;


  &:hover{
    transform:translateY(-8px);
    box-shadow:0 15px 35px rgba(0,0,0,.15);
  }

`;
export const Image = styled.div`

  height:230px;


  img{

    width:100%;
    height:100%;

    object-fit:cover;

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

export const Modal = styled.div`

  position:fixed;

  inset:0;

  background:rgba(0,0,0,.85);

  display:flex;
  justify-content:center;
  align-items:center;

  z-index:999;

`;


export const ModalImage = styled.img`

  max-width:90%;
  max-height:90%;

  border-radius:15px;

  object-fit:contain;

`;


export const CloseButton = styled.button`

  position:absolute;

  top:30px;
  right:40px;


  background:none;

  border:none;

  color:white;

  cursor:pointer;

`;
export const DeleteButton = styled.button`

  position:absolute;

  top:12px;
  right:12px;

  width:38px;
  height:38px;

  border-radius:50%;

  border:none;

  background:#d62828;

  color:white;

  display:flex;
  align-items:center;
  justify-content:center;

  cursor:pointer;

  opacity:0;

  transition:.2s;


  ${Card}:hover & {
    opacity:1;
  }


  &:hover{
    transform:scale(1.1);
  }

`;