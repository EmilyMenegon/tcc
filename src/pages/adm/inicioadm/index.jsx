import { useRef, useState } from "react";
import Layoutadm from "../../../components/layoutadm";

import {
  FaFileAlt,
  FaClipboardList,
  FaBullhorn,
  FaCalendarAlt,
  FaImages,
  FaArrowRight,
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
  CardLink,
  Card,
  CardHeader,
  CardIcon,
  CardInfo,
  CardTitle,
  CardDescription,
  CardStatus,
  CardBody,
  FileBox,
  FileIcon,
  FileInfo,
  FileLabel,
  FileName,
  ButtonsRow,
  CardFooter,
  CardAction,
  DecorativeCircle,
  Pixel,
  RegulationButton,
} from "./style";

/* ============================================================
   CARDS DE NAVEGAÇÃO
============================================================ */

const cards = [
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
    description: "Cadastre, edite e organize os eventos do Slam Interescolar.",
    icon: <FaCalendarAlt />,
    path: "/adm/eventos",
  },
  {
    title: "Galeria",
    description: "Adicione e gerencie fotos e imagens dos eventos.",
    icon: <FaImages />,
    path: "/adm/galeriaadm",
  },
];

export default function Inicioadm() {
  const fileInputRef = useRef(null);

  /* ============================================================
     BOTÃO LÍQUIDO
  ============================================================ */

  function handleButtonMove(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    button.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    button.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  }

  /* ============================================================
     REGULAMENTO ATUAL
  ============================================================ */

  const [regulamento, setRegulamento] = useState(() => {
    const salvo = localStorage.getItem("regulamento_slam");
    return salvo || "/regulamento.pdf";
  });

  const [nomeRegulamento, setNomeRegulamento] = useState(() => {
    const nome = localStorage.getItem("regulamento_nome");
    return nome || "Regulamento-Slam-Interescolar.pdf";
  });

  const abrirSeletor = () => {
    fileInputRef.current?.click();
  };

  const handleRegulamentoChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (
      file.type !== "application/pdf" &&
      !file.name.toLowerCase().endsWith(".pdf")
    ) {
      alert("Selecione apenas um arquivo PDF.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const resultado = reader.result;

        localStorage.setItem("regulamento_slam", resultado);
        localStorage.setItem("regulamento_nome", file.name);

        setRegulamento(resultado);
        setNomeRegulamento(file.name);

        alert("Regulamento atualizado com sucesso!");
      } catch (error) {
        console.error(error);
        alert("Não foi possível salvar o regulamento.");
      }
    };

    reader.onerror = () => {
      alert("Erro ao carregar o arquivo PDF.");
    };

    reader.readAsDataURL(file);

    // Permite selecionar o mesmo arquivo novamente
    e.target.value = "";
  };

  return (
    <Page>
      <Layoutadm />

      <input
        ref={fileInputRef}
        type="file"
        accept="application/pdf,.pdf"
        onChange={handleRegulamentoChange}
        style={{ display: "none" }}
      />

      <Main>
        {/* Elementos decorativos do fundo da página */}
        <DecorativeCircle $size="55px" $top="12%" $right="7%" $duration="5s" />
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

        <Header>
          <Badge>
            <BadgeDot />
            PAINEL ADMINISTRATIVO
          </Badge>

          <Title>
            Olá, <Highlight>Organizador!</Highlight>
          </Title>

          <Description>
            Gerencie as principais informações do{" "}
            <strong>Slam Interescolar ETECAMP</strong>
            <br />
            Escolha uma das opções abaixo para começar.
          </Description>
        </Header>

        <CardsGrid>
          {/* ====================================================
              REGULAMENTO (card em destaque, largura total)
          ==================================================== */}
          <Card $featured style={{ animationDelay: "0.15s" }}>
            <CardHeader>
              <CardIcon>
                <FaFileAlt />
              </CardIcon>

              <CardInfo>
                <CardTitle>Regulamento</CardTitle>
                <CardDescription>
                  Veja o regulamento atual e substitua o PDF disponibilizado
                  para os usuários.
                </CardDescription>
              </CardInfo>

              <CardStatus>
                <FaCheckCircle />
                Disponível para usuários
              </CardStatus>
            </CardHeader>

            <CardBody>
              <FileBox>
                <FileIcon>
                  <FaFileAlt />
                </FileIcon>

                <FileInfo>
                  <FileLabel>Regulamento atual</FileLabel>
                  <FileName title={nomeRegulamento}>{nomeRegulamento}</FileName>
                </FileInfo>
              </FileBox>

              <ButtonsRow>
                <RegulationButton
                  as="a"
                  href={regulamento}
                  target="_blank"
                  rel="noopener noreferrer"
                  $variant="dark"
                  onPointerMove={handleButtonMove}
                >
                  <span className="button-content">
                    <FaEye />
                    Ver atual
                  </span>
                </RegulationButton>

                <RegulationButton
                  type="button"
                  $variant="yellow"
                  onClick={abrirSeletor}
                  onPointerMove={handleButtonMove}
                >
                  <span className="button-content">
                    <FaUpload />
                    Trocar PDF
                  </span>
                </RegulationButton>
              </ButtonsRow>
            </CardBody>
          </Card>

          {/* ====================================================
              DEMAIS CARDS
          ==================================================== */}
          {cards.map((card, index) => (
            <CardLink to={card.path} key={card.title}>
              <Card style={{ animationDelay: `${0.23 + index * 0.08}s` }}>
                <CardHeader>
                  <CardIcon>{card.icon}</CardIcon>

                  <CardInfo>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                  </CardInfo>
                </CardHeader>

                <CardFooter>
                  <CardAction>
                    <span>Acessar</span>
                    <FaArrowRight />
                  </CardAction>
                </CardFooter>
              </Card>
            </CardLink>
          ))}
        </CardsGrid>
      </Main>
    </Page>
  );
}
