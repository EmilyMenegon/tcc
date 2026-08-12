import { useState } from 'react'
import Layout from "../../../components/Layout";
import {
  Page,
  TitleArea,
  Title,
  Container,
  CalendarBox,
  Header,
  ArrowButton,
  MonthText,
  WeekRow,
  WeekDay,
  Grid,
  Day,
  DayText,
  Info
} from './style'

export default function Calendario() {
  const [mesAtual, setMesAtual] = useState(new Date())
  const [diaSelecionado, setDiaSelecionado] = useState(null)

  const hoje = new Date()

  function obterNomeMes(data) {
    return data.toLocaleDateString('pt-BR', {
      month: 'long',
      year: 'numeric'
    })
  }

  function mesAnterior() {
    const novo = new Date(mesAtual)
    novo.setMonth(novo.getMonth() - 1)
    setMesAtual(novo)
    setDiaSelecionado(null)
  }

  function proximoMes() {
    const novo = new Date(mesAtual)
    novo.setMonth(novo.getMonth() + 1)
    setMesAtual(novo)
    setDiaSelecionado(null)
  }

  function gerarDias(data) {
    const ano = data.getFullYear()
    const mes = data.getMonth()

    const primeiro = new Date(ano, mes, 1)
    const ultimo = new Date(ano, mes + 1, 0)

    const dias = []
    const inicioSemana = primeiro.getDay()

    for (let i = 0; i < inicioSemana; i++) dias.push(null)

    for (let d = 1; d <= ultimo.getDate(); d++) dias.push(d)

    while (dias.length % 7 !== 0) dias.push(null)

    return dias
  }

  return (
    <Page>
      <Layout />

      <TitleArea>
        <Title>Calendário</Title>
      </TitleArea>

      {/* CENTRO DO CALENDÁRIO */}
      <Container>
        <CalendarBox>

          <Header>
            <ArrowButton onClick={mesAnterior}>←</ArrowButton>

            <MonthText>{obterNomeMes(mesAtual)}</MonthText>

            <ArrowButton onClick={proximoMes}>→</ArrowButton>
          </Header>

          <WeekRow>
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'].map(d => (
              <WeekDay key={d}>{d}</WeekDay>
            ))}
          </WeekRow>

          <Grid>
            {gerarDias(mesAtual).map((dia, index) => {
              const ehHoje =
                dia === hoje.getDate() &&
                mesAtual.getMonth() === hoje.getMonth() &&
                mesAtual.getFullYear() === hoje.getFullYear()

              const selecionado = diaSelecionado === dia

              return (
                <Day
                  key={index}
                  disabled={!dia}
                  onClick={() => setDiaSelecionado(dia)}
                  $active={selecionado}
                  $today={!selecionado && ehHoje}
                >
                  {dia && <DayText>{dia}</DayText>}
                </Day>
              )
            })}
          </Grid>

          <Info>
            {diaSelecionado
              ? `Dia selecionado: ${String(diaSelecionado).padStart(2, '0')}/${String(
                  mesAtual.getMonth() + 1
                ).padStart(2, '0')}/${mesAtual.getFullYear()}`
              : 'Selecione um dia'}
          </Info>

        </CalendarBox>
      </Container>
    </Page>
  )
}