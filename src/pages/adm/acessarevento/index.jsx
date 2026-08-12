import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layoutadm from "../../../components/Layoutadm";

import {
  Page,
  Container,
  Card,
  Image,
  Title,
  Description,
  Info,
  BackButton,

  Section,
  SectionTitle,
  ParticipantItem,
  RankingItem,
  Position,
  Actions,
  ActionButton,
  RemoveButton,
  EmptyText

} from "./style";

import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaTrophy,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
  FaTrashAlt
} from "react-icons/fa";

export default function AcessarEvento() {

  const { id } = useParams();

  const navigate = useNavigate();

  const eventos =
    JSON.parse(localStorage.getItem("eventos")) || [];

  const indiceEvento =
    eventos.findIndex(
      item => item.id === Number(id)
    );

  if (indiceEvento === -1) {

    return (

      <Page>

        <h2>
          Evento não encontrado
        </h2>

      </Page>

    );

  }

  const eventoInicial = eventos[indiceEvento];

  const [ranking, setRanking] = useState(
    eventoInicial.ranking || []
  );

  const [participantes, setParticipantes] = useState(
    eventoInicial.participantes || []
  );

  function salvar(novoRanking, novosParticipantes) {

    const copia = [...eventos];

    copia[indiceEvento] = {

      ...copia[indiceEvento],

      ranking: novoRanking,

      participantes: novosParticipantes

    };

    localStorage.setItem(
      "eventos",
      JSON.stringify(copia)
    );

  }

  function subir(index) {

    if (index === 0) return;

    const novo = [...ranking];

    [novo[index - 1], novo[index]] =
      [novo[index], novo[index - 1]];

    setRanking(novo);

    salvar(novo, participantes);

  }

  function descer(index) {

    if (index === ranking.length - 1) return;

    const novo = [...ranking];

    [novo[index], novo[index + 1]] =
      [novo[index + 1], novo[index]];

    setRanking(novo);

    salvar(novo, participantes);

  }

  function remover(idParticipante) {

    const novoRanking =
      ranking.filter(
        item => item.id !== idParticipante
      );

    const novosParticipantes =
      participantes.filter(
        item => item.id !== idParticipante
      );

    setRanking(novoRanking);

    setParticipantes(novosParticipantes);

    salvar(
      novoRanking,
      novosParticipantes
    );

  }

  return (

    <Page>

      <Layoutadm />

      <Container>

        <Card>

          <Image
            src={eventoInicial.imagem}
            alt={eventoInicial.nome}
          />

          <Title>

            {eventoInicial.nome}

          </Title>

          <Description>

            {eventoInicial.descricao}

          </Description>

        <Info>
  <FaCalendarAlt />
  <span>Data:</span>
  <strong>{eventoInicial.data}</strong>
</Info>

         <Info>
  <FaClock />
  <span>Horário:</span>
  <strong>{eventoInicial.horario}</strong>
</Info>

<Info>
  <FaMapMarkerAlt />
  <span>Local:</span>
  <strong>{eventoInicial.local}</strong>
</Info>

          <Section>

           <SectionTitle>
  <FaUsers />
  Participantes ({participantes.length})
</SectionTitle>

            {

              participantes.length === 0 ?

                (

                  <EmptyText>

                    Nenhum participante.

                  </EmptyText>

                )

                :

                participantes.map((participante) => (

                  <ParticipantItem
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

                  </ParticipantItem>

                ))

            }

          </Section>

          <Section>

         <SectionTitle>
  <FaTrophy />
  Ranking
</SectionTitle>

            {

              ranking.length === 0 ?

                (

                  <EmptyText>

                    Nenhum participante.

                  </EmptyText>

                )

                :

                ranking.map((participante, index) => (

                  <RankingItem
                    key={participante.id}
                  >

                    <Position>

                      {index + 1}º

                    </Position>

                    <div>

                      <strong>

                        {participante.nome}

                      </strong>

                      <br />

                      <span>

                        {participante.turma}

                      </span>

                    </div>

                    <Actions>

                    <ActionButton onClick={() => subir(index)}>
  <FaArrowUp />
</ActionButton>

                     <ActionButton onClick={() => descer(index)}>
  <FaArrowDown />
</ActionButton>

                   <RemoveButton onClick={() => remover(participante.id)}>
  <FaTrashAlt />
</RemoveButton>

                    </Actions>

                  </RankingItem>

                ))

            }

          </Section>

          <BackButton
            onClick={() =>
              navigate("/adm/eventos")
            }
          >

            Voltar

          </BackButton>

        </Card>

      </Container>

    </Page>

  );

}