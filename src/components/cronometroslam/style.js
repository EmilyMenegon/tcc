// style.js

import styled from "styled-components";


export const Wrapper = styled.div`

    width:100%;

    max-width:720px;

    margin:0 auto;

    padding:32px 16px 80px;

    color:#171717;

    background:#666666;

    font-family:
        -apple-system,
        BlinkMacSystemFont,
        "Segoe UI",
        Roboto,
        Helvetica,
        Arial,
        sans-serif;

    box-sizing:border-box;

    *{
        box-sizing:border-box;
    }

`;


export const Eyebrow = styled.div`

    font-family:
        ui-monospace,
        SFMono-Regular,
        Consolas,
        monospace;

    font-size:12px;

    letter-spacing:.18em;

    text-transform:uppercase;

    color: #ffdb53;

    text-align:center;

    margin-bottom:7px;

`;


export const Title = styled.h1`

    font-family:
        "Arial Black",
        "Helvetica Neue",
        Impact,
        sans-serif;

    font-size:
        clamp(32px, 7vw, 52px);

    text-align:center;

    text-transform:uppercase;

    color:#ffffff;

    margin:0 0 36px;

    line-height:1;

`;


export const TimerCard = styled.div`

    background:#ffffff;

    border:1px solid #dedede;

    border-radius:20px;

    padding:36px 24px 28px;

    display:flex;

    flex-direction:column;

    align-items:center;

    gap:18px;

    margin-bottom:32px;

    box-shadow:
        0 8px 24px rgba(0,0,0,.18);

`;


export const RingWrap = styled.div`

    position:relative;

    width:220px;

    height:220px;

`;


export const RingSvg = styled.svg`

    transform:rotate(-90deg);

    width:220px;

    height:220px;

`;


export const RingTrack = styled.circle`

    fill:none;

    stroke:#e5e5e5;

    stroke-width:10;

`;


export const RingProgress = styled.circle`

    fill:none;

    stroke:
        ${({ penalty }) =>
            penalty
                ? "#e53935"
                : "#f9be06"
        };

    stroke-width:10;

    stroke-linecap:round;

    transition:
        stroke .3s ease,
        stroke-dashoffset .1s linear;

`;


export const RingCenter = styled.div`

    position:absolute;

    inset:0;

    display:flex;

    flex-direction:column;

    align-items:center;

    justify-content:center;

    gap:4px;

`;


export const TimeDisplay = styled.div`

    font-family:
        ui-monospace,
        SFMono-Regular,
        Consolas,
        monospace;

    font-size:44px;

    font-weight:700;

    color:
        ${({ penalty, tolerance }) => {

            if(penalty){
                return "#e53935";
            }

            if(tolerance){
                return "#b78600";
            }

            return "#171717";

        }};

`;


export const ZoneLabel = styled.div`

    font-family:
        ui-monospace,
        SFMono-Regular,
        Consolas,
        monospace;

    font-size:11px;

    letter-spacing:.12em;

    text-transform:uppercase;

    color:
        ${({ type }) => {

            if(type === "penalty"){
                return "#e53935";
            }

            if(type === "tolerance"){
                return "#b78600";
            }

            return "#777777";

        }};

`;


export const PenaltyBadge = styled.div`

    font-family:
        ui-monospace,
        SFMono-Regular,
        Consolas,
        monospace;

    font-size:13px;

    color:#c62828;

    background:#fff0f0;

    border:1px solid #f0aaaa;

    border-radius:999px;

    padding:5px 12px;

    visibility:
        ${({ show }) =>
            show
                ? "visible"
                : "hidden"
        };

`;


export const TimerControls = styled.div`

    display:flex;

    gap:12px;

    flex-wrap:wrap;

    justify-content:center;

`;


export const Button = styled.button`

    font-family:inherit;

    font-weight:700;

    font-size:14px;

    border-radius:12px;

    padding:14px 24px;

    border:none;

    background:
        ${({ primary }) =>
            primary
                ? "#ffdb53"
                : "#111111"
        };

    color:
        ${({ primary }) =>
            primary
                ? "#111111"
                : "#ffffff"
        };

    cursor:pointer;

    transition:
        background .25s ease,
        color .25s ease,
        transform .25s ease,
        box-shadow .25s ease;

    opacity:1;

    &:hover{

        background:
            ${({ primary }) =>
                primary
                    ? "#111111"
                    : "#ffdb53"
            };

        color:
            ${({ primary }) =>
                primary
                    ? "#ffdb53"
                    : "#111111"
            };

        transform:translateY(-3px);

        box-shadow:
            0 8px 20px
            rgba(0,0,0,.15);

    }

    &:active{

        transform:translateY(0) scale(.98);

    }

    &:focus-visible{

        outline:3px solid
            rgba(249,190,6,.45);

        outline-offset:3px;

    }

    svg{

        transition:
            transform .25s ease;

    }

    &:hover svg{

        transform:translateX(5px);

    }

`;


export const CancelButton = styled.button`

    background:transparent;

    border:none;

    color:#333333;

    cursor:pointer;

    font-size:13px;

    font-weight:600;

    padding:6px 10px;

    opacity:1;

    transition:
        color .25s ease,
        transform .25s ease;

    &:hover{

        color:#111111;

        text-decoration:underline;

        transform:translateY(-2px);

    }

`;


export const NotesCard = styled.div`

    background:#ffffff;

    border:1px solid #dedede;

    border-radius:20px;

    padding:24px;

    margin-bottom:24px;

    box-shadow:
        0 8px 24px rgba(0,0,0,.18);

`;


export const SectionTitle = styled.h2`

    font-family:
        "Arial Black",
        Impact,
        sans-serif;

    font-size:20px;

    text-transform:uppercase;

    color:#222222;

    margin:0 0 5px;

`;


export const SectionSub = styled.p`

    font-size:13px;

    color:#666666;

    margin:0 0 18px;

    line-height:1.5;

`;


export const NotesGrid = styled.div`

    display:grid;

    grid-template-columns:
        repeat(5,1fr);

    gap:16px;

    margin-bottom:20px;


    @media(max-width:520px){

        grid-template-columns:
            repeat(2,1fr);

        gap:14px;

    }

`;


export const NoteField = styled.div`

    label{

        display:block;

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        font-size:11px;

        text-transform:uppercase;

        color:#666666;

        margin-bottom:8px;

    }


    input{

        width:100%;

        background:#ffffff;

        border:2px solid #cccccc;

        border-radius:10px;

        color:#171717;

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        font-size:18px;

        padding:10px 8px;

        text-align:center;

        outline:none;

        opacity:1;

        transition:
            border-color .25s ease,
            box-shadow .25s ease,
            transform .2s ease,
            background .25s ease;

    }


    input:hover{

        border-color: #ffdb53;

        background:#fffdf5;

    }


    input:focus{

        border-color:#f9be06;

        box-shadow:
            0 0 0 3px
            rgba(249,190,6,.25);

        transform:translateY(-1px);

    }

`;


export const CalcRow = styled.div`

    display:flex;

    justify-content:center;

    margin-top:16px;

`;


export const ErrorMsg = styled.div`

    color:#d32f2f;

    font-size:13px;

    text-align:center;

    margin-top:12px;

    font-weight:600;

`;


export const ResultsCard = styled.div`

    background:#ffffff;

    border:1px solid #dedede;

    border-radius:20px;

    padding:24px;

    box-shadow:
        0 8px 24px rgba(0,0,0,.18);

`;


export const Table = styled.table`

    width:100%;

    border-collapse:collapse;

    margin-bottom:18px;


    th,
    td{

        text-align:left;

        padding:10px 8px;

        font-size:14px;

        border-bottom:
            1px solid #e4e4e4;

    }


    th{

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        font-size:11px;

        text-transform:uppercase;

        color:#777777;

        font-weight:600;

    }


    td.num{

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

    }


    tr.discarded td{

        color:#999999;

    }


    tr.discarded td.num{

        text-decoration:line-through;

    }


    .tag{

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        font-size:10px;

        color:#8b6800;

        background:#fff5cf;

        padding:3px 8px;

        border-radius:999px;

        white-space:nowrap;

    }

`;


export const Summary = styled.div`

    display:flex;

    flex-direction:column;

    gap:10px;

    padding-top:6px;

`;


export const SummaryRow = styled.div`

    display:flex;

    justify-content:space-between;

    align-items:baseline;

    font-size:14px;

    color:#666666;


    .val{

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        color:#222222;

        font-weight:600;

    }


    ${({ penalty }) =>
        penalty &&
        `

            .val{
                color:#d32f2f;
            }

        `

    }

`;


export const FinalRow = styled.div`

    display:flex;

    justify-content:space-between;

    align-items:baseline;

    border-top:1px solid #dddddd;

    padding-top:14px;

    margin-top:10px;


    .label{

        font-family:
            "Arial Black",
            Impact,
            sans-serif;

        font-size:18px;

        text-transform:uppercase;

        color:#222222;

    }


    .val{

        font-family:
            ui-monospace,
            SFMono-Regular,
            Consolas,
            monospace;

        font-size:34px;

        font-weight:700;

        color:#b78600;

    }

`;