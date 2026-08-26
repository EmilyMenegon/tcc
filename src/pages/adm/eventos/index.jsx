import { useEffect, useMemo, useState } from "react";

import Layoutadm from "../../../components/Layoutadm";

import {
  FiPlus,
  FiTrash2,
  FiEdit,
  FiX,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiImage,
  FiUpload,
  FiUsers,
  FiAward,
} from "react-icons/fi";

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
  Actions,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  FloatingButton,

  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,

  Form,
  Label,
  Input,
  TextArea,

  ImageUpload,
  ImageUploadInput,
  ImageUploadContent,
  ImageUploadIcon,
  ImageUploadText,
  ImagePreview,
  RemoveImageButton,

  FormRow,
  FormGroup,

  ParticipantsBox,
  ParticipantsIcon,
  ParticipantsText,

  FormFooter,
  SaveButton,

  DeleteModal,
  DeleteModalTitle,
  DeleteModalText,
  ModalButtons,
  CancelButton,
  ConfirmButton,

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


// ======================================================
// FUNÇÕES AUXILIARES DO RANKING
// ======================================================

function numeroSeguro(valor) {
  const numero = Number(valor);

  return Number.isFinite(numero)
    ? numero
    : 0;
}


// ======================================================
// NORMALIZAR PARTICIPANTE
// ======================================================

function normalizarParticipante(participante) {
  if (!participante) {
    return {
      nome: "Participante",
      notas: [0, 0, 0, 0, 0],
      tempo: 0,
    };
  }

  let notas = [];

  // Formato principal:
  // notas: [8, 9, 10, 7, 9]

  if (Array.isArray(participante.notas)) {
    notas = participante.notas;
  }

  // Caso venha como nota1, nota2...
  else {
    notas = [
      participante.nota1,
      participante.nota2,
      participante.nota3,
      participante.nota4,
      participante.nota5,
    ];
  }

  notas = Array.from(
    { length: 5 },
    (_, index) => numeroSeguro(notas[index])
  );

  return {
    ...participante,

    nome:
      participante.nome ||
      participante.name ||
      participante.nomeParticipante ||
      participante.participante ||
      "Participante",

    notas,

    tempo:
      numeroSeguro(
        participante.tempo ??
        participante.tempoSegundos ??
        participante.tempoRecitacao
      ),
  };
}


// ======================================================
// COMPONENTE
// ======================================================

export default function Eventos() {

  // ====================================================
  // EVENTOS
  // ====================================================

  const [eventos, setEventos] = useState(() => {

    try {

      const dados =
        localStorage.getItem("eventos");

      if (!dados) {
        return [];
      }

      const parsed =
        JSON.parse(dados);

      return Array.isArray(parsed)
        ? parsed
        : [];

    } catch {

      return [];

    }

  });


  // ====================================================
  // MODAIS
  // ====================================================

  const [modalAberto, setModalAberto] =
    useState(false);

  const [eventoSelecionadoId, setEventoSelecionadoId] =
    useState(null);

  const [eventoEditando, setEventoEditando] =
    useState(null);

  const [modalExcluirAberto, setModalExcluirAberto] =
    useState(false);

  const [eventoParaExcluir, setEventoParaExcluir] =
    useState(null);


  // ====================================================
  // FORMULÁRIO
  // ====================================================

  const [imagem, setImagem] =
    useState("");

  const [imagemPreview, setImagemPreview] =
    useState("");

  const [nome, setNome] =
    useState("");

  const [descricao, setDescricao] =
    useState("");

  const [data, setData] =
    useState("");

  const [horario, setHorario] =
    useState("");

  const [local, setLocal] =
    useState("");


  // ====================================================
  // EVENTO SELECIONADO ATUALIZADO
  // ====================================================

  const eventoSelecionado = useMemo(() => {

    if (!eventoSelecionadoId) {
      return null;
    }

    return (
      eventos.find(
        (evento) =>
          String(evento.id) ===
          String(eventoSelecionadoId)
      ) || null
    );

  }, [
    eventos,
    eventoSelecionadoId,
  ]);


  // ====================================================
  // SALVAR EVENTOS
  // ====================================================

  useEffect(() => {

    localStorage.setItem(
      "eventos",
      JSON.stringify(eventos)
    );

    window.dispatchEvent(
      new Event("eventosAtualizados")
    );

  }, [eventos]);


  // ====================================================
  // CARREGAR EVENTOS DO LOCALSTORAGE
  // ====================================================

  useEffect(() => {

    function carregarEventos() {

      try {

        const dados =
          localStorage.getItem("eventos");

        if (!dados) {

          setEventos([]);

          return;

        }

        const parsed =
          JSON.parse(dados);

        setEventos(
          Array.isArray(parsed)
            ? parsed
            : []
        );

      } catch {

        setEventos([]);

      }

    }


    window.addEventListener(
      "storage",
      carregarEventos
    );

    window.addEventListener(
      "eventosAtualizados",
      carregarEventos
    );


    return () => {

      window.removeEventListener(
        "storage",
        carregarEventos
      );

      window.removeEventListener(
        "eventosAtualizados",
        carregarEventos
      );

    };

  }, []);


  // ====================================================
  // LIMPAR FORMULÁRIO
  // ====================================================

  function limparFormulario() {

    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setLocal("");

    setImagem("");
    setImagemPreview("");

  }


  // ====================================================
  // NOVO EVENTO
  // ====================================================

  function abrirModal() {

    setEventoEditando(null);

    limparFormulario();

    setModalAberto(true);

  }


  // ====================================================
  // EDITAR EVENTO
  // ====================================================

  function abrirEdicao(evento) {

    setEventoSelecionadoId(null);

    setEventoEditando(evento);

    setNome(
      evento.nome || ""
    );

    setDescricao(
      evento.descricao || ""
    );

    setData(
      evento.data || ""
    );

    setHorario(
      evento.horario || ""
    );

    setLocal(
      evento.local || ""
    );

    setImagem(
      evento.imagem || ""
    );

    setImagemPreview(
      evento.imagem || ""
    );

    setModalAberto(true);

  }


  // ====================================================
  // FECHAR MODAL
  // ====================================================

  function fecharModal() {

    setModalAberto(false);

    setEventoEditando(null);

    limparFormulario();

  }


  // ====================================================
  // IMAGEM
  // ====================================================

  function handleImagem(event) {

    const arquivo =
      event.target.files?.[0];

    if (!arquivo) {
      return;
    }

    if (
      arquivo.size >
      5 * 1024 * 1024
    ) {

      alert(
        "A imagem deve ter no máximo 5MB."
      );

      return;

    }

    if (
      !arquivo.type.startsWith(
        "image/"
      )
    ) {

      alert(
        "Selecione um arquivo de imagem."
      );

      return;

    }


    const reader =
      new FileReader();


    reader.onload = () => {

      setImagem(
        reader.result
      );

      setImagemPreview(
        reader.result
      );

    };


    reader.readAsDataURL(
      arquivo
    );

  }


  // ====================================================
  // REMOVER IMAGEM
  // ====================================================

  function removerImagem() {

    setImagem("");
    setImagemPreview("");

  }


  // ====================================================
  // VALIDAR
  // ====================================================

  function validarFormulario() {

    if (!nome.trim()) {

      alert(
        "Digite o nome do evento."
      );

      return false;

    }

    if (!descricao.trim()) {

      alert(
        "Digite a descrição do evento."
      );

      return false;

    }

    if (!data) {

      alert(
        "Informe a data do evento."
      );

      return false;

    }

    if (!horario) {

      alert(
        "Informe o horário do evento."
      );

      return false;

    }

    if (!local.trim()) {

      alert(
        "Informe o local do evento."
      );

      return false;

    }

    return true;

  }


  // ====================================================
  // SALVAR EVENTO
  // ====================================================

  function salvarEvento(event) {

    event.preventDefault();

    if (!validarFormulario()) {
      return;
    }


    // ==================================================
    // EDITAR
    // ==================================================

    if (eventoEditando) {

      setEventos(
        (eventosAtuais) =>
          eventosAtuais.map(
            (evento) => {

              if (
                String(evento.id) !==
                String(eventoEditando.id)
              ) {

                return evento;

              }


              return {

                ...evento,

                nome:
                  nome.trim(),

                descricao:
                  descricao.trim(),

                data,

                horario,

                local:
                  local.trim(),

                imagem:
                  imagem || "",

              };

            }
          )
      );


      fecharModal();

      return;

    }


    // ==================================================
    // NOVO
    // ==================================================

    const novoEvento = {

      id:
        Date.now(),

      nome:
        nome.trim(),

      descricao:
        descricao.trim(),

      data,

      horario,

      local:
        local.trim(),

      imagem:
        imagem || "",

      participantes: [],

      criadoEm:
        new Date().toISOString(),

    };


    setEventos(
      (eventosAtuais) => [
        novoEvento,
        ...eventosAtuais,
      ]
    );


    fecharModal();

  }


  // ====================================================
  // EXCLUSÃO
  // ====================================================

  function abrirConfirmacaoExclusao(
    evento
  ) {

    setEventoSelecionadoId(null);

    setEventoParaExcluir(evento);

    setModalExcluirAberto(true);

  }


  function cancelarExclusao() {

    setModalExcluirAberto(false);

    setEventoParaExcluir(null);

  }


  function confirmarExclusao() {

    if (!eventoParaExcluir) {
      return;
    }


    setEventos(
      (eventosAtuais) =>
        eventosAtuais.filter(
          (evento) =>
            String(evento.id) !==
            String(
              eventoParaExcluir.id
            )
        )
    );


    setEventoSelecionadoId(null);

    setModalExcluirAberto(false);

    setEventoParaExcluir(null);

  }


  // ====================================================
  // DATA
  // ====================================================

  function formatarData(
    dataEvento
  ) {

    if (!dataEvento) {
      return "";
    }

    const partes =
      dataEvento.split("-");

    if (
      partes.length !== 3
    ) {

      return dataEvento;

    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;

  }


  // ====================================================
  // TEMPO
  // ====================================================

  function formatarTempo(
    segundos
  ) {

    const total =
      Math.max(
        0,
        Math.floor(
          numeroSeguro(segundos)
        )
      );


    const minutos =
      Math.floor(
        total / 60
      );


    const segundosRestantes =
      total % 60;


    return `${String(
      minutos
    ).padStart(
      2,
      "0"
    )}:${String(
      segundosRestantes
    ).padStart(
      2,
      "0"
    )}`;

  }


  // ====================================================
  // PENALIDADE
  // ====================================================

  function calcularPenalidade(
    tempo
  ) {

    const segundos =
      numeroSeguro(tempo);

    // Até 3 minutos e 10 segundos
    // não existe penalidade.

    const tolerancia =
      190;


    if (
      segundos <=
      tolerancia
    ) {

      return 0;

    }


    const excesso =
      segundos -
      tolerancia;


    // 0,1 ponto por segundo excedido

    return (
      excesso *
      0.1
    );

  }


  // ====================================================
  // MÉDIA
  // ====================================================

  function calcularMedia(
    notas
  ) {

    if (
      !Array.isArray(notas)
    ) {

      return 0;

    }


    const notasValidas =
      notas
        .slice(0, 5)
        .map(numeroSeguro);


    if (
      notasValidas.length ===
      0
    ) {

      return 0;

    }


    const soma =
      notasValidas.reduce(
        (
          total,
          nota
        ) =>
          total + nota,
        0
      );


    return (
      soma /
      notasValidas.length
    );

  }


  // ====================================================
  // RESULTADO
  // ====================================================

  function calcularResultado(
    participante
  ) {

    const participanteNormalizado =
      normalizarParticipante(
        participante
      );


    const media =
      calcularMedia(
        participanteNormalizado.notas
      );


    const penalidade =
      calcularPenalidade(
        participanteNormalizado.tempo
      );


    const notaFinal =
      Math.max(
        0,
        media -
          penalidade
      );


    return {

      ...participanteNormalizado,

      media,

      penalidade,

      notaFinal,

    };

  }


  // ====================================================
  // RANKING
  // ====================================================

  function gerarRanking(
    evento
  ) {

    if (
      !evento
    ) {

      return [];

    }


    const participantes =
      Array.isArray(
        evento.participantes
      )
        ? evento.participantes
        : [];


    return participantes

      .map(
        calcularResultado
      )

      .sort(
        (
          a,
          b
        ) => {

          // Primeiro:
          // maior nota final.

          if (
            b.notaFinal !==
            a.notaFinal
          ) {

            return (
              b.notaFinal -
              a.notaFinal
            );

          }


          // Desempate:
          // menor tempo.

          return (
            a.tempo -
            b.tempo
          );

        }
      )

      .map(
        (
          participante,
          index
        ) => ({

          ...participante,

          colocacao:
            index + 1,

        })
      );

  }


  // ====================================================
  // ESC
  // ====================================================

  useEffect(() => {

    function handleKeyDown(
      event
    ) {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      setModalAberto(false);

      setEventoSelecionadoId(
        null
      );

      setModalExcluirAberto(
        false
      );

      setEventoEditando(
        null
      );

      setEventoParaExcluir(
        null
      );

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


  // ====================================================
  // RANKING ATUAL
  // ====================================================

  const ranking =
    useMemo(
      () =>
        gerarRanking(
          eventoSelecionado
        ),
      [eventoSelecionado]
    );


  // ====================================================
  // RENDER
  // ====================================================

  return (

    <Page>

      <Layoutadm />

      <Content>

        <Header>

          <TitleArea>

            <Title>
              Eventos
            </Title>

            <Subtitle>
              Crie e organize os eventos.
            </Subtitle>

          </TitleArea>

        </Header>


        {/* ==================================================
            CARDS DOS EVENTOS
        ================================================== */}

        <Cards>

          {eventos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>

              <EmptyTitle>
                Nenhum evento cadastrado
              </EmptyTitle>

              <EmptyText>
                Clique no botão + para
                criar seu primeiro evento.
              </EmptyText>

            </EmptyState>

          ) : (

            eventos.map(
              (evento) => (

                <EventCard
                  key={evento.id}
                  onClick={() =>
                    setEventoSelecionadoId(
                      evento.id
                    )
                  }
                  tabIndex={0}
                  role="button"
                  onKeyDown={
                    (event) => {

                      if (
                        event.key ===
                          "Enter" ||
                        event.key ===
                          " "
                      ) {

                        event.preventDefault();

                        setEventoSelecionadoId(
                          evento.id
                        );

                      }

                    }
                  }
                >

                  {/* IMAGEM */}

                  {evento.imagem ? (

                    <EventImage>

                      <img
                        src={
                          evento.imagem
                        }
                        alt={
                          evento.nome
                        }
                      />

                    </EventImage>

                  ) : (

                    <EventImagePlaceholder>

                      <FiImage />

                    </EventImagePlaceholder>

                  )}


                  {/* CONTEÚDO */}

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
                          {formatarData(
                            evento.data
                          )}
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


                      <InfoItem>

                        <FiUsers />

                        <span>
                          {evento.participantes
                            ?.length || 0}{" "}
                          participante(s)
                        </span>

                      </InfoItem>

                    </InfoList>


                    <EventFooter>

                      <AccessButton
                        type="button"
                        onClick={
                          (event) => {

                            event.stopPropagation();

                            setEventoSelecionadoId(
                              evento.id
                            );

                          }
                        }
                      >
                        Ver evento
                      </AccessButton>


                      <Actions>

                        <FiEdit
                          title="Editar evento"
                          onClick={
                            (event) => {

                              event.stopPropagation();

                              abrirEdicao(
                                evento
                              );

                            }
                          }
                        />


                        <FiTrash2
                          title="Excluir evento"
                          onClick={
                            (event) => {

                              event.stopPropagation();

                              abrirConfirmacaoExclusao(
                                evento
                              );

                            }
                          }
                        />

                      </Actions>

                    </EventFooter>

                  </EventContent>

                </EventCard>

              )
            )

          )}

        </Cards>

      </Content>


      {/* ==================================================
          BOTÃO +
      ================================================== */}

      <FloatingButton
        type="button"
        onClick={abrirModal}
        aria-label="Adicionar evento"
      >
        <FiPlus />
      </FloatingButton>


      {/* ==================================================
          MODAL CRIAR / EDITAR
      ================================================== */}

      {modalAberto && (

        <ModalOverlay
          onClick={
            (event) => {

              if (
                event.target ===
                event.currentTarget
              ) {

                fecharModal();

              }

            }
          }
        >

          <Modal>

            <ModalHeader>

              <ModalTitle>
                {eventoEditando
                  ? "Editar evento"
                  : "Novo evento"}
              </ModalTitle>

              <CloseButton
                type="button"
                onClick={
                  fecharModal
                }
              >
                <FiX />
              </CloseButton>

            </ModalHeader>


            <Form
              onSubmit={
                salvarEvento
              }
            >

              <Label>
                Imagem do evento
              </Label>


              <ImageUpload>

                <ImageUploadInput
                  type="file"
                  accept="image/*"
                  onChange={
                    handleImagem
                  }
                  id="imagem-evento"
                />


                {imagemPreview ? (

                  <ImagePreview>

                    <img
                      src={
                        imagemPreview
                      }
                      alt="Prévia"
                    />

                    <RemoveImageButton
                      type="button"
                      onClick={
                        removerImagem
                      }
                    >
                      <FiX />
                    </RemoveImageButton>

                  </ImagePreview>

                ) : (

                  <ImageUploadContent
                    htmlFor="imagem-evento"
                  >

                    <ImageUploadIcon>
                      <FiImage />
                    </ImageUploadIcon>

                    <ImageUploadText>

                      <strong>
                        Adicionar imagem
                      </strong>

                      <span>
                        Clique para escolher
                        uma imagem
                      </span>

                      <small>
                        PNG, JPG ou WEBP
                        até 5MB
                      </small>

                    </ImageUploadText>

                    <FiUpload />

                  </ImageUploadContent>

                )}

              </ImageUpload>


              <Label>
                Título
              </Label>

              <Input
                type="text"
                placeholder="Ex: Semifinal"
                value={nome}
                onChange={
                  (event) =>
                    setNome(
                      event.target.value
                    )
                }
                maxLength={100}
              />


              <Label>
                Descrição
              </Label>

              <TextArea
                placeholder="Digite a descrição do evento..."
                value={descricao}
                onChange={
                  (event) =>
                    setDescricao(
                      event.target.value
                    )
                }
                maxLength={500}
              />


              <FormRow>

                <FormGroup>

                  <Label>
                    Data
                  </Label>

                  <Input
                    type="date"
                    value={data}
                    onChange={
                      (event) =>
                        setData(
                          event.target.value
                        )
                    }
                  />

                </FormGroup>


                <FormGroup>

                  <Label>
                    Horário
                  </Label>

                  <Input
                    type="time"
                    value={horario}
                    onChange={
                      (event) =>
                        setHorario(
                          event.target.value
                        )
                    }
                  />

                </FormGroup>

              </FormRow>


              <Label>
                Local
              </Label>

              <Input
                type="text"
                placeholder="Ex: Auditório"
                value={local}
                onChange={
                  (event) =>
                    setLocal(
                      event.target.value
                    )
                }
                maxLength={150}
              />


              <Label>
                Participantes
              </Label>


              <ParticipantsBox>

                <ParticipantsIcon>
                  <FiUsers />
                </ParticipantsIcon>

                <ParticipantsText>

                  <strong>
                    Participantes do evento
                  </strong>

                  <span>
                    Os participantes cadastrados
                    poderão ser avaliados durante
                    o evento.
                  </span>

                </ParticipantsText>

              </ParticipantsBox>


              <FormFooter>

                <SaveButton
                  type="submit"
                >

                  {eventoEditando
                    ? <FiEdit />
                    : <FiPlus />}

                  {eventoEditando
                    ? "Salvar alterações"
                    : "Criar evento"}

                </SaveButton>

              </FormFooter>

            </Form>

          </Modal>

        </ModalOverlay>

      )}


      {/* ==================================================
          MODAL DO EVENTO + PLANILHA DO RANKING
      ================================================== */}

      {eventoSelecionado && (

        <ModalOverlay
          onClick={
            (event) => {

              if (
                event.target ===
                event.currentTarget
              ) {

                setEventoSelecionadoId(
                  null
                );

              }

            }
          }
        >

          <Modal>

            <ModalHeader>

              <ModalTitle>
                {eventoSelecionado.nome}
              </ModalTitle>

              <CloseButton
                type="button"
                onClick={() =>
                  setEventoSelecionadoId(
                    null
                  )
                }
              >
                <FiX />
              </CloseButton>

            </ModalHeader>


            {/* IMAGEM */}

            {eventoSelecionado.imagem ? (

              <ImagePreview>

                <img
                  src={
                    eventoSelecionado.imagem
                  }
                  alt={
                    eventoSelecionado.nome
                  }
                />

              </ImagePreview>

            ) : (

              <EventImagePlaceholder>

                <FiImage />

              </EventImagePlaceholder>

            )}


            <EventTitle>
              {eventoSelecionado.nome}
            </EventTitle>


            <EventDescription>
              {eventoSelecionado.descricao}
            </EventDescription>


            <InfoList>

              <InfoItem>

                <FiCalendar />

                <span>
                  {formatarData(
                    eventoSelecionado.data
                  )}
                </span>

              </InfoItem>


              <InfoItem>

                <FiClock />

                <span>
                  {eventoSelecionado.horario}
                </span>

              </InfoItem>


              <InfoItem>

                <FiMapPin />

                <span>
                  {eventoSelecionado.local}
                </span>

              </InfoItem>


              <InfoItem>

                <FiUsers />

                <span>
                  {eventoSelecionado.participantes
                    ?.length || 0}{" "}
                  participante(s)
                </span>

              </InfoItem>

            </InfoList>


            {/* ==================================================
                PLANILHA DO RANKING
            ================================================== */}

            <RankingSection>

              <RankingHeader>

                <RankingTitle>

                  <FiAward />

                  Ranking do evento

                </RankingTitle>


                <RankingDescription>

                  Classificação dos participantes
                  com todas as notas, média,
                  penalidade, tempo e nota final.

                </RankingDescription>

              </RankingHeader>


              {ranking.length === 0 ? (

                <RankingEmpty>

                  <FiUsers />

                  <strong>
                    Nenhum participante no ranking
                  </strong>

                  <span>
                    Os participantes aparecerão
                    nesta planilha quando estiverem
                    cadastrados e avaliados.
                  </span>

                </RankingEmpty>

              ) : (

                <RankingTableWrapper>

                  <RankingTable>

                    <thead>

                      <tr>

                        <th>
                          #
                        </th>

                        <th>
                          Participante
                        </th>

                        <th>
                          Nota 1
                        </th>

                        <th>
                          Nota 2
                        </th>

                        <th>
                          Nota 3
                        </th>

                        <th>
                          Nota 4
                        </th>

                        <th>
                          Nota 5
                        </th>

                        <th>
                          Média
                        </th>

                        <th>
                          Penalidade
                        </th>

                        <th>
                          Tempo
                        </th>

                        <th>
                          Nota final
                        </th>

                      </tr>

                    </thead>


                    <tbody>

                      {ranking.map(
                        (
                          participante
                        ) => (

                          <RankingRow
                            key={
                              participante.id ||
                              `${participante.nome}-${participante.colocacao}`
                            }
                            $primeiro={
                              participante.colocacao ===
                              1
                            }
                          >

                            {/* COLOCAÇÃO */}

                            <td>

                              <Position>

                                {participante.colocacao ===
                                  1 && (
                                  <FiAward />
                                )}

                                {participante.colocacao}º

                              </Position>

                            </td>


                            {/* NOME */}

                            <td>

                              <ParticipantName>

                                {
                                  participante.nome
                                }

                              </ParticipantName>

                            </td>


                            {/* NOTAS */}

                            {[0, 1, 2, 3, 4].map(
                              (
                                indice
                              ) => (

                                <td
                                  key={
                                    indice
                                  }
                                >

                                  <Score>

                                    {numeroSeguro(
                                      participante
                                        .notas[
                                          indice
                                        ]
                                    ).toFixed(
                                      1
                                    )}

                                  </Score>

                                </td>

                              )
                            )}


                            {/* MÉDIA */}

                            <td>

                              <Average>

                                {participante.media.toFixed(
                                  2
                                )}

                              </Average>

                            </td>


                            {/* PENALIDADE */}

                            <td>

                              <Penalty
                                $penalidade={
                                  participante.penalidade >
                                  0
                                }
                              >

                                {participante.penalidade.toFixed(
                                  2
                                )}

                              </Penalty>

                            </td>


                            {/* TEMPO */}

                            <td>

                              <Time>

                                <FiClock />

                                {formatarTempo(
                                  participante.tempo
                                )}

                              </Time>

                            </td>


                            {/* NOTA FINAL */}

                            <td>

                              <FinalScore>

                                {participante.notaFinal.toFixed(
                                  2
                                )}

                              </FinalScore>

                            </td>

                          </RankingRow>

                        )
                      )}

                    </tbody>

                  </RankingTable>

                </RankingTableWrapper>

              )}

            </RankingSection>

          </Modal>

        </ModalOverlay>

      )}


      {/* ==================================================
          MODAL EXCLUSÃO
      ================================================== */}

      {modalExcluirAberto && (

        <ModalOverlay>

          <DeleteModal>

            <DeleteModalTitle>
              Excluir evento
            </DeleteModalTitle>


            <DeleteModalText>
              Tem certeza que deseja
              excluir esse evento?
            </DeleteModalText>


            {eventoParaExcluir && (

              <DeleteModalText>

                <strong>
                  {
                    eventoParaExcluir.nome
                  }
                </strong>

              </DeleteModalText>

            )}


            <ModalButtons>

              <CancelButton
                type="button"
                onClick={
                  cancelarExclusao
                }
              >
                Cancelar
              </CancelButton>


              <ConfirmButton
                type="button"
                onClick={
                  confirmarExclusao
                }
              >

                <FiTrash2 />

                Sim, excluir

              </ConfirmButton>

            </ModalButtons>

          </DeleteModal>

        </ModalOverlay>

      )}

    </Page>

  );

}