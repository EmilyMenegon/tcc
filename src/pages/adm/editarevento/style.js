import styled from "styled-components";


export const Page = styled.div`

  min-height:100vh;

  background:#fff;

  font-family:"Poppins",sans-serif;

`;



export const Container = styled.div`

  width:90%;

  max-width:700px;

  margin:40px auto;

`;



export const Card = styled.div`

  background:white;

  padding:40px;

  border-radius:20px;

  box-shadow:0 8px 25px rgba(0,0,0,.08);

`;



export const Title = styled.h1`

  text-align:center;

  margin-bottom:30px;

  color:#111;

`;



export const Label = styled.label`

  display:block;

  margin-top:18px;

  margin-bottom:8px;

  font-weight:600;

  color:#333;

`;



export const Input = styled.input`

  width:100%;

  height:50px;

  padding:0 15px;

  border-radius:10px;

  border:1px solid #ddd;

  font-size:15px;

  outline:none;


  &:focus{

    border-color:#f9be06;

  }

`;



export const TextArea = styled.textarea`

  width:100%;

  padding:15px;

  border-radius:10px;

  border:1px solid #ddd;

  resize:none;

  font-size:15px;

  outline:none;


  &:focus{

    border-color:#f9be06;

  }

`;



export const ButtonGroup = styled.div`

  display:flex;

  gap:20px;

  margin-top:35px;

`;



export const CancelButton = styled.button`

  flex:1;

  padding:15px;

  border:none;

  border-radius:10px;

  background:#bebebe;

  color:#111;

  font-weight:bold;

  cursor:pointer;


  transition:.2s;


  &:hover{

    background:#000;

    color:#fff;

  }

`;



export const SaveButton = styled.button`

  flex:1;

  padding:15px;

  border:none;

  border-radius:10px;


  background:#f9be06;

  color:#111;

  font-weight:bold;

  cursor:pointer;


  transition:.2s;


  &:hover{

    background:#000;

    color:#f9be06;

  }

`;