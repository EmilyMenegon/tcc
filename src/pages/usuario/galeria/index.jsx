import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";
import { getAuthHeaders } from "../../../utils/auth";

import {
  FiX,
  FiImage,
  FiChevronLeft,
  FiChevronRight,
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


  const imagemSelecionada =
    indiceAtual !== null &&
    fotos[indiceAtual]
      ? fotos[indiceAtual]
      : null;


  /*
  ==========================================
  CARREGAR GALERIA
  ==========================================
  */

  useEffect(() => {

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

      });

  }, []);


  /*
  ==========================================
  ABRIR IMAGEM
  ==========================================
  */

  function abrirImagem(foto) {

    const indice = fotos.findIndex(
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
      fotos.length === 0
    ) {

      return;

    }

    setIndiceAtual((atual) => {

      if (atual === 0) {

        return fotos.length - 1;

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
      fotos.length === 0
    ) {

      return;

    }

    setIndiceAtual((atual) => {

      if (
        atual === fotos.length - 1
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
    fotos,
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


        <Gallery>

          {fotos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiImage />
              </EmptyIcon>

              <EmptyTitle>
                Nenhuma foto ou vídeo disponível
              </EmptyTitle>

              <EmptyText>
                No momento não existem arquivos publicados na galeria.
              </EmptyText>

            </EmptyState>

          ) : (

            fotos.map((foto) => (

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

                    <video
                      src={foto.imagem}
                      muted
                    />

                  ) : (

                    <img
                      src={foto.imagem}
                      alt="Imagem da galeria"
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

            {fotos.length > 1 && (

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

            {fotos.length > 1 && (

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
