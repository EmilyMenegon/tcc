import styled from "styled-components";

export const Card = styled.div`
    background: #ffffff !important;

    border-radius: 16px;

    padding: 16px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    width: 100%;

    box-sizing: border-box;

    box-shadow: 0 4px 12px rgba(106, 45, 45, 0.15);

    margin-bottom: 12px;
`;

export const Content = styled.div`
    display: flex;

    flex-direction: column;

    gap: 12px;
`;

export const Aluno = styled.h3`
    margin: 0;

    font-size: 18px;

    font-weight: 600;

    color: #1a1a2e;
`;

export const Notas = styled.div`
    display: flex;

    gap: 20px;

    flex-wrap: wrap;
`;

export const NotaItem = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;
`;

export const Label = styled.span`
    font-size: 12px;

    color: #666666;
`;

export const Valor = styled.span`
    font-size: 18px;

    font-weight: 700;

    color: #1a1a2e;
`;

export const Media = styled.span`
    font-size: 20px;

    font-weight: 700;

    color: ${({ aprovado }) =>
        aprovado
            ? "#16a34a"
            : "#dc2626"};
`;

export const Actions = styled.div`
    display: flex;

    flex-direction: column;

    gap: 8px;
`;


/* ========================================
   BOTÃO EDITAR
======================================== */

export const EditButton = styled.button`
    width: 42px !important;

    height: 42px !important;

    min-width: 42px !important;

    min-height: 42px !important;

    padding: 0 !important;

    margin: 0 !important;

    border: 0 !important;

    border-radius: 8px !important;

    background-color: #ffdb53 !important;

    background: #ffdb53 !important;

    color: #111111 !important;

    opacity: 1 !important;

    filter: none !important;

    box-shadow: none !important;

    cursor: pointer !important;

    display: flex !important;

    align-items: center !important;

    justify-content: center !important;

    appearance: none !important;

    -webkit-appearance: none !important;

    transition: all 0.2s ease !important;

    font-size: 18px !important;

    outline: none !important;

    text-decoration: none !important;

    &:hover {
        background-color: #e5b500 !important;

        background: #e5b500 !important;

        color: #000000 !important;

        opacity: 1 !important;

        filter: none !important;

        transform: scale(1.05) !important;
    }

    &:focus {
        background-color: #f4c430 !important;

        background: #f4c430 !important;

        color: #111111 !important;

        opacity: 1 !important;

        outline: none !important;
    }

    &:active {
        background-color: #d9aa00 !important;

        background: #d9aa00 !important;

        color: #111111 !important;

        opacity: 1 !important;

        transform: scale(0.98) !important;
    }

    svg {
        width: 18px !important;

        height: 18px !important;

        color: #111111 !important;

        fill: #111111 !important;

        opacity: 1 !important;

        filter: none !important;
    }
`;


/* ========================================
   BOTÃO EXCLUIR
======================================== */

export const DeleteButton = styled.button`
    width: 42px !important;

    height: 42px !important;

    min-width: 42px !important;

    min-height: 42px !important;

    padding: 0 !important;

    margin: 0 !important;

    border: 0 !important;

    border-radius: 8px !important;

    background-color: #dc2626 !important;

    background: #dc2626 !important;

    color: #ffffff !important;

    opacity: 1 !important;

    filter: none !important;

    box-shadow: none !important;

    cursor: pointer !important;

    display: flex !important;

    align-items: center !important;

    justify-content: center !important;

    appearance: none !important;

    -webkit-appearance: none !important;

    transition: all 0.2s ease !important;

    font-size: 18px !important;

    outline: none !important;

    text-decoration: none !important;

    &:hover {
        background-color: #b91c1c !important;

        background: #b91c1c !important;

        color: #ffffff !important;

        opacity: 1 !important;

        filter: none !important;

        transform: scale(1.05) !important;
    }

    &:focus {
        background-color: #dc2626 !important;

        background: #dc2626 !important;

        color: #ffffff !important;

        opacity: 1 !important;

        outline: none !important;
    }

    &:active {
        background-color: #991b1b !important;

        background: #991b1b !important;

        color: #ffffff !important;

        opacity: 1 !important;

        transform: scale(0.98) !important;
    }

    svg {
        width: 18px !important;

        height: 18px !important;

        color: #ffffff !important;

        fill: #ffffff !important;

        opacity: 1 !important;

        filter: none !important;
    }
`;