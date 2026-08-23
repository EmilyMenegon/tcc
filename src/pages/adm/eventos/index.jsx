import { useEffect, useState } from "react";
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
} from "./style";


export default function Eventos() {

  // ==========================================
  // EVENTOS
  // ==========================================

  const [eventos, setEventos] = useState(() => {

    const dadosSalvos =
      localStorage.getItem("eventos");

    if (!dadosSalvos) {
      return [];
    }

    try {

      return JSON.parse(dadosSalvos);

    } catch {

      return [];

    }

  });


  // ==========================================
  // MODAL DO FORMULÁRIO
  // ==========================================

  const [modalAberto, setModalAberto] =
    useState(false);


  // ==========================================
  // EVENTO SELECIONADO PARA VISUALIZAÇÃO
  // ==========================================

  const [eventoSelecionado, setEventoSelecionado] =
    useState(null);


  // ==========================================
  // EVENTO SENDO EDITADO
  // ==========================================

  const [eventoEditando, setEventoEditando] =
    useState(null);


  // ==========================================
  // MODAL DE EXCLUSÃO
  // ==========================================

  const [modalExcluirAberto, setModalExcluirAberto] =
    useState(false);

  const [eventoParaExcluir, setEventoParaExcluir] =
    useState(null);


  // ==========================================
  // FORMULÁRIO
  // ==========================================

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


  // ==========================================
  // SALVAR NO LOCALSTORAGE
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "eventos",
      JSON.stringify(eventos)
    );

  }, [eventos]);


  // ==========================================
  // LIMPAR FORMULÁRIO
  // ==========================================

  function limparFormulario() {

    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setLocal("");

    setImagem("");
    setImagemPreview("");

  }


  // ==========================================
  // ABRIR MODAL PARA CRIAR
  // ==========================================

  function abrirModal() {

    setEventoEditando(null);

    limparFormulario();

    setModalAberto(true);

  }


  // ==========================================
  // ABRIR MODAL PARA EDITAR
  // ==========================================

  function abrirEdicao(evento) {

    setEventoSelecionado(null);

    setEventoEditando(evento);

    setNome(evento.nome || "");
    setDescricao(evento.descricao || "");
    setData(evento.data || "");
    setHorario(evento.horario || "");
    setLocal(evento.local || "");

    setImagem(evento.imagem || "");
    setImagemPreview(evento.imagem || "");

    setModalAberto(true);

  }


  // ==========================================
  // FECHAR MODAL DO FORMULÁRIO
  // ==========================================

  function fecharModal() {

    setModalAberto(false);

    setEventoEditando(null);

    limparFormulario();

  }


  // ==========================================
  // SELECIONAR IMAGEM
  // ==========================================

  function handleImagem(event) {

    const arquivo =
      event.target.files[0];

    if (!arquivo) {
      return;
    }


    // Limite de 5MB

    if (arquivo.size > 5 * 1024 * 1024) {

      alert(
        "A imagem deve ter no máximo 5MB."
      );

      return;

    }


    // Verifica se é imagem

    if (!arquivo.type.startsWith("image/")) {

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


    reader.readAsDataURL(arquivo);

  }


  // ==========================================
  // REMOVER IMAGEM
  // ==========================================

  function removerImagem() {

    setImagem("");
    setImagemPreview("");

  }


  // ==========================================
  // VALIDAR FORMULÁRIO
  // ==========================================

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


  // ==========================================
  // SALVAR / CRIAR / EDITAR
  // ==========================================

  function salvarEvento(event) {

    event.preventDefault();


    if (!validarFormulario()) {
      return;
    }


    // ========================================
    // EDITANDO
    // ========================================

    if (eventoEditando) {

      const eventosAtualizados =
        eventos.map((evento) => {

          if (
            evento.id ===
            eventoEditando.id
          ) {

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

          return evento;

        });


      setEventos(
        eventosAtualizados
      );


      setModalAberto(false);

      setEventoEditando(null);

      limparFormulario();

      return;

    }


    // ========================================
    // CRIANDO NOVO EVENTO
    // ========================================

    const novoEvento = {

      id: Date.now(),

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


    setModalAberto(false);

    limparFormulario();

  }


  // ==========================================
  // ABRIR CONFIRMAÇÃO DE EXCLUSÃO
  // ==========================================

  function abrirConfirmacaoExclusao(evento) {

    setEventoSelecionado(null);

    setEventoParaExcluir(evento);

    setModalExcluirAberto(true);

  }


  // ==========================================
  // CANCELAR EXCLUSÃO
  // ==========================================

  function cancelarExclusao() {

    setModalExcluirAberto(false);

    setEventoParaExcluir(null);

  }


  // ==========================================
  // CONFIRMAR EXCLUSÃO
  // ==========================================

  function confirmarExclusao() {

    if (!eventoParaExcluir) {
      return;
    }


    const novosEventos =
      eventos.filter(
        (evento) =>
          evento.id !==
          eventoParaExcluir.id
      );


    setEventos(
      novosEventos
    );


    setEventoSelecionado(null);

    setModalExcluirAberto(false);

    setEventoParaExcluir(null);

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


  // ==========================================
  // ESC FECHA MODAIS
  // ==========================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === "Escape"
      ) {

        setModalAberto(false);

        setEventoSelecionado(null);

        setModalExcluirAberto(false);

        setEventoEditando(null);

        setEventoParaExcluir(null);

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
          MENU
      ====================================== */}

      <Layoutadm />


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
              Crie e organize os eventos.
            </Subtitle>

          </TitleArea>

        </Header>


        {/* ====================================
            EVENTOS
        ==================================== */}

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

            eventos.map((evento) => (

              <EventCard
                key={evento.id}
                onClick={() =>
                  setEventoSelecionado(
                    evento
                  )
                }
              >

                {/* IMAGEM */}

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

                  </InfoList>


                  <EventFooter>

                    <AccessButton
                      type="button"
                      onClick={(event) => {

                        event.stopPropagation();

                        setEventoSelecionado(
                          evento
                        );

                      }}
                    >

                      Ver evento

                    </AccessButton>


                    <Actions>

                      {/* EDITAR */}

                      <FiEdit
                        title="Editar evento"
                        onClick={(event) => {

                          event.stopPropagation();

                          abrirEdicao(
                            evento
                          );

                        }}
                      />


                      {/* EXCLUIR */}

                      <FiTrash2
                        title="Excluir evento"
                        onClick={(event) => {

                          event.stopPropagation();

                          abrirConfirmacaoExclusao(
                            evento
                          );

                        }}
                      />

                    </Actions>

                  </EventFooter>

                </EventContent>

              </EventCard>

            ))

          )}

        </Cards>

      </Content>


      {/* ======================================
          BOTÃO +
      ====================================== */}

      <FloatingButton
        type="button"
        onClick={abrirModal}
        aria-label="Adicionar evento"
      >

        <FiPlus />

      </FloatingButton>


      {/* ======================================
          MODAL CRIAR / EDITAR
      ====================================== */}

      {modalAberto && (

        <ModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharModal();

            }

          }}
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
                onClick={fecharModal}
                aria-label="Fechar"
              >

                <FiX />

              </CloseButton>

            </ModalHeader>


            <Form
              onSubmit={salvarEvento}
            >

              {/* =================================
                  IMAGEM
              ================================= */}

              <Label>
                Imagem do evento
              </Label>


              <ImageUpload>

                <ImageUploadInput
                  type="file"
                  accept="image/*"
                  onChange={handleImagem}
                  id="imagem-evento"
                />


                {imagemPreview ? (

                  <ImagePreview>

                    <img
                      src={imagemPreview}
                      alt="Prévia do evento"
                    />


                    <RemoveImageButton
                      type="button"
                      onClick={removerImagem}
                      aria-label="Remover imagem"
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


              {/* =================================
                  TÍTULO
              ================================= */}

              <Label>
                Título
              </Label>

              <Input
                type="text"
                placeholder="Ex: Semifinal"
                value={nome}
                onChange={(event) =>
                  setNome(
                    event.target.value
                  )
                }
                maxLength={100}
              />


              {/* =================================
                  DESCRIÇÃO
              ================================= */}

              <Label>
                Descrição
              </Label>

              <TextArea
                placeholder="Digite a descrição do evento..."
                value={descricao}
                onChange={(event) =>
                  setDescricao(
                    event.target.value
                  )
                }
                maxLength={500}
              />


              {/* =================================
                  DATA + HORÁRIO
              ================================= */}

              <FormRow>

                <FormGroup>

                  <Label>
                    Data
                  </Label>

                  <Input
                    type="date"
                    value={data}
                    onChange={(event) =>
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
                    onChange={(event) =>
                      setHorario(
                        event.target.value
                      )
                    }
                  />

                </FormGroup>

              </FormRow>


              {/* =================================
                  LOCAL
              ================================= */}

              <Label>
                Local
              </Label>

              <Input
                type="text"
                placeholder="Ex: Auditório"
                value={local}
                onChange={(event) =>
                  setLocal(
                    event.target.value
                  )
                }
                maxLength={150}
              />


              {/* =================================
                  PARTICIPANTES
              ================================= */}

              <Label>
                Participantes
              </Label>


              <ParticipantsBox>

                <ParticipantsIcon>
                  <FiUsers />
                </ParticipantsIcon>


                <ParticipantsText>

                  <strong>
                    Selecionar participantes
                  </strong>

                  <span>
                    Os participantes cadastrados
                    poderão ser adicionados aqui.
                  </span>

                </ParticipantsText>

              </ParticipantsBox>


              {/* =================================
                  BOTÃO
              ================================= */}

              <FormFooter>

                <SaveButton
                  type="submit"
                >

                  {eventoEditando
                    ? <FiEdit />
                    : <FiPlus />
                  }

                  {eventoEditando
                    ? "Salvar alterações"
                    : "Criar evento"
                  }

                </SaveButton>

              </FormFooter>

            </Form>

          </Modal>

        </ModalOverlay>

      )}


      {/* ======================================
          VISUALIZAÇÃO DO EVENTO
          SEM EDITAR / EXCLUIR
      ====================================== */}

      {eventoSelecionado && (

        <ModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              setEventoSelecionado(
                null
              );

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
                onClick={() =>
                  setEventoSelecionado(
                    null
                  )
                }
                aria-label="Fechar"
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


            {/* TÍTULO */}

            <EventTitle>

              {eventoSelecionado.nome}

            </EventTitle>


            {/* DESCRIÇÃO */}

            <EventDescription>

              {eventoSelecionado.descricao}

            </EventDescription>


            {/* INFORMAÇÕES */}

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

                  {eventoSelecionado.participantes?.length || 0}

                  {" "}

                  participante(s)

                </span>

              </InfoItem>

            </InfoList>

          </Modal>

        </ModalOverlay>

      )}


      {/* ======================================
          MODAL DE CONFIRMAÇÃO DE EXCLUSÃO
      ====================================== */}

      {modalExcluirAberto && (

        <ModalOverlay>

          <DeleteModal>

            <DeleteModalTitle>

              Excluir evento

            </DeleteModalTitle>


            <DeleteModalText>

              Tem certeza que deseja excluir
              esse evento?

            </DeleteModalText>


            {eventoParaExcluir && (

              <DeleteModalText>

                <strong>
                  {eventoParaExcluir.nome}
                </strong>

              </DeleteModalText>

            )}


            <ModalButtons>

              <CancelButton
                type="button"
                onClick={cancelarExclusao}
              >

                Cancelar

              </CancelButton>


              <ConfirmButton
                type="button"
                onClick={confirmarExclusao}
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