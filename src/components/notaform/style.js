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
  color: #010000;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  box-shadow: 0 10px 25px rgba(87, 17, 17, .25);

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
    background: #831614;
    color: #fff7d0;

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

  background: rgba(1, 0, 0, .55);

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

  color: #010000;

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

  border-top: 5px solid #831614;

  box-shadow: 0 12px 35px rgba(87, 17, 17, .10);

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

  color: #831614;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .08em;

  text-transform: uppercase;
`;

// ========================================
// TÍTULO
// ========================================

export const MainTitle = styled.h1`
  margin: 0;

  color: #010000;

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

  border: 1px solid #eee2c0;

  border-radius: 50%;

  background: #fff7d0;

  color: #571111;

  display: flex;

  align-items: center;
  justify-content: center;

  cursor: pointer;

  font-size: 17px;

  padding: 0;

  transition: .25s;

  &:hover {
    background: #831614;

    border-color: #831614;

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

  border-top: 5px solid #ffdb53;

  padding: 35px 25px 30px;

  box-shadow: 0 12px 35px rgba(87, 17, 17, .10);

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

  stroke: #fff7d0;

  stroke-width: 10;
`;

export const RingProgress = styled.circle`
  fill: none;

  stroke: ${({ $penalty }) =>
    $penalty
      ? "#831614"
      : "#ffdb53"
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
  color: ${({ $penalty }) =>
    $penalty
      ? "#831614"
      : "#010000"
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
  color: ${({ $penalty }) =>
    $penalty
      ? "#831614"
      : "#383131"
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
  visibility: ${({ $visible }) =>
    $visible
      ? "visible"
      : "hidden"
  };

  min-height: 30px;

  padding: 6px 13px;

  border-radius: 999px;

  background: #fff7d0;

  border: 1px solid rgba(131, 22, 20, .25);

  color: #831614;

  font-size: 12px;

  font-weight: 700;

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

  color: #010000;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #831614;

    color: #fff7d0;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(87, 17, 17, .25);
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

  border: 1px solid #eee2c0;

  border-radius: 14px;

  background: #fff7d0;

  color: #383131;

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
    background: #383131;

    border-color: #383131;

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

  border-top: 5px solid #831614;

  padding: 30px;

  box-shadow: 0 12px 35px rgba(87, 17, 17, .10);

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

  color: #010000;

  font-family: "Poppins", sans-serif;

  font-size: 21px;

  font-weight: 700;

  letter-spacing: -.3px;
`;

export const SectionSub = styled.p`
  margin: 0 0 22px;

  color: #383131;

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

  color: #571111;

  font-family: "Poppins", sans-serif;

  font-size: 12px;

  font-weight: 700;

  letter-spacing: .04em;

  text-transform: uppercase;
`;

// ========================================
// SELECT
// ========================================

export const Select = styled.select`
  width: 100%;

  padding: 16px 18px;

  margin-bottom: 25px;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  background: #fffdf0;

  color: #010000;

  font-family: "Poppins", sans-serif;

  font-size: 14px;

  outline: none;

  cursor: pointer;

  transition:
    background .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;

  &:hover {
    border-color: #f9be06;

    background: #fffaf0;

    box-shadow: 0 4px 12px rgba(249, 190, 6, .12);
  }

  &:focus {
    border-color: #f9be06;

    background: #fffbe6;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, .22);
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

  color: #571111;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 700;

  letter-spacing: .04em;

  text-transform: uppercase;

  text-align: center;
`;

// ========================================
// INPUT DA NOTA
// ========================================

export const NoteInput = styled.input`
  width: 100%;

  min-width: 0;

  padding: 15px 12px;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  background: #fffdf0;

  color: #010000;

  font-family: "Poppins", sans-serif;

  font-size: 17px;

  font-weight: 700;

  text-align: center;

  outline: none;

  transition:
    background .25s ease,
    border-color .25s ease,
    box-shadow .25s ease,
    transform .2s ease;

  &::placeholder {
    color: #a89768;

    opacity: .8;

    font-weight: 400;
  }

  &:hover {
    border-color: #f9be06;

    background: #fffaf0;

    box-shadow: 0 4px 12px rgba(249, 190, 6, .12);
  }

  &:focus {
    border-color: #f9be06;

    background: #fffbe6;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, .22);

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

  color: #010000;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #831614;

    color: #fff7d0;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(87, 17, 17, .25);
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

  background: #fff7d0;

  border: 1px solid rgba(131, 22, 20, .2);

  color: #831614;

  font-family: "Poppins", sans-serif;

  font-size: 13px;

  font-weight: 600;

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

  border-top: 5px solid #ffdb53;

  padding: 30px;

  box-shadow: 0 12px 35px rgba(87, 17, 17, .10);

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

  border-bottom: 2px solid #fff7d0;

  color: #571111;

  font-family: "Poppins", sans-serif;

  font-size: 11px;

  font-weight: 700;

  text-align: left;

  text-transform: uppercase;

  letter-spacing: .04em;
`;

export const ResultsRow = styled.tr`
  color: ${({ $discarded }) =>
    $discarded
      ? "#a89a9a"
      : "#010000"
  };

  transition: background .2s;

  &:hover {
    background: #fff7d0;
  }

  td {
    padding: 12px 8px;

    border-bottom: 1px solid #f2ecd8;

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

  background: #fff7d0;

  color: #571111;

  font-family: "Poppins", sans-serif;

  font-size: 10px;

  font-weight: 700;

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

  color: #383131;

  font-family: "Poppins", sans-serif;

  font-size: 14px;
`;

export const SummaryValue = styled.span`
  color: ${({ $penalty }) =>
    $penalty
      ? "#831614"
      : "#010000"
  };

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 700;
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

  border-top: 2px solid #fff7d0;
`;

export const FinalLabel = styled.span`
  color: #010000;

  font-family: "Poppins", sans-serif;

  font-size: 18px;

  font-weight: 700;
`;

export const FinalValue = styled.span`
  color: #831614;

  font-family: "Poppins", sans-serif;

  font-size: 34px;

  font-weight: 800;

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

  background: #831614;

  color: #fff7d0;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 10px;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 700;

  cursor: pointer;

  transition: .25s;

  &:hover {
    background: #571111;

    color: #ffdb53;

    transform: translateY(-2px);

    box-shadow:
      0 10px 25px
      rgba(87, 17, 17, .3);
  }

  &:active {
    transform: scale(.98);
  }

  &:disabled {
    opacity: .6;

    cursor: not-allowed;

    transform: none;
  }
`;

// ========================================
// INPUT DO POETA (combobox)
// ========================================

export const PoetaInput = styled.input`
  display: block;

  width: 100%;

  height: 56px;

  padding: 0 18px;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  background: #fffdf0;

  color: #010000;

  font-family: "Poppins", sans-serif;

  font-size: 15px;

  font-weight: 500;

  text-align: left;

  outline: none;

  transition:
    background .25s ease,
    border-color .25s ease,
    box-shadow .25s ease;

  &::placeholder {
    color: #a89768;

    opacity: .8;
  }

  &:hover {
    border-color: #f9be06;

    background: #fffaf0;

    box-shadow: 0 4px 12px rgba(249, 190, 6, .12);
  }

  &:focus {
    border-color: #f9be06;

    background: #fffbe6;

    box-shadow:
      0 0 0 3px
      rgba(255, 219, 83, .22);
  }
`;

// ========================================
// AUTOCOMPLETE DO POETA
// ========================================

export const AutocompleteWrapper = styled.div`
  position: relative;

  width: 100%;

  margin-bottom: 25px;
`;

export const SuggestionsList = styled.ul`
  position: absolute;

  top: calc(100% + 8px);

  left: 0;
  right: 0;

  z-index: 20;

  max-height: 220px;

  overflow-y: auto;

  margin: 0;
  padding: 6px;

  list-style: none;

  background: #fff;

  border: 2px solid #ffdb53;

  border-radius: 16px;

  box-shadow: 0 14px 32px rgba(87, 17, 17, .18);
`;

export const SuggestionItem = styled.button`
  display: block;

  width: 100%;

  padding: 12px 14px;

  border: none;
  border-radius: 11px;

  background: ${({ $selected }) =>
    $selected ? "#fffbe6" : "transparent"};

  color: ${({ $selected }) =>
    $selected ? "#571111" : "#010000"};

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 700 : 500)};

  text-align: left;

  cursor: pointer;

  transition: background .15s ease;

  &:hover {
    background: #fff3c4;
  }
`;

export const SuggestionEmpty = styled.li`
  padding: 11px 12px;

  color: #383131;

  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;