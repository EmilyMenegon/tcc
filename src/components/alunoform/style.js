import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background: rgba(0, 0, 0, 0.55);
`;

export const Modal = styled.div`
    width: 100%;
    max-width: 500px;

    padding: 30px;

    background: #ffffff;

    border-radius: 20px;

    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);

    box-sizing: border-box;
`;

export const Title = styled.h2`
    margin: 0 0 25px;

    color: #111111;

    font-size: 26px;
    font-weight: 700;
     display: flex;

    align-items: center;

    justify-content: center;
`;

export const Field = styled.div`
    width: 100%;
    margin-bottom: 18px;
`;

export const Label = styled.label`
    display: block;

    margin-bottom: 7px;

    color: #222222;

    font-size: 14px;
    font-weight: 600;
`;

export const Input = styled.input`
    width: 100%;
     margin-top: 25px;

    padding: 13px 15px;

    border: 2px solid #dddddd;
    border-radius: 10px;

    background: #ffffff !important;
    color: #111111 !important;

    font-size: 15px;

    outline: none;

    box-sizing: border-box;

    opacity: 1 !important;

    transition:
        border-color 0.25s ease,
        box-shadow 0.25s ease,
        transform 0.25s ease;

    &:hover {
        border-color: #ffdb53;
    }

    &:focus {
        border-color: #ffdb53;

        box-shadow:
            0 0 0 3px
            rgba(249, 190, 6, 0.2);

        transform: translateY(-1px);
    }
`;

export const Buttons = styled.div`
    width: 100%;

    display: flex;

    gap: 12px;

    margin-top: 25px;
`;

export const CancelButton = styled.button`
    flex: 1;

    min-height: 48px;

    padding: 18px 28px;

    border: none !important;

    border-radius: 12px;

    background: #666 !important;

    color: #ffffff !important;

    opacity: 1 !important;

    font-size: 1rem;

    font-weight: 700;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;

    transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;

    &:hover {
        background: #111 !important;

        color: #ffdb53 !important;

        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const SaveButton = styled.button`
    flex: 1;

    min-height: 48px;

    padding: 18px 28px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: none !important;

    border-radius: 12px;

    background: #ffdb53 !important;

    color: #111 !important;

    opacity: 1 !important;

    font-size: 1rem;

    font-weight: 700;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;

    transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;

    &:hover {
        background: #111111 !important;

        color: #ffdb53 !important;

        transform: translateY(-3px);

        box-shadow:
            0 10px 25px
            rgba(0, 0, 0, 0.18);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 1 !important;

        background: #f9be06 !important;

        color: #111111 !important;
    }
`;

export const CloseButton = styled.button`
    position: absolute;

    top: 18px;
    right: 18px;

    width: 38px;
    height: 38px;

    border: none !important;

    border-radius: 50%;

    background: #eeeeee !important;

    color: #111111 !important;

    opacity: 1 !important;

    cursor: pointer;

    font-size: 18px;

    appearance: none;
    -webkit-appearance: none;

    transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease;

    &:hover {
        background: #111111 !important;

        color: #ffdb53 !important;

        transform: translateY(-3px);
    }

    &:active {
        transform: translateY(0);
    }
`;