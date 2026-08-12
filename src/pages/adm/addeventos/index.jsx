import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiUpload } from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Card,
  UploadArea,
  Form,
  Row,
  Input,
  TextArea,
  ButtonGroup,
  CancelButton,
  SaveButton,

  SectionTitle,
  ParticipantRow,
  ParticipantList,
  ParticipantCard,
  RemoveButton,
  AddButton,
} from "./style";

export default function AddEventos() {

  const navigate = useNavigate();

  const fileRef = useRef();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [local, setLocal] = useState("");
  const [imagem, setImagem] = useState(null);

  const [nomeAluno, setNomeAluno] = useState("");
  const [turmaAluno, setTurmaAluno] = useState("");

  const [participantes, setParticipantes] = useState([]);

  function selecionarImagem(e) {

    const arquivo = e.target.files[0];

    if (arquivo) {
      setImagem(URL.createObjectURL(arquivo));
    }
  }

  function adicionarParticipante() {

    if (!nomeAluno.trim()) return;

    const novo = {
      id: Date.now(),
      nome: nomeAluno,
      turma: turmaAluno
    };

    setParticipantes([...participantes, novo]);

    setNomeAluno("");
    setTurmaAluno("");
  }

  function removerParticipante(id) {

    setParticipantes(
      participantes.filter(
        participante => participante.id !== id
      )
    );

  }

  function criarEvento() {

    const evento = {

      id: Date.now(),

      nome: titulo,

      descricao,

      data,

      horario: hora,

      local,

      imagem: imagem || "/image.png",

      participantes,

      ranking: [...participantes]

    };

    const eventos =
      JSON.parse(localStorage.getItem("eventos")) || [];

    localStorage.setItem(
      "eventos",
      JSON.stringify([...eventos, evento])
    );

    navigate("/adm/eventos");

  }

  return (

    <Page>

      <Content>

        <Header>

          <Title>
            Criar Evento
          </Title>

        </Header>

        <Card>

          <UploadArea
            onClick={() => fileRef.current.click()}
          >

            <FiUpload size={45} />

            <span>
              Clique para adicionar uma imagem
            </span>

            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              hidden
              onChange={selecionarImagem}
            />

          </UploadArea>

          <Form>

            <Input
              placeholder="Título do evento"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />

            <TextArea
              placeholder="Descrição do evento"
              rows={5}
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />

            <Row>

              <Input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />

              <Input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />

            </Row>

            <Input
              placeholder="Local do evento"
              value={local}
              onChange={(e) => setLocal(e.target.value)}
            />

            <SectionTitle>
              Participantes
            </SectionTitle>

            <ParticipantRow>

              <Input
                placeholder="Nome do participante"
                value={nomeAluno}
                onChange={(e) =>
                  setNomeAluno(e.target.value)
                }
              />

              <Input
                placeholder="Turma"
                value={turmaAluno}
                onChange={(e) =>
                  setTurmaAluno(e.target.value)
                }
              />

              <AddButton
                type="button"
                onClick={adicionarParticipante}
              >
                Adicionar
              </AddButton>

            </ParticipantRow>

            <ParticipantList>

              {participantes.length === 0 && (

                <p>
                  Nenhum participante adicionado.
                </p>

              )}

              {participantes.map((participante) => (

                <ParticipantCard
                  key={participante.id}
                >

                  <div>

                    <strong>
                      {participante.nome}
                    </strong>

                    <br />

                    <span>
                      {participante.turma}
                    </span>

                  </div>

                  <RemoveButton
                    type="button"
                    onClick={() =>
                      removerParticipante(participante.id)
                    }
                  >
                    Remover
                  </RemoveButton>

                </ParticipantCard>

              ))}

            </ParticipantList>

            <ButtonGroup>

              <CancelButton
                onClick={() =>
                  navigate("/adm/eventos")
                }
              >
                Cancelar
              </CancelButton>

              <SaveButton
                onClick={criarEvento}
              >
                Criar Evento
              </SaveButton>

            </ButtonGroup>

          </Form>

        </Card>

      </Content>

    </Page>

  );

}