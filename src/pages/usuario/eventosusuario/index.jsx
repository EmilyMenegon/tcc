import { useEffect, useState } from "react";

import {
  FiCalendar,
  FiClock,
  FiMapPin,
  FiImage,
  FiUsers,
  FiX,
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
          setEventos(
            Array.isArray(dados)
              ? dados
              : []
          );
        })
        .catch(() => {
          setErro(
            "Não foi possível carregar os eventos."
          );
        })
        .finally(() => {
          setCarregando(false);
        });

    }


    carregarEventos();

  }, []);


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

          <p
            style={{
              textAlign: "center",
              color: "#c62828",
              marginBottom: "20px",
            }}
          >
            {erro}
          </p>

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
                No momento não há eventos cadastrados.
              </EmptyText>

            </EmptyState>

          ) : (

            eventos.map((evento) => (

              <EventCard

                key={evento.id}

                onClick={() =>
                  abrirEvento(evento)
                }

                /*
                  ==================================================
                  ESTILO DIRETO DO CARD DO ADMIN
                  ==================================================
                */

                style={{
                  width: "100%",
                  minHeight: "0",
                  background: "#ffffff",
                  border: "1px solid #eeeeee",
                  borderRadius: "18px",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                  boxShadow:
                    "0 7px 25px rgba(0,0,0,.08)",
                }}

              >

                {/* =================================
                    IMAGEM
                ================================= */}

                {evento.imagem ? (

                  <EventImage
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "4 / 3",
                      overflow: "hidden",
                      background: "#eeeeee",
                      flexShrink: 0,
                    }}
                  >

                    <img
                      src={evento.imagem}
                      alt={evento.nome}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                  </EventImage>

                ) : (

                  <EventImagePlaceholder
                    style={{
                      width: "100%",
                      height: "auto",
                      aspectRatio: "4 / 3",
                      flexShrink: 0,
                      background: "#eeeeee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#b5b5b5",
                      fontSize: "45px",
                    }}
                  >

                    <FiImage />

                  </EventImagePlaceholder>

                )}


                {/* =================================
                    CONTEÚDO
                ================================= */}

                <EventContent
                  style={{
                    width: "100%",
                    padding: "18px",
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    flex: 1,
                    background: "#ffffff",
                  }}
                >

                  <EventTitle
                    style={{
                      width: "100%",
                      margin: "0 0 8px",
                      color: "#222222",
                      fontFamily:
                        '"Poppins", sans-serif',
                      fontSize: "19px",
                      lineHeight: "1.3",
                      fontWeight: 700,
                      wordBreak: "break-word",
                    }}
                  >

                    {evento.nome}

                  </EventTitle>


                  <EventDescription
                    style={{
                      width: "100%",
                      margin: "0 0 14px",
                      color:
                        "rgba(0,0,0,.65)",
                      fontFamily:
                        '"Poppins", sans-serif',
                      fontSize: "13px",
                      lineHeight: "1.5",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >

                    {evento.descricao}

                  </EventDescription>


                  <InfoList
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      marginTop: "0",
                    }}
                  >

                    <InfoItem
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#555555",
                        fontSize: "12px",
                        minWidth: 0,
                      }}
                    >

                      <FiCalendar />

                      <span>
                        {formatarData(evento.data)}
                      </span>

                    </InfoItem>


                    <InfoItem
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#555555",
                        fontSize: "12px",
                        minWidth: 0,
                      }}
                    >

                      <FiClock />

                      <span>
                        {evento.horario}
                      </span>

                    </InfoItem>


                    <InfoItem
                      style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        color: "#555555",
                        fontSize: "12px",
                        minWidth: 0,
                      }}
                    >

                      <FiMapPin />

                      <span>
                        {evento.local}
                      </span>

                    </InfoItem>

                  </InfoList>


                  {/* =================================
                      BOTÃO
                  ================================= */}

                  <EventFooter
                    style={{
                      width: "100%",
                      marginTop: "auto",
                      paddingTop: "18px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >

                    <AccessButton
                      type="button"

                      onClick={(event) => {

                        event.stopPropagation();

                        abrirEvento(evento);

                      }}

                      style={{
                        flex: 1,
                        width: "100%",
                        minHeight: "38px",
                        height: "38px",
                        border: "none",
                        borderRadius: "9px",
                        background: "#000000",
                        color: "#f9be06",
                        fontFamily:
                          '"Poppins", sans-serif',
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}

                    >

                      Ver evento

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
                aria-label="Fechar evento"
              >

                <FiX />

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


              <ModalInfoItem>

                <FiUsers />

                <div>

                  <strong>
                    Participantes
                  </strong>

                  <span>
                    {eventoSelecionado.participantes?.length || 0}
                    {" "}
                    participante(s)
                  </span>

                </div>

              </ModalInfoItem>

            </ModalInfoList>

          </Modal>

        </ModalOverlay>

      )}

    </Page>

  );

}