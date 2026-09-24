import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";
import { getAuthHeaders } from "../../../utils/auth";
import VideoThumb from "../../../components/VideoThumb";

import {
  FiX,
  FiImage,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Gallery,
  Card,
  ImageBox,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  Modal,
  ModalContent,
  ModalImage,
  CloseButton,
  NavButton,
  YearsWrapper,
  YearsContainer,
  YearArrow,
  YearCard,
  YearIcon,
  YearNumber,
  YearDescription,
} from "./style";


function ehVideo(arquivoBase64) {
  return (
    typeof arquivoBase64 === "string" &&
    arquivoBase64.startsWith("data:video")
  );
}


/*
==========================================
ANIMAÇÃO DOS BOTÕES

Calcula a posição exata do mouse
dentro do botão e envia para o CSS.
==========================================
*/

function handleButtonMouseMove(event) {
  const button = event.currentTarget;

  const rect = button.getBoundingClientRect();

  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  button.style.setProperty("--mouse-x", `${x}px`);
  button.style.setProperty("--mouse-y", `${y}px`);
}


export default function Galeria() {

  const [indiceAtual, setIndiceAtual] = useState(null);

  const [fotos, setFotos] = useState([]);

  const [carregando, setCarregando] = useState(true);

  const [anoInicial, setAnoInicial] = useState(2026);
  const [anoSelecionado, setAnoSelecionado] = useState(2026);

  const anosVisiveis = Array.from(
    { length: 3 },
    (_, index) => anoInicial + index
  );


  /*
  ==========================================
  DESCOBRIR ANO DA FOTO
  ==========================================
  */

  function descobrirAno(foto) {
    const valor =
      foto?.ano ??
      foto?.created_at ??
      foto?.createdAt ??
      foto?.data_publicacao ??
      foto?.dataPublicacao ??
      foto?.data ??
      foto?.date;

    if (!valor) return 2026;

    if (
      typeof valor === "number" &&
      valor >= 2000 &&
      valor <= 2100
    ) {
      return valor;
    }

    const dataConvertida = new Date(valor);

    if (!Number.isNaN(dataConvertida.getTime())) {
      return dataConvertida.getFullYear();
    }

    const numero = Number(valor);

    return numero >= 2000 && numero <= 2100 ? numero : 2026;
  }


  const fotosDoAno = fotos.filter(
    (foto) => descobrirAno(foto) === anoSelecionado
  );

  const imagemSelecionada =
    indiceAtual !== null &&
    fotosDoAno[indiceAtual]
      ? fotosDoAno[indiceAtual]
      : null;


  function quantidadePorAno(ano) {
    return fotos.filter((foto) => descobrirAno(foto) === ano).length;
  }


  /*
  ==========================================
  NAVEGAÇÃO ENTRE ANOS
  ==========================================
  */

  function avancarAnos() {
    const novoAno = anoInicial + 3;
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
    setIndiceAtual(null);
  }

  function voltarAnos() {
    const novoAno = Math.max(2026, anoInicial - 3);
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
    setIndiceAtual(null);
  }

  function selecionarAno(ano) {
    setAnoSelecionado(ano);
    setIndiceAtual(null);
  }


  /*
  ==========================================
  CARREGAR GALERIA
  ==========================================
  */

  useEffect(() => {

    setCarregando(true);

    fetch("http://localhost:3001/galeria", {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => {

        setFotos(
          Array.isArray(data)
            ? data
            : []
        );

      })
      .catch(() => {

        setFotos([]);

      })
      .finally(() => {

        setCarregando(false);

      });

  }, []);


  /*
  ==========================================
  ABRIR IMAGEM
  ==========================================
  */

  function abrirImagem(foto) {

    const indice = fotosDoAno.findIndex(
      (item) => item.id === foto.id
    );

    setIndiceAtual(indice);

  }


  /*
  ==========================================
  FECHAR MODAL
  ==========================================
  */

  function fecharImagem() {

    setIndiceAtual(null);

  }


  /*
  ==========================================
  IMAGEM ANTERIOR
  ==========================================
  */

  function irParaAnterior() {

    if (
      indiceAtual === null ||
      fotosDoAno.length === 0
    ) {

      return;

    }

    setIndiceAtual((atual) => {

      if (atual === 0) {

        return fotosDoAno.length - 1;

      }

      return atual - 1;

    });

  }


  /*
  ==========================================
  PRÓXIMA IMAGEM
  ==========================================
  */

  function irParaProxima() {

    if (
      indiceAtual === null ||
      fotosDoAno.length === 0
    ) {

      return;

    }

    setIndiceAtual((atual) => {

      if (
        atual === fotosDoAno.length - 1
      ) {

        return 0;

      }

      return atual + 1;

    });

  }


  /*
  ==========================================
  TECLADO
  ==========================================
  */

  useEffect(() => {

    function handleKeyDown(event) {

      if (!imagemSelecionada) {

        return;

      }


      if (event.key === "Escape") {

        fecharImagem();

      }


      if (event.key === "ArrowLeft") {

        irParaAnterior();

      }


      if (event.key === "ArrowRight") {

        irParaProxima();

      }

    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [
    imagemSelecionada,
    indiceAtual,
    fotosDoAno,
  ]);


  return (

    <Page>

      <Layout />


      <Content>

        <Header>

          <Title>
            Galeria
          </Title>

          <Subtitle>
            Confira os melhores momentos registrados durante o evento.
          </Subtitle>

        </Header>


        {/* ==========================================
            CARDS DE ANOS
        ========================================== */}

        <YearsWrapper>
          <YearArrow
            type="button"
            onClick={voltarAnos}
            onMouseMove={handleButtonMouseMove}
            disabled={anoInicial === 2026}
            aria-label="Anos anteriores"
          >
            <span className="buttonContent">
              <FiChevronLeft />
            </span>
          </YearArrow>

          <YearsContainer>
            {anosVisiveis.map((ano) => {
              const quantidade = quantidadePorAno(ano);
              const ativo = anoSelecionado === ano;

              return (
                <YearCard
                  key={ano}
                  type="button"
                  $active={ativo}
                  onClick={() => selecionarAno(ano)}
                  onMouseMove={handleButtonMouseMove}
                >
                  <YearIcon $active={ativo}>
                    <FiCalendar />
                  </YearIcon>

                  <YearNumber $active={ativo}>{ano}</YearNumber>

                  <YearDescription $active={ativo}>
                    {quantidade === 0
                      ? "Nenhum arquivo"
                      : quantidade === 1
                      ? "1 arquivo"
                      : `${quantidade} arquivos`}
                  </YearDescription>
                </YearCard>
              );
            })}
          </YearsContainer>

          <YearArrow
            type="button"
            onClick={avancarAnos}
            onMouseMove={handleButtonMouseMove}
            aria-label="Próximos anos"
          >
            <span className="buttonContent">
              <FiChevronRight />
            </span>
          </YearArrow>
        </YearsWrapper>


        <Gallery>

          {carregando ? (

            <EmptyState>

              <EmptyIcon>
                <FiImage />
              </EmptyIcon>

              <EmptyTitle>
                Carregando galeria...
              </EmptyTitle>

            </EmptyState>

          ) : fotosDoAno.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiImage />
              </EmptyIcon>

              <EmptyTitle>
                Nenhuma foto ou vídeo disponível
              </EmptyTitle>

              <EmptyText>
                Não existem arquivos publicados na galeria em{" "}
                {anoSelecionado}.
              </EmptyText>

            </EmptyState>

          ) : (

            fotosDoAno.map((foto) => (

              <Card
                key={foto.id}

                onClick={() =>
                  abrirImagem(foto)
                }

                tabIndex={0}

                role="button"

                onKeyDown={(event) => {

                  if (
                    event.key === "Enter" ||
                    event.key === " "
                  ) {

                    event.preventDefault();

                    abrirImagem(foto);

                  }

                }}

              >

                <ImageBox>

                  {ehVideo(foto.imagem) ? (

                    <VideoThumb
                      src={foto.imagem}
                    />

                  ) : (

                    <img
                      src={foto.imagem}
                      alt="Imagem da galeria"
                      loading="lazy"
                    />

                  )}

                </ImageBox>

              </Card>

            ))

          )}

        </Gallery>

      </Content>


      {/* ==========================================
          MODAL DA IMAGEM
      ========================================== */}

      {imagemSelecionada && (

        <Modal

          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharImagem();

            }

          }}

        >

          <ModalContent>


            {/* ======================================
                BOTÃO FECHAR
            ====================================== */}

            <CloseButton

              type="button"

              onMouseMove={
                handleButtonMouseMove
              }

              onClick={
                fecharImagem
              }

              aria-label="Fechar visualização"

            >

              <FiX />

            </CloseButton>


            {/* ======================================
                BOTÃO ANTERIOR
            ====================================== */}

            {fotosDoAno.length > 1 && (

              <NavButton

                type="button"

                $direction="left"

                onMouseMove={
                  handleButtonMouseMove
                }

                onClick={(event) => {

                  event.stopPropagation();

                  irParaAnterior();

                }}

                aria-label="Anterior"

              >

                <FiChevronLeft />

              </NavButton>

            )}


            {/* ======================================
                IMAGEM / VÍDEO
            ====================================== */}

            {ehVideo(
              imagemSelecionada.imagem
            ) ? (

              <video

                src={
                  imagemSelecionada.imagem
                }

                controls

                autoPlay

                playsInline

                onClick={(event) =>
                  event.stopPropagation()
                }

                style={{
                  maxWidth: "90vw",
                  maxHeight: "88vh",
                  borderRadius: "15px",
                }}

              />

            ) : (

              <ModalImage

                src={
                  imagemSelecionada.imagem
                }

                alt="Imagem ampliada"

                onClick={(event) =>
                  event.stopPropagation()
                }

              />

            )}


            {/* ======================================
                BOTÃO PRÓXIMO
            ====================================== */}

            {fotosDoAno.length > 1 && (

              <NavButton

                type="button"

                $direction="right"

                onMouseMove={
                  handleButtonMouseMove
                }

                onClick={(event) => {

                  event.stopPropagation();

                  irParaProxima();

                }}

                aria-label="Próximo"

              >

                <FiChevronRight />

              </NavButton>

            )}

          </ModalContent>

        </Modal>

      )}

    </Page>

  );

}
