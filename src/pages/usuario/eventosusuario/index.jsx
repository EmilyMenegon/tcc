import { useEffect, useState } from "react";

import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiImage,
  FiX,
  FiAward,
} from "react-icons/fi";

import Layout from "../../../components/Layout";

import {
  Page,
  Content,
  Header,
  TitleArea,
  Title,
  Subtitle,
  Cards,
  EventCard,
  EventImage,
  EventImagePlaceholder,
  EventContent,
  EventTitle,
  EventDescription,
  InfoList,
  InfoItem,
  EventFooter,
  AccessButton,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  ErrorText,

  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,

  ModalImage,
  ModalEventTitle,
  ModalDescription,
  ModalInfoList,
  ModalInfoItem,
    RankingSection,
  RankingHeader,
  RankingTitle,
  RankingDescription,
  RankingTableWrapper,
  RankingTable,
  RankingRow,
  Position,
  ParticipantName,
  Score,
  Average,
  Penalty,
  Time,
  FinalScore,
  RankingEmpty,
} from "./style";


export default function EventosUsuario() {

  // ==========================================
  // EVENTOS
  // ==========================================

  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");


  // ==========================================
  // EVENTO SELECIONADO
  // ==========================================

  const [eventoSelecionado, setEventoSelecionado] =
    useState(null);
    const [resultados, setResultados] = useState([]);


   // ==========================================
  // CARREGAR EVENTOS DO BACK-END
  // ==========================================

  useEffect(() => {

    function carregarEventos() {

      setCarregando(true);
      setErro("");

      fetch("http://localhost:3001/eventos")
        .then((res) => res.json())
        .then((dados) => {
          setEventos(Array.isArray(dados) ? dados : []);
        })
        .catch(() => {
          setErro("Não foi possível carregar os eventos.");
        })
        .finally(() => {
          setCarregando(false);
        });

    }

    carregarEventos();

  }, []);


  // ==========================================
  // CARREGAR RESULTADOS DO EVENTO SELECIONADO
  // ==========================================

  useEffect(() => {

    if (!eventoSelecionado) {
      setResultados([]);
      return;
    }

    fetch(`http://localhost:3001/eventos/${eventoSelecionado.id}/notas`)
      .then((res) => res.json())
      .then((dados) => {
        setResultados(Array.isArray(dados) ? dados : []);
      })
      .catch(() => {
        setResultados([]);
      });

  }, [eventoSelecionado]);


  // ==========================================
  // EFEITO DO MOUSE NOS BOTÕES (acompanha o cursor pra animação)
  // ==========================================

  function handleButtonMouseMove(event) {

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);

  }


  // ==========================================
  // FORMATAR DATA
  // ==========================================

  function formatarData(dataEvento) {

    if (!dataEvento) {
      return "";
    }


    const partes =
      dataEvento.split("-");


    if (partes.length !== 3) {
      return dataEvento;
    }


    return `${partes[2]}/${partes[1]}/${partes[0]}`;

  }
  function formatarTempo(segundos) {

  if (segundos === null || segundos === undefined) return "-";

  const m = Math.floor(segundos / 60);
  const s = Math.floor(segundos % 60);

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

}


  // ==========================================
  // ABRIR EVENTO
  // ==========================================

  function abrirEvento(evento) {

    setEventoSelecionado(evento);

  }


  // ==========================================
  // FECHAR EVENTO
  // ==========================================

  function fecharEvento() {

    setEventoSelecionado(null);

  }


  // ==========================================
  // ESC FECHA MODAL
  // ==========================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (event.key === "Escape") {
        setEventoSelecionado(null);
      }

    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, []);


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <Page>

      {/* ======================================
          MENU DO USUÁRIO
      ====================================== */}

      <Layout />


      {/* ======================================
          CONTEÚDO
      ====================================== */}

      <Content>

        <Header>

          <TitleArea>

            <Title>
              Eventos
            </Title>

            <Subtitle>
              Confira os próximos eventos.
            </Subtitle>

          </TitleArea>

        </Header>


        {erro && (
          <ErrorText>
            {erro}
          </ErrorText>
        )}


        {/* ====================================
            LISTA DE EVENTOS
        ==================================== */}

        <Cards>

          {carregando ? null : eventos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>

              <EmptyTitle>
                Nenhum evento disponível
              </EmptyTitle>

              <EmptyText>
                No momento não há eventos
                cadastrados. 
              </EmptyText>

            </EmptyState>

          ) : (

            eventos.map((evento) => (

              <EventCard
                key={evento.id}
                onClick={() => abrirEvento(evento)}
              >

                {/* =================================
                    IMAGEM
                ================================= */}

                {evento.imagem ? (

                  <EventImage>

                    <img
                      src={evento.imagem}
                      alt={evento.nome}
                    />

                  </EventImage>

                ) : (

                  <EventImagePlaceholder>

                    <FiImage />

                  </EventImagePlaceholder>

                )}


                {/* =================================
                    CONTEÚDO
                ================================= */}

                <EventContent>

                  <EventTitle>
                    {evento.nome}
                  </EventTitle>


                  <EventDescription>
                    {evento.descricao}
                  </EventDescription>


                  <InfoList>

                    <InfoItem>

                      <FiCalendar />

                      <span>
                        {formatarData(evento.data)}
                      </span>

                    </InfoItem>


                    <InfoItem>

                      <FiClock />

                      <span>
                        {evento.horario}
                      </span>

                    </InfoItem>


                    <InfoItem>

                      <FiMapPin />

                      <span>
                        {evento.local}
                      </span>

                    </InfoItem>

                  </InfoList>


                  {/* =================================
                      BOTÃO
                  ================================= */}

                  <EventFooter>

                    <AccessButton
                      type="button"
                      onPointerMove={handleButtonMouseMove}
                      onClick={(event) => {

                        event.stopPropagation();

                        abrirEvento(evento);

                      }}
                    >

                      <span className="buttonContent">
                        Ver evento
                      </span>

                    </AccessButton>

                  </EventFooter>

                </EventContent>

              </EventCard>

            ))

          )}

        </Cards>

      </Content>


      {/* ======================================
          MODAL DO EVENTO
      ====================================== */}

      {eventoSelecionado && (

        <ModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharEvento();

            }

          }}
        >

          <Modal>

            <ModalHeader>

              <ModalTitle>
                Evento
              </ModalTitle>


              <CloseButton
                type="button"
                onClick={fecharEvento}
                onPointerMove={handleButtonMouseMove}
                aria-label="Fechar evento"
              >

                <span className="buttonContent">
                  <FiX />
                </span>

              </CloseButton>

            </ModalHeader>


            {/* =================================
                IMAGEM
            ================================= */}

            {eventoSelecionado.imagem ? (

              <ModalImage>

                <img
                  src={eventoSelecionado.imagem}
                  alt={eventoSelecionado.nome}
                />

              </ModalImage>

            ) : (

              <EventImagePlaceholder>

                <FiImage />

              </EventImagePlaceholder>

            )}


            {/* =================================
                TÍTULO
            ================================= */}

            <ModalEventTitle>

              {eventoSelecionado.nome}

            </ModalEventTitle>


            {/* =================================
                DESCRIÇÃO
            ================================= */}

            <ModalDescription>

              {eventoSelecionado.descricao}

            </ModalDescription>


            {/* =================================
                INFORMAÇÕES
            ================================= */}

            <ModalInfoList>

              <ModalInfoItem>

                <FiCalendar />

                <div>

                  <strong>
                    Data
                  </strong>

                  <span>
                    {formatarData(
                      eventoSelecionado.data
                    )}
                  </span>

                </div>

              </ModalInfoItem>


              <ModalInfoItem>

                <FiClock />

                <div>

                  <strong>
                    Horário
                  </strong>

                  <span>
                    {eventoSelecionado.horario}
                  </span>

                </div>

              </ModalInfoItem>


              <ModalInfoItem>

                <FiMapPin />

                <div>

                  <strong>
                    Local
                  </strong>

                  <span>
                    {eventoSelecionado.local}
                  </span>

                </div>

              </ModalInfoItem>

            </ModalInfoList>

            <RankingSection>
  <RankingHeader>
    <RankingTitle>
      <FiAward />
      Resultados ({resultados.length})
    </RankingTitle>

    <RankingDescription>
      Notas lançadas pelo matemático para este evento.
    </RankingDescription>
  </RankingHeader>

  {resultados.length === 0 ? (
    <RankingEmpty>
      <FiAward />
      <strong>Nenhum resultado ainda</strong>
      <span>Os resultados deste evento aparecerão aqui assim que forem lançados.</span>
    </RankingEmpty>
  ) : (
    <RankingTableWrapper>
      <RankingTable>
        <thead>
          <tr>
            <th>Pos.</th>
            <th>Poeta</th>
            <th>N1</th>
            <th>N2</th>
            <th>N3</th>
            <th>N4</th>
            <th>N5</th>
            <th>Média</th>
            <th>Tempo</th>
            <th>Desconto</th>
            <th>Nota final</th>
          </tr>
        </thead>

        <tbody>
          {resultados.map((resultado, index) => (
            <RankingRow key={resultado.id} $primeiro={index === 0}>
              <td>
                <Position>
                  {index === 0 && <FiAward />}
                  {index + 1}º
                </Position>
              </td>
              <td><ParticipantName>{resultado.nomeAluno}</ParticipantName></td>
              <td><Score>{resultado.n1?.toFixed(1) ?? "-"}</Score></td>
              <td><Score>{resultado.n2?.toFixed(1) ?? "-"}</Score></td>
              <td><Score>{resultado.n3?.toFixed(1) ?? "-"}</Score></td>
              <td><Score>{resultado.n4?.toFixed(1) ?? "-"}</Score></td>
              <td><Score>{resultado.n5?.toFixed(1) ?? "-"}</Score></td>
              <td><Average>{resultado.media?.toFixed(2) ?? "-"}</Average></td>
              <td>
                <Time>
                  <FiClock />
                  {formatarTempo(resultado.tempo)}
                </Time>
              </td>
              <td>
                <Penalty $penalidade={resultado.desconto > 0}>
                  {resultado.desconto > 0 ? `-${resultado.desconto.toFixed(1)}` : "0"}
                </Penalty>
              </td>
              <td><FinalScore>{resultado.resultado?.toFixed(2) ?? "-"}</FinalScore></td>
            </RankingRow>
          ))}
        </tbody>
      </RankingTable>
    </RankingTableWrapper>
  )}
</RankingSection>

          </Modal>

        </ModalOverlay>

      )}

    </Page>

  );

}