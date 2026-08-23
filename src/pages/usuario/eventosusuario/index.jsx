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


  // ==========================================
  // EVENTO SELECIONADO
  // ==========================================

  const [eventoSelecionado, setEventoSelecionado] =
    useState(null);


  // ==========================================
  // CARREGAR EVENTOS DO ADM
  // ==========================================

  useEffect(() => {

    function carregarEventos() {

      const dadosSalvos =
        localStorage.getItem("eventos");

      if (!dadosSalvos) {
        setEventos([]);
        return;
      }

      try {

        const dados =
          JSON.parse(dadosSalvos);

        if (Array.isArray(dados)) {
          setEventos(dados);
        } else {
          setEventos([]);
        }

      } catch {

        setEventos([]);

      }

    }


    carregarEventos();


    // Atualiza caso os eventos sejam alterados
    // em outra parte da aplicação.

    window.addEventListener(
      "storage",
      carregarEventos
    );


    return () => {

      window.removeEventListener(
        "storage",
        carregarEventos
      );

    };

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


        {/* ====================================
            LISTA DE EVENTOS
        ==================================== */}

        <Cards>

          {eventos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>

              <EmptyTitle>
                Nenhum evento disponível
              </EmptyTitle>

              <EmptyText>
                No momento não há eventos
                cadastrados. Volte mais tarde
                para conferir as novidades.
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
                      onClick={(event) => {

                        event.stopPropagation();

                        abrirEvento(evento);

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