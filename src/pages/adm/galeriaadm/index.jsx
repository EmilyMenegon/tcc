import { useEffect, useRef, useState } from "react";
import Layoutadm from "../../../components/Layoutadm";

import {
  FiPlus,
  FiX,
  FiTrash2,
  FiImage,
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

  FloatingButton,

  Modal,
  ModalContent,
  ModalImage,
  CloseButton,

  DeleteButton,

  DeleteModalOverlay,
  DeleteModal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";


export default function Galeriaadm() {

  // ==========================================
  // IMAGEM SELECIONADA
  // ==========================================

  const [imagemSelecionada, setImagemSelecionada] =
    useState(null);


  // ==========================================
  // IMAGEM QUE SERÁ EXCLUÍDA
  // ==========================================

  const [imagemParaExcluir, setImagemParaExcluir] =
    useState(null);


  // ==========================================
  // FOTOS
  // ==========================================

  const [fotos, setFotos] = useState([]);


  // ==========================================
  // INPUT DE ARQUIVO
  // ==========================================

  const fileInputRef = useRef(null);


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


    // Atualiza caso o usuário ou outra aba
    // altere a galeria.

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
  // ABRIR SELETOR DE IMAGEM
  // ==========================================

  const abrirGaleria = () => {

    fileInputRef.current?.click();

  };


  // ==========================================
  // ADICIONAR IMAGENS
  // ==========================================

  const adicionarImagem = (e) => {

    const arquivos =
      Array.from(e.target.files);


    if (!arquivos.length) return;


    const novasFotos =
      arquivos.map((arquivo, index) => ({

        id:
          Date.now() +
          index,

        nome:
          arquivo.name,

        imagem:
          URL.createObjectURL(arquivo),

      }));


    setFotos((prev) => {

      const atualizadas = [
        ...prev,
        ...novasFotos,
      ];


      // Salva no localStorage
      localStorage.setItem(
        "galeria",
        JSON.stringify(atualizadas)
      );


      return atualizadas;

    });


    // Permite selecionar novamente
    // a mesma imagem.

    e.target.value = "";

  };


  // ==========================================
  // ABRIR IMAGEM
  // ==========================================

  const abrirImagem = (foto) => {

    setImagemSelecionada(foto);

  };


  // ==========================================
  // FECHAR IMAGEM
  // ==========================================

  const fecharImagem = () => {

    setImagemSelecionada(null);

  };


  // ==========================================
  // PEDIR CONFIRMAÇÃO PARA EXCLUIR
  // ==========================================

  const pedirExclusao = (foto) => {

    setImagemParaExcluir(foto);

  };


  // ==========================================
  // CANCELAR EXCLUSÃO
  // ==========================================

  const cancelarExclusao = () => {

    setImagemParaExcluir(null);

  };


  // ==========================================
  // CONFIRMAR EXCLUSÃO
  // ==========================================

  const confirmarExclusao = () => {

    if (!imagemParaExcluir) return;


    const novasFotos =
      fotos.filter(
        (foto) =>
          foto.id !== imagemParaExcluir.id
      );


    setFotos(novasFotos);


    localStorage.setItem(
      "galeria",
      JSON.stringify(novasFotos)
    );


    setImagemParaExcluir(null);


    // Caso a imagem excluída esteja aberta
    // no modal, fecha também.

    if (
      imagemSelecionada?.id ===
      imagemParaExcluir.id
    ) {

      setImagemSelecionada(null);

    }

  };


  // ==========================================
  // TECLA ESC
  // ==========================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (event.key === "Escape") {

        if (imagemParaExcluir) {

          cancelarExclusao();

        } else if (imagemSelecionada) {

          fecharImagem();

        }

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
    imagemParaExcluir,
  ]);


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <Page>

      {/* =====================================
          MENU ADM
      ===================================== */}

      <Layoutadm />


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
              >

                {/* =================================
                    IMAGEM
                ================================= */}

                <ImageBox
                  onClick={() =>
                    abrirImagem(foto)
                  }
                >

                  <img
                    src={foto.imagem}
                    alt={
                      foto.nome ||
                      "Imagem da galeria"
                    }
                  />

                </ImageBox>


                {/* =================================
                    BOTÃO EXCLUIR
                ================================= */}

                <DeleteButton
                  type="button"
                  onClick={(event) => {

                    event.stopPropagation();

                    pedirExclusao(foto);

                  }}
                  aria-label="Excluir imagem"
                >

                  <FiTrash2 />

                </DeleteButton>


              </Card>

            ))

          )}

        </Gallery>


      </Content>


      {/* =====================================
          BOTÃO +
      ===================================== */}

      <FloatingButton
        type="button"
        onClick={abrirGaleria}
        aria-label="Adicionar imagens"
      >

        <FiPlus size={30} />

      </FloatingButton>


      {/* =====================================
          INPUT DE ARQUIVO
      ===================================== */}

      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        hidden
        onChange={adicionarImagem}
      />


      {/* =====================================
          MODAL DA IMAGEM
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


            {/* BOTÃO FECHAR */}

            <CloseButton
              type="button"
              onClick={fecharImagem}
              aria-label="Fechar imagem"
            >

              <FiX />

            </CloseButton>


            {/* IMAGEM */}

            <ModalImage
              src={
                imagemSelecionada.imagem
              }
              alt="Imagem ampliada"
              onClick={(event) =>
                event.stopPropagation()
              }
            />

          </ModalContent>

        </Modal>

      )}


      {/* =====================================
          MODAL DE CONFIRMAÇÃO
      ===================================== */}

      {imagemParaExcluir && (

        <DeleteModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              cancelarExclusao();

            }

          }}
        >

          <DeleteModal>


            <h3>
              Excluir imagem
            </h3>


            <p>
              Tem certeza que deseja excluir esta imagem?
            </p>


            <ModalButtons>


              <CancelButton
                type="button"
                onClick={cancelarExclusao}
              >

                Cancelar

              </CancelButton>


              <ConfirmButton
                type="button"
                onClick={confirmarExclusao}
              >

                Sim, excluir

              </ConfirmButton>


            </ModalButtons>


          </DeleteModal>

        </DeleteModalOverlay>

      )}

    </Page>

  );

}