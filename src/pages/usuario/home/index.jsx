import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import { FaArrowRight } from "react-icons/fa";

import {
  Page,
  TitleArea,
  Title,
  Container,
  RightSide,
  RightContent,
  BigText,
  SmallText,
  BottomArea,
  ArrowButton,
  ImageBox,
  Image,
  Circle,
} from "./style";


export default function Home() {

  return (

    <Page>

      <Layout />


      {/* =========================
          TÍTULO
      ========================= */}

      <TitleArea>

        <Title></Title>

      </TitleArea>


      {/* =========================
          CONTAINER
      ========================= */}

      <Container>

        <RightSide>


          {/* =========================
              TEXTO
          ========================= */}

          <RightContent>


            <BigText>
              Estão abertas as inscrições
              para o Slam Interescolar 2026!
            </BigText>


            <SmallText>

              Saiba mais sobre o regulamento:

              <a
                href="/regulamento.pdf"
                download="Regulamento-Slam-Interescolar.pdf"
              >
                Clique aqui
              </a>

            </SmallText>


            {/* =========================
                BOTÃO
            ========================= */}

            <BottomArea>

              <Link to="/usuario/inscricao">

                <ArrowButton>

                  <span>
                    Ir para a inscrição
                  </span>

                  <FaArrowRight />

                </ArrowButton>

              </Link>

            </BottomArea>


          </RightContent>


          {/* =========================
              IMAGEM
          ========================= */}

          <ImageBox>


            <Circle
              $size="12%"
              $top="-3%"
              $left="8%"
              $duration="5s"
            />


            <Circle
              $size="8%"
              $top="70%"
              $left="-25%"
              $duration="5s"
            />


            <Circle
              $size="6%"
              $top="18%"
              $right="12%"
              $duration="4s"
              $delay=".8s"
            />


            <Circle
              $size="6%"
              $bottom="3%"
              $left="30%"
              $duration="6s"
              $delay="1.2s"
            />


            <Circle
              $size="4%"
              $bottom="5%"
              $right="5%"
              $duration="3.8s"
            />


            <Circle
              $size="11%"
              $top="20%"
              $right="110%"
              $duration="7s"
              $delay=".5s"
            />


            <Image
              src="/girl.png"
              alt="Imagem inicial"
            />


          </ImageBox>


        </RightSide>

      </Container>

    </Page>

  );

}