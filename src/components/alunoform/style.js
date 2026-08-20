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

    width:420px;

    max-width:90%;


    background:#fffdf2;


    padding:25px;


    border-radius:20px;


    box-shadow:
        0 10px 30px rgba(0,0,0,.2);


`;





export const Title = styled.h2`

    margin:0 0 20px;


    text-align:center;


    color:#1a1a2e;


    font-size:22px;

`;





export const Input = styled.input`

    width:100%;

    box-sizing:border-box;


    padding:14px;


    margin-bottom:12px;


    border-radius:12px;


    border:1px solid #e0e0e0;


    background:#f8f6ff;


    font-size:16px;


    outline:none;



    &:focus{

        border-color:#793c3c;

    }

`;





export const Buttons = styled.div`

    display:flex;


    gap:12px;


    margin-top:10px;

`;





export const CancelButton = styled.button`

    flex:1;


    padding:14px;


    border:none;


    border-radius:12px;


    background:#f0f0f0;


    color:#666;


    cursor:pointer;


    font-size:16px;

`;





export const SaveButton = styled.button`

    flex:1;


    padding:14px;


    border:none;


    border-radius:12px;


    background:#f1e289;


    color:white;


    cursor:pointer;


    font-size:16px;


`;
