import { useEffect, useRef, useState } from "react";
import Layoutadm from "../../../components/Layoutadm";
import { getUsuarioLogado, getAuthHeaders } from "../../../utils/auth";
import VideoThumb from "../../../components/VideoThumb";

import {
  FiPlus,
  FiX,
  FiTrash2,
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
  FloatingButton,
  Modal,
  ModalContent,
  ModalImage,
  CloseButton,
  NavButton,
  DeleteButton,
  DeleteModalOverlay,
  DeleteModal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";


function ehVideo(arquivoBase64) {
  return (
    typeof arquivoBase64 === "string" &&
    arquivoBase64.startsWith("data:video")
  );
}


export default function Galeriaadm() {

  const [indiceAtual, setIndiceAtual] = useState(null);
  const [imagemParaExcluir, setImagemParaExcluir] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const fileInputRef = useRef(null);


  const imagemSelecionada =
    indiceAtual !== null && fotos[indiceAtual]
      ? fotos[indiceAtual]
      : null;


  /* ==========================================
     ANIMAÇÃO DOS BOTÕES
  ========================================== */

  const handleButtonMouseMove = (event) => {

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

  };


  /* ==========================================
     CARREGAR GALERIA DO BANCO
  ========================================== */

  useEffect(() => {

    carregarFotos();

  }, []);


  function carregarFotos() {

    setCarregando(true);

    fetch(
      "http://localhost:3001/galeria",
      {
        headers: getAuthHeaders(),
      }
    )
      .then((res) => res.json())
      .then((data) => {

        setFotos(
          Array.isArray(data)
            ? data
            : []
        );

      })
      .catch(() => {

        setErro(
          "Não foi possível carregar a galeria."
        );

      })
      .finally(() => {

        setCarregando(false);

      });

  }


  /* ==========================================
     ABRIR SELETOR DE ARQUIVO
  ========================================== */

  const abrirGaleria = () => {

    fileInputRef.current?.click();

  };


  /* ==========================================
     CONVERTER ARQUIVO PARA BASE64
  ========================================== */

  function arquivoParaBase64(arquivo) {

    return new Promise(
      (resolve, reject) => {

        const reader =
          new FileReader();

        reader.onload = () =>
          resolve(reader.result);

        reader.onerror = reject;

        reader.readAsDataURL(
          arquivo
        );

      }
    );

  }


  /* ==========================================
     ADICIONAR IMAGENS/VÍDEOS
  ========================================== */

  const adicionarImagem = async (e) => {

    const arquivos =
      Array.from(e.target.files);

    if (!arquivos.length) {
      return;
    }

    setErro("");
    setEnviando(true);

    try {

      const usuarioLogado =
        getUsuarioLogado();

      const base64s =
        await Promise.all(
          arquivos.map(
            (arquivo) =>
              arquivoParaBase64(
                arquivo
              )
          )
        );

      const res =
        await fetch(
          "http://localhost:3001/galeria",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
              ...getAuthHeaders(),
            },

            body: JSON.stringify({
              email:
                usuarioLogado.email,
              fotos: base64s,
            }),
          }
        );

      const data =
        await res.json();

      if (!res.ok) {

        setErro(
          data.erro ||
          "Erro ao enviar os arquivos."
        );

        return;

      }

      setFotos((prev) => [
        ...data,
        ...prev,
      ]);

    } catch (err) {

      console.error(err);

      setErro(
        "Não foi possível enviar os arquivos. Se for um vídeo grande, tente um arquivo menor."
      );

    } finally {

      setEnviando(false);

      e.target.value = "";

    }

  };


  /* ==========================================
     ABRIR IMAGEM/VÍDEO
  ========================================== */

  function abrirImagem(foto) {

    const indice =
      fotos.findIndex(
        (item) =>
          item.id === foto.id
      );

    setIndiceAtual(indice);

  }


  function fecharImagem() {

    setIndiceAtual(null);

  }


  function irParaAnterior() {

    if (
      indiceAtual === null ||
      fotos.length === 0
    ) {
      return;
    }

    setIndiceAtual((atual) =>
      atual === 0
        ? fotos.length - 1
        : atual - 1
    );

  }


  function irParaProxima() {

    if (
      indiceAtual === null ||
      fotos.length === 0
    ) {
      return;
    }

    setIndiceAtual((atual) =>
      atual === fotos.length - 1
        ? 0
        : atual + 1
    );

  }


  /* ==========================================
     EXCLUSÃO
  ========================================== */

  const pedirExclusao = (foto) => {

    setImagemParaExcluir(foto);

  };


  const cancelarExclusao = () => {

    setImagemParaExcluir(null);

  };


  const confirmarExclusao =
    async () => {

      if (!imagemParaExcluir) {
        return;
      }

      try {

        const res =
          await fetch(
            `http://localhost:3001/galeria/${imagemParaExcluir.id}`,
            {
              method: "DELETE",
              headers:
                getAuthHeaders(),
            }
          );

        if (!res.ok) {
          throw new Error();
        }

        setFotos((prev) =>
          prev.filter(
            (foto) =>
              foto.id !==
              imagemParaExcluir.id
          )
        );

        if (
          imagemSelecionada?.id ===
          imagemParaExcluir.id
        ) {

          setIndiceAtual(null);

        }

      } catch (err) {

        setErro(
          "Não foi possível excluir o arquivo."
        );

      } finally {

        setImagemParaExcluir(null);

      }

    };


  /* ==========================================
     TECLADO
  ========================================== */

  useEffect(() => {

    function handleKeyDown(event) {

      if (imagemParaExcluir) {

        if (
          event.key === "Escape"
        ) {
          cancelarExclusao();
        }

        return;

      }

      if (imagemSelecionada) {

        if (
          event.key === "Escape"
        ) {
          fecharImagem();
        }

        if (
          event.key ===
          "ArrowLeft"
        ) {
          irParaAnterior();
        }

        if (
          event.key ===
          "ArrowRight"
        ) {
          irParaProxima();
        }

      }

    }


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [
    imagemSelecionada,
    imagemParaExcluir,
    indiceAtual,
    fotos,
  ]);


  return (

    <Page>

      <Layoutadm />


      <Content>

        <Header>

          <Title>
            Galeria
          </Title>

          <Subtitle>
            Confira os melhores momentos
            registrados durante o evento.
          </Subtitle>

        </Header>


        {erro && (

          <p
            style={{
              textAlign: "center",
              color: "#d62828",
              marginBottom: 20,
            }}
          >
            {erro}
          </p>

        )}


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

          ) : fotos.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiImage />
              </EmptyIcon>

              <EmptyTitle>
                Nenhuma foto ou vídeo disponível
              </EmptyTitle>

              <EmptyText>
                No momento não existem
                arquivos publicados na galeria.
              </EmptyText>

            </EmptyState>

          ) : (

            fotos.map((foto) => (

              <Card
                key={foto.id}
              >

                <ImageBox
                  onClick={() =>
                    abrirImagem(foto)
                  }
                >

                  {ehVideo(
                    foto.imagem
                  ) ? (

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


                <DeleteButton
                  type="button"

                  onMouseMove={
                    handleButtonMouseMove
                  }

                  onClick={(event) => {

                    event.stopPropagation();

                    pedirExclusao(
                      foto
                    );

                  }}

                  aria-label="Excluir arquivo"
                  title="Excluir arquivo"
                >

                  <FiTrash2 />

                </DeleteButton>

              </Card>

            ))

          )}

        </Gallery>

      </Content>


      {/* ==========================================
          BOTÃO FLUTUANTE
      ========================================== */}

      <FloatingButton
        type="button"

        onMouseMove={
          handleButtonMouseMove
        }

        onClick={abrirGaleria}

        aria-label="Adicionar imagens ou vídeos"

        title="Adicionar imagens ou vídeos"

        disabled={enviando}
      >

        <span className="buttonContent">

          <FiPlus />

        </span>

      </FloatingButton>


      <input
        type="file"
        accept="image/*,video/*"
        multiple
        ref={fileInputRef}
        hidden
        onChange={adicionarImagem}
      />


      {/* ==========================================
          MODAL DA IMAGEM/VÍDEO
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

            <CloseButton
              type="button"
              onClick={fecharImagem}
              aria-label="Fechar visualização"
              title="Fechar"
            >

              <FiX />

            </CloseButton>


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
                title="Anterior"
              >

                <FiChevronLeft />

              </NavButton>

            )}


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
                  boxShadow:
                    "0 20px 60px rgba(0,0,0,.4)",
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
                title="Próximo"
              >

                <FiChevronRight />

              </NavButton>

            )}

          </ModalContent>

        </Modal>

      )}


      {/* ==========================================
          MODAL DE EXCLUSÃO
      ========================================== */}

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
              Excluir arquivo
            </h3>

            <p>
              Tem certeza que deseja
              excluir este arquivo?
            </p>


            <ModalButtons>

              <CancelButton
                type="button"

                onMouseMove={
                  handleButtonMouseMove
                }

                onClick={
                  cancelarExclusao
                }
              >
                Cancelar
              </CancelButton>


              <ConfirmButton
                type="button"

                onMouseMove={
                  handleButtonMouseMove
                }

                onClick={
                  confirmarExclusao
                }
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