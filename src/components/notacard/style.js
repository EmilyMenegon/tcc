import styled from "styled-components";

export const Card = styled.div`
    background: #ffffff;

    border-left: 5px solid #ffdb53;

    border-radius: 16px;

    padding: 18px 22px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 16px;

    width: 100%;

    box-sizing: border-box;

    box-shadow: 0 4px 14px rgba(87, 17, 17, 0.12);

    margin-bottom: 12px;

    transition: transform .2s ease, box-shadow .2s ease;

    &:hover {
        transform: translateY(-3px);

        box-shadow: 0 10px 26px rgba(87, 17, 17, 0.18);
    }
`;

export const Content = styled.div`
    display: flex;

    flex-direction: column;

    gap: 12px;

    min-width: 0;
`;

export const Aluno = styled.h3`
    margin: 0;

    font-size: 18px;

    font-weight: 700;

    color: #010000;
`;

export const Notas = styled.div`
    display: flex;

    gap: 10px;

    flex-wrap: wrap;
`;

export const NotaItem = styled.div`
    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 3px;

    min-width: 52px;

    padding: 8px 12px;

    background: #fff7d0;

    border-radius: 10px;
`;

export const Label = styled.span`
    font-size: 10px;

    font-weight: 700;

    color: #571111;

    text-transform: uppercase;

    letter-spacing: .04em;
`;

export const Valor = styled.span`
    font-size: 17px;

    font-weight: 700;

    color: #010000;
`;

export const Media = styled.span`
    font-size: 20px;

    font-weight: 800;

    color: ${({ $aprovado }) =>
        $aprovado
            ? "#2e7d32"
            : "#831614"};
`;

export const Actions = styled.div`
    display: flex;

    flex-direction: column;

    gap: 8px;

    flex-shrink: 0;
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

    border-radius: 10px !important;

    background-color: #ffdb53 !important;

    background: #ffdb53 !important;

    color: #010000 !important;

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
        background-color: #831614 !important;

        background: #831614 !important;

        color: #fff7d0 !important;

        opacity: 1 !important;

        filter: none !important;

        transform: scale(1.05) !important;
    }

    &:focus {
        background-color: #ffdb53 !important;

        background: #ffdb53 !important;

        color: #010000 !important;

        opacity: 1 !important;

        outline: none !important;
    }

    &:active {
        background-color: #571111 !important;

        background: #571111 !important;

        color: #fff7d0 !important;

        opacity: 1 !important;

        transform: scale(0.98) !important;
    }

    svg {
        width: 18px !important;

        height: 18px !important;

        color: inherit !important;

        fill: currentColor !important;

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

    border-radius: 10px !important;

    background-color: #831614 !important;

    background: #831614 !important;

    color: #fff7d0 !important;

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
        background-color: #571111 !important;

        background: #571111 !important;

        color: #ffdb53 !important;

        opacity: 1 !important;

        filter: none !important;

        transform: scale(1.05) !important;
    }

    &:focus {
        background-color: #831614 !important;

        background: #831614 !important;

        color: #fff7d0 !important;

        opacity: 1 !important;

        outline: none !important;
    }

    &:active {
        background-color: #010000 !important;

        background: #010000 !important;

        color: #ffdb53 !important;

        opacity: 1 !important;

        transform: scale(0.98) !important;
    }

    svg {
        width: 18px !important;

        height: 18px !important;

        color: inherit !important;

        fill: currentColor !important;

        opacity: 1 !important;

        filter: none !important;
    }
`;