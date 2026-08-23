import { useCallback, useEffect, useState } from "react";
import { FaPlus, FaTimes, FaPlay, FaStop, FaRedo } from "react-icons/fa";

import {
    getAllNotas,
    getAllAlunos,
    createNota,
    updateNota,
    deleteNota
} from "../../database/database";

import NotaCard from "../../components/NotaCard";
import EmptyState from "../../components/EmptyState";

import {
    List,
    Fab,

    Overlay,
    CronometroPage,

    TopBar,
    CloseButton,

    Eyebrow,
    MainTitle,

    TimerCard,
    RingWrap,
    RingSvg,
    RingTrack,
    RingProgress,
    RingCenter,
    TimeDisplay,
    ZoneLabel,
    PenaltyBadge,

    TimerControls,
    TimerButton,
    ResetButton,

    NotesCard,
    SectionTitle,
    SectionSub,

    SelectLabel,
    Select,

    NotesGrid,
    NoteField,
    NoteLabel,
    NoteInput,

    CalculateButton,
    ErrorMessage,

    ResultsCard,
    ResultsTable,
    ResultsHeader,
    ResultsRow,
    Tag,

    Summary,
    SummaryRow,
    SummaryValue,

    FinalRow,
    FinalLabel,
    FinalValue,

    SaveButton
} from "./style";


export default function Notas() {

    const [notas, setNotas] = useState([]);

    const [alunos, setAlunos] = useState([]);

    const [pageVisible, setPageVisible] = useState(false);

    const [editingNota, setEditingNota] = useState(null);

    const [selectedAluno, setSelectedAluno] = useState("");

    const [notes, setNotes] = useState(["", "", "", "", ""]);

    const [error, setError] = useState("");

    const [resultado, setResultado] = useState(null);


    // ============================
    // TIMER
    // ============================

    const LIMIT = 180;
    const TOLERANCE_END = 190;

    const [running, setRunning] = useState(false);
    const [startTs, setStartTs] = useState(null);
    const [accumulated, setAccumulated] = useState(0);
    const [elapsed, setElapsed] = useState(0);


    // ============================
    // CARREGAR NOTAS
    // ============================

    const loadNotas = useCallback(async () => {

        const result = await getAllNotas();

        setNotas(result || []);

    }, []);


    // ============================
    // CARREGAR POETAS
    // ============================

    const loadAlunos = useCallback(async () => {

        const result = await getAllAlunos();

        setAlunos(result || []);

    }, []);


    useEffect(() => {

        loadNotas();
        loadAlunos();

    }, [loadNotas, loadAlunos]);


    // ============================
    // TIMER
    // ============================

    useEffect(() => {

        if (!running) return;


        const interval = setInterval(() => {

            const current =
                accumulated +
                (Date.now() - startTs) / 1000;

            setElapsed(current);

        }, 50);


        return () => clearInterval(interval);

    }, [running, accumulated, startTs]);


    function startTimer() {

        if (running) {

            const current =
                accumulated +
                (Date.now() - startTs) / 1000;

            setAccumulated(current);
            setElapsed(current);
            setRunning(false);

            return;
        }


        setStartTs(Date.now());
        setRunning(true);

    }


    function resetTimer() {

        setRunning(false);
        setStartTs(null);
        setAccumulated(0);
        setElapsed(0);

    }


    function formatTime(seconds) {

        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);

        return (
            String(m).padStart(2, "0") +
            ":" +
            String(s).padStart(2, "0")
        );

    }


    function computePenalty(seconds) {

        if (seconds <= TOLERANCE_END) {
            return 0;
        }

        const blocks =
            Math.floor(
                (seconds - TOLERANCE_END - 1) / 10
            ) + 1;

        return blocks * 0.5;

    }


    const penalty = computePenalty(
        Math.floor(elapsed)
    );


    const circumference = 603.19;

    const progress = Math.min(
        elapsed / LIMIT,
        1
    );


    // ============================
    // ABRIR FORMULÁRIO
    // ============================

    function openNewNota() {

        setEditingNota(null);

        setSelectedAluno("");

        setNotes(["", "", "", "", ""]);

        setResultado(null);

        setError("");

        resetTimer();

        setPageVisible(true);

    }


    // ============================
    // FECHAR
    // ============================

    function closePage() {

        setRunning(false);

        setPageVisible(false);

        setResultado(null);

        setError("");

    }


    // ============================
    // NOTAS
    // ============================

    function handleNoteChange(index, value) {

        const newNotes = [...notes];

        newNotes[index] = value;

        setNotes(newNotes);

    }


    // ============================
    // CALCULAR
    // ============================

    function calculateResult() {

        setError("");


        if (!selectedAluno) {

            setError(
                "Selecione o poeta antes de calcular."
            );

            return;

        }


        const values = notes.map(value =>
            parseFloat(
                String(value).replace(",", ".")
            )
        );


        const valid = values.every(
            value =>
                !isNaN(value) &&
                value >= 0 &&
                value <= 10
        );


        if (!valid) {

            setError(
                "Preencha as 5 notas com valores entre 0 e 10."
            );

            return;

        }


        const indexed = values.map((value, index) => ({
            value,
            index
        }));


        const sorted = [...indexed].sort(
            (a, b) => a.value - b.value
        );


        const min = sorted[0];

        const max = sorted[sorted.length - 1];


        const discarded = new Set([
            min.index,
            max.index
        ]);


        const kept = indexed.filter(
            item => !discarded.has(item.index)
        );


        const baseAverage =
            kept.reduce(
                (sum, item) => sum + item.value,
                0
            ) / kept.length;


        const finalScore = Math.max(
            0,
            baseAverage - penalty
        );


        setResultado({

            values,

            discarded,

            baseAverage,

            penalty,

            finalScore

        });

    }


    // ============================
    // SALVAR
    // ============================

    async function handleSave() {

        if (!resultado) {

            setError(
                "Calcule o resultado antes de salvar."
            );

            return;

        }


        const alunoId = Number(selectedAluno);


        if (editingNota) {

            await updateNota(

                editingNota.id,

                resultado.values[0],
                resultado.values[1],
                resultado.values[2],
                resultado.values[3],
                alunoId

            );

        } else {

            await createNota(

                resultado.values[0],
                resultado.values[1],
                resultado.values[2],
                resultado.values[3],
                alunoId

            );

        }


        await loadNotas();

        closePage();

    }


    // ============================
    // EDITAR
    // ============================

    function handleEdit(nota) {

        setEditingNota(nota);

        setSelectedAluno(
            String(nota.id_aluno || nota.aluno_id || "")
        );


        setNotes([
            nota.n1 ?? "",
            nota.n2 ?? "",
            nota.n3 ?? "",
            nota.n4 ?? "",
            nota.n5 ?? ""
        ]);


        setResultado(null);

        resetTimer();

        setPageVisible(true);

    }


    // ============================
    // EXCLUIR
    // ============================

    async function handleDelete(id) {

        const confirmacao =
            window.confirm(
                "Tem certeza que deseja excluir esta nota?"
            );


        if (!confirmacao) return;


        await deleteNota(id);

        await loadNotas();

    }


    // ============================
    // RENDER
    // ============================

    return (

        <>


            {/* =======================
                BOTÃO +
            ======================== */}

            <Fab
                onClick={openNewNota}
            >

                <FaPlus />

            </Fab>


            {/* =======================
                PÁGINA DO CRONÔMETRO
            ======================== */}

            {pageVisible && (

                <Overlay>

                    <CronometroPage>


                        {/* TOPO */}

                        <TopBar>

                            <div>

                                <Eyebrow>
                                    Regulamento oficial · 3 min + 10s de tolerância
                                </Eyebrow>

                                <MainTitle>
                                    Cronômetro
                                </MainTitle>

                            </div>


                            <CloseButton
                                onClick={closePage}
                            >

                                <FaTimes />

                            </CloseButton>

                        </TopBar>



                        {/* TIMER */}

                        <TimerCard>


                            <RingWrap>

                                <RingSvg
                                    viewBox="0 0 220 220"
                                >

                                    <RingTrack
                                        cx="110"
                                        cy="110"
                                        r="96"
                                    />

                                    <RingProgress

                                        cx="110"
                                        cy="110"
                                        r="96"

                                        strokeDasharray={
                                            circumference
                                        }

                                        strokeDashoffset={
                                            circumference *
                                            (1 - progress)
                                        }

                                        penalty={
                                            elapsed > TOLERANCE_END
                                        }

                                    />

                                </RingSvg>


                                <RingCenter>

                                    <TimeDisplay
                                        penalty={
                                            elapsed >
                                            TOLERANCE_END
                                        }
                                    >

                                        {formatTime(elapsed)}

                                    </TimeDisplay>


                                    <ZoneLabel
                                        penalty={
                                            elapsed >
                                            TOLERANCE_END
                                        }
                                    >

                                        {elapsed <= LIMIT

                                            ? "dentro do tempo"

                                            : elapsed <= TOLERANCE_END

                                            ? "tolerância · sem desconto"

                                            : "excedeu o tempo"

                                        }

                                    </ZoneLabel>

                                </RingCenter>

                            </RingWrap>


                            <PenaltyBadge
                                visible={
                                    penalty > 0
                                }
                            >

                                desconto: -
                                {penalty
                                    .toFixed(1)
                                    .replace(".", ",")
                                }
                                {" "}pontos

                            </PenaltyBadge>


                            <TimerControls>

                                <TimerButton
                                    onClick={startTimer}
                                    primary
                                >

                                    {running
                                        ? <FaStop />
                                        : <FaPlay />
                                    }

                                    {running
                                        ? "Parar"
                                        : "Iniciar"
                                    }

                                </TimerButton>


                                <ResetButton
                                    onClick={resetTimer}
                                >

                                    <FaRedo />

                                    Zerar

                                </ResetButton>

                            </TimerControls>

                        </TimerCard>



                        {/* NOTAS */}

                        <NotesCard>


                            <SectionTitle>
                                Notas dos jurados
                            </SectionTitle>


                            <SectionSub>
                                Selecione o poeta e informe as 5 notas.
                                A maior e a menor nota serão descartadas.
                            </SectionSub>


                            {/* POETA */}

                            <SelectLabel>
                                Poeta
                            </SelectLabel>


                            <Select

                                value={selectedAluno}

                                onChange={(e) =>
                                    setSelectedAluno(
                                        e.target.value
                                    )
                                }

                            >

                                <option value="">
                                    Selecione o poeta
                                </option>


                                {alunos.map(aluno => (

                                    <option
                                        key={aluno.id}
                                        value={aluno.id}
                                    >

                                        {aluno.nome}

                                    </option>

                                ))}

                            </Select>


                            {/* NOTAS */}

                            <NotesGrid>

                                {notes.map(
                                    (value, index) => (

                                        <NoteField
                                            key={index}
                                        >

                                            <NoteLabel>
                                                Jurado {index + 1}
                                            </NoteLabel>


                                            <NoteInput

                                                type="number"

                                                min="0"

                                                max="10"

                                                step="0.1"

                                                inputMode="decimal"

                                                value={value}

                                                onChange={(e) =>
                                                    handleNoteChange(
                                                        index,
                                                        e.target.value
                                                    )
                                                }

                                            />

                                        </NoteField>

                                    )
                                )}

                            </NotesGrid>


                            <CalculateButton
                                onClick={calculateResult}
                            >

                                Calcular resultado

                            </CalculateButton>


                            {error && (

                                <ErrorMessage>
                                    {error}
                                </ErrorMessage>

                            )}

                        </NotesCard>



                        {/* RESULTADO */}

                        {resultado && (

                            <ResultsCard>


                                <SectionTitle>
                                    Resultado
                                </SectionTitle>


                                <SectionSub>

                                    Tempo do poeta:{" "}

                                    {formatTime(elapsed)}

                                    {resultado.penalty > 0
                                        ? " — excedeu o limite."
                                        : " — dentro do tempo permitido."
                                    }

                                </SectionSub>


                                <ResultsTable>

                                    <thead>

                                        <tr>

                                            <ResultsHeader>
                                                Jurado
                                            </ResultsHeader>

                                            <ResultsHeader>
                                                Nota
                                            </ResultsHeader>

                                            <ResultsHeader>
                                                Status
                                            </ResultsHeader>

                                        </tr>

                                    </thead>


                                    <tbody>

                                        {resultado.values.map(
                                            (value, index) => {

                                                const isDiscarded =
                                                    resultado.discarded.has(
                                                        index
                                                    );


                                                return (

                                                    <ResultsRow
                                                        key={index}
                                                        discarded={
                                                            isDiscarded
                                                        }
                                                    >

                                                        <td>
                                                            Jurado {index + 1}
                                                        </td>


                                                        <td>

                                                            {value
                                                                .toFixed(1)
                                                                .replace(
                                                                    ".",
                                                                    ","
                                                                )
                                                            }

                                                        </td>


                                                        <td>

                                                            {isDiscarded && (

                                                                <Tag>
                                                                    {index ===
                                                                    [...resultado.discarded][0]
                                                                        ? "Descartada"
                                                                        : "Descartada"
                                                                    }
                                                                </Tag>

                                                            )}

                                                        </td>

                                                    </ResultsRow>

                                                );

                                            }
                                        )}

                                    </tbody>

                                </ResultsTable>


                                <Summary>

                                    <SummaryRow>

                                        <span>
                                            Média das 3 notas válidas
                                        </span>

                                        <SummaryValue>

                                            {resultado.baseAverage
                                                .toFixed(2)
                                                .replace(
                                                    ".",
                                                    ","
                                                )
                                            }

                                        </SummaryValue>

                                    </SummaryRow>


                                    <SummaryRow>

                                        <span>
                                            Desconto por tempo
                                        </span>

                                        <SummaryValue penalty>

                                            -
                                            {resultado.penalty
                                                .toFixed(1)
                                                .replace(
                                                    ".",
                                                    ","
                                                )
                                            }

                                        </SummaryValue>

                                    </SummaryRow>

                                </Summary>


                                <FinalRow>

                                    <FinalLabel>
                                        Nota final
                                    </FinalLabel>


                                    <FinalValue>

                                        {resultado.finalScore
                                            .toFixed(2)
                                            .replace(
                                                ".",
                                                ","
                                            )
                                        }

                                    </FinalValue>

                                </FinalRow>


                                <SaveButton
                                    onClick={handleSave}
                                >

                                    Salvar nota

                                </SaveButton>


                            </ResultsCard>

                        )}

                    </CronometroPage>

                </Overlay>

            )}

        </>

    );

}