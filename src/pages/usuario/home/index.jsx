import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";
import { FaArrowRight, FaFileDownload, FaTimes } from "react-icons/fa";

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

  /* ============================================================
     ANIMAÇÃO DO BOTÃO
  ============================================================ */

  function handleButtonMove(event) {
    const button = event.currentTarget;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty(
      "--mouse-x",
      `${x}px`
    );

    button.style.setProperty(
      "--mouse-y",
      `${y}px`
    );
  }


  /* ============================================================
     REGULAMENTO
  ============================================================ */

  const [regulamento] = useState(() => {
    const regulamentoSalvo =
      localStorage.getItem("regulamento_slam");

    return (
      regulamentoSalvo ||
      "/regulamento.pdf"
    );
  });

  const [showPdfModal, setShowPdfModal] = useState(false);


  /* ============================================================
     USUÁRIO LOGADO
  ============================================================ */

  const [nomeUsuario] = useState(() => {
    try {
      const salvo = JSON.parse(
        localStorage.getItem(
          "usuario_logado"
        )
      );

      return salvo?.nome || "Poeta";
    } catch {
      return "Poeta";
    }
  });


  return (
    <Page>

      <Layout />

      <Hero>

        <HeroContent>

          <LeftContent>

            <EventBadge>

              <BadgeDot />

              INSCRIÇÕES ABERTAS

            </EventBadge>


            <BigText>

              Bem-Vindo

              <br />

              <Highlight>
                {nomeUsuario}!
              </Highlight>

            </BigText>


            <Description>

              Estão abertas as inscrições para o
              <strong>
                {" "}Slam Interescolar 2026!
              </strong>

              <br />

              Prepare sua poesia, e venha fazer parte desse encontro

            </Description>


            <Actions>

              <Link to="/usuario/inscricao">

                <PrimaryLink
                  onPointerMove={
                    handleButtonMove
                  }
                >

                  <span>
                    Quero me inscrever

                    <FaArrowRight />
                  </span>

                </PrimaryLink>

              </Link>


              <SecondaryLink
                as="button"
                type="button"
                onClick={() => setShowPdfModal(true)}
                style={{ cursor: "pointer" }}
              >

                <FaFileDownload />

                <span>
                  Ver regulamento
                </span>

              </SecondaryLink>

            </Actions>

          </LeftContent>


          <ImageBox>

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


            <PixelOne
              src="/pixel01.png"
              alt=""
              aria-hidden="true"
            />

            <PixelTwo
              src="/pixel02.png"
              alt=""
              aria-hidden="true"
            />

            <PixelThree
              src="/pixel03.png"
              alt=""
              aria-hidden="true"
            />


            <Image
              src="/girl.png"
              alt="Participante do Slam Interescolar"
            />

          </ImageBox>

        </HeroContent>

      </Hero>


      {/* ============================================================
          MODAL DO REGULAMENTO (VISUALIZADOR DE PDF)
      ============================================================ */}

      {showPdfModal && (

        <div
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setShowPdfModal(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            padding: "20px",
            boxSizing: "border-box",
          }}
        >

          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "90vh",
              background: "#fff",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
            }}
          >

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 20px",
                background: "#111",
                color: "#fff",
              }}
            >
              <strong>Regulamento</strong>

              <button
                type="button"
                onClick={() => setShowPdfModal(false)}
                aria-label="Fechar"
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#f9be06",
                  cursor: "pointer",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaTimes />
              </button>
            </div>

            <iframe
              src={regulamento}
              title="Regulamento"
              style={{ flex: 1, border: "none" }}
            />

          </div>

        </div>

      )}

    </Page>
  );
}