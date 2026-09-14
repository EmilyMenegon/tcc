import { useEffect, useRef, useState } from "react";
import { FaTimes, FaPlay, FaStop, FaRedo } from "react-icons/fa";

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

const LIMIT = 180;
const TOLERANCE_END = 190;
const CIRCUMFERENCE = 603.19;


export default function NotaForm({
    visible,
    nota,
    onClose,
    onSave
}) {

    const [alunos, setAlunos] = useState([]);

    // Campo único: exibe o texto digitado/selecionado e filtra a lista.
    const [buscaAluno, setBuscaAluno] = useState("");

    const [selectedAluno, setSelectedAluno] = useState("");

    const [sugestoesAbertas, setSugestoesAbertas] = useState(false);

    // Evita re-preencher o campo de busca depois que o usuário já mexeu nele.
    const [poetaSincronizado, setPoetaSincronizado] = useState(false);

    const inputRef = useRef(null);


    const [eventos, setEventos] = useState([]);

    const [selectedEvento, setSelectedEvento] = useState("");


    const [notes, setNotes] = useState(["", "", "", "", ""]);

    const [error, setError] = useState("");

    const [resultado, setResultado] = useState(null);


    // ============================
    // TIMER
    // ============================

    const [running, setRunning] = useState(false);
    const [startTs, setStartTs] = useState(null);
    const [accumulated, setAccumulated] = useState(0);
    const [elapsed, setElapsed] = useState(0);


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

        setPoetaSincronizado(false);

        setSugestoesAbertas(false);

        setResultado(null);

        setError("");

        setRunning(false);

        setStartTs(null);

        setAccumulated(0);

        setElapsed(0);

    }, [visible, nota]);


    // ============================
    // PREENCHER O CAMPO COM O NOME DO POETA JÁ SELECIONADO
    // (só roda uma vez por abertura, assim que a lista de poetas carrega)
    // ============================

    useEffect(() => {

        if (!visible || !nota || poetaSincronizado) return;

        const aluno = alunos.find(
            (item) => String(item.id) === String(nota.idAluno)
        );

        if (aluno) {

            setBuscaAluno(aluno.nome);

            setPoetaSincronizado(true);

        }

    }, [visible, nota, alunos, poetaSincronizado]);


    // ============================
    // BUSCA DE POETA (autocomplete)
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


    function handleBuscaChange(valor) {

        setBuscaAluno(valor);

        // Enquanto o usuário digita algo diferente do poeta já
        // selecionado, a seleção deixa de ser válida até ele
        // escolher de novo na lista.
        setSelectedAluno("");

        setSugestoesAbertas(true);

    }


    function selecionarAluno(aluno) {

        setSelectedAluno(String(aluno.id));

        setBuscaAluno(aluno.nome);

        setSugestoesAbertas(false);

    }


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
    // (delega o fetch de verdade pro pai, via onSave)
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


        await onSave(payload);

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
                        onClick={onClose}
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
                                    CIRCUMFERENCE
                                }

                                strokeDashoffset={
                                    CIRCUMFERENCE *
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
                        Selecione o evento, digite pra buscar o poeta pelo
                        nome, turma ou curso e escolha na lista, e informe
                        as 5 notas — a maior e a menor serão descartadas.
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


                    {/* AUTOCOMPLETE DO POETA */}

                    <SelectLabel>
                        Poeta
                    </SelectLabel>


                    <AutocompleteWrapper>

                        <NoteInput

                            ref={inputRef}

                            type="text"

                            placeholder="Digite o nome, turma ou curso..."

                            value={buscaAluno}

                            onChange={(e) =>
                                handleBuscaChange(
                                    e.target.value
                                )
                            }

                            onFocus={() =>
                                setSugestoesAbertas(true)
                            }

                            style={{
                                width: "100%",
                                textAlign: "left"
                            }}

                        />


                        {sugestoesAbertas && (

                            <SuggestionsList>

                                {alunosFiltrados.length === 0 ? (

                                    <SuggestionEmpty>
                                        Nenhum poeta encontrado.
                                    </SuggestionEmpty>

                                ) : (

                                    alunosFiltrados.map((aluno) => (

                                        <li key={aluno.id}>

                                            <SuggestionItem

                                                type="button"

                                                $selected={
                                                    String(aluno.id) ===
                                                    selectedAluno
                                                }

                                                onMouseDown={(e) =>
                                                    e.preventDefault()
                                                }

                                                onClick={() =>
                                                    selecionarAluno(aluno)
                                                }

                                            >

                                                {aluno.nome}
                                                {aluno.turma
                                                    ? ` — ${aluno.turma}`
                                                    : ""
                                                }

                                            </SuggestionItem>

                                        </li>

                                    ))

                                )}

                            </SuggestionsList>

                        )}

                    </AutocompleteWrapper>


                    {!selectedAluno && buscaAluno.trim() && !sugestoesAbertas && (

                        <ErrorMessage>
                            Selecione um poeta na lista de sugestões.
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
                            onClick={handleSalvar}
                        >

                            Salvar nota

                        </SaveButton>


                    </ResultsCard>

                )}

            </CronometroPage>

        </Overlay>

    );

}