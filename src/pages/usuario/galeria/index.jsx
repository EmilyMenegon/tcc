import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";
import { getAuthHeaders } from "../../../utils/auth";

import { FiX, FiImage, FiChevronLeft, FiChevronRight } from "react-icons/fi";

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


export default function Galeria() {

  const [indiceAtual, setIndiceAtual] = useState(null);
  const [fotos, setFotos] = useState([]);

  const imagemSelecionada =
    indiceAtual !== null && fotos[indiceAtual] ? fotos[indiceAtual] : null;


  /* ==========================================
     CARREGAR GALERIA DO BANCO
  ========================================== */

  useEffect(() => {

    fetch("http://localhost:3001/galeria", {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => setFotos(Array.isArray(data) ? data : []))
      .catch(() => setFotos([]));

  }, []);


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
     TECLADO: ESC, SETAS
  ========================================== */

  useEffect(() => {

    function handleKeyDown(event) {

      if (!imagemSelecionada) return;

      if (event.key === "Escape") fecharImagem();
      if (event.key === "ArrowLeft") irParaAnterior();
      if (event.key === "ArrowRight") irParaProxima();

    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);

  }, [imagemSelecionada, indiceAtual, fotos]);


  return (

    <Page>

      <Layout />

      <Content>

        <Header>
          <Title>Galeria</Title>
          <Subtitle>
            Confira os melhores momentos registrados durante o evento.
          </Subtitle>
        </Header>

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

              <Card
                key={foto.id}
                onClick={() => abrirImagem(foto)}
                tabIndex={0}
                role="button"
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    abrirImagem(foto);
                  }
                }}
              >

                <ImageBox>
                  <img src={foto.imagem} alt="Imagem da galeria" />
                </ImageBox>

              </Card>

            ))

          )}

        </Gallery>

      </Content>

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

    </Page>

  );

}