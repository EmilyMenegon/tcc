import { useEffect, useState, useRef } from "react";
import { FaTimes, FaPlay, FaStop, FaRedo } from "react-icons/fa";
import { io } from "socket.io-client";

import {
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

    AutocompleteWrapper,
    PoetaInput,
    SuggestionsList,
    SuggestionItem,
    SuggestionEmpty,

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


const API_URL = "http://localhost:3001";

const CIRCUMFERENCE = 603.19;


export default function NotaForm({
    visible,
    nota,
    onClose,
    onSave
}) {

    const socketRef = useRef(null);

    const [alunos, setAlunos] = useState([]);

    const [buscaAluno, setBuscaAluno] = useState("");

    const [selectedAluno, setSelectedAluno] = useState("");

    const [mostrarSugestoes, setMostrarSugestoes] = useState(false);


    const [eventos, setEventos] = useState([]);

    const [selectedEvento, setSelectedEvento] = useState("");


    const [notes, setNotes] = useState(["", "", "", "", ""]);

    const [error, setError] = useState("");

    const [resultado, setResultado] = useState(null);

    const [salvando, setSalvando] = useState(false);


    // ============================
    // TIMER
    // ============================

    const [running, setRunning] = useState(false);
    const [startTs, setStartTs] = useState(null);
    const [accumulated, setAccumulated] = useState(0);
    const [elapsed, setElapsed] = useState(0);


    // ==========================================================
    // MODO DEMO (TCC) — REMOVER DEPOIS DA APRESENTAÇÃO
    // Não altera a regra (continua 3min + 10s oficial); só permite
    // pular o cronômetro pra um ponto de partida, pra não esperar
    // do zero. Pra reverter: apague a função "pularPara" e os
    // botões dela lá embaixo, no JSX.
    // ==========================================================

    const LIMIT = 180;
    const TOLERANCE_END = 190;

    function pularPara(segundos) {

        if (running) return;

        setStartTs(null);
        setRunning(false);
        setAccumulated(segundos);
        setElapsed(segundos);

    }

    // ==================== FIM DA VARIÁVEL DE DEMO ====================


    // ============================
    // SOCKET.IO — conecta só enquanto o form está aberto
    // ============================

    useEffect(() => {

        if (!visible) return;

        const socket = io(API_URL);
        socketRef.current = socket;

        return () => {
            socket.disconnect();
            socketRef.current = null;
        };

    }, [visible]);


    // ============================
    // CARREGAR POETAS (só quando o form abre)
    // ============================

    useEffect(() => {

        if (!visible) return;

        (async () => {

            try {

                const res = await fetch(`${API_URL}/notas/poetas`);

                const data = await res.json();

                setAlunos(Array.isArray(data) ? data : []);

            } catch (err) {

                console.error(err);

                setError("Não foi possível carregar os poetas.");

            }

        })();

    }, [visible]);


    // ============================
    // CARREGAR EVENTOS (só quando o form abre)
    // ============================

    useEffect(() => {

        if (!visible) return;

        (async () => {

            try {

                const res = await fetch(`${API_URL}/eventos`);

                const data = await res.json();

                setEventos(Array.isArray(data) ? data : []);

            } catch (err) {

                console.error(err);

                setError("Não foi possível carregar os eventos.");

            }

        })();

    }, [visible]);


    // ============================
    // PREENCHER / LIMPAR AO ABRIR
    // ============================

    useEffect(() => {

        if (!visible) return;

        if (nota) {

            setSelectedAluno(String(nota.idAluno || ""));

            setSelectedEvento(String(nota.eventoId || ""));

            setNotes([
                nota.n1 ?? "",
                nota.n2 ?? "",
                nota.n3 ?? "",
                nota.n4 ?? "",
                nota.n5 ?? ""
            ]);

        } else {

            setSelectedAluno("");

            setSelectedEvento("");

            setNotes(["", "", "", "", ""]);

        }

        setBuscaAluno("");

        setResultado(null);

        setError("");

        setRunning(false);

        setStartTs(null);

        setAccumulated(0);

        setElapsed(0);

    }, [visible, nota]);


    // ============================
    // BUSCA DE POETA
    // ============================

    const alunosFiltrados = alunos.filter((aluno) => {

        if (!buscaAluno.trim()) return true;

        const termo = buscaAluno
            .toLowerCase()
            .trim();

        return (
            aluno.nome?.toLowerCase().includes(termo) ||
            aluno.turma?.toLowerCase().includes(termo) ||
            aluno.curso?.toLowerCase().includes(termo)
        );

    });


    const poetaSelecionado = alunos.find(
        (aluno) => String(aluno.id) === String(selectedAluno)
    );


    // ============================
    // PREENCHER O TEXTO DO COMBOBOX
    // (quando edita uma nota, o poeta já vem selecionado por id;
    //  assim que a lista de poetas carrega, escreve o nome dele)
    // ============================

    useEffect(() => {

        if (!visible) return;

        if (!selectedAluno) return;

        const poeta = alunos.find(
            (aluno) => String(aluno.id) === String(selectedAluno)
        );

        if (poeta) {
            setBuscaAluno(poeta.nome);
        }

    }, [visible, alunos, selectedAluno]);


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


    const progress = Math.min(
        elapsed / LIMIT,
        1
    );


    // ============================
    // TRANSMITIR AO VIVO PRA TV
    // (dispara a cada mudança relevante, enquanto o form está aberto)
    // ============================

    useEffect(() => {

        if (!visible) return;

        socketRef.current?.emit("aoVivoAtualizar", {
            poeta: poetaSelecionado?.nome || "",
            notas: notes.map((n) => (n === "" ? null : Number(n))),
            tempo: Math.floor(elapsed)
        });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [visible, selectedAluno, notes, elapsed]);


    // ============================
    // NOTAS
    // ============================

    function handleNoteChange(index, value) {

        // permite campo vazio e "em digitação" (ex: "1." ou "-")
        if (value !== "" && !/^-?\d*\.?\d*$/.test(value)) {
            return;
        }

        let valorFinal = value;

        const numero = parseFloat(value.replace(",", "."));

        if (!isNaN(numero)) {

            if (numero < 0) valorFinal = "0";

            if (numero > 10) valorFinal = "10";

        }

        const newNotes = [...notes];

        newNotes[index] = valorFinal;

        setNotes(newNotes);

    }


    // ============================
    // CALCULAR
    // ============================

    function calculateResult() {

        setError("");


        if (!selectedEvento) {

            setError(
                "Selecione o evento antes de calcular."
            );

            return;

        }


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
    // (o POST/PUT de verdade é feito pelo pai via onSave;
    //  só emite "finalizado" pro socket se o pai confirmar sucesso)
    // ============================

    async function handleSalvar() {

        if (!resultado) {

            setError(
                "Calcule o resultado antes de salvar."
            );

            return;

        }


        const payload = {

            n1: resultado.values[0],
            n2: resultado.values[1],
            n3: resultado.values[2],
            n4: resultado.values[3],
            n5: resultado.values[4],

            media: resultado.baseAverage,
            desconto: resultado.penalty,
            tempo: Math.floor(elapsed),
            resultado: resultado.finalScore,

            id_aluno: Number(selectedAluno),
            evento_id: Number(selectedEvento)

        };


        setSalvando(true);

        try {

            const sucesso = await onSave(payload);

            if (sucesso) {

                socketRef.current?.emit("aoVivoFinalizar", {
                    poeta: poetaSelecionado?.nome || "",
                    notas: resultado.values,
                    media: resultado.baseAverage,
                    desconto: resultado.penalty,
                    resultado: resultado.finalScore
                });

                socketRef.current?.emit("aoVivoLimpar");

            }

        } finally {

            setSalvando(false);

        }

    }


    // ============================
    // FECHAR (avisa a TV que zerou também)
    // ============================

    function handleFechar() {

        socketRef.current?.emit("aoVivoLimpar");

        onClose();

    }


    if (!visible) return null;


    // ============================
    // RENDER
    // ============================

    return (

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
                        onClick={handleFechar}
                    >

                        <FaTimes />

                    </CloseButton>

                </TopBar>



                {/* TIMER */}

                <TimerCard>


                    {/* ==========================================================
                        MODO DEMO (TCC) — REMOVER ESTE BLOCO INTEIRO DEPOIS
                        (junto com o state "limiteDemo" lá em cima)
                    ========================================================== */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 8,
                            flexWrap: "wrap",
                            marginBottom: 18
                        }}
                    >

                        {[
                            { label: "Normal (do zero)", value: 0 },
                            { label: "Demo (começa em 1 min)", value: 60 },
                            { label: "Demo (começa em 3 min)", value: 180 }
                        ].map((opcao) => (

                            <button
                                key={opcao.value}
                                type="button"
                                disabled={running}
                                onClick={() => pularPara(opcao.value)}
                                style={{
                                    padding: "7px 16px",
                                    borderRadius: 999,
                                    border: "none",
                                    fontWeight: 700,
                                    fontSize: 12,
                                    fontFamily: "inherit",
                                    cursor: running ? "not-allowed" : "pointer",
                                    background:
                                        Math.floor(accumulated) === opcao.value
                                            ? "#ffdb53"
                                            : "#f1f1f1",
                                    color:
                                        Math.floor(accumulated) === opcao.value
                                            ? "#111111"
                                            : "#777777",
                                    opacity: running ? 0.6 : 1,
                                    transition: "0.2s"
                                }}
                            >
                                {opcao.label}
                            </button>

                        ))}

                    </div>

                    {/* ==================== FIM DO MODO DEMO ==================== */}


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
                                    CIRCUMFERENCE
                                }

                                strokeDashoffset={
                                    CIRCUMFERENCE *
                                    (1 - progress)
                                }

                                $penalty={
                                    elapsed > TOLERANCE_END
                                }

                            />

                        </RingSvg>


                        <RingCenter>

                            <TimeDisplay
                                $penalty={
                                    elapsed >
                                    TOLERANCE_END
                                }
                            >

                                {formatTime(elapsed)}

                            </TimeDisplay>


                            <ZoneLabel
                                $penalty={
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
                        $visible={
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
                            $primary
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
                        Selecione o evento, o poeta e informe as 5 notas.
                        A maior e a menor nota serão descartadas.
                    </SectionSub>


                    {/* EVENTO */}

                    <SelectLabel>
                        Evento
                    </SelectLabel>


                    <Select

                        value={selectedEvento}

                        onChange={(e) =>
                            setSelectedEvento(
                                e.target.value
                            )
                        }

                    >

                        <option value="">
                            Selecione o evento
                        </option>


                        {eventos.map(evento => (

                            <option
                                key={evento.id}
                                value={evento.id}
                            >

                                {evento.nome}

                            </option>

                        ))}

                    </Select>


                    {eventos.length === 0 && (

                        <ErrorMessage>
                            Nenhum evento cadastrado ainda. Peça pro organizador criar um evento antes de lançar notas.
                        </ErrorMessage>

                    )}


                    {/* POETA — busca e seleção integradas */}

                    <SelectLabel>
                        Poeta
                    </SelectLabel>


                    <AutocompleteWrapper>

                        <PoetaInput

                            type="text"

                            placeholder="Digite o nome, turma ou curso do poeta..."

                            value={buscaAluno}

                            autoComplete="off"

                            onChange={(e) => {

                                setBuscaAluno(e.target.value);

                                setSelectedAluno("");

                                setMostrarSugestoes(true);

                            }}

                            onFocus={() =>
                                setMostrarSugestoes(true)
                            }

                            onBlur={() =>
                                setTimeout(
                                    () => setMostrarSugestoes(false),
                                    150
                                )
                            }

                        />


                        {mostrarSugestoes && (

                            <SuggestionsList>

                                {alunosFiltrados.length === 0 ? (

                                    <SuggestionEmpty>
                                        Nenhum poeta encontrado.
                                    </SuggestionEmpty>

                                ) : (

                                    alunosFiltrados.map((aluno) => (

                                        <SuggestionItem

                                            key={aluno.id}

                                            type="button"

                                            $selected={
                                                String(aluno.id) ===
                                                String(selectedAluno)
                                            }

                                            onMouseDown={() => {

                                                setSelectedAluno(
                                                    String(aluno.id)
                                                );

                                                setBuscaAluno(aluno.nome);

                                                setMostrarSugestoes(false);

                                            }}

                                        >

                                            {aluno.nome}
                                            {aluno.turma
                                                ? ` — ${aluno.turma}`
                                                : ""
                                            }

                                        </SuggestionItem>

                                    ))

                                )}

                            </SuggestionsList>

                        )}

                    </AutocompleteWrapper>


                    {!selectedAluno && buscaAluno.trim() && (

                        <ErrorMessage>
                            Selecione um poeta da lista de sugestões.
                        </ErrorMessage>

                    )}


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
                                                $discarded={
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
                                                            Descartada
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

                                <SummaryValue $penalty>

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
                            onClick={handleSalvar}
                            disabled={salvando}
                        >

                            {salvando
                                ? "Salvando..."
                                : "Salvar nota"
                            }

                        </SaveButton>


                    </ResultsCard>

                )}

            </CronometroPage>

        </Overlay>

    );

}