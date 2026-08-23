import { useEffect, useRef, useState } from "react";

import {
    Wrapper,
    Eyebrow,
    Title,
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
    Button,
    NotesCard,
    SectionTitle,
    SectionSub,
    NotesGrid,
    NoteField,
    CalcRow,
    ErrorMsg,
    ResultsCard,
    Table,
    Summary,
    SummaryRow,
    FinalRow,
    CancelButton
} from "./style";


const LIMIT = 180;
const TOLERANCE_END = 190;
const RING_LEN = 603.19;


export default function CronometroSlam({
    nota,
    onFinish,
    onCancel
}) {

    const [running, setRunning] = useState(false);
    const [elapsed, setElapsed] = useState(0);

    const [notes, setNotes] = useState(
        nota
            ? [
                nota.n1 ?? "",
                nota.n2 ?? "",
                nota.n3 ?? "",
                nota.n4 ?? "",
                nota.n5 ?? ""
            ]
            : ["", "", "", "", ""]
    );

    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);

    const startRef = useRef(null);
    const accumulatedRef = useRef(0);
    const animationRef = useRef(null);


    function formatTime(totalSeconds) {

        const m = Math.floor(totalSeconds / 60);
        const s = Math.floor(totalSeconds % 60);

        return (
            String(m).padStart(2, "0") +
            ":" +
            String(s).padStart(2, "0")
        );
    }


    function computePenalty(t) {

        if (t <= TOLERANCE_END) {
            return 0;
        }

        const blocks =
            Math.floor(
                (t - TOLERANCE_END - 1) / 10
            ) + 1;

        return blocks * 0.5;
    }


    function getElapsed() {

        if (!running) {
            return accumulatedRef.current;
        }

        return (
            accumulatedRef.current +
            (Date.now() - startRef.current) / 1000
        );
    }


    function renderTimer() {

        const current = getElapsed();

        setElapsed(current);

        if (running) {
            animationRef.current =
                requestAnimationFrame(renderTimer);
        }
    }


    useEffect(() => {

        return () => {

            if (animationRef.current) {
                cancelAnimationFrame(
                    animationRef.current
                );
            }

        };

    }, []);


    function startTimer() {

        if (!running) {

            setRunning(true);

            startRef.current = Date.now();

            animationRef.current =
                requestAnimationFrame(renderTimer);

        } else {

            const current = getElapsed();

            accumulatedRef.current = current;

            setElapsed(current);

            setRunning(false);

            cancelAnimationFrame(
                animationRef.current
            );
        }
    }


    function resetTimer() {

        setRunning(false);

        cancelAnimationFrame(
            animationRef.current
        );

        accumulatedRef.current = 0;

        startRef.current = null;

        setElapsed(0);
    }


    function updateNote(index, value) {

        const newNotes = [...notes];

        newNotes[index] = value;

        setNotes(newNotes);
    }


    function calculate() {

        const values = notes.map(
            value =>
                Number(
                    String(value).replace(",", ".")
                )
        );


        const valid = values.every(
            value =>
                !Number.isNaN(value) &&
                value >= 0 &&
                value <= 10
        );


        if (!valid) {

            setError(true);

            setResult(null);

            return;
        }


        setError(false);


        const penalty =
            computePenalty(
                Math.floor(elapsed)
            );


        const withIndex =
            values.map((value, index) => ({
                value,
                index
            }));


        const sorted =
            [...withIndex].sort(
                (a, b) => a.value - b.value
            );


        const minEntry = sorted[0];

        const maxEntry =
            sorted[sorted.length - 1];


        const discarded =
            new Set([
                minEntry.index,
                maxEntry.index
            ]);


        const kept =
            withIndex.filter(
                item =>
                    !discarded.has(item.index)
            );


        const average =
            kept.reduce(
                (sum, item) =>
                    sum + item.value,
                0
            ) / kept.length;


        const finalScore =
            Math.max(
                0,
                average - penalty
            );


        setResult({

            values,

            penalty,

            average,

            finalScore,

            discarded,

            elapsed

        });
    }


    function finish() {

        if (!result) {

            calculate();

            return;
        }


        if (onFinish) {

            onFinish({

                n1: result.values[0],
                n2: result.values[1],
                n3: result.values[2],
                n4: result.values[3],
                n5: result.values[4],

                media: result.average,

                desconto: result.penalty,

                notaFinal: result.finalScore,

                tempo: result.elapsed,

                id_aluno:
                    nota?.id_aluno || null

            });
        }
    }


    const penalty =
        computePenalty(
            Math.floor(elapsed)
        );


    const percentage =
        Math.min(
            elapsed / LIMIT,
            1
        );


    const dashOffset =
        RING_LEN *
        (1 - percentage);


    let zone = "dentro do tempo";

    let zoneType = "";


    if (
        elapsed > LIMIT &&
        elapsed <= TOLERANCE_END
    ) {

        zone =
            "tolerância (sem desconto)";

        zoneType =
            "tolerance";
    }


    if (elapsed > TOLERANCE_END) {

        zone =
            "excedeu o tempo";

        zoneType =
            "penalty";
    }


    return (

        <Wrapper>

            <Eyebrow>
                Regulamento oficial · 3 min + 10s de tolerância
            </Eyebrow>


            <Title>
                Cronômetro
            </Title>


            <TimerCard>

                <RingWrap>

                    <RingSvg viewBox="0 0 220 220">

                        <RingTrack
                            cx="110"
                            cy="110"
                            r="96"
                        />

                        <RingProgress
                            cx="110"
                            cy="110"
                            r="96"
                            strokeDasharray={RING_LEN}
                            strokeDashoffset={dashOffset}
                            penalty={
                                zoneType === "penalty"
                            }
                        />

                    </RingSvg>


                    <RingCenter>

                        <TimeDisplay
                            penalty={
                                zoneType === "penalty"
                            }
                            tolerance={
                                zoneType === "tolerance"
                            }
                        >
                            {formatTime(elapsed)}
                        </TimeDisplay>


                        <ZoneLabel type={zoneType}>
                            {zone}
                        </ZoneLabel>

                    </RingCenter>

                </RingWrap>


                <PenaltyBadge show={penalty > 0}>

                    desconto: -
                    {penalty
                        .toFixed(1)
                        .replace(".", ",")
                    }
                    {" "}
                    pontos

                </PenaltyBadge>


                <TimerControls>

                    <Button
                        primary
                        onClick={startTimer}
                    >
                        {running
                            ? "Parar"
                            : "Iniciar"
                        }
                    </Button>


                    <Button
                        onClick={resetTimer}
                    >
                        Zerar
                    </Button>

                </TimerControls>


                {onCancel && (

                    <CancelButton
                        onClick={onCancel}
                    >
                        Voltar para notas
                    </CancelButton>

                )}

            </TimerCard>


            <NotesCard>

                <SectionTitle>
                    Notas dos jurados
                </SectionTitle>


                <SectionSub>
                    De 0 a 10, com casas decimais.
                    A maior e a menor nota são descartadas.
                </SectionSub>


                <NotesGrid>

                    {notes.map(
                        (value, index) => (

                            <NoteField key={index}>

                                <label>
                                    Jurado {index + 1}
                                </label>


                                <input
                                    type="number"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    inputMode="decimal"
                                    value={value}
                                    onChange={e =>
                                        updateNote(
                                            index,
                                            e.target.value
                                        )
                                    }
                                />

                            </NoteField>

                        )
                    )}

                </NotesGrid>


                <CalcRow>

                    <Button
                        primary
                        onClick={calculate}
                    >
                        Calcular resultado
                    </Button>

                </CalcRow>


                {error && (

                    <ErrorMsg>
                        Preencha as 5 notas com valores entre 0 e 10 antes de calcular.
                    </ErrorMsg>

                )}

            </NotesCard>


            {result && (

                <ResultsCard>

                    <SectionTitle>
                        Resultado
                    </SectionTitle>


                    <SectionSub>

                        Tempo do poeta:{" "}
                        {formatTime(result.elapsed)}

                        {result.penalty > 0
                            ? " — excedeu o limite."
                            : " — dentro do tempo permitido."
                        }

                    </SectionSub>


                    <Table>

                        <thead>

                            <tr>

                                <th>
                                    Jurado
                                </th>

                                <th>
                                    Nota
                                </th>

                                <th />

                            </tr>

                        </thead>


                        <tbody>

                            {result.values.map(
                                (value, index) => {

                                    const isDiscarded =
                                        result.discarded.has(index);


                                    return (

                                        <tr
                                            key={index}
                                            className={
                                                isDiscarded
                                                    ? "discarded"
                                                    : ""
                                            }
                                        >

                                            <td>
                                                Jurado {index + 1}
                                            </td>


                                            <td className="num">

                                                {value
                                                    .toFixed(1)
                                                    .replace(
                                                        ".",
                                                        ","
                                                    )}

                                            </td>


                                            <td>

                                                {isDiscarded && (

                                                    <span className="tag">

                                                        {value ===
                                                        Math.max(
                                                            ...result.values
                                                        )
                                                            ? "maior · descartada"
                                                            : "menor · descartada"
                                                        }

                                                    </span>

                                                )}

                                            </td>

                                        </tr>

                                    );
                                }
                            )}

                        </tbody>

                    </Table>


                    <Summary>

                        <SummaryRow>

                            <span>
                                Média das 3 notas válidas
                            </span>

                            <span className="val">

                                {result.average
                                    .toFixed(2)
                                    .replace(".", ",")
                                }

                            </span>

                        </SummaryRow>


                        <SummaryRow penalty>

                            <span>
                                Desconto por tempo
                            </span>

                            <span className="val">

                                -
                                {result.penalty
                                    .toFixed(1)
                                    .replace(".", ",")
                                }

                            </span>

                        </SummaryRow>

                    </Summary>


                    <FinalRow>

                        <span className="label">
                            Nota final
                        </span>

                        <span className="val">

                            {result.finalScore
                                .toFixed(2)
                                .replace(".", ",")
                            }

                        </span>

                    </FinalRow>


                    <CalcRow>

                        <Button
                            primary
                            onClick={finish}
                        >
                            Finalizar e salvar nota
                        </Button>

                    </CalcRow>

                </ResultsCard>

            )}

        </Wrapper>
    );
}