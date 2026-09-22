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
  FiAward,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import {
  Page,
  Content,
  Header,
  TitleArea,
  Title,
  Subtitle,
  YearsWrapper,
  YearsContainer,
  YearArrow,
  YearCard,
  YearIcon,
  YearNumber,
  YearDescription,
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

const API_URL = "http://localhost:3001";

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

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [resultados, setResultados] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [eventoSelecionadoId, setEventoSelecionadoId] = useState(null);
  const [eventoEditando, setEventoEditando] = useState(null);
  const [modalExcluirAberto, setModalExcluirAberto] = useState(false);
  const [eventoParaExcluir, setEventoParaExcluir] = useState(null);
  const [imagem, setImagem] = useState("");
  const [imagemPreview, setImagemPreview] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [local, setLocal] = useState("");

  // Poetas disponíveis (alunos inscritos que viraram poeta) e quais estão
  // marcados como participantes do evento que está sendo criado/editado.
  const [poetas, setPoetas] = useState([]);
  const [participantesSelecionados, setParticipantesSelecionados] = useState([]);

  const [anoInicial, setAnoInicial] = useState(2026);
  const [anoSelecionado, setAnoSelecionado] = useState(2026);

  const anosVisiveis = Array.from(
    { length: 3 },
    (_, index) => anoInicial + index
  );

  const eventoSelecionado = useMemo(() => {
    if (!eventoSelecionadoId) return null;
    return (
      eventos.find(
        (evento) => String(evento.id) === String(eventoSelecionadoId)
      ) || null
    );
  }, [eventos, eventoSelecionadoId]);

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

  useEffect(() => {
    carregarEventos();
  }, []);

  // Carrega a lista de poetas (alunos que se inscreveram e viraram poeta)
  // uma única vez, pra usar no seletor de participantes do modal.
  useEffect(() => {
    apiFetch("/poetas")
      .then(setPoetas)
      .catch((err) => console.error(err));
  }, []);

  async function carregarResultados(eventoId) {
    try {
      const dados = await apiFetch(`/eventos/${eventoId}/notas`);
      setResultados(Array.isArray(dados) ? dados : []);
    } catch (err) {
      console.error(err);
      setResultados([]);
    }
  }

  useEffect(() => {
    if (!eventoSelecionadoId) {
      setResultados([]);
      return;
    }

    carregarResultados(eventoSelecionadoId);
  }, [eventoSelecionadoId]);

  function handleButtonMouseMove(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    button.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  function limparFormulario() {
    setNome("");
    setDescricao("");
    setData("");
    setHorario("");
    setLocal("");
    setImagem("");
    setImagemPreview("");
  }

  function abrirModal() {
    setEventoEditando(null);
    limparFormulario();
    setParticipantesSelecionados([]);
    setModalAberto(true);
  }

  async function abrirEdicao(evento) {
    setEventoSelecionadoId(null);
    setEventoEditando(evento);
    setNome(evento.nome || "");
    setDescricao(evento.descricao || "");
    setData(evento.data || "");
    setHorario(evento.horario || "");
    setLocal(evento.local || "");
    setImagem(evento.imagem || "");
    setImagemPreview(evento.imagem || "");

    try {
      const participantes = await apiFetch(`/eventos/${evento.id}/participantes`);
      setParticipantesSelecionados(participantes.map((p) => p.usuarioId));
    } catch (err) {
      console.error(err);
      setParticipantesSelecionados([]);
    }

    setModalAberto(true);
  }

  function fecharModal() {
    setModalAberto(false);
    setEventoEditando(null);
    limparFormulario();
    setParticipantesSelecionados([]);
  }

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
      let eventoId;

      if (eventoEditando) {
        const eventoAtualizado = await apiFetch(
          `/eventos/${eventoEditando.id}`,
          {
            method: "PUT",
            body: JSON.stringify(corpo),
          }
        );

        setEventos((atuais) =>
          atuais.map((evento) =>
            evento.id === eventoAtualizado.id
              ? eventoAtualizado
              : evento
          )
        );

        eventoId = eventoAtualizado.id;
      } else {
        const novoEvento = await apiFetch("/eventos", {
          method: "POST",
          body: JSON.stringify(corpo),
        });

        setEventos((atuais) => [novoEvento, ...atuais]);

        eventoId = novoEvento.id;
      }

      // Sincroniza os participantes marcados no formulário com o evento
      // recém-criado/atualizado.
      await apiFetch(`/eventos/${eventoId}/participantes`, {
        method: "PUT",
        body: JSON.stringify({ usuarioIds: participantesSelecionados }),
      });

      // Atualiza a lista de poetas pra refletir o novo vínculo (evita que
      // um poeta apareça disponível em outro evento logo em seguida).
      apiFetch("/poetas").then(setPoetas).catch(console.error);

      fecharModal();
    } catch (err) {
      alert(err.message);
    }
  }

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
      await apiFetch(`/eventos/${eventoParaExcluir.id}`, {
        method: "DELETE",
      });

      setEventos((atuais) =>
        atuais.filter((evento) => evento.id !== eventoParaExcluir.id)
      );

      setEventoSelecionadoId(null);
    } catch (err) {
      alert(err.message);
    } finally {
      setModalExcluirAberto(false);
      setEventoParaExcluir(null);
    }
  }

  function formatarData(dataEvento) {
    if (!dataEvento) return "";

    const partes = dataEvento.split("-");

    if (partes.length !== 3) return dataEvento;

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }

  function formatarTempo(segundos) {
    if (segundos === null || segundos === undefined) return "-";

    const m = Math.floor(segundos / 60);
    const s = Math.floor(segundos % 60);

    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function descobrirAno(evento) {
    const valor = evento?.data;

    if (!valor) return 2026;

    const dataConvertida = new Date(valor);

    if (!Number.isNaN(dataConvertida.getTime())) {
      return dataConvertida.getFullYear();
    }

    const numero = Number(valor);

    return numero >= 2000 && numero <= 2100 ? numero : 2026;
  }

  function avancarAnos() {
    const novoAno = anoInicial + 3;
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
  }

  function voltarAnos() {
    const novoAno = Math.max(2026, anoInicial - 3);
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
  }

  function selecionarAno(ano) {
    setAnoSelecionado(ano);
  }

  function quantidadePorAno(ano) {
    return eventos.filter((evento) => descobrirAno(evento) === ano).length;
  }

  const eventosDoAno = eventos.filter(
    (evento) => descobrirAno(evento) === anoSelecionado
  );

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

        <YearsWrapper>
          <YearArrow
            type="button"
            onClick={voltarAnos}
            onMouseMove={handleButtonMouseMove}
            disabled={anoInicial === 2026}
            aria-label="Anos anteriores"
          >
            <span className="buttonContent">
              <FiChevronLeft />
            </span>
          </YearArrow>

          <YearsContainer>
            {anosVisiveis.map((ano) => {
              const quantidade = quantidadePorAno(ano);
              const ativo = anoSelecionado === ano;

              return (
                <YearCard
                  key={ano}
                  type="button"
                  $active={ativo}
                  onClick={() => selecionarAno(ano)}
                  onMouseMove={handleButtonMouseMove}
                >
                  <YearIcon $active={ativo}>
                    <FiCalendar />
                  </YearIcon>

                  <YearNumber $active={ativo}>{ano}</YearNumber>

                  <YearDescription $active={ativo}>
                    {quantidade === 0
                      ? "Nenhum evento"
                      : quantidade === 1
                      ? "1 evento"
                      : `${quantidade} eventos`}
                  </YearDescription>
                </YearCard>
              );
            })}
          </YearsContainer>

          <YearArrow
            type="button"
            onClick={avancarAnos}
            onMouseMove={handleButtonMouseMove}
            aria-label="Próximos anos"
          >
            <span className="buttonContent">
              <FiChevronRight />
            </span>
          </YearArrow>
        </YearsWrapper>

        <Cards>
          {carregando ? null : eventos.length === 0 ? (
            <EmptyState>
              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>
              <EmptyTitle>Nenhum evento cadastrado</EmptyTitle>
              <EmptyText>
                Clique no botão + para criar seu primeiro evento.
              </EmptyText>
            </EmptyState>
          ) : eventosDoAno.length === 0 ? (
            <EmptyState>
              <EmptyIcon>
                <FiCalendar />
              </EmptyIcon>
              <EmptyTitle>Nenhum evento neste ano</EmptyTitle>
              <EmptyText>
                Não existem eventos cadastrados em {anoSelecionado}.
              </EmptyText>
            </EmptyState>
          ) : (
            eventosDoAno.map((evento) => (
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
                      onPointerMove={handleButtonMouseMove}
                      onClick={(event) => {
                        event.stopPropagation();
                        setEventoSelecionadoId(evento.id);
                      }}
                    >
                      <span className="buttonContent">Ver evento</span>
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

      <FloatingButton
        type="button"
        onClick={abrirModal}
        onPointerMove={handleButtonMouseMove}
        aria-label="Adicionar evento"
      >
        <span className="buttonContent">
          <FiPlus size={30} />
        </span>
      </FloatingButton>

      {modalAberto && (
        <ModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) fecharModal();
          }}
        >
          <Modal>
            <ModalHeader>
              <ModalTitle>
                {eventoEditando ? "Editar evento" : "Novo evento"}
              </ModalTitle>

              <CloseButton
                type="button"
                onClick={fecharModal}
                onPointerMove={handleButtonMouseMove}
              >
                <span className="buttonContent">
                  <FiX />
                </span>
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

                    <RemoveImageButton
                      type="button"
                      onClick={removerImagem}
                    >
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

              <Label>Participantes do evento</Label>

              <ParticipantsBox
                style={{ flexDirection: "column", alignItems: "stretch", gap: 6 }}
              >
                {poetas.length === 0 ? (
                  <ParticipantsText>
                    <span>Nenhum poeta inscrito ainda.</span>
                  </ParticipantsText>
                ) : (
                  poetas.map((poeta) => {
                    const jaEmOutroEvento =
                      poeta.eventoId && poeta.eventoId !== eventoEditando?.id;

                    return (
                      <label
                        key={poeta.usuarioId}
                        style={{
                          display: "flex",
                          gap: 8,
                          alignItems: "center",
                          opacity: jaEmOutroEvento ? 0.5 : 1,
                        }}
                      >
                        <input
                          type="checkbox"
                          disabled={jaEmOutroEvento}
                          checked={participantesSelecionados.includes(
                            poeta.usuarioId
                          )}
                          onChange={(event) => {
                            setParticipantesSelecionados((atuais) =>
                              event.target.checked
                                ? [...atuais, poeta.usuarioId]
                                : atuais.filter((id) => id !== poeta.usuarioId)
                            );
                          }}
                        />
                        {poeta.nome_poeta} — {poeta.turma}
                        {jaEmOutroEvento && " (já em outro evento)"}
                      </label>
                    );
                  })
                )}
              </ParticipantsBox>

              <FormFooter>
                <SaveButton type="submit" onPointerMove={handleButtonMouseMove}>
                  <span className="buttonContent">
                    {eventoEditando ? <FiEdit /> : <FiPlus />}
                    {eventoEditando
                      ? "Salvar alterações"
                      : "Criar evento"}
                  </span>
                </SaveButton>
              </FormFooter>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      {eventoSelecionado && (
        <ModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setEventoSelecionadoId(null);
            }
          }}
        >
          <Modal>
            <ModalHeader>
              <ModalTitle>{eventoSelecionado.nome}</ModalTitle>

              <CloseButton
                type="button"
                onClick={() => setEventoSelecionadoId(null)}
                onPointerMove={handleButtonMouseMove}
              >
                <span className="buttonContent">
                  <FiX />
                </span>
              </CloseButton>
            </ModalHeader>

            {eventoSelecionado.imagem ? (
              <ImagePreview>
                <img
                  src={eventoSelecionado.imagem}
                  alt={eventoSelecionado.nome}
                />
              </ImagePreview>
            ) : (
              <EventImagePlaceholder>
                <FiImage />
              </EventImagePlaceholder>
            )}

            <EventTitle>{eventoSelecionado.nome}</EventTitle>
            <EventDescription>
              {eventoSelecionado.descricao}
            </EventDescription>

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

            <RankingSection>
              <RankingHeader>
                <RankingTitle>
                  <FiAward />
                  Resultados ({resultados.length})
                </RankingTitle>

                <RankingDescription>
                  Notas lançadas pelo matemático para este evento. A maior e a
                  menor nota de cada poeta já foram descartadas — o resultado é
                  a média das três restantes, menos o desconto por tempo
                  excedido.
                </RankingDescription>
              </RankingHeader>

              {resultados.length === 0 ? (
                <RankingEmpty>
                  <FiAward />
                  <strong>Nenhum resultado ainda</strong>
                  <span>
                    As notas lançadas pelo matemático para este evento
                    aparecerão aqui.
                  </span>
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
                        <RankingRow
                          key={resultado.id}
                          $primeiro={index === 0}
                        >
                          <td>
                            <Position>
                              {index === 0 && <FiAward />}
                              {index + 1}º
                            </Position>
                          </td>

                          <td>
                            <ParticipantName>
                              {resultado.nomeAluno}
                            </ParticipantName>
                          </td>

                          <td>
                            <Score>
                              {resultado.n1?.toFixed(1) ?? "-"}
                            </Score>
                          </td>

                          <td>
                            <Score>
                              {resultado.n2?.toFixed(1) ?? "-"}
                            </Score>
                          </td>

                          <td>
                            <Score>
                              {resultado.n3?.toFixed(1) ?? "-"}
                            </Score>
                          </td>

                          <td>
                            <Score>
                              {resultado.n4?.toFixed(1) ?? "-"}
                            </Score>
                          </td>

                          <td>
                            <Score>
                              {resultado.n5?.toFixed(1) ?? "-"}
                            </Score>
                          </td>

                          <td>
                            <Average>
                              {resultado.media?.toFixed(2) ?? "-"}
                            </Average>
                          </td>

                          <td>
                            <Time>
                              <FiClock />
                              {formatarTempo(resultado.tempo)}
                            </Time>
                          </td>

                          <td>
                            <Penalty $penalidade={resultado.desconto > 0}>
                              {resultado.desconto > 0
                                ? `-${resultado.desconto.toFixed(1)}`
                                : "0"}
                            </Penalty>
                          </td>

                          <td>
                            <FinalScore>
                              {resultado.resultado?.toFixed(2) ?? "-"}
                            </FinalScore>
                          </td>
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

      {modalExcluirAberto && (
        <ModalOverlay>
          <DeleteModal>
            <DeleteModalTitle>Excluir evento</DeleteModalTitle>

            <DeleteModalText>
              Tem certeza que deseja excluir esse evento?
            </DeleteModalText>

            {eventoParaExcluir && (
              <DeleteModalText>
                <strong>{eventoParaExcluir.nome}</strong>
              </DeleteModalText>
            )}

            <ModalButtons>
              <CancelButton
                type="button"
                onPointerMove={handleButtonMouseMove}
                onClick={cancelarExclusao}
              >
                <span className="buttonContent">Cancelar</span>
              </CancelButton>

              <ConfirmButton
                type="button"
                onPointerMove={handleButtonMouseMove}
                onClick={confirmarExclusao}
              >
                <span className="buttonContent">
                  <FiTrash2 />
                  Sim, excluir
                </span>
              </ConfirmButton>
            </ModalButtons>
          </DeleteModal>
        </ModalOverlay>
      )}
    </Page>
  );
}