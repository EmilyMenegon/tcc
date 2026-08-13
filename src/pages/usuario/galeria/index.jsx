import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";

import { FiX, FiImage } from "react-icons/fi";

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
  ModalInfo,
  ModalTitle,
  CloseButton,
} from "./style";


export default function Galeria() {

  // ==========================================
  // IMAGEM SELECIONADA
  // ==========================================

  const [imagemSelecionada, setImagemSelecionada] =
    useState(null);


  // ==========================================
  // FOTOS
  // ==========================================

  const [fotos, setFotos] = useState([]);


  // ==========================================
  // CARREGAR GALERIA
  // ==========================================

  useEffect(() => {

    function carregarFotos() {

      const dados =
        localStorage.getItem("galeria");


      if (!dados) {

        setFotos([]);

        return;

      }


      try {

        const fotosSalvas =
          JSON.parse(dados);


        if (Array.isArray(fotosSalvas)) {

          setFotos(fotosSalvas);

        } else {

          setFotos([]);

        }

      } catch (error) {

        console.error(
          "Erro ao carregar a galeria:",
          error
        );

        setFotos([]);

      }

    }


    carregarFotos();


    // Atualiza caso a galeria seja
    // alterada em outra aba.

    function atualizarGaleria() {

      carregarFotos();

    }


    window.addEventListener(
      "storage",
      atualizarGaleria
    );


    return () => {

      window.removeEventListener(
        "storage",
        atualizarGaleria
      );

    };

  }, []);


  // ==========================================
  // ABRIR IMAGEM
  // ==========================================

  function abrirImagem(foto) {

    setImagemSelecionada(foto);

  }


  // ==========================================
  // FECHAR IMAGEM
  // ==========================================

  function fecharImagem() {

    setImagemSelecionada(null);

  }


  // ==========================================
  // TECLA ESC
  // ==========================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === "Escape"
      ) {

        fecharImagem();

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

  }, []);


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <Page>

      {/* =====================================
          MENU
      ===================================== */}

      <Layout />


      {/* =====================================
          CONTEÚDO
      ===================================== */}

      <Content>


        {/* ===================================
            HEADER
        =================================== */}

        <Header>

          <Title>
            Galeria
          </Title>

          <Subtitle>
            Confira os melhores momentos
            registrados durante o evento.
          </Subtitle>

        </Header>


        {/* ===================================
            GALERIA
        =================================== */}

        <Gallery>

          {fotos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>

                <FiImage />

              </EmptyIcon>


              <EmptyTitle>

                Nenhuma foto disponível

              </EmptyTitle>


              <EmptyText>

                No momento não existem
                imagens publicadas na galeria.

              </EmptyText>

            </EmptyState>

          ) : (

            fotos.map((foto, index) => (

              <Card
                key={
                  foto.id ||
                  index
                }
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

                {/* =================================
                    IMAGEM
                ================================= */}

                <ImageBox>

                  <img
                    src={foto.imagem}
                    alt={
                      foto.nome ||
                      "Imagem da galeria"
                    }
                  />

                  {/* OVERLAY */}

                  <span>
                    Visualizar
                  </span>

                </ImageBox>

              </Card>

            ))

          )}

        </Gallery>

      </Content>


      {/* =====================================
          MODAL
      ===================================== */}

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


            {/* =================================
                BOTÃO FECHAR
            ================================= */}

            <CloseButton
              type="button"
              onClick={fecharImagem}
              aria-label="Fechar imagem"
            >

              <FiX />

            </CloseButton>


            {/* =================================
                IMAGEM
            ================================= */}

            <ModalImage
              src={
                imagemSelecionada.imagem
              }
              alt={
                imagemSelecionada.nome ||
                "Imagem ampliada"
              }
              onClick={(event) =>
                event.stopPropagation()
              }
            />


            {/* =================================
                INFORMAÇÃO
            ================================= */}

            {imagemSelecionada.nome && (

              <ModalInfo>

                <ModalTitle>

                  {imagemSelecionada.nome}

                </ModalTitle>

              </ModalInfo>

            )}

          </ModalContent>

        </Modal>

      )}

    </Page>

  );

}