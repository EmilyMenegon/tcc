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
  FiFileText,
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
  EventPin,
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
  // MODAL DE CRIAÇÃO
  // ==========================================

  const [modalAberto, setModalAberto] =
    useState(false);


  // ==========================================
  // EVENTO SELECIONADO
  // ==========================================

  const [eventoSelecionado, setEventoSelecionado] =
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
  // SALVAR EVENTOS
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "eventos",
      JSON.stringify(eventos)
    );

  }, [eventos]);


  // ==========================================
  // ABRIR MODAL
  // ==========================================

  function abrirModal() {

    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setLocal("");

    setImagem("");
    setImagemPreview("");

    setModalAberto(true);

  }


  // ==========================================
  // FECHAR MODAL
  // ==========================================

  function fecharModal() {

    setModalAberto(false);

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


    // Limita para 5MB

    if (arquivo.size > 5 * 1024 * 1024) {

      alert(
        "A imagem deve ter no máximo 5MB."
      );

      return;

    }


    // Verifica se realmente é imagem

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
  // CADASTRAR EVENTO
  // ==========================================

  function cadastrarEvento(event) {

    event.preventDefault();


    if (!nome.trim()) {

      alert(
        "Digite o nome do evento."
      );

      return;

    }


    if (!descricao.trim()) {

      alert(
        "Digite a descrição do evento."
      );

      return;

    }


    if (!data) {

      alert(
        "Informe a data do evento."
      );

      return;

    }


    if (!horario) {

      alert(
        "Informe o horário do evento."
      );

      return;

    }


    if (!local.trim()) {

      alert(
        "Informe o local do evento."
      );

      return;

    }


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


    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setLocal("");

    setImagem("");
    setImagemPreview("");

    setModalAberto(false);

  }


  // ==========================================
  // EXCLUIR EVENTO
  // ==========================================

  function excluirEvento(id) {

    const confirmar =
      window.confirm(
        "Deseja realmente excluir este evento?"
      );


    if (!confirmar) {
      return;
    }


    const novosEventos =
      eventos.filter(
        (evento) =>
          evento.id !== id
      );


    setEventos(
      novosEventos
    );


    setEventoSelecionado(
      null
    );

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

            eventos.map(
              (evento, index) => (

                <EventCard
                  key={evento.id}
                  $index={index}
                  onClick={() =>
                    setEventoSelecionado(
                      evento
                    )
                  }
                >

                  {/* PIN */}

                  <EventPin />


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

                        <FiEdit
                          onClick={(event) => {

                            event.stopPropagation();

                            alert(
                              "A edição pode continuar na sua página /adm/editarevento."
                            );

                          }}
                        />


                        <FiTrash2
                          onClick={(event) => {

                            event.stopPropagation();

                            excluirEvento(
                              evento.id
                            );

                          }}
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
          MODAL DE CRIAÇÃO
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
                Novo evento
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
              onSubmit={cadastrarEvento}
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
                placeholder="Ex: Festa Junina"
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
                placeholder="Ex: Quadra da escola"
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

                  <FiPlus />

                  Criar evento

                </SaveButton>

              </FormFooter>

            </Form>

          </Modal>

        </ModalOverlay>

      )}


      {/* ======================================
          VISUALIZAÇÃO DO EVENTO
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
              >

                <FiX />

              </CloseButton>

            </ModalHeader>


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
                  {eventoSelecionado.participantes?.length || 0}
                  {" "}
                  participante(s)
                </span>

              </InfoItem>

            </InfoList>


            <FormFooter>

              <SaveButton
                type="button"
                onClick={() =>
                  excluirEvento(
                    eventoSelecionado.id
                  )
                }
                style={{
                  background: "#e74c3c",
                  color: "#fff",
                }}
              >

                <FiTrash2 />

                Excluir evento

              </SaveButton>

            </FormFooter>

          </Modal>

        </ModalOverlay>

      )}

    </Page>

  );

}