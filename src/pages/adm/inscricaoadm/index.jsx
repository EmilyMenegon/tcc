import { useEffect, useState } from "react";

import { jsPDF } from "jspdf";

import Layoutadm from "../../../components/layoutadm";

import { getAuthHeaders } from "../../../utils/auth";

import {
  FiEdit,
  FiTrash2,
  FiUsers,
  FiBookOpen,
  FiSearch,
  FiX,
  FiAlertTriangle,
  FiDownload,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
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
  DownloadButton,
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

  // CARDS DE ANOS
  YearsWrapper,
  YearsContainer,
  YearArrow,
  YearCard,
  YearIcon,
  YearNumber,
  YearDescription,
} from "./style";

export default function Inscricaoadm() {
  const [turno, setTurno] = useState("Todos");

  const [inscricoes, setInscricoes] = useState([]);

  const [carregando, setCarregando] = useState(true);

  const [erro, setErro] = useState("");

  const [inscricaoEditando, setInscricaoEditando] =
    useState(null);

  const [inscricaoExcluir, setInscricaoExcluir] =
    useState(null);

  const [confirmacaoExclusao, setConfirmacaoExclusao] =
    useState("");

  // =====================================================
  // ANO
  // =====================================================

  const [anoInicial, setAnoInicial] = useState(2026);

  const [anoSelecionado, setAnoSelecionado] =
    useState(2026);

  const anosVisiveis = Array.from(
    { length: 3 },
    (_, index) => anoInicial + index
  );

  // =====================================================
  // DESCOBRIR ANO DA INSCRIÇÃO
  // =====================================================

  function descobrirAno(inscricao) {
    const valor =
      inscricao?.ano ??
      inscricao?.created_at ??
      inscricao?.createdAt ??
      inscricao?.data_inscricao ??
      inscricao?.dataInscricao ??
      inscricao?.data ??
      inscricao?.date;

    if (valor) {
      // Se já for um número, usa diretamente
      if (
        typeof valor === "number" &&
        valor >= 2000 &&
        valor <= 2100
      ) {
        return valor;
      }

      // Caso seja uma data
      const dataConvertida = new Date(valor);

      if (!Number.isNaN(dataConvertida.getTime())) {
        return dataConvertida.getFullYear();
      }

      // Caso venha como string "2026"
      const numero = Number(valor);

      if (
        numero >= 2000 &&
        numero <= 2100
      ) {
        return numero;
      }
    }

    // Caso a inscrição não tenha ano
    return 2026;
  }

  // =====================================================
  // ANIMAÇÃO DOS BOTÕES
  // =====================================================

  const handleButtonMouseMove = (e) => {
    const button = e.currentTarget;

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    button.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    button.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  };

  // =====================================================
  // BUSCAR INSCRIÇÕES
  // =====================================================

  useEffect(() => {
    buscarInscricoes();
  }, []);

  function buscarInscricoes() {
    setCarregando(true);

    setErro("");

    fetch("http://localhost:3001/inscricoes", {
      headers: getAuthHeaders(),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            "Erro ao buscar inscrições."
          );
        }

        return res.json();
      })
      .then((data) => {
        setInscricoes(
          Array.isArray(data)
            ? data
            : []
        );
      })
      .catch((error) => {
        console.error(error);

        setErro(
          "Não foi possível carregar as inscrições."
        );
      })
      .finally(() => {
        setCarregando(false);
      });
  }

  // =====================================================
  // NAVEGAÇÃO DOS ANOS
  // =====================================================

  function avancarAnos() {
    const novoAno = anoInicial + 3;

    setAnoInicial(novoAno);

    setAnoSelecionado(novoAno);

    setTurno("Todos");
  }

  function voltarAnos() {
    const novoAno = Math.max(
      2026,
      anoInicial - 3
    );

    setAnoInicial(novoAno);

    setAnoSelecionado(novoAno);

    setTurno("Todos");
  }

  function selecionarAno(ano) {
    setAnoSelecionado(ano);

    setTurno("Todos");
  }

  // =====================================================
  // INSCRIÇÕES DO ANO SELECIONADO
  // =====================================================

  const inscricoesDoAno =
    inscricoes.filter(
      (inscricao) =>
        descobrirAno(inscricao) ===
        anoSelecionado
    );

  // =====================================================
  // FILTRO POR TURNO
  // =====================================================

  const inscricoesFiltradas =
    turno === "Todos"
      ? [...inscricoesDoAno].sort(
          (a, b) =>
            (a.nome_poeta || "").localeCompare(
              b.nome_poeta || "",
              "pt-BR",
              {
                sensitivity: "base",
              }
            )
        )
      : inscricoesDoAno.filter(
          (inscricao) =>
            inscricao.turno === turno
        );

  // =====================================================
  // QUANTIDADE DE CADA ANO
  // =====================================================

  function quantidadePorAno(ano) {
    return inscricoes.filter(
      (inscricao) =>
        descobrirAno(inscricao) === ano
    ).length;
  }

  // =====================================================
  // ESTATÍSTICAS
  // =====================================================

  const totalTodos =
    inscricoesDoAno.length;

  const totalManha =
    inscricoesDoAno.filter(
      (item) =>
        item.turno === "Manhã"
    ).length;

  const totalTarde =
    inscricoesDoAno.filter(
      (item) =>
        item.turno === "Tarde"
    ).length;

  const totalNoite =
    inscricoesDoAno.filter(
      (item) =>
        item.turno === "Noite"
    ).length;

  // =====================================================
  // GERAR PDF
  // =====================================================

  function baixarPDF() {
    if (
      !inscricoesFiltradas ||
      inscricoesFiltradas.length === 0
    ) {
      setErro(
        "Não existem alunos inscritos para gerar o PDF."
      );

      return;
    }

    try {
      const alunos =
        [...inscricoesFiltradas].sort(
          (a, b) =>
            (a.nome_poeta || "").localeCompare(
              b.nome_poeta || "",
              "pt-BR",
              {
                sensitivity: "base",
              }
            )
        );

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });

      const dataAtual =
        new Date();

      const dataFormatada =
        dataAtual.toLocaleDateString(
          "pt-BR"
        );

      const horaFormatada =
        dataAtual.toLocaleTimeString(
          "pt-BR",
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        );

      // =====================================================
      // CABEÇALHO
      // =====================================================

      doc.setFillColor(
        131,
        22,
        20
      );

      doc.rect(
        0,
        0,
        297,
        35,
        "F"
      );

      doc.setTextColor(
        255,
        255,
        255
      );

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(20);

      doc.text(
        `Alunos inscritos - ${anoSelecionado}`,
        18,
        16
      );

      doc.setFont(
        "helvetica",
        "normal"
      );

      doc.setFontSize(10);

      doc.text(
        turno === "Todos"
          ? "Lista de inscrições"
          : `Lista de inscrições - ${turno}`,
        18,
        24
      );

      doc.text(
        `Gerado em ${dataFormatada} às ${horaFormatada}`,
        279,
        24,
        {
          align: "right",
        }
      );

      // =====================================================
      // RESUMO
      // =====================================================

      doc.setTextColor(
        60,
        60,
        60
      );

      doc.setFont(
        "helvetica",
        "bold"
      );

      doc.setFontSize(12);

      doc.text(
        `Total de alunos: ${alunos.length}`,
        18,
        47
      );

      // =====================================================
      // CONFIGURAÇÃO DA TABELA
      // =====================================================

      const margemEsquerda = 18;

      const larguraTotal = 261;

      const colunas = [
        {
          titulo: "Nº",
          x: margemEsquerda,
          largura: 12,
        },
        {
          titulo: "ALUNO",
          x:
            margemEsquerda + 12,
          largura: 85,
        },
        {
          titulo: "TURMA",
          x:
            margemEsquerda + 97,
          largura: 45,
        },
        {
          titulo: "CURSO",
          x:
            margemEsquerda + 142,
          largura: 65,
        },
        {
          titulo: "TURNO",
          x:
            margemEsquerda + 207,
          largura: 54,
        },
      ];

      let y = 55;

      // =====================================================
      // CABEÇALHO DA TABELA
      // =====================================================

      const desenharCabecalho = () => {
        doc.setFillColor(
          131,
          22,
          20
        );

        doc.rect(
          margemEsquerda,
          y,
          larguraTotal,
          10,
          "F"
        );

        doc.setTextColor(
          255,
          255,
          255
        );

        doc.setFont(
          "helvetica",
          "bold"
        );

        doc.setFontSize(9);

        colunas.forEach(
          (coluna) => {
            doc.text(
              coluna.titulo,
              coluna.x + 3,
              y + 6.5
            );
          }
        );

        y += 10;
      };

      desenharCabecalho();

      // =====================================================
      // ALUNOS
      // =====================================================

      alunos.forEach(
        (aluno, index) => {
          if (y > 185) {
            doc.addPage();

            y = 18;

            desenharCabecalho();
          }

          const alturaLinha = 11;

          if (index % 2 === 0) {
            doc.setFillColor(
              253,
              253,
              253
            );
          } else {
            doc.setFillColor(
              255,
              251,
              237
            );
          }

          doc.rect(
            margemEsquerda,
            y,
            larguraTotal,
            alturaLinha,
            "F"
          );

          doc.setDrawColor(
            230,
            230,
            230
          );

          doc.line(
            margemEsquerda,
            y + alturaLinha,
            margemEsquerda +
              larguraTotal,
            y + alturaLinha
          );

          doc.setTextColor(
            50,
            50,
            50
          );

          doc.setFont(
            "helvetica",
            "normal"
          );

          doc.setFontSize(8.5);

          const nome =
            aluno.nome_poeta ||
            "-";

          const turma =
            aluno.turma ||
            "-";

          const curso =
            aluno.curso ||
            "-";

          const turnoAluno =
            aluno.turno ||
            "-";

          doc.text(
            String(index + 1),
            colunas[0].x + 3,
            y + 7
          );

          doc.text(
            nome.substring(
              0,
              48
            ),
            colunas[1].x + 3,
            y + 7
          );

          doc.text(
            turma.substring(
              0,
              25
            ),
            colunas[2].x + 3,
            y + 7
          );

          doc.text(
            curso.substring(
              0,
              35
            ),
            colunas[3].x + 3,
            y + 7
          );

          doc.text(
            turnoAluno,
            colunas[4].x + 3,
            y + 7
          );

          y += alturaLinha;
        }
      );

      // =====================================================
      // RODAPÉ
      // =====================================================

      const totalPaginas =
        doc.internal.getNumberOfPages();

      for (
        let pagina = 1;
        pagina <= totalPaginas;
        pagina++
      ) {
        doc.setPage(pagina);

        doc.setFont(
          "helvetica",
          "normal"
        );

        doc.setFontSize(8);

        doc.setTextColor(
          130,
          130,
          130
        );

        doc.text(
          "Sistema de organização do Slam",
          18,
          202
        );

        doc.text(
          `Página ${pagina} de ${totalPaginas}`,
          279,
          202,
          {
            align: "right",
          }
        );
      }

      // =====================================================
      // DOWNLOAD
      // =====================================================

      const nomeArquivo =
        `alunos-inscritos-${anoSelecionado}-${dataFormatada.replace(
          /\//g,
          "-"
        )}.pdf`;

      doc.save(nomeArquivo);
    } catch (error) {
      console.error(
        "Erro ao gerar PDF:",
        error
      );

      setErro(
        "Não foi possível gerar o PDF."
      );
    }
  }

  // =====================================================
  // EXCLUIR
  // =====================================================

  async function excluirInscricao() {
    if (
      confirmacaoExclusao.toLowerCase() !==
      "excluir"
    ) {
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoExcluir.id_inscricoes}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        setErro(
          data.erro ||
            "Erro ao excluir inscrição."
        );

        return;
      }

      setInscricoes(
        (atual) =>
          atual.filter(
            (i) =>
              i.id_inscricoes !==
              inscricaoExcluir.id_inscricoes
          )
      );

      fecharModalExclusao();
    } catch (err) {
      console.error(err);

      setErro(
        "Não foi possível conectar ao servidor."
      );
    }
  }

  // =====================================================
  // EDITAR
  // =====================================================

  async function salvarEdicao() {
    if (!inscricaoEditando) {
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoEditando.id_inscricoes}`,
        {
          method: "PUT",

          headers: {
            "Content-Type":
              "application/json",

            ...getAuthHeaders(),
          },

          body: JSON.stringify({
            nome_poeta:
              inscricaoEditando.nome_poeta,

            turma:
              inscricaoEditando.turma,

            turno:
              inscricaoEditando.turno,

            curso:
              inscricaoEditando.curso,
          }),
        }
      );

      const data =
        await res.json();

      if (!res.ok) {
        setErro(
          data.erro ||
            "Erro ao salvar alterações."
        );

        return;
      }

      setInscricoes(
        (atual) =>
          atual.map(
            (i) =>
              i.id_inscricoes ===
              inscricaoEditando.id_inscricoes
                ? inscricaoEditando
                : i
          )
      );

      setInscricaoEditando(
        null
      );
    } catch (err) {
      console.error(err);

      setErro(
        "Não foi possível conectar ao servidor."
      );
    }
  }

  // =====================================================
  // MODAIS
  // =====================================================

  function fecharModalExclusao() {
    setInscricaoExcluir(
      null
    );

    setConfirmacaoExclusao(
      ""
    );
  }

  function obterInicial(nome) {
    if (!nome) {
      return "?";
    }

    return nome
      .trim()
      .charAt(0)
      .toUpperCase();
  }

  function abrirEdicao(
    inscricao
  ) {
    setErro("");

    setInscricaoEditando({
      ...inscricao,
    });
  }

  function abrirExclusao(
    inscricao
  ) {
    setErro("");

    setInscricaoExcluir(
      inscricao
    );

    setConfirmacaoExclusao(
      ""
    );
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <Page>
      <Layoutadm />

      <Content>
        <Header>
          <TitleArea>
            <Title>
              Inscrições dos Alunos
            </Title>

            <Subtitle>
              Gerencie as inscrições e
              informações dos alunos
              participantes.
            </Subtitle>
          </TitleArea>

          <Stats>
            <StatCard>
              <StatIcon $color="#831614">
                <FiUsers />
              </StatIcon>

              <StatContent>
                <StatNumber>
                  {inscricoesDoAno.length}
                </StatNumber>

                <StatLabel>
                  Inscrições em{" "}
                  {anoSelecionado}
                </StatLabel>
              </StatContent>
            </StatCard>
          </Stats>
        </Header>

        {/* =====================================================
            CARDS DOS ANOS
        ===================================================== */}

        <YearsWrapper>
          <YearArrow
            type="button"
            onClick={voltarAnos}
            onMouseMove={
              handleButtonMouseMove
            }
            disabled={
              anoInicial === 2026
            }
            aria-label="Anos anteriores"
          >
            <span className="buttonContent">
              <FiChevronLeft />
            </span>
          </YearArrow>

          <YearsContainer>
            {anosVisiveis.map(
              (ano) => {
                const quantidade =
                  quantidadePorAno(
                    ano
                  );

                const ativo =
                  anoSelecionado ===
                  ano;

                return (
                  <YearCard
                    key={ano}
                    type="button"
                    $active={ativo}
                    onClick={() =>
                      selecionarAno(
                        ano
                      )
                    }
                    onMouseMove={
                      handleButtonMouseMove
                    }
                  >
                    <YearIcon
                      $active={
                        ativo
                      }
                    >
                      <FiCalendar />
                    </YearIcon>

                    <YearNumber
                      $active={
                        ativo
                      }
                    >
                      {ano}
                    </YearNumber>

                    <YearDescription
                      $active={
                        ativo
                      }
                    >
                      {quantidade ===
                      0
                        ? "Nenhuma inscrição"
                        : quantidade ===
                          1
                        ? "1 inscrição"
                        : `${quantidade} inscrições`}
                    </YearDescription>
                  </YearCard>
                );
              }
            )}
          </YearsContainer>

          <YearArrow
            type="button"
            onClick={
              avancarAnos
            }
            onMouseMove={
              handleButtonMouseMove
            }
            aria-label="Próximos anos"
          >
            <span className="buttonContent">
              <FiChevronRight />
            </span>
          </YearArrow>
        </YearsWrapper>

        {/* =====================================================
            FILTROS DE TURNO
        ===================================================== */}

        <FilterContainer>
          {[
            {
              nome: "Todos",
              quantidade:
                totalTodos,
            },
            {
              nome: "Manhã",
              quantidade:
                totalManha,
            },
            {
              nome: "Tarde",
              quantidade:
                totalTarde,
            },
            {
              nome: "Noite",
              quantidade:
                totalNoite,
            },
          ].map(
            (item) => (
              <FilterButton
                key={item.nome}
                $active={
                  turno ===
                  item.nome
                }
                onClick={() =>
                  setTurno(
                    item.nome
                  )
                }
                onMouseMove={
                  handleButtonMouseMove
                }
              >
                <span>
                  {item.nome}
                </span>

                <strong>
                  {
                    item.quantidade
                  }
                </strong>
              </FilterButton>
            )
          )}
        </FilterContainer>

        {erro && (
          <ErrorMessage>
            <FiAlertTriangle />

            <span>
              {erro}
            </span>
          </ErrorMessage>
        )}

        {carregando ? (
          <LoadingState>
            <Spinner />

            <span>
              Carregando
              inscrições...
            </span>
          </LoadingState>
        ) : (
          <TableContainer>
            <TableHeader>
              <TableHeaderInfo>
                <TableTitle>
                  Alunos inscritos
                </TableTitle>

                <TableDescription>
                  {inscricoesFiltradas.length ===
                  1
                    ? "1 aluno encontrado"
                    : `${inscricoesFiltradas.length} alunos encontrados`}
                </TableDescription>
              </TableHeaderInfo>

              <DownloadButton
                type="button"
                onClick={
                  baixarPDF
                }
                onMouseMove={
                  handleButtonMouseMove
                }
                title="Baixar lista de alunos em PDF"
                aria-label="Baixar lista de alunos em PDF"
              >
                <FiDownload />

                <span>
                  Baixar PDF
                </span>
              </DownloadButton>
            </TableHeader>

            <TableWrapper>
              <Table>
                <thead>
                  <tr>
                    <th>
                      Aluno
                    </th>

                    <th>
                      Turma
                    </th>

                    <th>
                      Curso
                    </th>

                    <th>
                      Turno
                    </th>

                    <th>
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {inscricoesFiltradas.map(
                    (
                      inscricao
                    ) => (
                      <tr
                        key={
                          inscricao.id_inscricoes
                        }
                      >
                        <td>
                          <StudentCell>
                            <StudentAvatar>
                              {obterInicial(
                                inscricao.nome_poeta
                              )}
                            </StudentAvatar>

                            <StudentInfo>
                              <StudentName>
                                {
                                  inscricao.nome_poeta
                                }
                              </StudentName>
                            </StudentInfo>
                          </StudentCell>
                        </td>

                        <td>
                          <Badge>
                            {
                              inscricao.turma
                            }
                          </Badge>
                        </td>

                        <td>
                          <Badge $type="course">
                            <FiBookOpen />

                            {
                              inscricao.curso
                            }
                          </Badge>
                        </td>

                        <td>
                          <TurnoBadge
                            $turno={
                              inscricao.turno
                            }
                          >
                            <span />

                            {
                              inscricao.turno
                            }
                          </TurnoBadge>
                        </td>

                        <td>
                          <Actions>
                            <ActionButton
                              type="button"
                              $variant="edit"
                              title="Editar inscrição"
                              aria-label={`Editar ${inscricao.nome_poeta}`}
                              onClick={() =>
                                abrirEdicao(
                                  inscricao
                                )
                              }
                              onMouseMove={
                                handleButtonMouseMove
                              }
                            >
                              <FiEdit />
                            </ActionButton>

                            <ActionButton
                              type="button"
                              $variant="delete"
                              title="Excluir inscrição"
                              aria-label={`Excluir ${inscricao.nome_poeta}`}
                              onClick={() =>
                                abrirExclusao(
                                  inscricao
                                )
                              }
                              onMouseMove={
                                handleButtonMouseMove
                              }
                            >
                              <FiTrash2 />
                            </ActionButton>
                          </Actions>
                        </td>
                      </tr>
                    )
                  )}

                  {inscricoesFiltradas.length ===
                    0 && (
                    <tr>
                      <td colSpan={5}>
                        <EmptyState>
                          <EmptyIcon>
                            <FiSearch />
                          </EmptyIcon>

                          <EmptyTitle>
                            Nenhuma
                            inscrição
                            encontrada
                          </EmptyTitle>

                          <EmptyText>
                            {turno ===
                            "Todos"
                              ? `Não existem alunos inscritos em ${anoSelecionado}.`
                              : `Não existem alunos inscritos no turno da ${turno.toLowerCase()} em ${anoSelecionado}.`}
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

      {/* =====================================================
          MODAL DE EDIÇÃO
      ===================================================== */}

      {inscricaoEditando && (
        <ModalOverlay
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
              setInscricaoEditando(
                null
              );
            }
          }}
        >
          <Modal>
            <ModalHeader>
              <div>
                <ModalTitle>
                  Editar inscrição
                </ModalTitle>

                <ModalDescription>
                  Atualize os dados
                  do aluno abaixo.
                </ModalDescription>
              </div>

              <ModalClose
                type="button"
                onClick={() =>
                  setInscricaoEditando(
                    null
                  )
                }
                onMouseMove={
                  handleButtonMouseMove
                }
                aria-label="Fechar"
              >
                <FiX />
              </ModalClose>
            </ModalHeader>

            <Form>
              <FormGroup>
                <Label>
                  Nome do aluno
                </Label>

                <Input
                  value={
                    inscricaoEditando.nome_poeta ||
                    ""
                  }
                  onChange={(e) =>
                    setInscricaoEditando(
                      {
                        ...inscricaoEditando,
                        nome_poeta:
                          e.target
                            .value,
                      }
                    )
                  }
                  placeholder="Nome completo"
                />
              </FormGroup>

              <FormGroup>
                <Label>
                  Turma
                </Label>

                <Select
                  value={
                    inscricaoEditando.turma ||
                    ""
                  }
                  onChange={(e) =>
                    setInscricaoEditando(
                      {
                        ...inscricaoEditando,
                        turma:
                          e.target
                            .value,
                      }
                    )
                  }
                >
                  <option value="">
                    Selecione a
                    turma
                  </option>

                  <option value="1º ano">
                    1º ano
                  </option>

                  <option value="2º ano">
                    2º ano
                  </option>

                  <option value="3º ano">
                    3º ano
                  </option>
                </Select>
              </FormGroup>

              <FormGroup>
                <Label>
                  Curso
                </Label>

                <Select
                  value={
                    inscricaoEditando.curso ||
                    ""
                  }
                  onChange={(e) =>
                    setInscricaoEditando(
                      {
                        ...inscricaoEditando,
                        curso:
                          e.target
                            .value,
                      }
                    )
                  }
                >
                  <option value="">
                    Selecione o
                    curso
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
                <Label>
                  Turno
                </Label>

                <Select
                  value={
                    inscricaoEditando.turno ||
                    ""
                  }
                  onChange={(e) =>
                    setInscricaoEditando(
                      {
                        ...inscricaoEditando,
                        turno:
                          e.target
                            .value,
                      }
                    )
                  }
                >
                  <option value="Manhã">
                    Manhã
                  </option>

                  <option value="Tarde">
                    Tarde
                  </option>

                  <option value="Noite">
                    Noite
                  </option>
                </Select>
              </FormGroup>

              <ModalButtons>
                <CancelButton
                  type="button"
                  onClick={() =>
                    setInscricaoEditando(
                      null
                    )
                  }
                  onMouseMove={
                    handleButtonMouseMove
                  }
                >
                  Cancelar
                </CancelButton>

                <SaveButton
                  type="button"
                  onClick={
                    salvarEdicao
                  }
                  onMouseMove={
                    handleButtonMouseMove
                  }
                >
                  Salvar alterações
                </SaveButton>
              </ModalButtons>
            </Form>
          </Modal>
        </ModalOverlay>
      )}

      {/* =====================================================
          MODAL DE EXCLUSÃO
      ===================================================== */}

      {inscricaoExcluir && (
        <ModalOverlay
          onMouseDown={(e) => {
            if (
              e.target ===
              e.currentTarget
            ) {
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
                  Esta ação precisa
                  ser confirmada.
                </ModalDescription>
              </div>

              <ModalClose
                type="button"
                onClick={
                  fecharModalExclusao
                }
                onMouseMove={
                  handleButtonMouseMove
                }
                aria-label="Fechar"
              >
                <FiX />
              </ModalClose>
            </ModalHeader>

            <WarningBox>
              <FiAlertTriangle />

              <div>
                <strong>
                  Atenção
                </strong>

                <p>
                  Você está prestes
                  a excluir a
                  inscrição de{" "}
                  <strong>
                    {
                      inscricaoExcluir.nome_poeta
                    }
                  </strong>
                  . O usuário
                  voltará a ser
                  aluno comum.
                </p>
              </div>
            </WarningBox>

            <Form>
              <FormGroup>
                <Label>
                  Digite{" "}
                  <strong>
                    excluir
                  </strong>{" "}
                  para confirmar
                </Label>

                <Input
                  type="text"
                  placeholder="Digite excluir"
                  value={
                    confirmacaoExclusao
                  }
                  onChange={(e) =>
                    setConfirmacaoExclusao(
                      e.target
                        .value
                    )
                  }
                  autoComplete="off"
                />
              </FormGroup>

              <ModalButtons>
                <CancelButton
                  type="button"
                  onClick={
                    fecharModalExclusao
                  }
                  onMouseMove={
                    handleButtonMouseMove
                  }
                >
                  Cancelar
                </CancelButton>

                <ConfirmButton
                  type="button"
                  onClick={
                    excluirInscricao
                  }
                  onMouseMove={
                    handleButtonMouseMove
                  }
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