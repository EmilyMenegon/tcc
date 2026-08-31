import { useEffect, useState } from "react";
import Layout from "../../../components/layout";

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
  InputWrapper,
  InputLabel,
  Input,
  SelectWrapper,
  SelectLabel,
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

    fetch(
      `http://localhost:3001/inscricao/${usuarioLogado.email}`
    )
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
      const res = await fetch(
        "http://localhost:3001/inscricao",
        {
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
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setErro(
          data.erro || "Erro ao realizar inscrição."
        );
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

      setErro(
        "Não foi possível conectar ao servidor."
      );
    }
  }

  /*
   * ============================================================
   * ANIMAÇÃO DO BOTÃO
   * ============================================================
   */

  function handleButtonMouseEnter(e) {
    const button = e.currentTarget;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);

    button.classList.remove("button-leaving");

    /*
     * Força o navegador a reconhecer
     * a posição inicial antes de iniciar
     * a expansão.
     */
    requestAnimationFrame(() => {
      button.classList.add("button-hovering");
    });
  }

  function handleButtonMouseMove(e) {
    const button = e.currentTarget;

    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  }

  function handleButtonMouseLeave(e) {
    const button = e.currentTarget;

    /*
     * Mantém exatamente a última posição
     * do mouse.
     *
     * Não colocamos 50% / 50%.
     */
    button.classList.remove("button-hovering");

    button.classList.add("button-leaving");

    /*
     * Depois que a animação de saída terminar,
     * removemos a classe.
     */
    setTimeout(() => {
      if (button && button.matches(":hover") === false) {
        button.classList.remove("button-leaving");
      }
    }, 500);
  }

  return (
    <Page>
      <Layout />

      <TitleArea>
        <div>
          <Title>
            {jaInscrito
              ? "Sua inscrição"
              : "Faça sua inscrição"}
          </Title>

          {!jaInscrito && (
            <p className="title-description">
              Preencha seus dados para participar
              da competição como poeta.
            </p>
          )}
        </div>
      </TitleArea>

      <Container>
        <LeftSide>
          <div className="left-content">
            <SectionTitle>
              Contatos
            </SectionTitle>

            <p className="contact-description">
              Acompanhe o Slam Etecamp e fique por
              dentro das novidades.
            </p>

            <SocialContainer>
              <InfoText>
                <div className="icon-box">
                  <FaInstagram />
                </div>

                <div className="info-content">
                  <strong>Instagram</strong>
                  <p>@seuinstagram</p>
                </div>
              </InfoText>

              <InfoText>
                <div className="icon-box">
                  <FaEnvelope />
                </div>

                <div className="info-content">
                  <strong>Email</strong>
                  <p>contato@email.com</p>
                </div>
              </InfoText>

              <InfoText>
                <div className="icon-box">
                  <FaYoutube />
                </div>

                <div className="info-content">
                  <strong>YouTube</strong>
                  <p>Seu Canal</p>
                </div>
              </InfoText>
            </SocialContainer>
          </div>
        </LeftSide>

        <RightSide>
          {carregando ? (
            <div className="loading">
              <div className="loading-spinner" />
              <p>Carregando...</p>
            </div>
          ) : jaInscrito ? (
            <AlreadyBox>
              <div className="success-icon">
                <FaCheckCircle />
              </div>

              <AlreadyTitle>
                Inscrição já realizada!
              </AlreadyTitle>

              <AlreadyText>
                Você já está inscrito no Slam Etecamp
                como Poeta. Boa sorte na competição!
              </AlreadyText>

              {inscricao && (
                <AlreadyDetails>
                  <div className="detail-header">
                    <span />
                    <strong>
                      Dados da inscrição
                    </strong>
                    <span />
                  </div>

                  <div className="detail-row">
                    <span>Nome</span>
                    <strong>
                      {inscricao.nome_poeta}
                    </strong>
                  </div>

                  <div className="detail-row">
                    <span>Turma</span>
                    <strong>
                      {inscricao.turma}
                    </strong>
                  </div>

                  <div className="detail-row">
                    <span>Curso</span>
                    <strong>
                      {inscricao.curso}
                    </strong>
                  </div>

                  <div className="detail-row">
                    <span>Turno</span>
                    <strong>
                      {inscricao.turno}
                    </strong>
                  </div>
                </AlreadyDetails>
              )}
            </AlreadyBox>
          ) : (
            <div className="form-area">
              <div className="form-header">
                <h2>
                  Dados do poeta
                </h2>

                <p>
                  Informe seus dados para confirmar
                  sua participação.
                </p>
              </div>

              <Form onSubmit={handleSubmit}>
                <InputWrapper>
                  <InputLabel htmlFor="nomePoeta">
                    Nome completo
                  </InputLabel>

                  <Input
                    id="nomePoeta"
                    name="nomePoeta"
                    type="text"
                    placeholder=" "
                    value={nomePoeta}
                    onChange={(e) =>
                      setNomePoeta(e.target.value)
                    }
                  />
                </InputWrapper>

                <div className="form-row">
                  <SelectWrapper>
                    <SelectLabel htmlFor="turma">
                      Turma
                    </SelectLabel>

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
                  </SelectWrapper>

                  <SelectWrapper>
                    <SelectLabel htmlFor="curso">
                      Curso
                    </SelectLabel>

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
                  </SelectWrapper>
                </div>

                <SelectWrapper>
                  <SelectLabel htmlFor="turno">
                    Turno
                  </SelectLabel>

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
                </SelectWrapper>

                {erro && (
                  <div className="form-message error">
                    {erro}
                  </div>
                )}

                {sucesso && (
                  <div className="form-message success">
                    {sucesso}
                  </div>
                )}

                <Button
                  type="submit"
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseMove={handleButtonMouseMove}
                  onMouseLeave={handleButtonMouseLeave}
                >
                  <span className="button-content">
                    Enviar inscrição
                  </span>
                </Button>
              </Form>
            </div>
          )}
        </RightSide>
      </Container>

      {showSubmitModal && (
        <ModalOverlay
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setShowSubmitModal(false);
            }
          }}
        >
          <Modal>
            <div className="modal-icon">
              <span>?</span>
            </div>

            <h3>
              Confirmar inscrição
            </h3>

            <p>
              Tem certeza de que deseja enviar
              sua inscrição?
            </p>

            <div className="modal-summary">
              <div>
                <span>Poeta</span>
                <strong>{nomePoeta}</strong>
              </div>

              <div>
                <span>Turma</span>
                <strong>{turma}</strong>
              </div>

              <div>
                <span>Curso</span>
                <strong>{curso}</strong>
              </div>
            </div>

            <ModalButtons>
              <CancelButton
                type="button"
                onClick={() =>
                  setShowSubmitModal(false)
                }
              >
                Cancelar
              </CancelButton>

              <ConfirmButton
                type="button"
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
