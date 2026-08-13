import Layout from "../../../components/Layout";

import {
  FaInstagram,
  FaEnvelope,
  FaYoutube
} from "react-icons/fa";

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
  SocialContainer,
  Button
} from "./style";


export default function Inscricao() {

  return (

    <Page>

      <Layout />


      {/* =================================
          TÍTULO
      ================================= */}

      <TitleArea>

        <Title>
          Faça sua inscrição
        </Title>

      </TitleArea>


      {/* =================================
          CONTAINER
      ================================= */}

      <Container>


        {/* =================================
            LADO ESQUERDO
        ================================= */}

        <LeftSide>

          <SectionTitle>
            Contatos
          </SectionTitle>


          <SocialContainer>


            {/* INSTAGRAM */}

            <InfoText>

              <FaInstagram />

              <div>

                <strong>
                  Instagram
                </strong>

                <p>
                  @seuinstagram
                </p>

              </div>

            </InfoText>


            {/* EMAIL */}

            <InfoText>

              <FaEnvelope />

              <div>

                <strong>
                  Email
                </strong>

                <p>
                  contato@email.com
                </p>

              </div>

            </InfoText>


            {/* YOUTUBE */}

            <InfoText>

              <FaYoutube />

              <div>

                <strong>
                  YouTube
                </strong>

                <p>
                  Seu Canal
                </p>

              </div>

            </InfoText>


          </SocialContainer>

        </LeftSide>


        {/* =================================
            LADO DIREITO
        ================================= */}

        <RightSide>

          <Form>

            <Input
              placeholder="Nome completo"
            />

            <Input
              placeholder="Data de nascimento"
            />

            <Input
              placeholder="Curso"
            />

            <Input
              placeholder="Turno"
            />

            <Button>
              Enviar
            </Button>

          </Form>

        </RightSide>


      </Container>

    </Page>

  );

}