import { useEffect, useMemo, useState } from "react";

import Layoutadm from "../../../components/Layoutadm";
import { getAuthHeaders } from "../../../utils/auth";

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

  PoetsSection,
  PoetsSectionTitle,
  PoetsList,
  PoetItem,
  PoetName,
  PoetDetails,
} from "./style";

const API_URL = "http://localhost:3001";

// ======================================================
// FETCH AUTENTICADO
// ======================================================

async function apiFetch(caminho, opcoes = {}) {
  const res = await fetch(`${API_URL}${caminho}`, {
    ...opcoes,
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeaders(),
    },
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.erro || "Erro ao comunicar com o servidor.");
  }

  return data;
}

// ======================================================
// COMPONENTE
// ======================================================

export default function Eventos() {
  // Eventos / inscrições (poetas)
  const [eventos, setEventos] = useState([]);
  const [inscricoes, setInscricoes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Modais
  const [modalAberto, setModalAberto] = useState(false);
  const [eventoSelecionadoId, setEventoSelecionadoId] = useState(null);
  const [eventoEditando, setEventoEditando] = useState(null);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [eventoParaExcluir, setEventoParaExcluir] = useState(null);

  // Formulário de evento
  const [imagem, setImagem] = useState("");
  const [imagemPreview, setImagemPreview] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");

  const eventoSelecionado = useMemo(() => {
    if (!eventoSelecionadoId) return null;
    return eventos.find((evento) => String(evento.id) === String(eventoSelecionadoId)) || null;
  }, [eventos, eventoSelecionadoId]);

  // ====================================================
  // CARREGAR EVENTOS E INSCRIÇÕES
  // ====================================================

  async function carregarEventos() {
    try {
      const dados = await apiFetch("/eventos");
      setEventos(dados);
    } catch (err) {
      console.error(err);
    } finally {
      setCarregando(false);
    }
  }

  async function carregarInscricoes() {
    try {
      const dados = await apiFetch("/inscricoes");
      setInscricoes(dados);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    carregarEventos();
    carregarInscricoes();
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

    setNome(evento.nome || "");
    setDescricao(evento.descricao || "");
    setData(evento.data || "");
    setHorario(evento.horario || "");
    setLocal(evento.local || "");
    setImagem(evento.imagem || "");
    setImagemPreview(evento.imagem || "");

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
    const arquivo = event.target.files?.[0];
    if (!arquivo) return;

    if (arquivo.size > 5 * 1024 * 1024) {
      alert("A imagem deve ter no máximo 5MB.");
      return;
    }

    if (!arquivo.type.startsWith("image/")) {
      alert("Selecione um arquivo de imagem.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImagem(reader.result);
      setImagemPreview(reader.result);
    };

    reader.readAsDataURL(arquivo);
  }

  function removerImagem() {
    setImagem("");
    setImagemPreview("");
  }

  // ====================================================
  // VALIDAR
  // ====================================================

  function validarFormulario() {
    if (!nome.trim()) {
      alert("Digite o nome do evento.");
      return false;
    }
    if (!descricao.trim()) {
      alert("Digite a descrição do evento.");
      return false;
    }
    if (!data) {
      alert("Informe a data do evento.");
      return false;
    }
    if (!horario) {
      alert("Informe o horário do evento.");
      return false;
    }
    if (!local.trim()) {
      alert("Informe o local do evento.");
      return false;
    }
    return true;
  }

  // ====================================================
  // SALVAR EVENTO (criar ou editar)
  // ====================================================

  async function salvarEvento(event) {
    event.preventDefault();

    if (!validarFormulario()) return;

    const corpo = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      data,
      horario,
      local: local.trim(),
      imagem: imagem || "",
    };

    try {
      if (eventoEditando) {
        const eventoAtualizado = await apiFetch(`/eventos/${eventoEditando.id}`, {
          method: "PUT",
          body: JSON.stringify(corpo),
        });

        setEventos((atuais) =>
          atuais.map((evento) => (evento.id === eventoAtualizado.id ? eventoAtualizado : evento))
        );
      } else {
        const novoEvento = await apiFetch("/eventos", {
          method: "POST",
          body: JSON.stringify(corpo),
        });

        setEventos((atuais) => [novoEvento, ...atuais]);
      }

      fecharModal();
    } catch (err) {
      alert(err.message);
    }
  }

  // ====================================================
  // EXCLUSÃO DE EVENTO
  // ====================================================

  function abrirConfirmacaoExclusao(evento) {
    setEventoSelecionadoId(null);
    setEventoParaExcluir(evento);
    setModalExcluirAberto(true);
  }

  function cancelarExclusao() {
    setModalExcluirAberto(false);
    setEventoParaExcluir(null);
  }

  async function confirmarExclusao() {
    if (!eventoParaExcluir) return;

    try {
      await apiFetch(`/eventos/${eventoParaExcluir.id}`, { method: "DELETE" });

      setEventos((atuais) => atuais.filter((evento) => evento.id !== eventoParaExcluir.id));
      setEventoSelecionadoId(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setModalExcluirAberto(false);
      setEventoParaExcluir(null);
    }
  }

  // ====================================================
  // DATA
  // ====================================================

  function formatarData(dataEvento) {
    if (!dataEvento) return "";
    const partes = dataEvento.split("-");
    if (partes.length !== 3) return dataEvento;
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  // ====================================================
  // ESC
  // ====================================================

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== "Escape") return;

      setModalAberto(false);
      setEventoSelecionadoId(null);
      setModalExcluirAberto(false);
      setEventoEditando(null);
      setEventoParaExcluir(null);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // ====================================================
  // RENDER
  // ====================================================

  return (
    <Page>
      <Layoutadm />

      <Content>
        <Header>
          <TitleArea>
            <Title>Eventos</Title>
            <Subtitle>Crie e organize os eventos.</Subtitle>
          </TitleArea>
        </Header>

        {/* CARDS DOS EVENTOS */}
        <Cards>
          {carregando ? null : eventos.length === 0 ? (
            <EmptyState>
              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>
              <EmptyTitle>Nenhum evento cadastrado</EmptyTitle>
              <EmptyText>Clique no botão + para criar seu primeiro evento.</EmptyText>
            </EmptyState>
          ) : (
            eventos.map((evento) => (
              <EventCard
                key={evento.id}
                onClick={() => setEventoSelecionadoId(evento.id)}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setEventoSelecionadoId(evento.id);
                  }
                }}
              >
                {evento.imagem ? (
                  <EventImage>
                    <img src={evento.imagem} alt={evento.nome} />
                  </EventImage>
                ) : (
                  <EventImagePlaceholder>
                    <FiImage />
                  </EventImagePlaceholder>
                )}

                <EventContent>
                  <EventTitle>{evento.nome}</EventTitle>
                  <EventDescription>{evento.descricao}</EventDescription>

                  <InfoList>
                    <InfoItem>
                      <FiCalendar />
                      <span>{formatarData(evento.data)}</span>
                    </InfoItem>

                    <InfoItem>
                      <FiClock />
                      <span>{evento.horario}</span>
                    </InfoItem>

                    <InfoItem>
                      <FiMapPin />
                      <span>{evento.local}</span>
                    </InfoItem>
                  </InfoList>

                  <EventFooter>
                    <AccessButton
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setEventoSelecionadoId(evento.id);
                      }}
                    >
                      Ver evento
                    </AccessButton>

                    <Actions>
                      <FiEdit
                        title="Editar evento"
                        onClick={(event) => {
                          event.stopPropagation();
                          abrirEdicao(evento);
                        }}
                      />

                      <FiTrash2
                        title="Excluir evento"
                        onClick={(event) => {
                          event.stopPropagation();
                          abrirConfirmacaoExclusao(evento);
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

      {/* BOTÃO + */}
      <FloatingButton type="button" onClick={abrirModal} aria-label="Adicionar evento">
        <FiPlus size={30} />
      </FloatingButton>

      {/* MODAL CRIAR / EDITAR */}
      {modalAberto && (
        <ModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) fecharModal();
          }}
        >
          <Modal>
            <ModalHeader>
              <ModalTitle>{eventoEditando ? "Editar evento" : "Novo evento"}</ModalTitle>
              <CloseButton type="button" onClick={fecharModal}>
                <FiX />
              </CloseButton>
            </ModalHeader>

            <Form onSubmit={salvarEvento}>
              <Label>Imagem do evento</Label>

              <ImageUpload>
                <ImageUploadInput
                  type="file"
                  accept="image/*"
                  onChange={handleImagem}
                  id="imagem-evento"
                />

                {imagemPreview ? (
                  <ImagePreview>
                    <img src={imagemPreview} alt="Prévia" />
                    <RemoveImageButton type="button" onClick={removerImagem}>
                      <FiX />
                    </RemoveImageButton>
                  </ImagePreview>
                ) : (
                  <ImageUploadContent htmlFor="imagem-evento">
                    <ImageUploadIcon>
                      <FiImage />
                    </ImageUploadIcon>

                    <ImageUploadText>
                      <strong>Adicionar imagem</strong>
                      <span>Clique para escolher uma imagem</span>
                      <small>PNG, JPG ou WEBP até 5MB</small>
                    </ImageUploadText>

                    <FiUpload />
                  </ImageUploadContent>
                )}
              </ImageUpload>

              <Label>Título</Label>
              <Input
                type="text"
                placeholder="Ex: Semifinal"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                maxLength={100}
              />

              <Label>Descrição</Label>
              <TextArea
                placeholder="Digite a descrição do evento..."
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                maxLength={500}
              />

              <FormRow>
                <FormGroup>
                  <Label>Data</Label>
                  <Input
                    type="date"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Horário</Label>
                  <Input
                    type="time"
                    value={horario}
                    onChange={(event) => setHorario(event.target.value)}
                  />
                </FormGroup>
              </FormRow>

              <Label>Local</Label>
              <Input
                type="text"
                placeholder="Ex: Auditório"
                value={local}
                onChange={(event) => setLocal(event.target.value)}
                maxLength={150}
              />

              <Label>Participantes</Label>

              <ParticipantsBox>
                <ParticipantsIcon>
                  <FiUsers />
                </ParticipantsIcon>

                <ParticipantsText>
                  <strong>Participantes do evento</strong>
                  <span>
                    A atribuição de poetas e notas aos eventos será feita futuramente pelo
                    matemático.
                  </span>
                </ParticipantsText>
              </ParticipantsBox>

              <FormFooter>
                <SaveButton type="submit">
                  {eventoEditando ? <FiEdit /> : <FiPlus />}
                  {eventoEditando ? "Salvar alterações" : "Criar evento"}
                </SaveButton>
              </FormFooter>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      {/* MODAL DO EVENTO */}
      {eventoSelecionado && (
        <ModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) setEventoSelecionadoId(null);
          }}
        >
          <Modal>
            <ModalHeader>
              <ModalTitle>{eventoSelecionado.nome}</ModalTitle>
              <CloseButton type="button" onClick={() => setEventoSelecionadoId(null)}>
                <FiX />
              </CloseButton>
            </ModalHeader>

            {eventoSelecionado.imagem ? (
              <ImagePreview>
                <img src={eventoSelecionado.imagem} alt={eventoSelecionado.nome} />
              </ImagePreview>
            ) : (
              <EventImagePlaceholder>
                <FiImage />
              </EventImagePlaceholder>
            )}

            <EventTitle>{eventoSelecionado.nome}</EventTitle>
            <EventDescription>{eventoSelecionado.descricao}</EventDescription>

            <InfoList>
              <InfoItem>
                <FiCalendar />
                <span>{formatarData(eventoSelecionado.data)}</span>
              </InfoItem>

              <InfoItem>
                <FiClock />
                <span>{eventoSelecionado.horario}</span>
              </InfoItem>

              <InfoItem>
                <FiMapPin />
                <span>{eventoSelecionado.local}</span>
              </InfoItem>
            </InfoList>

            {/* POETAS INSCRITOS (somente leitura, sem vínculo com o evento ainda) */}
            <PoetsSection>
              <PoetsSectionTitle>
                <FiUsers />
                Poetas inscritos ({inscricoes.length})
              </PoetsSectionTitle>

              {inscricoes.length === 0 ? (
                <ParticipantsBox>
                  <ParticipantsIcon>
                    <FiUsers />
                  </ParticipantsIcon>
                  <ParticipantsText>
                    <strong>Nenhuma inscrição ainda</strong>
                    <span>Os poetas aparecerão aqui assim que se inscreverem.</span>
                  </ParticipantsText>
                </ParticipantsBox>
              ) : (
                <PoetsList>
                  {inscricoes.map((inscricao) => (
                    <PoetItem key={inscricao.id_inscricoes}>
                      <PoetName>{inscricao.nome_poeta}</PoetName>
                      <PoetDetails>
                        {inscricao.turma} · {inscricao.turno} · {inscricao.curso}
                      </PoetDetails>
                    </PoetItem>
                  ))}
                </PoetsList>
              )}
            </PoetsSection>
          </Modal>
        </ModalOverlay>
      )}

      {/* MODAL EXCLUSÃO */}
      {modalExcluirAberto && (
        <ModalOverlay>
          <DeleteModal>
            <DeleteModalTitle>Excluir evento</DeleteModalTitle>
            <DeleteModalText>Tem certeza que deseja excluir esse evento?</DeleteModalText>

            {eventoParaExcluir && (
              <DeleteModalText>
                <strong>{eventoParaExcluir.nome}</strong>
              </DeleteModalText>
            )}

            <ModalButtons>
              <CancelButton type="button" onClick={cancelarExclusao}>
                Cancelar
              </CancelButton>

              <ConfirmButton type="button" onClick={confirmarExclusao}>
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