import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import {
  FaInstagram,
  FaEnvelope,
  FaYoutube,
  FaCheckCircle,
} from "react-icons/fa";

import {
  getUsuarioLogado,
  salvarUsuarioLogado,
} from "../../../utils/auth";

import {
  Page,
  TitleArea,
  Title,
  Container,
  LeftSide,
  SectionTitle,
  InfoText,
  RightSide,
  Form,
  Input,
  Select,
  SocialContainer,
  Button,
  AlreadyBox,
  AlreadyTitle,
  AlreadyText,
  AlreadyDetails,
  ModalOverlay,
  Modal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";

export default function Inscricao() {
  const [nomePoeta, setNomePoeta] = useState("");
  const [turma, setTurma] = useState("");
  const [turno, setTurno] = useState("");
  const [curso, setCurso] = useState("");

  const [erro, setErro] = useState("");
  const [sucesso, setSucesso] = useState("");

  const [carregando, setCarregando] = useState(true);
  const [jaInscrito, setJaInscrito] = useState(false);
  const [inscricao, setInscricao] = useState(null);

  const [showSubmitModal, setShowSubmitModal] = useState(false);

  useEffect(() => {
    const usuarioLogado = getUsuarioLogado();

    if (usuarioLogado?.tipo !== "poeta") {
      setCarregando(false);
      return;
    }

    fetch(`http://localhost:3001/inscricao/${usuarioLogado.email}`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        setInscricao(data);
        setJaInscrito(true);
      })
      .catch(() => {
        setJaInscrito(false);
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    setErro("");
    setSucesso("");

    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado?.email) {
      setErro(
        "Não foi possível identificar seu usuário. Faça login novamente."
      );
      return;
    }

    if (!nomePoeta || !turma || !turno || !curso) {
      setErro("Preencha todos os campos.");
      return;
    }

    setShowSubmitModal(true);
  }

  async function confirmarInscricao() {
    setShowSubmitModal(false);

    const usuarioLogado = getUsuarioLogado();

    try {
      const res = await fetch("http://localhost:3001/inscricao", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: usuarioLogado.email,
          nome_poeta: nomePoeta,
          turma,
          turno,
          curso,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao realizar inscrição.");
        return;
      }

      salvarUsuarioLogado({
        ...usuarioLogado,
        tipo: data.tipo,
      });

      setSucesso(
        "Inscrição realizada com sucesso! Você agora é um Poeta."
      );

      setInscricao({
        nome_poeta: nomePoeta,
        turma,
        turno,
        curso,
      });

      setJaInscrito(true);
    } catch (err) {
      console.error(err);
      setErro("Não foi possível conectar ao servidor.");
    }
  }

  return (
    <Page>
      <Layout />

      <TitleArea>
        <Title>
          {jaInscrito ? "Sua inscrição" : "Faça sua inscrição"}
        </Title>
      </TitleArea>

      <Container>
        <LeftSide>
          <SectionTitle>
            Contatos
          </SectionTitle>

          <SocialContainer>
            <InfoText>
              <FaInstagram />

              <div>
                <strong>Instagram</strong>
                <p>@seuinstagram</p>
              </div>
            </InfoText>

            <InfoText>
              <FaEnvelope />

              <div>
                <strong>Email</strong>
                <p>contato@email.com</p>
              </div>
            </InfoText>

            <InfoText>
              <FaYoutube />

              <div>
                <strong>YouTube</strong>
                <p>Seu Canal</p>
              </div>
            </InfoText>
          </SocialContainer>
        </LeftSide>

        <RightSide>
          {carregando ? null : jaInscrito ? (
            <AlreadyBox>
              <FaCheckCircle />

              <AlreadyTitle>
                Inscrição já realizada!
              </AlreadyTitle>

              <AlreadyText>
                Você já está inscrito no Slam Etecamp como Poeta.
                Boa sorte na competição!
              </AlreadyText>

              {inscricao && (
                <AlreadyDetails>
                  <span>
                    <strong>Nome:</strong>{" "}
                    {inscricao.nome_poeta}
                  </span>

                  <span>
                    <strong>Turma:</strong>{" "}
                    {inscricao.turma}
                  </span>

                  <span>
                    <strong>Curso:</strong>{" "}
                    {inscricao.curso}
                  </span>

                  <span>
                    <strong>Turno:</strong>{" "}
                    {inscricao.turno}
                  </span>
                </AlreadyDetails>
              )}
            </AlreadyBox>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Input
                id="nomePoeta"
                name="nomePoeta"
                placeholder="Nome completo (poeta)"
                value={nomePoeta}
                onChange={(e) =>
                  setNomePoeta(e.target.value)
                }
              />

              <Select
                id="turma"
                name="turma"
                value={turma}
                onChange={(e) =>
                  setTurma(e.target.value)
                }
              >
                <option value="">
                  Selecione a turma
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

              <Select
                id="curso"
                name="curso"
                value={curso}
                onChange={(e) =>
                  setCurso(e.target.value)
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

              <Select
                id="turno"
                name="turno"
                value={turno}
                onChange={(e) =>
                  setTurno(e.target.value)
                }
              >
                <option value="">
                  Selecione o turno
                </option>

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

              {erro && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.9rem",
                  }}
                >
                  {erro}
                </p>
              )}

              {sucesso && (
                <p
                  style={{
                    color: "#2e7d32",
                    fontSize: "0.9rem",
                  }}
                >
                  {sucesso}
                </p>
              )}

              <Button type="submit">
                Enviar
              </Button>
            </Form>
          )}
        </RightSide>
      </Container>

      {showSubmitModal && (
        <ModalOverlay>
          <Modal>
            <h3>
              Confirmar inscrição
            </h3>

            <p>
              Tem certeza de que deseja enviar a inscrição?
            </p>

            <ModalButtons>
              <CancelButton
                onClick={() =>
                  setShowSubmitModal(false)
                }
              >
                Cancelar
              </CancelButton>

              <ConfirmButton
                onClick={confirmarInscricao}
              >
                Sim, enviar
              </ConfirmButton>
            </ModalButtons>
          </Modal>
        </ModalOverlay>
      )}
    </Page>
  );
}
