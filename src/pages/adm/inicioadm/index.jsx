import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layoutadm from "../../../components/Layoutadm";

import {
  FaFileAlt,
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
  FaImages,
  FaArrowRight,
  FaCog,
  FaCheckCircle,
  FaEye,
  FaUpload,
} from "react-icons/fa";

import {
  Page,
  Main,
  Header,
  Badge,
  BadgeDot,
  Title,
  Highlight,
  Description,
  CardsGrid,
  Card,
  CardIcon,
  CardContent,
  CardTitle,
  CardDescription,
  CardAction,
  DecorativeCircle,
  Pixel,
} from "./style";


export default function Inicioadm() {

  const fileInputRef = useRef(null);


  /* ============================================================
     REGULAMENTO ATUAL
  ============================================================ */

  const [regulamento, setRegulamento] = useState(() => {

    const salvo =
      localStorage.getItem("regulamento_slam");

    return salvo || "/regulamento.pdf";

  });


  const [nomeRegulamento, setNomeRegulamento] =
    useState(() => {

      const nome =
        localStorage.getItem("regulamento_nome");

      return nome || "Regulamento-Slam-Interescolar.pdf";

    });


  /* ============================================================
     ABRIR SELETOR DE PDF
  ============================================================ */

  const abrirSeletor = () => {

    fileInputRef.current?.click();

  };


  /* ============================================================
     TROCAR REGULAMENTO
  ============================================================ */

  const handleRegulamentoChange = (e) => {

    const file = e.target.files?.[0];

    if (!file) return;


    /* ==========================================================
       VERIFICA SE É PDF
    ========================================================== */

    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {

      alert(
        "Selecione apenas um arquivo PDF."
      );

      e.target.value = "";

      return;

    }


    /* ==========================================================
       LÊ O PDF
    ========================================================== */

    const reader = new FileReader();


    reader.onload = () => {

      try {

        const resultado = reader.result;


        /* ======================================================
           SALVA O NOVO REGULAMENTO
        ====================================================== */

        localStorage.setItem(
          "regulamento_slam",
          resultado
        );


        localStorage.setItem(
          "regulamento_nome",
          file.name
        );


        /* ======================================================
           ATUALIZA A TELA
        ====================================================== */

        setRegulamento(resultado);

        setNomeRegulamento(file.name);


        alert(
          "Regulamento atualizado com sucesso!"
        );

      } catch (error) {

        console.error(error);

        alert(
          "Não foi possível salvar o regulamento."
        );

      }

    };


    reader.onerror = () => {

      alert(
        "Erro ao carregar o arquivo PDF."
      );

    };


    reader.readAsDataURL(file);


    /* Permite selecionar o mesmo arquivo novamente */

    e.target.value = "";

  };


  /* ============================================================
     CARDS
  ============================================================ */

  const cards = [

    {
      title: "Mudar regulamento",

      description:
        "Veja o regulamento atual e substitua o PDF disponibilizado para os usuários.",

      icon: <FaFileAlt />,

      featured: true,

      regulation: true,
    },


    {
      title: "Inscrições",

      description:
        "Visualize, acompanhe e gerencie as inscrições dos participantes.",

      icon: <FaClipboardList />,

      path: "/adm/inscricaoadm",
    },


    {
      title: "Mural",

      description:
        "Publique e gerencie os avisos e informações exibidos aos usuários.",

      icon: <FaBullhorn />,

      path: "/adm/muraladm",
    },


    {
      title: "Eventos",

      description:
        "Cadastre, edite e organize os eventos do Slam Interescolar.",

      icon: <FaCalendarAlt />,

      path: "/adm/eventos",
    },


    {
      title: "Galeria",

      description:
        "Adicione e gerencie fotos e imagens dos eventos.",

      icon: <FaImages />,

      path: "/adm/galeriaadm",
    },

  ];


  return (

    <Page>

      <Layoutadm />


      {/* ========================================================
          INPUT ESCONDIDO
      ======================================================== */}

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleRegulamentoChange}
        style={{
          display: "none",
        }}
      />


      <Main>


        {/* ======================================================
            ELEMENTOS DECORATIVOS
        ====================================================== */}

        <DecorativeCircle
          $size="55px"
          $top="12%"
          $right="7%"
          $duration="5s"
        />


        <DecorativeCircle
          $size="30px"
          $top="45%"
          $left="4%"
          $duration="4s"
          $delay=".5s"
        />


        <DecorativeCircle
          $size="22px"
          $bottom="10%"
          $right="10%"
          $duration="4.5s"
          $delay="1s"
        />


        <Pixel
          src="/pixel01.png"
          alt=""
          aria-hidden="true"
          $top="17%"
          $right="14%"
          $size="55px"
          $animation="one"
        />


        <Pixel
          src="/pixel02.png"
          alt=""
          aria-hidden="true"
          $bottom="9%"
          $left="8%"
          $size="55px"
          $animation="two"
        />


        {/* ======================================================
            HEADER
        ====================================================== */}

        <Header>

          <Badge>

            <BadgeDot />

            PAINEL ADMINISTRATIVO

          </Badge>


          <Title>

            Olá, <Highlight>Administrador!</Highlight>

          </Title>


          <Description>

            Gerencie as principais informações do{" "}

            <strong>
              Slam Interescolar ETECAMP
            </strong>

            <br />

            Escolha uma das opções abaixo para começar.

          </Description>

        </Header>


        {/* ======================================================
            CARDS
        ====================================================== */}

        <CardsGrid>

          {cards.map((card, index) => {


            /* ==================================================
               CARD DO REGULAMENTO
            ================================================== */

            if (card.regulation) {

              return (

                <Card
                  key={card.title}
                  $featured={card.featured}
                  style={{
                    animationDelay:
                      `${0.15 + index * 0.08}s`,
                  }}
                >


                  {/* ==================================================
                      ÍCONE
                  ================================================== */}

                  <CardIcon
                    $featured={card.featured}
                  >

                    <FaFileAlt />

                  </CardIcon>


                  {/* ==================================================
                      CONTEÚDO
                  ================================================== */}

                  <CardContent>

                    <CardTitle>

                      Regulamento

                    </CardTitle>


                    <CardDescription>

                      Regulamento atual:

                      <br />

                      <strong
                        style={{
                          color: "#111",
                          wordBreak: "break-word",
                        }}
                      >

                        {nomeRegulamento}

                      </strong>

                    </CardDescription>


                    {/* ==================================================
                        BOTÕES DO REGULAMENTO
                    ================================================== */}

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "10px",
                        marginTop: "18px",
                      }}
                    >


                      {/* ==================================================
                          VER REGULAMENTO
                      ================================================== */}

                      <a
                        href={regulamento}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                        }}
                      >

                        <button
                          type="button"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "8px",

                            padding:
                              "10px 14px",

                            border: "none",

                            borderRadius:
                              "10px",

                            background: "#111",

                            color: "#fff",

                            fontFamily:
                              "Poppins, sans-serif",

                            fontSize: "13px",

                            fontWeight: 700,

                            cursor: "pointer",
                          }}
                        >

                          <FaEye />

                          Ver atual

                        </button>

                      </a>


                      {/* ==================================================
                          TROCAR REGULAMENTO
                      ================================================== */}

                      <button
                        type="button"
                        onClick={abrirSeletor}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",

                          padding:
                            "10px 14px",

                          border: "none",

                          borderRadius:
                            "10px",

                          background: "#f9be06",

                          color: "#111",

                          fontFamily:
                            "Poppins, sans-serif",

                          fontSize: "13px",

                          fontWeight: 800,

                          cursor: "pointer",
                        }}
                      >

                        <FaUpload />

                        Trocar PDF

                      </button>

                    </div>

                  </CardContent>


                  {/* ==================================================
                      STATUS
                  ================================================== */}

                  <CardAction
                    $featured={card.featured}
                  >

                    <span>

                      <FaCheckCircle
                        style={{
                          marginRight: "6px",
                          color: "#28a745",
                        }}
                      />

                      Disponível para usuários

                    </span>

                  </CardAction>


                </Card>

              );

            }


            /* ==================================================
               OUTROS CARDS
            ================================================== */

            return (

              <Link
                to={card.path}
                key={card.title}
                style={{
                  textDecoration: "none",
                }}
              >

                <Card
                  $featured={card.featured}
                  style={{
                    animationDelay:
                      `${0.15 + index * 0.08}s`,
                  }}
                >

                  <CardIcon
                    $featured={card.featured}
                  >

                    {card.icon}

                  </CardIcon>


                  <CardContent>

                    <CardTitle>

                      {card.title}

                    </CardTitle>


                    <CardDescription>

                      {card.description}

                    </CardDescription>

                  </CardContent>


                  <CardAction
                    $featured={card.featured}
                  >

                    <span>
                      Acessar
                    </span>

                    <FaArrowRight />

                  </CardAction>

                </Card>

              </Link>

            );

          })}

        </CardsGrid>


        {/* ======================================================
            RODAPÉ
        ====================================================== */}

        <div
          style={{
            marginTop: "30px",
          }}
        >

        </div>


      </Main>

    </Page>

  );

}