import styled from "styled-components";

export const Page = styled.div`

  min-height:100vh;

  background:#fff;

  font-family:'Poppins', sans-serif;

`;

export const Content = styled.div`

  width:90%;

  margin:40px auto;

`;



export const Title = styled.h1`

  text-align:center;

  font-size:35px;

  margin-bottom:30px;

`;



export const FilterContainer = styled.div`

  display:flex;

  justify-content:center;

  gap:15px;

  margin-bottom:25px;

`;



export const FilterButton = styled.button`

  padding:12px 30px;

  border:none;

  border-radius:8px;

  cursor:pointer;

  transition:.3s;


  background:${props =>
    props.$active ? "#f9be06" : "#ddd"
  };


  color:${props =>
    props.$active ? "#fff" : "#333"
  };


  &:hover{

    background:#f9be06;

    color:white;

  }

`;



export const TableContainer = styled.div`

  background:white;

  border-radius:15px;

  overflow:hidden;

  box-shadow:0 5px 15px rgba(0,0,0,.1);

`;



export const Table = styled.table`

  width:100%;

  border-collapse:collapse;


  thead{

    background:#f9be06;

    color:white;

  }


  th,td{

    padding:15px;

    text-align:left;

  }


  tbody tr:nth-child(even){

    background:#f8f8f8;

  }


  tbody tr:hover{

    background:#fff6d1;

  }

`;



export const Actions = styled.div`

  display:flex;

  gap:15px;


  svg{

    cursor:pointer;

    font-size:20px;

    color:#555;

    transition:.2s;

  }


  svg:hover{

    color:#f9be06;

    transform:scale(1.2);

  }

`;


export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.45);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;

  backdrop-filter: blur(3px);
`;

export const Modal = styled.div`
  width: 450px;
  max-width: 90%;

  background: white;
  border-radius: 20px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  box-shadow: 0 20px 45px rgba(0,0,0,.2);
  animation: aparecer .25s ease;

  h2,
  h3{
    margin: 0 0 10px;
    color: #111;
    font-size: 24px;
    text-align: center;
  }

  p{
    margin: 0 0 15px;
    color: #666;
    text-align: center;
  }

  input,
  select{
    width: 100%;
    box-sizing: border-box;
  }

  @keyframes aparecer{
    from{
      opacity:0;
      transform:scale(.9);
    }

    to{
      opacity:1;
      transform:scale(1);
    }
  }
`;

export const ModalBox = styled.div`

  width:450px;

  background:white;

  padding:35px;

  border-radius:20px;

  display:flex;

  flex-direction:column;

  gap:15px;


  h2{

    text-align:center;

  }

`;



export const Input = styled.input`

  padding:14px;

  border-radius:10px;

  border:1px solid #ddd;

  font-size:15px;

`;



export const Select = styled.select`

  padding:14px;

  border-radius:10px;

  border:1px solid #ddd;

  font-size:15px;

`;



export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

export const SaveButton = styled.button`

  flex:1;

  padding:14px;

  border:none;

  border-radius:10px;

  background:#f9be06;

  color:#111;

  font-weight:bold;

  cursor:pointer;


  &:hover{

    background:#000;

    color:#f9be06;

  }

`;

export const CancelButton = styled.button`
  padding: 12px 22px;

  border: none;
  border-radius: 10px;

  background: #ececec;

  color: #111;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: #d8d8d8;
  }
`;

export const ConfirmButton = styled.button`
  padding: 12px 22px;

  border: none;
  border-radius: 10px;

  background: #d62828;

  color: white;

  font-weight: 600;

  cursor: pointer;

  transition: .2s;

  &:hover {
    background: #b71c1c;
  }
`;