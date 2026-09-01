import { useEffect, useState } from "react";
import Layoutadm from "../../../components/layoutadm";
import { getAuthHeaders } from "../../../utils/auth";
import {
  FiEdit,
  FiTrash2,
  FiUsers,
  FiClock,
  FiBookOpen,
  FiSearch,
  FiX,
  FiAlertTriangle,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  TitleArea,
  Title,
  Subtitle,
  Stats,
  StatCard,
  StatIcon,
  StatContent,
  StatNumber,
  StatLabel,
  FilterContainer,
  FilterButton,
  TableContainer,
  TableHeader,
  TableHeaderInfo,
  TableTitle,
  TableDescription,
  TableWrapper,
  Table,
  StudentCell,
  StudentAvatar,
  StudentInfo,
  StudentName,
  Badge,
  TurnoBadge,
  Actions,
  ActionButton,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  LoadingState,
  Spinner,
  ErrorMessage,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalClose,
  ModalDescription,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  ModalButtons,
  SaveButton,
  CancelButton,
  ConfirmButton,
  WarningBox,
} from "./style";

export default function Inscricaoadm() {
  const [turno, setTurno] = useState("Manhã");
  const [inscricoes, setInscricoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [inscricaoEditando, setInscricaoEditando] = useState(null);
  const [inscricaoExcluir, setInscricaoExcluir] = useState(null);

  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState("");

  useEffect(() => {
    buscarInscricoes();
  }, []);

  function buscarInscricoes() {
    setCarregando(true);
    setErro("");

    fetch("http://localhost:3001/inscricoes", {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => {
        setInscricoes(data);
      })
      .catch(() => {
        setErro("Não foi possível carregar as inscrições.");
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  async function excluirInscricao() {
    if (confirmacaoExclusao.toLowerCase() !== "excluir") return;

    try {
      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoExcluir.id_inscricoes}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao excluir inscrição.");
        return;
      }

      setInscricoes((atual) =>
        atual.filter(
          (i) =>
            i.id_inscricoes !== inscricaoExcluir.id_inscricoes
        )
      );

      fecharModalExclusao();
    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    }
  }

  async function salvarEdicao() {
    if (!inscricaoEditando) return;

    try {
      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoEditando.id_inscricoes}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...getAuthHeaders(),
          },
          body: JSON.stringify({
            nome_poeta: inscricaoEditando.nome_poeta,
            turma: inscricaoEditando.turma,
            turno: inscricaoEditando.turno,
            curso: inscricaoEditando.curso,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao salvar alterações.");
        return;
      }

      setInscricoes((atual) =>
        atual.map((i) =>
          i.id_inscricoes === inscricaoEditando.id_inscricoes
            ? inscricaoEditando
            : i
        )
      );

      setInscricaoEditando(null);
    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    }
  }

  function fecharModalExclusao() {
    setInscricaoExcluir(null);
    setConfirmacaoExclusao("");
  }

  function obterInicial(nome) {
    if (!nome) return "?";

    return nome
      .trim()
      .charAt(0)
      .toUpperCase();
  }

  function abrirEdicao(inscricao) {
    setErro("");
    setInscricaoEditando({ ...inscricao });
  }

  function abrirExclusao(inscricao) {
    setErro("");
    setInscricaoExcluir(inscricao);
    setConfirmacaoExclusao("");
  }

  const inscricoesFiltradas = inscricoes.filter(
    (inscricao) => inscricao.turno === turno
  );

  const totalManha = inscricoes.filter(
    (item) => item.turno === "Manhã"
  ).length;

  const totalTarde = inscricoes.filter(
    (item) => item.turno === "Tarde"
  ).length;

  const totalNoite = inscricoes.filter(
    (item) => item.turno === "Noite"
  ).length;

  return (
    <Page>
      <Layoutadm />

      <Content>
        <Header>
          <TitleArea>
            <Title>Inscrições dos Alunos</Title>

            <Subtitle>
              Gerencie as inscrições e informações dos alunos
              participantes.
            </Subtitle>
          </TitleArea>

          <Stats>
            <StatCard>
              <StatIcon $color="#831614">
                <FiUsers />
              </StatIcon>

              <StatContent>
                <StatNumber>{inscricoes.length}</StatNumber>
                <StatLabel>Total de inscrições</StatLabel>
              </StatContent>
            </StatCard>
          </Stats>
        </Header>

        <FilterContainer>
          {[
            {
              nome: "Manhã",
              quantidade: totalManha,
            },
            {
              nome: "Tarde",
              quantidade: totalTarde,
            },
            {
              nome: "Noite",
              quantidade: totalNoite,
            },
          ].map((item) => (
            <FilterButton
              key={item.nome}
              $active={turno === item.nome}
              onClick={() => setTurno(item.nome)}
            >
              <span>{item.nome}</span>

              <strong>{item.quantidade}</strong>
            </FilterButton>
          ))}
        </FilterContainer>

        {erro && (
          <ErrorMessage>
            <FiAlertTriangle />
            <span>{erro}</span>
          </ErrorMessage>
        )}

        {carregando ? (
          <LoadingState>
            <Spinner />
            <span>Carregando inscrições...</span>
          </LoadingState>
        ) : (
          <TableContainer>
            <TableHeader>
              <TableHeaderInfo>
                <TableTitle>
                  Alunos inscritos
                </TableTitle>

                <TableDescription>
                  {inscricoesFiltradas.length === 1
                    ? "1 aluno encontrado"
                    : `${inscricoesFiltradas.length} alunos encontrados`}
                </TableDescription>
              </TableHeaderInfo>
            </TableHeader>

            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>Aluno</th>
                    <th>Turma</th>
                    <th>Curso</th>
                    <th>Turno</th>
                    <th>Ações</th>
                  </tr>
                </thead>

                <tbody>
                  {inscricoesFiltradas.map((inscricao) => (
                    <tr key={inscricao.id_inscricoes}>
                      <td>
                        <StudentCell>
                          <StudentAvatar>
                            {obterInicial(inscricao.nome_poeta)}
                          </StudentAvatar>

                          <StudentInfo>
                            <StudentName>
                              {inscricao.nome_poeta}
                            </StudentName>
                          </StudentInfo>
                        </StudentCell>
                      </td>

                      <td>
                        <Badge>
                          {inscricao.turma}
                        </Badge>
                      </td>

                      <td>
                        <Badge $type="course">
                          <FiBookOpen />
                          {inscricao.curso}
                        </Badge>
                      </td>

                      <td>
                        <TurnoBadge $turno={inscricao.turno}>
                          <span />
                          {inscricao.turno}
                        </TurnoBadge>
                      </td>

                      <td>
                        <Actions>
                          <ActionButton
                            type="button"
                            $variant="edit"
                            title="Editar inscrição"
                            aria-label={`Editar ${inscricao.nome_poeta}`}
                            onClick={() => abrirEdicao(inscricao)}
                          >
                            <FiEdit />
                          </ActionButton>

                          <ActionButton
                            type="button"
                            $variant="delete"
                            title="Excluir inscrição"
                            aria-label={`Excluir ${inscricao.nome_poeta}`}
                            onClick={() => abrirExclusao(inscricao)}
                          >
                            <FiTrash2 />
                          </ActionButton>
                        </Actions>
                      </td>
                    </tr>
                  ))}

                  {inscricoesFiltradas.length === 0 && (
                    <tr>
                      <td colSpan={5}>
                        <EmptyState>
                          <EmptyIcon>
                            <FiSearch />
                          </EmptyIcon>

                          <EmptyTitle>
                            Nenhuma inscrição encontrada
                          </EmptyTitle>

                          <EmptyText>
                            Não existem alunos inscritos no
                            turno da {turno.toLowerCase()}.
                          </EmptyText>
                        </EmptyState>
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </TableWrapper>
          </TableContainer>
        )}
      </Content>

      {/* MODAL DE EDIÇÃO */}

      {inscricaoEditando && (
        <ModalOverlay
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setInscricaoEditando(null);
            }
          }}
        >
          <Modal>
            <ModalHeader>
              <div>
                <ModalTitle>Editar inscrição</ModalTitle>

                <ModalDescription>
                  Atualize os dados do aluno abaixo.
                </ModalDescription>
              </div>

              <ModalClose
                type="button"
                onClick={() => setInscricaoEditando(null)}
                aria-label="Fechar"
              >
                <FiX />
              </ModalClose>
            </ModalHeader>

            <Form>
              <FormGroup>
                <Label>Nome do aluno</Label>

                <Input
                  value={inscricaoEditando.nome_poeta || ""}
                  onChange={(e) =>
                    setInscricaoEditando({
                      ...inscricaoEditando,
                      nome_poeta: e.target.value,
                    })
                  }
                  placeholder="Nome completo"
                />
              </FormGroup>

              <FormGroup>
                <Label>Turma</Label>

                <Select
                  value={inscricaoEditando.turma || ""}
                  onChange={(e) =>
                    setInscricaoEditando({
                      ...inscricaoEditando,
                      turma: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Selecione a turma
                  </option>

                  <option value="1º ano">1º ano</option>
                  <option value="2º ano">2º ano</option>
                  <option value="3º ano">3º ano</option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Curso</Label>

                <Select
                  value={inscricaoEditando.curso || ""}
                  onChange={(e) =>
                    setInscricaoEditando({
                      ...inscricaoEditando,
                      curso: e.target.value,
                    })
                  }
                >
                  <option value="">
                    Selecione o curso
                  </option>

                  <option value="Informática">
                    Informática
                  </option>

                  <option value="Marketing">
                    Marketing
                  </option>

                  <option value="Administração">
                    Administração
                  </option>

                  <option value="Humanas">
                    Humanas
                  </option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>Turno</Label>

                <Select
                  value={inscricaoEditando.turno || ""}
                  onChange={(e) =>
                    setInscricaoEditando({
                      ...inscricaoEditando,
                      turno: e.target.value,
                    })
                  }
                >
                  <option value="Manhã">Manhã</option>
                  <option value="Tarde">Tarde</option>
                  <option value="Noite">Noite</option>
                </Select>
              </FormGroup>

              <ModalButtons>
                <CancelButton
                  type="button"
                  onClick={() => setInscricaoEditando(null)}
                >
                  Cancelar
                </CancelButton>

                <SaveButton
                  type="button"
                  onClick={salvarEdicao}
                >
                  Salvar alterações
                </SaveButton>
              </ModalButtons>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      {/* MODAL DE EXCLUSÃO */}

      {inscricaoExcluir && (
        <ModalOverlay
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              fecharModalExclusao();
            }
          }}
        >
          <Modal>
            <ModalHeader>
              <div>
                <ModalTitle $danger>
                  Excluir inscrição
                </ModalTitle>

                <ModalDescription>
                  Esta ação precisa ser confirmada.
                </ModalDescription>
              </div>

              <ModalClose
                type="button"
                onClick={fecharModalExclusao}
                aria-label="Fechar"
              >
                <FiX />
              </ModalClose>
            </ModalHeader>

            <WarningBox>
              <FiAlertTriangle />

              <div>
                <strong>Atenção</strong>

                <p>
                  Você está prestes a excluir a inscrição de{" "}
                  <strong>
                    {inscricaoExcluir.nome_poeta}
                  </strong>
                  . O usuário voltará a ser aluno comum.
                </p>
              </div>
            </WarningBox>

            <Form>
              <FormGroup>
                <Label>
                  Digite <strong>excluir</strong> para confirmar
                </Label>

                <Input
                  type="text"
                  placeholder="Digite excluir"
                  value={confirmacaoExclusao}
                  onChange={(e) =>
                    setConfirmacaoExclusao(e.target.value)
                  }
                  autoComplete="off"
                />
              </FormGroup>

              <ModalButtons>
                <CancelButton
                  type="button"
                  onClick={fecharModalExclusao}
                >
                  Cancelar
                </CancelButton>

                <ConfirmButton
                  type="button"
                  onClick={excluirInscricao}
                  disabled={
                    confirmacaoExclusao.toLowerCase() !==
                    "excluir"
                  }
                >
                  Excluir inscrição
                </ConfirmButton>
              </ModalButtons>
            </Form>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  );
}