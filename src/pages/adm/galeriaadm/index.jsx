import { useEffect, useRef, useState } from "react";
import Layoutadm from "../../../components/Layoutadm";
import { getUsuarioLogado, getAuthHeaders } from "../../../utils/auth";

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


export default function Galeriaadm() {

  const [indiceAtual, setIndiceAtual] = useState(null);
  const [imagemParaExcluir, setImagemParaExcluir] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);

  const fileInputRef = useRef(null);

  const imagemSelecionada =
    indiceAtual !== null && fotos[indiceAtual] ? fotos[indiceAtual] : null;


  /* ==========================================
     CARREGAR GALERIA DO BANCO
  ========================================== */

  useEffect(() => {
    carregarFotos();
  }, []);

  function carregarFotos() {

    fetch("http://localhost:3001/galeria", {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => setFotos(Array.isArray(data) ? data : []))
      .catch(() => setErro("Não foi possível carregar a galeria."));

  }


  /* ==========================================
     ABRIR SELETOR DE IMAGEM
  ========================================== */

  const abrirGaleria = () => {
    fileInputRef.current?.click();
  };


  /* ==========================================
     CONVERTER ARQUIVO PARA BASE64
  ========================================== */

  function arquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(arquivo);
    });
  }


  /* ==========================================
     ADICIONAR IMAGENS (salva no banco)
  ========================================== */

  const adicionarImagem = async (e) => {

    const arquivos = Array.from(e.target.files);
    if (!arquivos.length) return;

    setErro("");
    setEnviando(true);

    try {

      const usuarioLogado = getUsuarioLogado();

      const base64s = await Promise.all(
        arquivos.map((arquivo) => arquivoParaBase64(arquivo))
      );

      const res = await fetch("http://localhost:3001/galeria", {
        method: "POST",
        headers: { "Content-Type": "application/json", ...getAuthHeaders() },
        body: JSON.stringify({
          email: usuarioLogado.email,
          fotos: base64s,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao enviar as imagens.");
        return;
      }

      setFotos((prev) => [...data, ...prev]);

    } catch (err) {
      console.error(err);
      setErro("Não foi possível enviar as imagens.");
    } finally {
      setEnviando(false);
      e.target.value = "";
    }

  };


  /* ==========================================
     ABRIR / FECHAR / NAVEGAR
  ========================================== */

  function abrirImagem(foto) {
    const indice = fotos.findIndex((item) => item.id === foto.id);
    setIndiceAtual(indice);
  }

  function fecharImagem() {
    setIndiceAtual(null);
  }

  function irParaAnterior() {
    if (indiceAtual === null || fotos.length === 0) return;
    setIndiceAtual((atual) => (atual === 0 ? fotos.length - 1 : atual - 1));
  }

  function irParaProxima() {
    if (indiceAtual === null || fotos.length === 0) return;
    setIndiceAtual((atual) => (atual === fotos.length - 1 ? 0 : atual + 1));
  }


  /* ==========================================
     EXCLUSÃO
  ========================================== */

  const pedirExclusao = (foto) => setImagemParaExcluir(foto);
  const cancelarExclusao = () => setImagemParaExcluir(null);

  const confirmarExclusao = async () => {

    if (!imagemParaExcluir) return;

    try {

      const res = await fetch(
        `http://localhost:3001/galeria/${imagemParaExcluir.id}`,
        {
          method: "DELETE",
          headers: getAuthHeaders(),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      setFotos((prev) => prev.filter((foto) => foto.id !== imagemParaExcluir.id));

      if (imagemSelecionada?.id === imagemParaExcluir.id) {
        setIndiceAtual(null);
      }

    } catch (err) {
      setErro("Não foi possível excluir a imagem.");
    } finally {
      setImagemParaExcluir(null);
    }

  };


  /* ==========================================
     TECLADO: ESC, SETAS
  ========================================== */

  useEffect(() => {

    function handleKeyDown(event) {

      if (imagemParaExcluir) {
        if (event.key === "Escape") cancelarExclusao();
        return;
      }

      if (imagemSelecionada) {
        if (event.key === "Escape") fecharImagem();
        if (event.key === "ArrowLeft") irParaAnterior();
        if (event.key === "ArrowRight") irParaProxima();
      }

    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [imagemSelecionada, imagemParaExcluir, indiceAtual, fotos]);


  return (

    <Page>

      <Layoutadm />

      <Content>

        <Header>
          <Title>Galeria</Title>
          <Subtitle>
            Confira os melhores momentos registrados durante o evento.
          </Subtitle>
        </Header>

        {erro && (
          <p style={{ textAlign: "center", color: "red", marginBottom: 20 }}>
            {erro}
          </p>
        )}

        <Gallery>

          {fotos.length === 0 ? (

            <EmptyState>
              <EmptyIcon><FiImage /></EmptyIcon>
              <EmptyTitle>Nenhuma foto disponível</EmptyTitle>
              <EmptyText>
                No momento não existem imagens publicadas na galeria.
              </EmptyText>
            </EmptyState>

          ) : (

            fotos.map((foto) => (

              <Card key={foto.id}>

                <ImageBox onClick={() => abrirImagem(foto)}>
                  <img src={foto.imagem} alt="Imagem da galeria" />
                </ImageBox>

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

      <FloatingButton
        type="button"
        onClick={abrirGaleria}
        aria-label="Adicionar imagens"
        disabled={enviando}
      >
        <FiPlus size={30} />
      </FloatingButton>

      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        hidden
        onChange={adicionarImagem}
      />

      {imagemSelecionada && (

        <Modal
          onClick={(event) => {
            if (event.target === event.currentTarget) fecharImagem();
          }}
        >
          <ModalContent>

            <CloseButton type="button" onClick={fecharImagem} aria-label="Fechar imagem">
              <FiX />
            </CloseButton>

            {fotos.length > 1 && (
              <NavButton
                type="button"
                $direction="left"
                onClick={(event) => {
                  event.stopPropagation();
                  irParaAnterior();
                }}
                aria-label="Imagem anterior"
              >
                <FiChevronLeft />
              </NavButton>
            )}

            <ModalImage
              src={imagemSelecionada.imagem}
              alt="Imagem ampliada"
              onClick={(event) => event.stopPropagation()}
            />

            {fotos.length > 1 && (
              <NavButton
                type="button"
                $direction="right"
                onClick={(event) => {
                  event.stopPropagation();
                  irParaProxima();
                }}
                aria-label="Próxima imagem"
              >
                <FiChevronRight />
              </NavButton>
            )}

          </ModalContent>
        </Modal>

      )}

      {imagemParaExcluir && (

        <DeleteModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) cancelarExclusao();
          }}
        >
          <DeleteModal>

            <h3>Excluir imagem</h3>
            <p>Tem certeza que deseja excluir esta imagem?</p>

            <ModalButtons>
              <CancelButton type="button" onClick={cancelarExclusao}>
                Cancelar
              </CancelButton>
              <ConfirmButton type="button" onClick={confirmarExclusao}>
                Sim, excluir
              </ConfirmButton>
            </ModalButtons>

          </DeleteModal>
        </DeleteModalOverlay>

      )}

    </Page>

  );

}