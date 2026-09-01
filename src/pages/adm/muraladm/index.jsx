import { useEffect, useState } from "react";

import Layoutadm from "../../../components/Layoutadm";

import {
  FiPlus,
  FiX,
  FiTrash2,
  FiMessageSquare,
  FiEdit3,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Mural,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  PostIt,
  PostItPin,
  PostItTitle,
  PostItMessage,
  PostItFooter,
  ReadMore,
  FloatingButton,
  CreateOverlay,
  CreateModal,
  CreateHeader,
  CreateTitle,
  CreateCloseButton,
  CreateForm,
  Field,
  Label,
  TitleInput,
  DescriptionInput,
  ColorLabel,
  ColorOptions,
  ColorOption,
  CreateButton,
  ViewOverlay,
  ViewPostIt,
  ViewPostItPin,
  ViewTopButtons,
  ViewEditButton,
  ViewCloseButton,
  ViewDeleteButton,
  ViewContent,
  ViewTitle,
  ViewDescription,
  DeleteOverlay,
  DeleteModal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";


// =====================================================
// STORAGE
// =====================================================

const MURAL_STORAGE_KEY = "muralPostIts";

const MURAL_EVENT = "muralPostItsUpdated";


// =====================================================
// COMPONENTE
// =====================================================

export default function Muraladm() {

  const [posts, setPosts] = useState([]);

  const [showCreateModal, setShowCreateModal] =
    useState(false);

  const [postSelecionado, setPostSelecionado] =
    useState(null);

  const [postEditando, setPostEditando] =
    useState(null);

  const [postParaExcluir, setPostParaExcluir] =
    useState(null);

  const [titulo, setTitulo] =
    useState("");

  const [descricao, setDescricao] =
    useState("");

  const [corSelecionada, setCorSelecionada] =
    useState("#fff176");


  // ===================================================
  // CORES
  // ===================================================

  const cores = [
    "#fff176",
    "#ffcc80",
    "#ef9a9a",
    "#f48fb1",
    "#ce93d8",
    "#90caf9",
    "#80cbc4",
    "#a5d6a7",
  ];


  // ===================================================
  // CARREGAR POSTS
  // ===================================================

  const carregarPosts = () => {

    try {

      const dados =
        localStorage.getItem(
          MURAL_STORAGE_KEY
        );


      if (!dados) {

        setPosts([]);

        return;

      }


      const postsSalvos =
        JSON.parse(dados);


      if (Array.isArray(postsSalvos)) {

        setPosts(postsSalvos);

      } else {

        setPosts([]);

      }

    } catch (error) {

      console.error(
        "Erro ao carregar o mural:",
        error
      );

      setPosts([]);

    }

  };


  // ===================================================
  // CARREGAMENTO INICIAL
  // ===================================================

  useEffect(() => {

    carregarPosts();

  }, []);


  // ===================================================
  // ATUALIZAÇÃO DO MURAL
  // ===================================================

  useEffect(() => {

    const atualizarMural = () => {

      carregarPosts();

    };


    window.addEventListener(
      MURAL_EVENT,
      atualizarMural
    );


    window.addEventListener(
      "storage",
      atualizarMural
    );


    const intervalo =
      setInterval(
        carregarPosts,
        1000
      );


    return () => {

      window.removeEventListener(
        MURAL_EVENT,
        atualizarMural
      );


      window.removeEventListener(
        "storage",
        atualizarMural
      );


      clearInterval(intervalo);

    };

  }, []);


  // ===================================================
  // EFEITO DO MOUSE NOS BOTÕES
  // ===================================================

  const handleButtonMouseMove = (event) => {

    const button =
      event.currentTarget;

    const rect =
      button.getBoundingClientRect();

    const x =
      event.clientX - rect.left;

    const y =
      event.clientY - rect.top;


    button.style.setProperty(
      "--mouse-x",
      `${x}px`
    );


    button.style.setProperty(
      "--mouse-y",
      `${y}px`
    );

  };


  // ===================================================
  // ABRIR CRIAÇÃO
  // ===================================================

  const abrirCriacao = () => {

    setPostEditando(null);

    setTitulo("");

    setDescricao("");

    setCorSelecionada("#fff176");

    setShowCreateModal(true);

  };


  // ===================================================
  // FECHAR CRIAÇÃO / EDIÇÃO
  // ===================================================

  const fecharCriacao = () => {

    setShowCreateModal(false);

    setPostEditando(null);

    setTitulo("");

    setDescricao("");

    setCorSelecionada("#fff176");

  };


  // ===================================================
  // CRIAR POST
  // ===================================================

  const criarPost = (event) => {

    event.preventDefault();


    const tituloLimpo =
      titulo.trim();

    const descricaoLimpa =
      descricao.trim();


    if (!tituloLimpo) {

      return;

    }


    const novoPost = {

      id: Date.now(),

      titulo:
        tituloLimpo,

      descricao:
        descricaoLimpa,

      mensagem:
        descricaoLimpa,

      cor:
        corSelecionada,

      rotacao:
        Number(
          (
            Math.random() * 4 - 2
          ).toFixed(2)
        ),

    };


    const novosPosts = [
      ...posts,
      novoPost,
    ];


    localStorage.setItem(
      MURAL_STORAGE_KEY,
      JSON.stringify(
        novosPosts
      )
    );


    setPosts(novosPosts);


    fecharCriacao();


    window.dispatchEvent(
      new Event(MURAL_EVENT)
    );

  };


  // ===================================================
  // ABRIR POST
  // ===================================================

  const abrirPost = (post) => {

    setPostSelecionado(post);

  };


  // ===================================================
  // FECHAR POST
  // ===================================================

  const fecharPost = () => {

    setPostSelecionado(null);

  };


  // ===================================================
  // INICIAR EDIÇÃO
  // ===================================================

  const iniciarEdicao = (post) => {

    setPostEditando(post);

    setTitulo(
      post.titulo || ""
    );

    setDescricao(
      post.mensagem ||
      post.descricao ||
      ""
    );

    setCorSelecionada(
      post.cor ||
      "#fff176"
    );

    setPostSelecionado(null);

    setShowCreateModal(true);

  };


  // ===================================================
  // ATUALIZAR POST
  // ===================================================

  const atualizarPost = (event) => {

    event.preventDefault();


    if (!postEditando) {

      return;

    }


    const tituloLimpo =
      titulo.trim();

    const descricaoLimpa =
      descricao.trim();


    if (!tituloLimpo) {

      return;

    }


    const postsAtualizados =
      posts.map((post) => {

        if (
          post.id !==
          postEditando.id
        ) {

          return post;

        }


        return {

          ...post,

          titulo:
            tituloLimpo,

          descricao:
            descricaoLimpa,

          mensagem:
            descricaoLimpa,

          cor:
            corSelecionada,

        };

      });


    localStorage.setItem(
      MURAL_STORAGE_KEY,
      JSON.stringify(
        postsAtualizados
      )
    );


    setPosts(
      postsAtualizados
    );


    fecharCriacao();


    window.dispatchEvent(
      new Event(MURAL_EVENT)
    );

  };


  // ===================================================
  // PEDIR EXCLUSÃO
  // ===================================================

  const pedirExclusao = (post) => {

    setPostParaExcluir(post);

  };


  // ===================================================
  // CANCELAR EXCLUSÃO
  // ===================================================

  const cancelarExclusao = () => {

    setPostParaExcluir(null);

  };


  // ===================================================
  // CONFIRMAR EXCLUSÃO
  // ===================================================

  const confirmarExclusao = () => {

    if (!postParaExcluir) {

      return;

    }


    const novosPosts =
      posts.filter(
        (post) =>
          post.id !==
          postParaExcluir.id
      );


    localStorage.setItem(
      MURAL_STORAGE_KEY,
      JSON.stringify(
        novosPosts
      )
    );


    setPosts(novosPosts);

    setPostParaExcluir(null);

    setPostSelecionado(null);


    window.dispatchEvent(
      new Event(MURAL_EVENT)
    );

  };


  // ===================================================
  // TECLA ESC
  // ===================================================

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (
        event.key !== "Escape"
      ) {

        return;

      }


      if (postParaExcluir) {

        setPostParaExcluir(null);

        return;

      }


      if (showCreateModal) {

        fecharCriacao();

        return;

      }


      if (postSelecionado) {

        fecharPost();

      }

    };


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
    postParaExcluir,
    showCreateModal,
    postSelecionado,
  ]);


  // ===================================================
  // RENDER
  // ===================================================

  return (

    <Page>

      <Layoutadm />


      <Content>

        <Header>

          <Title>
            Mural
          </Title>


          <Subtitle>
            Deixe seus recados e informações
            importantes para o evento.
          </Subtitle>

        </Header>


        <Mural>

          {posts.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiMessageSquare />
              </EmptyIcon>


              <EmptyTitle>
                Nenhum post it cadastrado
              </EmptyTitle>


              <EmptyText>
                No momento não existem
                recados publicados no mural.
              </EmptyText>

            </EmptyState>

          ) : (

            posts.map(
              (post, index) => (

                <PostIt

                  key={
                    post.id ||
                    index
                  }

                  $color={
                    post.cor ||
                    "#fff176"
                  }

                  $rotation={
                    post.rotacao
                  }

                  $index={index}

                  onClick={() =>
                    abrirPost(post)
                  }

                  role="button"

                  tabIndex={0}

                  onKeyDown={(event) => {

                    if (
                      event.key === "Enter" ||
                      event.key === " "
                    ) {

                      event.preventDefault();

                      abrirPost(post);

                    }

                  }}

                >

                  <PostItPin />


                  <PostItTitle>

                    {post.titulo}

                  </PostItTitle>


                  <PostItMessage>

                    {
                      post.mensagem ||
                      post.descricao ||
                      ""
                    }

                  </PostItMessage>


                  <PostItFooter>

                    <ReadMore>
                      Clique para visualizar
                    </ReadMore>

                  </PostItFooter>

                </PostIt>

              )

            )

          )}

        </Mural>

      </Content>


      {/* =================================================
          BOTÃO FLUTUANTE
      ================================================= */}

      <FloatingButton

        type="button"

        onClick={
          abrirCriacao
        }

        onMouseMove={
          handleButtonMouseMove
        }

        aria-label="Criar post it"

        title="Criar post it"

      >

        <span className="buttonContent">

          <FiPlus />

        </span>

      </FloatingButton>


      {/* =================================================
          MODAL CRIAR / EDITAR
      ================================================= */}

      {showCreateModal && (

        <CreateOverlay

          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharCriacao();

            }

          }}

        >

          <CreateModal>

            <CreateHeader>

              <CreateTitle>

                {postEditando
                  ? "Editar post it"
                  : "Novo post it"}

              </CreateTitle>


              <CreateCloseButton

                type="button"

                onClick={
                  fecharCriacao
                }

                onMouseMove={
                  handleButtonMouseMove
                }

                aria-label="Fechar"

                title="Fechar"

              >

                <span className="buttonContent">

                  <FiX />

                </span>

              </CreateCloseButton>

            </CreateHeader>


            <CreateForm

              onSubmit={
                postEditando
                  ? atualizarPost
                  : criarPost
              }

            >

              <Field>

                <Label>
                  Título
                </Label>


                <TitleInput

                  type="text"

                  value={titulo}

                  onChange={(event) =>
                    setTitulo(
                      event.target.value
                    )
                  }

                  placeholder="Digite o título"

                  maxLength={60}

                  autoFocus

                />

              </Field>


              <Field>

                <Label>
                  Descrição
                </Label>


                <DescriptionInput

                  value={descricao}

                  onChange={(event) =>
                    setDescricao(
                      event.target.value
                    )
                  }

                  placeholder="Digite seu recado..."

                  maxLength={300}

                />

              </Field>


              <Field>

                <ColorLabel>
                  Escolha a cor
                </ColorLabel>


                <ColorOptions>

                  {cores.map(
                    (cor) => (

                      <ColorOption

                        key={cor}

                        type="button"

                        $color={cor}

                        $selected={
                          cor ===
                          corSelecionada
                        }

                        onClick={() =>
                          setCorSelecionada(
                            cor
                          )
                        }

                        aria-label={
                          `Selecionar cor ${cor}`
                        }

                      />

                    )
                  )}

                </ColorOptions>

              </Field>


              <CreateButton

                type="submit"

                disabled={
                  !titulo.trim()
                }

                onMouseMove={
                  handleButtonMouseMove
                }

              >

                <span className="buttonContent">

                  {postEditando
                    ? "Salvar alterações"
                    : "Criar post it"}

                </span>

              </CreateButton>

            </CreateForm>

          </CreateModal>

        </CreateOverlay>

      )}


      {/* =================================================
          VISUALIZAR POST
      ================================================= */}

      {postSelecionado && (

        <ViewOverlay

          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharPost();

            }

          }}

        >

          <ViewPostIt

            $color={
              postSelecionado.cor ||
              "#fff176"
            }

            $rotation={
              postSelecionado.rotacao
            }

          >

            <ViewPostItPin />


            <ViewTopButtons>

              <ViewEditButton

                type="button"

                onClick={() =>
                  iniciarEdicao(
                    postSelecionado
                  )
                }

                onMouseMove={
                  handleButtonMouseMove
                }

                aria-label="Editar post it"

                title="Editar"

              >

                <span className="buttonContent">

                  <FiEdit3 />

                </span>

              </ViewEditButton>


              <ViewDeleteButton

                type="button"

                onClick={() =>
                  pedirExclusao(
                    postSelecionado
                  )
                }

                onMouseMove={
                  handleButtonMouseMove
                }

                aria-label="Excluir post it"

                title="Excluir"

              >

                <span className="buttonContent">

                  <FiTrash2 />

                </span>

              </ViewDeleteButton>


              <ViewCloseButton

                type="button"

                onClick={
                  fecharPost
                }

                onMouseMove={
                  handleButtonMouseMove
                }

                aria-label="Fechar post it"

                title="Fechar"

              >

                <span className="buttonContent">

                  <FiX />

                </span>

              </ViewCloseButton>

            </ViewTopButtons>


            <ViewContent>

              <ViewTitle>

                {
                  postSelecionado.titulo
                }

              </ViewTitle>


              <ViewDescription>

                {
                  postSelecionado.mensagem ||
                  postSelecionado.descricao ||
                  ""
                }

              </ViewDescription>

            </ViewContent>

          </ViewPostIt>

        </ViewOverlay>

      )}


      {/* =================================================
          EXCLUSÃO
      ================================================= */}

      {postParaExcluir && (

        <DeleteOverlay>

          <DeleteModal>

            <h3>
              Excluir post it
            </h3>


            <p>
              Tem certeza que deseja
              excluir este post it?
            </p>


            <ModalButtons>

              <CancelButton

                type="button"

                onClick={
                  cancelarExclusao
                }

                onMouseMove={
                  handleButtonMouseMove
                }

              >

                <span className="buttonContent">

                  Cancelar

                </span>

              </CancelButton>


              <ConfirmButton

                type="button"

                onClick={
                  confirmarExclusao
                }

                onMouseMove={
                  handleButtonMouseMove
                }

              >

                <span className="buttonContent">

                  Excluir

                </span>

              </ConfirmButton>

            </ModalButtons>

          </DeleteModal>

        </DeleteOverlay>

      )}

    </Page>

  );

}
