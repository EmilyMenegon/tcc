import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    background: white;
    border-radius: 16px;
    padding: 16px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    box-sizing: border-box;

    box-shadow: 0 4px 12px rgba(106, 45, 45, 0.15);

    margin-bottom: 12px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Nome = styled.h3`
    margin: 0;

    font-size: 18px;
    font-weight: 600;

    color: #1a1a2e;
`;

export const Info = styled.p`
    margin: 0;

    font-size: 14px;

    color: #666;
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
    width: 42px;
    height: 42px;

    min-width: 42px;
    min-height: 42px;

    padding: 0;
    margin: 0;

    border: none;
    border-radius: 8px;

    background: #f4c430;
    color: #111;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-size: 18px;

    transition: all 0.2s ease;

    &:hover {
        background: #e5b500;
        color: #000;

        transform: scale(1.05);
    }

    &:focus {
        background: #f4c430;
        color: #111;

        outline: none;
    }

    &:active {
        background: #d9aa00;
        color: #111;

        transform: scale(0.98);
    }

    svg {
        width: 18px;
        height: 18px;

        color: #111;
        fill: #111;
    }
`;

/* ========================================
   BOTÃO EXCLUIR
======================================== */

export const DeleteButton = styled.button`
    width: 42px;
    height: 42px;

    min-width: 42px;
    min-height: 42px;

    padding: 0;
    margin: 0;

    border: none;
    border-radius: 8px;

    background: #dc2626;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    font-size: 18px;

    transition: all 0.2s ease;

    &:hover {
        background: #b91c1c;
        color: #fff;

        transform: scale(1.05);
    }

    &:focus {
        background: #dc2626;
        color: #fff;

        outline: none;
    }

    &:active {
        background: #991b1c;
        color: #fff;

        transform: scale(0.98);
    }

    svg {
        width: 18px;
        height: 18px;

        color: #fff;
        fill: #fff;
    }
`;