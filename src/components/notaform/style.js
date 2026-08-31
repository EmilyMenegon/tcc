import styled from "styled-components";

// ========================================
// LISTA
// ========================================

export const List = styled.div`
  display: grid;

  grid-template-columns: repeat(
    auto-fill,
    minmax(320px, 1fr)
  );

  gap: 28px;

  align-items: start;

  animation: fadeIn .35s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// ========================================
// BOTÃO +
// ========================================

export const Fab = styled.button`
  position: fixed;

  right: 35px;
  bottom: 35px;

  width: 70px;
  height: 70px;

  border: none;
  border-radius: 50%;

  background: #ffdb53;
  color: #111;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(0, 0, 0, .2);

  transition: .25s;

  padding: 0;
  margin: 0;

  z-index: 100000;

  svg {
    width: 25px;
    height: 25px;

    flex-shrink: 0;

    transition: transform .25s;
  }

  &:hover {
    background: #111;
    color: #ffdb53;

    transform: translateY(-3px);
  }

  &:hover svg {
    transform: rotate(90deg);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 600px) {
    right: 20px;
    bottom: 20px;

    width: 60px;
    height: 60px;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

// ========================================
// OVERLAY
// ========================================

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100%;

  display: flex;

  justify-content: center;
  align-items: flex-start;

  background: rgba(15, 15, 15, .45);

  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);

  z-index: 99999;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 30px 0;

  animation: fadeOverlay .25s ease;

  @keyframes fadeOverlay {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    padding: 15px 0;
  }
`;

// ========================================
// PÁGINA DO CRONÔMETRO
// ========================================

export const CronometroPage = styled.div`
  width: 90%;

  max-width: 820px;

  min-height: calc(100vh - 60px);

  margin: 0 auto;

  padding: 35px 0 60px;

  color: #111;

  background: transparent;

  font-family: "Poppins", sans-serif;

  box-sizing: border-box;

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    width: 92%;

    padding-top: 20px;
    padding-bottom: 40px;
  }
`;

// ========================================
// TOPO
// ========================================

export const TopBar = styled.div`
  width: 100%;

  margin: 0 auto 25px;

  padding: 28px 30px;

  background: #fff;

  border-radius: 22px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);

  display: flex;

  justify-content: space-between;
  align-items: center;

  gap: 20px;

  animation: slideDown .3s ease;

  @keyframes slideDown {
    from {
      opacity: 0;

      transform: translateY(-10px);
    }

    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  @media (max-width: 500px) {
    padding: 22px;
  }
`;

// ========================================
// EYEBROW
// ========================================

export const Eyebrow = styled.div`
  margin-bottom: 7px;

  color: #999;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: .08em;

  text-transform: uppercase;
`;

// ========================================
// TÍTULO
// ========================================

export const MainTitle = styled.h1`
  margin: 0;

  color: #111;

  font-family: "Poppins", sans-serif;

  font-size: 38px;

  font-weight: 700;

  letter-spacing: -.8px;

  line-height: 1.1;

  @media (max-width: 500px) {
    font-size: 30px;
  }
`;

// ========================================
// BOTÃO FECHAR
// ========================================

export const CloseButton = styled.button`
  width: 46px;
  height: 46px;

  min-width: 46px;

  border: 1px solid #e5e5e5;

  border-radius: 50%;

  background: #f7f7f7;

  color: #555;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 17px;

  padding: 0;

  transition: .25s;

  &:hover {
    background: #111;

    border-color: #111;

    color: #ffdb53;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(.97);
  }
`;

// ========================================
// TIMER
// ========================================

export const TimerCard = styled.div`
  width: 100%;

  margin: 0 auto 24px;

  background: #fff;

  border-radius: 22px;

  padding: 35px 25px 30px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 18px;

  animation: cardShow .3s ease;

  @keyframes cardShow {
    from {
      opacity: 0;

      transform: translateY(15px);
    }

    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  @media (max-width: 500px) {
    padding: 28px 18px 25px;
  }
`;

// ========================================
// CÍRCULO
// ========================================

export const RingWrap = styled.div`
  position: relative;

  width: 220px;
  height: 220px;

  @media (max-width: 400px) {
    width: 190px;
    height: 190px;
  }
`;

export const RingSvg = styled.svg`
  width: 220px;
  height: 220px;

  transform: rotate(-90deg);

  @media (max-width: 400px) {
    width: 190px;
    height: 190px;
  }
`;

export const RingTrack = styled.circle`
  fill: none;

  stroke: #eeeeee;

  stroke-width: 10;
`;

export const RingProgress = styled.circle`
  fill: none;

  stroke: ${({ penalty }) =>
    penalty
      ? "#e6484f"
      : "#f9be06"
  };

  stroke-width: 10;

  stroke-linecap: round;

  transition:
    stroke .3s ease,
    stroke-dashoffset .1s linear;
`;

// ========================================
// CENTRO DO CÍRCULO
// ========================================

export const RingCenter = styled.div`
  position: absolute;

  inset: 0;

  display: flex;

  flex-direction: column;

  align-items: center;

  justify-content: center;

  gap: 5px;
`;

// ========================================
// TEMPO
// ========================================

export const TimeDisplay = styled.div`
  color: ${({ penalty }) =>
    penalty
      ? "#e6484f"
      : "#111"
  };

  font-family: "Poppins", sans-serif;

  font-size: 42px;

  font-weight: 700;

  letter-spacing: -1px;

  line-height: 1;

  @media (max-width: 400px) {
    font-size: 36px;
  }
`;

// ========================================
// STATUS DO TEMPO
// ========================================

export const ZoneLabel = styled.div`
  color: ${({ penalty }) =>
    penalty
      ? "#e6484f"
      : "#999"
  };

  font-family: "Poppins", sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: .06em;

  text-align: center;

  text-transform: uppercase;
`;

// ========================================
// PENALIDADE
// ========================================

export const PenaltyBadge = styled.div`
  visibility: ${({ visible }) =>
    visible
      ? "visible"
      : "hidden"
  };

  min-height: 30px;

  padding: 6px 13px;

  border-radius: 999px;

  background: #fff1f1;

  border: 1px solid rgba(230, 72, 79, .2);

  color: #e6484f;

  font-size: 12px;

  font-weight: 600;

  text-align: center;
`;

// ========================================
// CONTROLES DO TIMER
// ========================================

export const TimerControls = styled.div`
  width: 100%;

  display: flex;

  justify-content: center;

  align-items: center;

  gap: 12px;

  margin-top: 3px;

  flex-wrap: wrap;
`;

// ========================================
// BOTÃO INICIAR / PARAR
// ========================================

export const TimerButton = styled.button`
  min-width: 155px;

  padding: 15px 24px;

  border: none;

  border-radius: 14px;

  background: #ffdb53;

  color: #111;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #111;

    color: #ffdb53;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, .12);
  }

  &:active {
    transform: scale(.98);
  }

  svg {
    font-size: 14px;

    transition: .25s;
  }

  &:hover svg {
    transform: translateX(3px);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

// ========================================
// BOTÃO ZERAR
// ========================================

export const ResetButton = styled.button`
  min-width: 130px;

  padding: 15px 24px;

  border: 1px solid #e5e5e5;

  border-radius: 14px;

  background: #f7f7f7;

  color: #555;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #111;

    border-color: #111;

    color: #ffdb53;

    transform: translateY(-2px);
  }

  &:active {
    transform: scale(.98);
  }

  svg {
    font-size: 13px;

    transition: transform .25s;
  }

  &:hover svg {
    transform: rotate(-90deg);
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

// ========================================
// CARD DE NOTAS
// ========================================

export const NotesCard = styled.div`
  width: 100%;

  margin: 0 auto 24px;

  background: #fff;

  border-radius: 22px;

  padding: 30px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);

  animation: cardShow .3s ease;

  @keyframes cardShow {
    from {
      opacity: 0;

      transform: translateY(15px);
    }

    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  @media (max-width: 500px) {
    padding: 23px 18px;
  }
`;

// ========================================
// TÍTULOS DAS SEÇÕES
// ========================================

export const SectionTitle = styled.h2`
  margin: 0 0 5px;

  color: #111;

  font-family: "Poppins", sans-serif;

  font-size: 21px;

  font-weight: 700;

  letter-spacing: -.3px;
`;

export const SectionSub = styled.p`
  margin: 0 0 22px;

  color: #777;

  font-family: "Poppins", sans-serif;

  font-size: 13px;

  line-height: 1.6;
`;

// ========================================
// LABEL DO SELECT
// ========================================

export const SelectLabel = styled.label`
  display: block;

  margin-bottom: 7px;

  color: #666;

  font-family: "Poppins", sans-serif;

  font-size: 12px;

  font-weight: 600;

  letter-spacing: .04em;

  text-transform: uppercase;
`;

// ========================================
// SELECT
// ========================================

export const Select = styled.select`
  width: 100%;

  padding: 14px 15px;

  margin-bottom: 25px;

  border: 1px solid #e5e5e5;

  border-radius: 14px;

  background: #f7f7f7;

  color: #222;

  font-family: "Poppins", sans-serif;

  font-size: 14px;

  outline: none;

  cursor: pointer;

  transition: .25s;

  &:hover {
    border-color: #ffdb53;

    background: #fff;
  }

  &:focus {
    border-color: #ffdb53;

    background: #fff;

    box-shadow:
      0 0 0 4px
      rgba(249, 190, 6, .15);
  }
`;

// ========================================
// GRID DAS NOTAS
// ========================================

export const NotesGrid = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(5, minmax(0, 1fr));

  gap: 14px;

  margin-bottom: 24px;

  @media (max-width: 650px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));

    gap: 14px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

// ========================================
// CAMPO DE NOTA
// ========================================

export const NoteField = styled.div`
  width: 100%;

  min-width: 0;
`;

// ========================================
// LABEL DA NOTA
// ========================================

export const NoteLabel = styled.label`
  display: block;

  margin-bottom: 7px;

  color: #777;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 600;

  letter-spacing: .04em;

  text-transform: uppercase;
`;

// ========================================
// INPUT DA NOTA
// ========================================

export const NoteInput = styled.input`
  width: 100%;

  min-width: 0;

  padding: 13px 10px;

  border: 1px solid #e5e5e5;

  border-radius: 13px;

  background: #f7f7f7;

  color: #111;

  font-family: "Poppins", sans-serif;

  font-size: 17px;

  font-weight: 600;

  text-align: center;

  outline: none;

  transition: .25s;

  &:hover {
    border-color: #ffdb53;

    background: #fff;
  }

  &:focus {
    border-color: #ffdb53;

    background: #fff;

    box-shadow:
      0 0 0 4px
      rgba(249, 190, 6, .15);

    transform: translateY(-1px);
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    opacity: 1;
  }
`;

// ========================================
// BOTÃO CALCULAR
// ========================================

export const CalculateButton = styled.button`
  width: 100%;

  padding: 16px 25px;

  border: none;

  border-radius: 14px;

  background: #ffdb53;

  color: #111;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #111;

    color: #ffdb53;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, .12);
  }

  &:active {
    transform: scale(.98);
  }
`;

// ========================================
// ERRO
// ========================================

export const ErrorMessage = styled.div`
  margin-top: 13px;

  padding: 10px 14px;

  border-radius: 10px;

  background: #fff1f1;

  color: #e6484f;

  font-family: "Poppins", sans-serif;

  font-size: 13px;

  font-weight: 500;

  text-align: center;
`;

// ========================================
// CARD DE RESULTADO
// ========================================

export const ResultsCard = styled.div`
  width: 100%;

  margin: 0 auto 40px;

  background: #fff;

  border-radius: 22px;

  padding: 30px;

  box-shadow: 0 12px 35px rgba(0, 0, 0, .08);

  animation: resultShow .35s ease;

  @keyframes resultShow {
    from {
      opacity: 0;

      transform:
        translateY(15px)
        scale(.98);
    }

    to {
      opacity: 1;

      transform:
        translateY(0)
        scale(1);
    }
  }

  @media (max-width: 500px) {
    padding: 23px 18px;
  }
`;

// ========================================
// TABELA DE RESULTADOS
// ========================================

export const ResultsTable = styled.table`
  width: 100%;

  border-collapse: collapse;

  margin-bottom: 20px;
`;

export const ResultsHeader = styled.th`
  padding: 11px 8px;

  border-bottom: 1px solid #eee;

  color: #999;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 600;

  text-align: left;

  text-transform: uppercase;

  letter-spacing: .04em;
`;

export const ResultsRow = styled.tr`
  color: ${({ discarded }) =>
    discarded
      ? "#aaa"
      : "#333"
  };

  transition: background .2s;

  &:hover {
    background: #fafafa;
  }

  td {
    padding: 12px 8px;

    border-bottom: 1px solid #f0f0f0;

    font-family: "Poppins", sans-serif;

    font-size: 14px;
  }
`;

// ========================================
// TAG DESCARTADA
// ========================================

export const Tag = styled.span`
  display: inline-block;

  padding: 4px 9px;

  border-radius: 999px;

  background: #fff7d6;

  color: #a87800;

  font-family: "Poppins", sans-serif;

  font-size: 10px;

  font-weight: 600;

  letter-spacing: .04em;

  text-transform: uppercase;
`;

// ========================================
// RESUMO
// ========================================

export const Summary = styled.div`
  display: flex;

  flex-direction: column;

  gap: 11px;

  padding-top: 3px;
`;

export const SummaryRow = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  color: #777;

  font-family: "Poppins", sans-serif;

  font-size: 14px;
`;

export const SummaryValue = styled.span`
  color: ${({ penalty }) =>
    penalty
      ? "#e6484f"
      : "#222"
  };

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 600;
`;

// ========================================
// NOTA FINAL
// ========================================

export const FinalRow = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  margin-top: 15px;

  padding-top: 18px;

  border-top: 1px solid #eee;
`;

export const FinalLabel = styled.span`
  color: #111;

  font-family: "Poppins", sans-serif;

  font-size: 18px;

  font-weight: 700;
`;

export const FinalValue = styled.span`
  color: #f0b500;

  font-family: "Poppins", sans-serif;

  font-size: 34px;

  font-weight: 700;

  letter-spacing: -.5px;
`;

// ========================================
// BOTÃO SALVAR
// ========================================

export const SaveButton = styled.button`
  width: 100%;

  margin-top: 24px;

  padding: 16px 25px;

  border: none;

  border-radius: 14px;

  background: #ffdb53;

  color: #111;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 600;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #111;

    color: #ffdb53;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(0, 0, 0, .12);
  }

  &:active {
    transform: scale(.98);
  }
`;