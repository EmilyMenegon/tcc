import styled from "styled-components";

/* =====================================================
   PAGE
===================================================== */

export const Page = styled.div`
  min-height: 100vh;

  width: 100%;

  background: #fff;

  font-family: "Poppins", sans-serif;

  box-sizing: border-box;

  overflow-x: hidden;
`;


/* =====================================================
   CONTENT
===================================================== */

export const Content = styled.div`
  width: 90%;

  max-width: 1400px;

  margin: 40px auto;

  box-sizing: border-box;


  /* =================================================
     NOTEBOOK
  ================================================= */

  @media (max-width: 1200px) {
    width: 92%;

    margin: 35px auto;
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    width: 94%;

    margin: 30px auto;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    width: 92%;

    margin: 25px auto;
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    width: 94%;

    margin: 20px auto;
  }
`;


/* =====================================================
   TITLE
===================================================== */

export const Title = styled.h1`
  text-align: center;

  font-size: 35px;

  margin: 0 0 30px;

  color: #111;


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    font-size: 30px;

    margin-bottom: 25px;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    font-size: 25px;

    line-height: 1.2;

    margin-bottom: 20px;
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    font-size: 22px;
  }
`;


/* =====================================================
   FILTROS
===================================================== */

export const FilterContainer = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;

  margin-bottom: 25px;

  flex-wrap: wrap;


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    gap: 10px;

    margin-bottom: 22px;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    width: 100%;

    gap: 8px;

    margin-bottom: 20px;
  }
`;


/* =====================================================
   FILTRO
===================================================== */

export const FilterButton = styled.button`
  padding: 12px 30px;

  border: none;

  border-radius: 8px;

  cursor: pointer;

  transition: 0.3s;

  font-family: inherit;

  font-size: 15px;

  background: ${({ $active }) =>
    $active ? "#f9be06" : "#ddd"};

  color: ${({ $active }) =>
    $active ? "#fff" : "#333"};


  &:hover {
    background: #f9be06;

    color: white;
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    padding: 11px 25px;

    font-size: 14px;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    flex: 1;

    min-width: 90px;

    padding: 11px 15px;

    font-size: 14px;
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    min-width: 80px;

    padding: 10px 8px;

    font-size: 13px;
  }
`;


/* =====================================================
   TABELA
===================================================== */

export const TableContainer = styled.div`
  width: 100%;

  background: white;

  border-radius: 15px;

  overflow-x: auto;

  overflow-y: hidden;

  box-shadow:
    0 5px 15px
    rgba(0, 0, 0, 0.1);

  -webkit-overflow-scrolling: touch;


  /* =================================================
     SCROLLBAR
  ================================================= */

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #f9be06;

    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #d9a500;
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    border-radius: 12px;
  }
`;


/* =====================================================
   TABLE
===================================================== */

export const Table = styled.table`
  width: 100%;

  min-width: 700px;

  border-collapse: collapse;


  thead {
    background: #f9be06;

    color: white;
  }


  th,
  td {
    padding: 15px;

    text-align: left;

    white-space: nowrap;
  }


  th {
    font-weight: 600;
  }


  tbody tr:nth-child(even) {
    background: #f8f8f8;
  }


  tbody tr:hover {
    background: #fff6d1;
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 900px) {
    min-width: 650px;


    th,
    td {
      padding: 13px;

      font-size: 14px;
    }
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    min-width: 620px;


    th,
    td {
      padding: 12px 10px;

      font-size: 13px;
    }
  }
`;


/* =====================================================
   AÇÕES
===================================================== */

export const Actions = styled.div`
  display: flex;

  align-items: center;

  gap: 15px;


  svg {
    cursor: pointer;

    font-size: 20px;

    color: #555;

    transition: 0.2s;

    flex-shrink: 0;
  }


  svg:hover {
    color: #f9be06;

    transform: scale(1.2);
  }


  /* =================================================
     CELULAR
  ================================================= */

  @media (max-width: 600px) {
    gap: 12px;


    svg {
      font-size: 19px;
    }
  }
`;


/* =====================================================
   MODAL OVERLAY
===================================================== */

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;

  height: 100%;

  padding: 20px;

  box-sizing: border-box;

  background: rgba(0, 0, 0, 0.45);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 9999;

  backdrop-filter: blur(3px);

  overflow-y: auto;
`;


/* =====================================================
   MODAL
===================================================== */

export const Modal = styled.div`
  width: 450px;

  max-width: 100%;

  max-height: calc(100vh - 40px);

  overflow-y: auto;

  box-sizing: border-box;

  background: white;

  border-radius: 20px;

  padding: 30px;

  display: flex;

  flex-direction: column;

  gap: 15px;

  box-shadow:
    0 20px 45px
    rgba(0, 0, 0, 0.2);

  animation: aparecer 0.25s ease;


  h2,
  h3 {
    margin: 0 0 10px;

    color: #111;

    font-size: 24px;

    text-align: center;
  }


  p {
    margin: 0 0 15px;

    color: #666;

    text-align: center;

    line-height: 1.5;
  }


  input,
  select {
    width: 100%;

    box-sizing: border-box;
  }


  @keyframes aparecer {
    from {
      opacity: 0;

      transform: scale(0.9);
    }

    to {
      opacity: 1;

      transform: scale(1);
    }
  }


  /* =================================================
     TABLET
  ================================================= */

  @media (max-width: 600px) {
    width: 100%;

    padding: 25px;

    border-radius: 16px;


    h2,
    h3 {
      font-size: 21px;
    }
  }


  /* =================================================
     CELULAR PEQUENO
  ================================================= */

  @media (max-width: 400px) {
    padding: 20px;

    gap: 12px;


    h2,
    h3 {
      font-size: 19px;
    }
  }
`;


/* =====================================================
   MODAL BOX
===================================================== */

export const ModalBox = styled.div`
  width: 450px;

  max-width: 100%;

  box-sizing: border-box;

  background: white;

  padding: 35px;

  border-radius: 20px;

  display: flex;

  flex-direction: column;

  gap: 15px;


  h2 {
    text-align: center;
  }


  @media (max-width: 600px) {
    width: 100%;

    padding: 25px;
  }


  @media (max-width: 400px) {
    padding: 20px;
  }
`;


/* =====================================================
   INPUT
===================================================== */

export const Input = styled.input`
  width: 100%;

  box-sizing: border-box;

  padding: 14px;

  border-radius: 10px;

  border: 1px solid #ddd;

  font-size: 15px;

  font-family: inherit;

  outline: none;

  transition: 0.2s;


  &:focus {
    border-color: #f9be06;

    box-shadow:
      0 0 0 2px
      rgba(249, 190, 6, 0.15);
  }


  @media (max-width: 600px) {
    padding: 12px;

    font-size: 14px;
  }
`;


/* =====================================================
   SELECT
===================================================== */

export const Select = styled.select`
  width: 100%;

  box-sizing: border-box;

  padding: 14px;

  border-radius: 10px;

  border: 1px solid #ddd;

  font-size: 15px;

  font-family: inherit;

  background: white;

  outline: none;

  cursor: pointer;

  transition: 0.2s;


  &:focus {
    border-color: #f9be06;

    box-shadow:
      0 0 0 2px
      rgba(249, 190, 6, 0.15);
  }


  @media (max-width: 600px) {
    padding: 12px;

    font-size: 14px;
  }
`;


/* =====================================================
   BOTÕES DO MODAL
===================================================== */

export const ModalButtons = styled.div`
  display: flex;

  justify-content: center;

  align-items: center;

  gap: 15px;

  width: 100%;


  @media (max-width: 400px) {
    flex-direction: column;

    gap: 10px;
  }
`;


/* =====================================================
   SALVAR
===================================================== */

export const SaveButton = styled.button`
  flex: 1;

  padding: 14px;

  border: none;

  border-radius: 10px;

  background: #f9be06;

  color: #111;

  font-weight: bold;

  font-family: inherit;

  cursor: pointer;

  transition: 0.2s;


  &:hover {
    background: #000;

    color: #f9be06;
  }


  @media (max-width: 400px) {
    width: 100%;
  }
`;


/* =====================================================
   CANCELAR
===================================================== */

export const CancelButton = styled.button`
  padding: 12px 22px;

  border: none;

  border-radius: 10px;

  background: #ececec;

  color: #111;

  font-weight: 600;

  font-family: inherit;

  cursor: pointer;

  transition: 0.2s;


  &:hover {
    background: #d8d8d8;
  }


  @media (max-width: 400px) {
    width: 100%;

    padding: 13px;
  }
`;


/* =====================================================
   CONFIRMAR EXCLUSÃO
===================================================== */

export const ConfirmButton = styled.button`
  padding: 12px 22px;

  border: none;

  border-radius: 10px;

  background: #d62828;

  color: white;

  font-weight: 600;

  font-family: inherit;

  cursor: pointer;

  transition: 0.2s;


  &:hover {
    background: #b71c1c;
  }


  @media (max-width: 400px) {
    width: 100%;

    padding: 13px;
  }
`;