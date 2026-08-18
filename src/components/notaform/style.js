import styled from "styled-components";


export const Overlay = styled.div`

position:fixed;

inset:0;

background:rgba(0,0,0,.5);

display:flex;

justify-content:center;

align-items:center;

z-index:1000;

`;



export const Modal = styled.div`

background:#fffdf2;

padding:25px;

border-radius:20px;

width:600px;

max-width:90%;

`;



export const Title = styled.h2`

text-align:center;

margin:0 0 20px;

color:#1a1a2e;

`;



export const Label = styled.label`

font-size:14px;

font-weight:600;

color:#793c3c;

margin-bottom:6px;

display:block;

`;



export const Select = styled.select`

width:100%;

padding:12px;

border-radius:12px;

border:1px solid #ddd;

margin-bottom:20px;

`;



export const Row = styled.div`

display:flex;

gap:12px;

`;



export const InputGroup = styled.div`

flex:1;

`;



export const Input = styled.input`

width:100%;

box-sizing:border-box;

padding:12px;

border-radius:12px;

border:1px solid #ddd;

font-size:16px;

`;



export const MediaBox = styled.div`

margin-top:20px;

padding:15px;

background:#e6e5e3;

border-radius:12px;

text-align:center;

font-size:22px;

font-weight:700;

color:#793c3c;

`;



export const Buttons = styled.div`

display:flex;

gap:12px;

margin-top:20px;

`;



export const CancelButton = styled.button`

flex:1;

padding:14px;

border:none;

border-radius:12px;

background:#eee;

cursor:pointer;

`;



export const SaveButton = styled.button`

flex:1;

padding:14px;

border:none;

border-radius:12px;

background:#f1e289;

color:white;

cursor:pointer;

`;
