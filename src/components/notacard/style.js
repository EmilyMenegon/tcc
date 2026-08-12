import styled from "styled-components";


export const Card = styled.div`

    background:white;


    border-radius:16px;


    padding:16px;


    display:flex;


    align-items:center;


    justify-content:space-between;


    width:100%;


    box-sizing:border-box;


    box-shadow:
    0 4px 12px rgba(106,45,45,.15);


    margin-bottom:12px;

`;





export const Content = styled.div`

    display:flex;

    flex-direction:column;

    gap:12px;

`;





export const Aluno = styled.h3`

    margin:0;


    font-size:18px;


    font-weight:600;


    color:#1a1a2e;

`;





export const Notas = styled.div`

    display:flex;


    gap:20px;


    flex-wrap:wrap;

`;





export const NotaItem = styled.div`

    display:flex;


    flex-direction:column;


    align-items:center;

`;





export const Label = styled.span`

    font-size:12px;


    color:#666;

`;





export const Valor = styled.span`

    font-size:18px;


    font-weight:700;


    color:#1a1a2e;

`;





export const Media = styled.span`

    font-size:20px;


    font-weight:700;


    color:${props =>
        props.aprovado
        ? "#16a34a"
        : "#dc2626"
    };

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

`;





export const DeleteButton = styled.button`

    width:40px;


    height:40px;


    border:none;


    border-radius:8px;


    background:#ffeaea;


    cursor:pointer;


    font-size:18px;

`;
