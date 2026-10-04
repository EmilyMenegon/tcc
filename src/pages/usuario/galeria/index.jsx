import { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import VideoThumb from "../../../components/VideoThumb";
import { descobrirAno, ANO_MINIMO } from "../../../utils/ano";
import {
  FiX,
  FiImage,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiStar,
} from "react-icons/fi";
import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Bloco,
  BlocoHeader,
  BlocoIcone,
  BlocoInfo,
  BlocoTitulo,
  BlocoDescricao,
  BlocoContador,
  Gallery,
  FixedGallery,
  Card,
  ImageBox,
  PinBadge,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  ErrorMessage,
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

const API_URL = "http://localhost:3001";

function ehVideo(arquivoBase64) {
  return (
    typeof arquivoBase64 === "string" &&
    arquivoBase64.startsWith("data:video")
  );
}

function ehFixada(foto) {
  return Boolean(foto?.fixada);
}

const handleButtonMouseMove = (event) => {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();

  button.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  button.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
};

function BlocoPagina({ icone, titulo, descricao, extra, children }) {
  return (
    <Bloco>
      <BlocoHeader>
        <BlocoIcone>{icone}</BlocoIcone>
        <BlocoInfo>
          <BlocoTitulo>{titulo}</BlocoTitulo>
          <BlocoDescricao>{descricao}</BlocoDescricao>
        </BlocoInfo>
        {extra}
      </BlocoHeader>
      {children}
    </Bloco>
  );
}

function MidiaThumb({ foto, alt }) {
  return ehVideo(foto.imagem) ? (
    <VideoThumb src={foto.imagem} />
  ) : (
    <img src={foto.imagem} alt={alt} loading="lazy" />
  );
}

export default function Galeriausuario() {
  const [fotos, setFotos] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  // { lista: "fixadas" | "album", indice: number } ou null
  const [visualizando, setVisualizando] = useState(null);

  const [anoInicial, setAnoInicial] = useState(ANO_MINIMO);
  const [anoSelecionado, setAnoSelecionado] = useState(ANO_MINIMO);

  const anosVisiveis = Array.from({ length: 3 }, (_, i) => anoInicial + i);

  /* ---------- Listas derivadas ---------- */

  const fotosFixadas = fotos.filter(ehFixada);
  const fotosAlbum = fotos.filter((foto) => !ehFixada(foto));
  const fotosDoAno = fotosAlbum.filter(
    (foto) => descobrirAno(foto) === anoSelecionado
  );

  const listaAberta =
    visualizando?.lista === "fixadas" ? fotosFixadas : fotosDoAno;

  const imagemSelecionada =
    visualizando && listaAberta[visualizando.indice]
      ? listaAberta[visualizando.indice]
      : null;

  function quantidadePorAno(ano) {
    return fotosAlbum.filter((foto) => descobrirAno(foto) === ano).length;
  }

  /* ---------- Carregamento ---------- */

  useEffect(() => {
    let ativo = true;

    fetch(`${API_URL}/galeria`)
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) => {
        if (ativo) setFotos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        if (ativo) setErro("Não foi possível carregar a galeria.");
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });

    return () => {
      ativo = false;
    };
  }, []);

  /* ---------- Anos ---------- */

  function avancarAnos() {
    const novoAno = anoInicial + 3;
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
    setVisualizando(null);
  }

  function voltarAnos() {
    const novoAno = Math.max(ANO_MINIMO, anoInicial - 3);
    setAnoInicial(novoAno);
    setAnoSelecionado(novoAno);
    setVisualizando(null);
  }

  function selecionarAno(ano) {
    setAnoSelecionado(ano);
    setVisualizando(null);
  }

  /* ---------- Visualização ---------- */

  function abrirImagem(lista, foto) {
    const origem = lista === "fixadas" ? fotosFixadas : fotosDoAno;
    const indice = origem.findIndex((item) => item.id === foto.id);
    if (indice >= 0) setVisualizando({ lista, indice });
  }

  function fecharImagem() {
    setVisualizando(null);
  }

  function irParaAnterior() {
    if (!visualizando || listaAberta.length === 0) return;

    setVisualizando((atual) => ({
      ...atual,
      indice: atual.indice === 0 ? listaAberta.length - 1 : atual.indice - 1,
    }));
  }

  function irParaProxima() {
    if (!visualizando || listaAberta.length === 0) return;

    setVisualizando((atual) => ({
      ...atual,
      indice: atual.indice === listaAberta.length - 1 ? 0 : atual.indice + 1,
    }));
  }

  /* ---------- Teclado ---------- */

  useEffect(() => {
    function handleKeyDown(event) {
      if (!imagemSelecionada) return;

      if (event.key === "Escape") fecharImagem();
      if (event.key === "ArrowLeft") irParaAnterior();
      if (event.key === "ArrowRight") irParaProxima();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [imagemSelecionada, visualizando, listaAberta]);

  /* ---------- Render ---------- */

  function renderCard(foto, lista, fixada = false) {
    return (
      <Card key={foto.id}>
        <ImageBox onClick={() => abrirImagem(lista, foto)}>
          <MidiaThumb foto={foto} alt="Imagem da galeria" />
        </ImageBox>

        {fixada && (
          <PinBadge>
            <FiStar />
            Fixada
          </PinBadge>
        )}
      </Card>
    );
  }

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

        {erro && <ErrorMessage>{erro}</ErrorMessage>}

        {!carregando && fotosFixadas.length > 0 && (
          <BlocoPagina
            icone={<FiStar />}
            titulo="Imagens fixadas"
            descricao="Os destaques do Slam Interescolar."
            extra={
              <BlocoContador>
                {fotosFixadas.length}{" "}
                {fotosFixadas.length === 1 ? "imagem" : "imagens"}
              </BlocoContador>
            }
          >
            <FixedGallery>
              {fotosFixadas.map((foto) => renderCard(foto, "fixadas", true))}
            </FixedGallery>
          </BlocoPagina>
        )}

        <BlocoPagina
          icone={<FiCalendar />}
          titulo="Ano do álbum"
          descricao="Escolha o ano que deseja visualizar."
        >
          <YearsWrapper>
            <YearArrow
              type="button"
              onClick={voltarAnos}
              onMouseMove={handleButtonMouseMove}
              disabled={anoInicial === ANO_MINIMO}
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
        </BlocoPagina>

        <BlocoPagina
          icone={<FiImage />}
          titulo={`Álbum de ${anoSelecionado}`}
          descricao="Fotos e vídeos do ano selecionado."
          extra={
            <BlocoContador>
              {fotosDoAno.length}{" "}
              {fotosDoAno.length === 1 ? "arquivo" : "arquivos"}
            </BlocoContador>
          }
        >
          <Gallery>
            {carregando ? (
              <EmptyState>
                <EmptyIcon>
                  <FiImage />
                </EmptyIcon>
                <EmptyTitle>Carregando galeria...</EmptyTitle>
              </EmptyState>
            ) : fotosDoAno.length === 0 ? (
              <EmptyState>
                <EmptyIcon>
                  <FiImage />
                </EmptyIcon>
                <EmptyTitle>Nenhuma foto ou vídeo disponível</EmptyTitle>
                <EmptyText>
                  Não existem arquivos publicados no álbum de {anoSelecionado}.
                </EmptyText>
              </EmptyState>
            ) : (
              fotosDoAno.map((foto) => renderCard(foto, "album"))
            )}
          </Gallery>
        </BlocoPagina>
      </Content>

      {imagemSelecionada && (
        <Modal
          onClick={(event) => {
            if (event.target === event.currentTarget) {
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

            {listaAberta.length > 1 && (
              <NavButton
                type="button"
                $direction="left"
                onMouseMove={handleButtonMouseMove}
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

            {ehVideo(imagemSelecionada.imagem) ? (
              <video
                src={imagemSelecionada.imagem}
                controls
                autoPlay
                playsInline
                onClick={(event) => event.stopPropagation()}
                style={{
                  maxWidth: "90vw",
                  maxHeight: "88vh",
                  borderRadius: "15px",
                  boxShadow: "0 20px 60px rgba(0,0,0,.4)",
                }}
              />
            ) : (
              <ModalImage
                src={imagemSelecionada.imagem}
                alt="Imagem ampliada"
                onClick={(event) => event.stopPropagation()}
              />
            )}

            {listaAberta.length > 1 && (
              <NavButton
                type="button"
                $direction="right"
                onMouseMove={handleButtonMouseMove}
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
    </Page>
  );
}