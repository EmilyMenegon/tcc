import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";

import {
  FaArrowRight,
  FaFileDownload,
} from "react-icons/fa";

import {
  Page,
  Hero,
  HeroContent,
  LeftContent,
  EventBadge,
  BadgeDot,
  BigText,
  Highlight,
  Description,
  Actions,
  PrimaryLink,
  SecondaryLink,
  ImageBox,
  Image,
  PixelOne,
  PixelTwo,
  PixelThree,
  Circle,
} from "./style";


export default function Home() {
  return (
    <Page>

      {/* =====================================================
          HEADER / LAYOUT
      ===================================================== */}

      <Layout />


      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero>

        <HeroContent>


          {/* =================================================
              LADO ESQUERDO
          ================================================= */}

          <LeftContent>


            {/* =================================================
                BADGE
            ================================================= */}

            <EventBadge>

              <BadgeDot />

              INSCRIÇÕES ABERTAS

            </EventBadge>


            {/* =================================================
                TÍTULO
            ================================================= */}

            <BigText>

              Bem-Vindo

              <br />

              <Highlight>
                Poeta!
              </Highlight>

            </BigText>


            {/* =================================================
                DESCRIÇÃO
            ================================================= */}

            <Description>

              Estão abertas as inscrições para o
              <strong> Slam Interescolar 2026!</strong>

              <br />

              Prepare sua poesia, e venha
              fazer parte desse encontro

            </Description>


            {/* =================================================
                BOTÕES
            ================================================= */}

            <Actions>


              {/* BOTÃO DE INSCRIÇÃO */}

              <Link to="/usuario/inscricao">

                <PrimaryLink>

                  <span>
                    Quero me inscrever
                  </span>

                  <FaArrowRight />

                </PrimaryLink>

              </Link>


              {/* BOTÃO REGULAMENTO */}

              <a
                href="/regulamento.pdf"
                download="Regulamento-Slam-Interescolar.pdf"
              >

                <SecondaryLink>

                  <FaFileDownload />

                  <span>
                    Ver regulamento
                  </span>

                </SecondaryLink>

              </a>

            </Actions>

          </LeftContent>


          {/* =================================================
              LADO DIREITO — IMAGEM
          ================================================= */}

          <ImageBox>


            {/* =================================================
                CÍRCULOS DECORATIVOS
            ================================================= */}

            <Circle
              $size="55px"
              $top="10%"
              $left="5%"
              $duration="5s"
            />


            <Circle
              $size="55px"
              $top="65%"
              $left="-5%"
              $duration="4s"
              $delay=".5s"
            />


            <Circle
              $size="32px"
              $top="25%"
              $right="15%"
              $duration="6s"
              $delay=".8s"
            />


            <Circle
              $size="30px"
              $bottom="8%"
              $left="25%"
              $duration="4.5s"
              $delay="1s"
            />


            <Circle
              $size="22px"
              $bottom="25%"
              $right="3%"
              $duration="3.5s"
            />


            {/* =================================================
                PIXEL 01
                LADO ESQUERDO DA IMAGEM
            ================================================= */}

            <PixelOne
              src="/pixel01.png"
              alt=""
              aria-hidden="true"
            />


            {/* =================================================
                PIXEL 02
                PARTE SUPERIOR DIREITA
            ================================================= */}

            <PixelTwo
              src="/pixel02.png"
              alt=""
              aria-hidden="true"
            />


            {/* =================================================
                PIXEL 03
                PARTE INFERIOR DIREITA
            ================================================= */}

            <PixelThree
              src="/pixel03.png"
              alt=""
              aria-hidden="true"
            />


            {/* =================================================
                IMAGEM PRINCIPAL
            ================================================= */}

            <Image
              src="/girl.png"
              alt="Participante do Slam Interescolar"
            />

          </ImageBox>

        </HeroContent>


      

      </Hero>

    </Page>
  );
}