import { Link } from 'react-router-dom'
import Layout from "../../../components/Layout";
import { FaInstagram, FaEnvelope, FaYoutube } from 'react-icons/fa'
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
} from './style'
export default function Inscricao() {
  return (
    <Page>

        <Layout />
    

      {/* TÍTULO */}
      <TitleArea>
        <Title>Faça sua inscrição</Title>
      </TitleArea>

      {/* CONTAINER DIVIDIDO */}
      <Container>

        {/* LADO ESQUERDO */}
        <LeftSide>
          <SectionTitle>Contatos</SectionTitle>

<SocialContainer>
       <InfoText>
  <FaInstagram size={40} />

  <div>
    <strong>Instagram</strong>
    <p>@seuinstagram</p>
  </div>
</InfoText>

<InfoText>
  <FaEnvelope size={40} />

  <div>
    <strong>Email</strong>
    <p>contato@email.com</p>
  </div>
</InfoText>

<InfoText>
  <FaYoutube size={40} />

  <div>
    <strong>YouTube</strong>
    <p>Seu Canal</p>
  </div>
</InfoText>
</SocialContainer>
        </LeftSide>

        {/* LADO DIREITO */}
        <RightSide>
          <Form>
            <Input placeholder="Nome completo" />
            <Input placeholder="Data de nascimento" />
            <Input placeholder="Curso" />
            <Input placeholder="Turno" />

            <Button>Enviar</Button>
          </Form>
        </RightSide>

      </Container>

    </Page>
  )
}