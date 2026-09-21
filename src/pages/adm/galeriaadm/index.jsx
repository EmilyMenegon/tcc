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

export default function Galeriaadm() {
  const [indiceAtual, setIndiceAtual] = useState(null);
  const [imagemParaExcluir, setImagemParaExcluir] = useState(null);
  const [fotos, setFotos] = useState([]);
  const [erro, setErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [carregando, setCarregando] = useState(true);

  const fileInputRef = useRef(null);
  const [anoInicial, setAnoInicial] = useState(2026);
  const [anoSelecionado, setAnoSelecionado] = useState(2026);

  const anosVisiveis = Array.from(
    { length: 3 },
    (_, index) => anoInicial + index
  );

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

  const handleButtonMouseMove = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    button.style.setProperty(
      "--mouse-x",
      `${event.clientX - rect.left}px`
    );
    button.style.setProperty(
      "--mouse-y",
      `${event.clientY - rect.top}px`
    );
  };

  useEffect(() => {
    carregarFotos();
  }, []);

  function carregarFotos() {
    setCarregando(true);

    fetch("http://localhost:3001/galeria", {
      headers: getAuthHeaders(),
    })
      .then((res) => res.json())
      .then((data) => {
        setFotos(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        setErro("Não foi possível carregar a galeria.");
      })
      .finally(() => {
        setCarregando(false);
      });
  }

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

  const fotosDoAno = fotos.filter(
    (foto) => descobrirAno(foto) === anoSelecionado
  );

  const imagemSelecionada =
    indiceAtual !== null && fotosDoAno[indiceAtual]
      ? fotosDoAno[indiceAtual]
      : null;

  function quantidadePorAno(ano) {
    return fotos.filter((foto) => descobrirAno(foto) === ano).length;
  }

  const abrirGaleria = () => {
    fileInputRef.current?.click();
  };

  function arquivoParaBase64(arquivo) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(arquivo);
    });
  }

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
        headers: {
          "Content-Type": "application/json",
          ...getAuthHeaders(),
        },
        body: JSON.stringify({
          email: usuarioLogado.email,
          fotos: base64s,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.erro || "Erro ao enviar os arquivos.");
        return;
      }

      setFotos((prev) => [...data, ...prev]);
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

  function abrirImagem(foto) {
    const indice = fotosDoAno.findIndex(
      (item) => item.id === foto.id
    );
    setIndiceAtual(indice);
  }

  function fecharImagem() {
    setIndiceAtual(null);
  }

  function irParaAnterior() {
    if (indiceAtual === null || fotosDoAno.length === 0) return;

    setIndiceAtual((atual) =>
      atual === 0 ? fotosDoAno.length - 1 : atual - 1
    );
  }

  function irParaProxima() {
    if (indiceAtual === null || fotosDoAno.length === 0) return;

    setIndiceAtual((atual) =>
      atual === fotosDoAno.length - 1 ? 0 : atual + 1
    );
  }

  const pedirExclusao = (foto) => {
    setImagemParaExcluir(foto);
  };

  const cancelarExclusao = () => {
    setImagemParaExcluir(null);
  };

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

      if (!res.ok) throw new Error();

      setFotos((prev) =>
        prev.filter((foto) => foto.id !== imagemParaExcluir.id)
      );

      if (imagemSelecionada?.id === imagemParaExcluir.id) {
        setIndiceAtual(null);
      }
    } catch {
      setErro("Não foi possível excluir o arquivo.");
    } finally {
      setImagemParaExcluir(null);
    }
  };

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

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    imagemSelecionada,
    imagemParaExcluir,
    indiceAtual,
    fotosDoAno,
  ]);

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
              <EmptyTitle>Carregando galeria...</EmptyTitle>
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
              <Card key={foto.id}>
                <ImageBox onClick={() => abrirImagem(foto)}>
                  {ehVideo(foto.imagem) ? (
                    <VideoThumb src={foto.imagem} />
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
                  onMouseMove={handleButtonMouseMove}
                  onClick={(event) => {
                    event.stopPropagation();
                    pedirExclusao(foto);
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

      <FloatingButton
        type="button"
        onMouseMove={handleButtonMouseMove}
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

            {fotosDoAno.length > 1 && (
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

            {fotosDoAno.length > 1 && (
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

      {imagemParaExcluir && (
        <DeleteModalOverlay
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              cancelarExclusao();
            }
          }}
        >
          <DeleteModal>
            <h3>Excluir arquivo</h3>

            <p>
              Tem certeza que deseja excluir este arquivo?
            </p>

            <ModalButtons>
              <CancelButton
                type="button"
                onMouseMove={handleButtonMouseMove}
                onClick={cancelarExclusao}
              >
                <span className="buttonContent">
                  Cancelar
                </span>
              </CancelButton>

              <ConfirmButton
                type="button"
                onMouseMove={handleButtonMouseMove}
                onClick={confirmarExclusao}
              >
                <span className="buttonContent">
                  Sim, excluir
                </span>
              </ConfirmButton>
            </ModalButtons>
          </DeleteModal>
        </DeleteModalOverlay>
      )}
    </Page>
  );
}