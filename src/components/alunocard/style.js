import styled from "styled-components";


export const Card = styled.div`

    width:100%;

    background:white;

    border-radius:16px;

    padding:16px;

    display:flex;

    align-items:center;

    justify-content:space-between;

    box-sizing:border-box;


    box-shadow:
        0 4px 12px rgba(106,45,45,0.15);


    margin-bottom:12px;

`;




export const Content = styled.div`

    display:flex;

    flex-direction:column;

    gap:5px;

`;





export const Nome = styled.h3`

    margin:0;

    font-size:18px;

    font-weight:600;

    color:#1a1a2e;

`;





export const Info = styled.p`

    margin:0;

    font-size:14px;

    color:#666;

`;





export const Actions = styled.div`

    display:flex;

    flex-direction:column;

    gap:8px;

`;





export const EditButton = styled.button`

    width:40px;

    height:40px;


    border:none;

    border-radius:8px;


    background:#f0edff;


    cursor:pointer;


    font-size:18px;


    transition:.2s;


    &:hover{

        transform:scale(1.05);

    }

`;





export const DeleteButton = styled.button`

    width:40px;

    height:40px;


    border:none;

    border-radius:8px;


    background:#ffeaea;


    cursor:pointer;


    font-size:18px;


    transition:.2s;


    &:hover{

        transform:scale(1.05);

    }

`;
