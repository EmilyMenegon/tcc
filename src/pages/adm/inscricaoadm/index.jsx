import { useEffect, useState } from "react";
import Layoutadm from "../../../components/layoutadm";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  Page,
  Content,
  Title,
  FilterContainer,
  FilterButton,
  TableContainer,
  Table,
  Actions,
  Modal,
  ModalBox,
  Input,
  Select,
  SaveButton,
  CancelButton,
  ModalOverlay,
  ModalButtons,
  ConfirmButton,
} from "./style";


export default function Inscricaoadm() {

  const [turno, setTurno] = useState("Manhã");
  const [inscricoes, setInscricoes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  const [inscricaoEditando, setInscricaoEditando] = useState(null);
  const [inscricaoExcluir, setInscricaoExcluir] = useState(null);

  /* CONFIRMAÇÃO DA EXCLUSÃO */
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState("");


  /* ============================================================
     BUSCAR INSCRIÇÕES DO BANCO
  ============================================================ */

  useEffect(() => {
    buscarInscricoes();
  }, []);

  function buscarInscricoes() {

    setCarregando(true);

    fetch("http://localhost:3001/inscricoes")
      .then((res) => res.json())
      .then((data) => setInscricoes(data))
      .catch(() => setErro("Não foi possível carregar as inscrições."))
      .finally(() => setCarregando(false));

  }


  /* ============================================================
     EXCLUIR INSCRIÇÃO
  ============================================================ */

  async function excluirInscricao() {

    if (confirmacaoExclusao !== "excluir") return;

    try {

      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoExcluir.id_inscricoes}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao excluir inscrição.");
        return;
      }

      setInscricoes((atual) =>
        atual.filter((i) => i.id_inscricoes !== inscricaoExcluir.id_inscricoes)
      );

      setInscricaoExcluir(null);
      setConfirmacaoExclusao("");

    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    }

  }


  /* ============================================================
     SALVAR EDIÇÃO
  ============================================================ */

  async function salvarEdicao() {

    try {

      const res = await fetch(
        `http://localhost:3001/inscricao/${inscricaoEditando.id_inscricoes}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
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
          i.id_inscricoes === inscricaoEditando.id_inscricoes ? inscricaoEditando : i
        )
      );

      setInscricaoEditando(null);

    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    }

  }


  const inscricoesFiltradas = inscricoes.filter(
    (inscricao) => inscricao.turno === turno
  );


  return (

    <Page>

      <Layoutadm />

      <Content>

        <Title>
          Inscrições dos Alunos
        </Title>

        <FilterContainer>
          {["Manhã", "Tarde", "Noite"].map((item) => (
            <FilterButton
              key={item}
              $active={turno === item}
              onClick={() => setTurno(item)}
            >
              {item}
            </FilterButton>
          ))}
        </FilterContainer>

        {erro && (
          <p style={{ color: "red", textAlign: "center", marginBottom: "15px" }}>
            {erro}
          </p>
        )}

        {carregando ? (
          <p style={{ textAlign: "center" }}>Carregando inscrições...</p>
        ) : (

          <TableContainer>

            <Table>

              <thead>
                <tr>
                  <th>Nome do poeta</th>
                  <th>Turma</th>
                  <th>Curso</th>
                  <th>Turno</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {inscricoesFiltradas.map((inscricao) => (
                  <tr key={inscricao.id_inscricoes}>

                    <td>{inscricao.nome_poeta}</td>
                    <td>{inscricao.turma}</td>
                    <td>{inscricao.curso}</td>
                    <td>{inscricao.turno}</td>

                    <td>
                      <Actions>

                        <FiEdit
                          onClick={() => setInscricaoEditando({ ...inscricao })}
                        />

                        <FiTrash2
                          onClick={() => {
                            setInscricaoExcluir(inscricao);
                            setConfirmacaoExclusao("");
                          }}
                        />

                      </Actions>
                    </td>

                  </tr>
                ))}

                {inscricoesFiltradas.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center", padding: "20px" }}>
                      Nenhuma inscrição para esse turno.
                    </td>
                  </tr>
                )}
              </tbody>

            </Table>

          </TableContainer>

        )}

      </Content>


      {/* ============================================================
          MODAL DE EDIÇÃO
      ============================================================ */}

      {inscricaoEditando && (
        <ModalOverlay>
          <Modal>

            <h2>Editar inscrição</h2>

            <Input
              value={inscricaoEditando.nome_poeta}
              onChange={(e) =>
                setInscricaoEditando({ ...inscricaoEditando, nome_poeta: e.target.value })
              }
            />

            <Select
              value={inscricaoEditando.turma}
              onChange={(e) =>
                setInscricaoEditando({ ...inscricaoEditando, turma: e.target.value })
              }
            >
              <option value="">Selecione a turma</option>
              <option value="1º ano">1º ano</option>
              <option value="2º ano">2º ano</option>
              <option value="3º ano">3º ano</option>
            </Select>

            <Select
              value={inscricaoEditando.curso}
              onChange={(e) =>
                setInscricaoEditando({ ...inscricaoEditando, curso: e.target.value })
              }
            >
              <option value="">Selecione o curso</option>
              <option value="Informática">Informática</option>
              <option value="Marketing">Marketing</option>
              <option value="Administração">Administração</option>
              <option value="Humanas">Humanas</option>
            </Select>

            <Select
              value={inscricaoEditando.turno}
              onChange={(e) =>
                setInscricaoEditando({ ...inscricaoEditando, turno: e.target.value })
              }
            >
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </Select>

            <ModalButtons>

              <CancelButton onClick={() => setInscricaoEditando(null)}>
                Cancelar
              </CancelButton>

              <SaveButton onClick={salvarEdicao}>
                Salvar
              </SaveButton>

            </ModalButtons>

          </Modal>
        </ModalOverlay>
      )}


      {/* ============================================================
          CONFIRMAÇÃO DE EXCLUSÃO
      ============================================================ */}

      {inscricaoExcluir && (
        <ModalOverlay>
          <Modal>

            <h2>Excluir inscrição</h2>

            <p style={{ textAlign: "center", color: "#666", marginBottom: "5px" }}>
              Tem certeza que deseja excluir a inscrição de{" "}
              <strong>{inscricaoExcluir.nome_poeta}</strong>? O usuário voltará a ser aluno comum.
            </p>

            <p style={{ textAlign: "center", color: "#666", fontSize: "14px", marginBottom: "5px" }}>
              Para confirmar, digite <strong>excluir</strong> abaixo:
            </p>

            <Input
              type="text"
              placeholder="Digite excluir"
              value={confirmacaoExclusao}
              onChange={(e) => setConfirmacaoExclusao(e.target.value)}
            />

            <ModalButtons>

              <CancelButton
                onClick={() => {
                  setInscricaoExcluir(null);
                  setConfirmacaoExclusao("");
                }}
              >
                Cancelar
              </CancelButton>

              <ConfirmButton
                onClick={excluirInscricao}
                disabled={confirmacaoExclusao !== "excluir"}
              >
                Excluir
              </ConfirmButton>

            </ModalButtons>

          </Modal>
        </ModalOverlay>
      )}

    </Page>

  );

}