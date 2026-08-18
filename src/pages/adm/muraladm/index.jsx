import { useEffect, useState } from "react";

import Layoutadm from "../../../components/Layoutadm";

import {
  FiPlus,
  FiX,
  FiTrash2,
  FiMessageSquare,
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
  PostItTitle,
  PostItDescription,

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
  ViewTopButtons,
  ViewCloseButton,
  ViewDeleteButton,
  ViewTitle,
  ViewDescription,

  DeleteOverlay,
  DeleteModal,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "./style";


/* =====================================================
   CHAVE DO MURAL
===================================================== */

const MURAL_STORAGE_KEY = "muralPostIts";


/* =====================================================
   EVENTO DO MURAL
===================================================== */

const MURAL_EVENT = "muralPostItsUpdated";


export default function Muraladm() {

  /* ===================================================
     POSTS
  =================================================== */

  const [posts, setPosts] = useState([]);


  /* ===================================================
     MODAL DE CRIAÇÃO
  =================================================== */

  const [showCreateModal, setShowCreateModal] =
    useState(false);


  /* ===================================================
     POST SELECIONADO
  =================================================== */

  const [postSelecionado, setPostSelecionado] =
    useState(null);


  /* ===================================================
     POST PARA EXCLUIR
  =================================================== */

  const [postParaExcluir, setPostParaExcluir] =
    useState(null);


  /* ===================================================
     CAMPOS DO FORMULÁRIO
  =================================================== */

  const [titulo, setTitulo] = useState("");

  const [descricao, setDescricao] = useState("");

  const [corSelecionada, setCorSelecionada] =
    useState("#fff176");


  /* ===================================================
     CORES DISPONÍVEIS
  =================================================== */

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


  /* ===================================================
     CARREGAR POSTS
  =================================================== */

  const carregarPosts = () => {

    try {

      const dados = localStorage.getItem("muralPostIts");


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


  /* ===================================================
     CARREGAR AO ABRIR A PÁGINA
  =================================================== */

  useEffect(() => {

    carregarPosts();

  }, []);


  /* ===================================================
     ATUALIZAR CASO O MURAL MUDE
  =================================================== */

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


    return () => {

      window.removeEventListener(
        MURAL_EVENT,
        atualizarMural
      );


      window.removeEventListener(
        "storage",
        atualizarMural
      );

    };

  }, []);


  /* ===================================================
     ABRIR MODAL DE CRIAÇÃO
  =================================================== */

  const abrirCriacao = () => {

    setTitulo("");

    setDescricao("");

    setCorSelecionada("#fff176");

    setShowCreateModal(true);

  };


  /* ===================================================
     FECHAR MODAL DE CRIAÇÃO
  =================================================== */

  const fecharCriacao = () => {

    setShowCreateModal(false);

  };


  /* ===================================================
     CRIAR POST-IT
  =================================================== */

  const criarPost = (event) => {

    event.preventDefault();


    const tituloLimpo =
      titulo.trim();


    const descricaoLimpa =
      descricao.trim();


    /* TÍTULO É OBRIGATÓRIO */

    if (!tituloLimpo) {

      return;

    }


    /* ===============================================
       NOVO POST
    =============================================== */

    const novoPost = {
  id: Date.now(),
  titulo: tituloLimpo,
  descricao: descricaoLimpa,
  cor: corSelecionada,
  rotacao: Number(
    (Math.random() * 4 - 2).toFixed(2)
  ),
};

setPosts((prev) => {
  const novosPosts = [
    ...prev,
    novoPost,
  ];

  localStorage.setItem(
    "mural",
    JSON.stringify(novosPosts)
  );

  return novosPosts;
});

    


    const novosPosts =
      posts.filter(
        (post) =>
          post.id !==
          postParaExcluir.id
      );


    /* SALVA NOVA LISTA */

    localStorage.setItem(
      MURAL_STORAGE_KEY,
      JSON.stringify(
        novosPosts
      )
    );


    /* ATUALIZA ADM */

    setPosts(novosPosts);


    /* AVISA USUÁRIO */

    window.dispatchEvent(
      new Event(MURAL_EVENT)
    );


    /* FECHA MODAIS */

    setPostParaExcluir(null);

    setPostSelecionado(null);

  };


  /* ===================================================
     TECLA ESC
  =================================================== */

  useEffect(() => {

    const handleKeyDown = (event) => {

      if (event.key !== "Escape") {

        return;

      }


      if (postParaExcluir) {

        setPostParaExcluir(null);

        return;

      }


      if (postSelecionado) {

        setPostSelecionado(null);

        return;

      }


      if (showCreateModal) {

        setShowCreateModal(false);

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
    postSelecionado,
    showCreateModal,
  ]);


  /* ===================================================
     RENDER
  =================================================== */

  return (

    <Page>

      <Layoutadm />


      <Content>

        {/* =========================================
            CABEÇALHO
        ========================================= */}

        <Header>

          <Title>
            Mural
          </Title>


          <Subtitle>
            Deixe seus recados e informações
            importantes para o evento.
          </Subtitle>

        </Header>


        {/* =========================================
            MURAL
        ========================================= */}

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

            posts.map((post, index) => (

              <PostIt
                key={
                  post.id ||
                  index
                }

                $cor={
                  post.cor ||
                  "#fff176"
                }

                $rotacao={
                  post.rotacao ||
                  0
                }

                onClick={() =>
                  abrirPost(post)
                }
              >

                <PostItTitle>
                  {post.titulo}
                </PostItTitle>


                {post.mensagem && (

                  <PostItDescription>
                    {post.mensagem}
                  </PostItDescription>

                )}

              </PostIt>

            ))

          )}

        </Mural>

      </Content>


      {/* =========================================
          BOTÃO FLUTUANTE +
      ========================================= */}

      <FloatingButton
        type="button"
        onClick={abrirCriacao}
        aria-label="Criar post it"
      >

        <FiPlus />

      </FloatingButton>


      {/* =========================================
          MODAL DE CRIAÇÃO
      ========================================= */}

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
                Novo post it
              </CreateTitle>


              <CreateCloseButton
                type="button"
                onClick={
                  fecharCriacao
                }
                aria-label="Fechar"
              >

                <FiX />

              </CreateCloseButton>

            </CreateHeader>


            <CreateForm
              onSubmit={criarPost}
            >

              {/* TÍTULO */}

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


              {/* DESCRIÇÃO */}

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


              {/* CORES */}

              <Field>

                <ColorLabel>
                  Escolha a cor
                </ColorLabel>


                <ColorOptions>

                  {cores.map((cor) => (

                    <ColorOption
                      key={cor}
                      type="button"
                      $cor={cor}
                      $selecionada={
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

                  ))}

                </ColorOptions>

              </Field>


              {/* CRIAR */}

              <CreateButton
                type="submit"
                disabled={
                  !titulo.trim()
                }
              >

                Criar post it

              </CreateButton>

            </CreateForm>

          </CreateModal>

        </CreateOverlay>

      )}


      {/* =========================================
          VISUALIZAR POST-IT
      ========================================= */}

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
            $cor={
              postSelecionado.cor ||
              "#fff176"
            }

            $rotacao={0}
          >

            <ViewTopButtons>

              {/* EXCLUIR */}

              <ViewDeleteButton
                type="button"
                onClick={() =>
                  pedirExclusao(
                    postSelecionado
                  )
                }
                aria-label="Excluir post it"
              >

                <FiTrash2 />

              </ViewDeleteButton>


              {/* FECHAR */}

              <ViewCloseButton
                type="button"
                onClick={
                  fecharPost
                }
                aria-label="Fechar post it"
              >

                <FiX />

              </ViewCloseButton>

            </ViewTopButtons>


            <ViewTitle>

              {
                postSelecionado.titulo
              }

            </ViewTitle>


            {postSelecionado.mensagem && (

              <ViewDescription>

                {
                  postSelecionado.mensagem
                }

              </ViewDescription>

            )}

          </ViewPostIt>

        </ViewOverlay>

      )}


      {/* =========================================
          CONFIRMAÇÃO DE EXCLUSÃO
      ========================================= */}

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
              >

                Cancelar

              </CancelButton>


              <ConfirmButton
                type="button"
                onClick={
                  confirmarExclusao
                }
              >

                Sim, excluir

              </ConfirmButton>

            </ModalButtons>

          </DeleteModal>

        </DeleteOverlay>

      )}

    </Page>

  );

}