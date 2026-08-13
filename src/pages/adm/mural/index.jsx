import { useEffect, useState } from "react";

import Layoutadm from "../../../components/Layoutadm";

import {
  FiPlus,
  FiTrash2,
  FiX,
  FiFileText,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  TitleArea,
  Title,
  Subtitle,
  Cards,
  PostIt,
  PostItPin,
  PostItHeader,
  PostItTitle,
  PostItMessage,
  PostItFooter,
  ReadMore,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,
  FloatingButton,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  Label,
  Input,
  TextArea,
  FormFooter,
  ColorArea,
  ColorLabel,
  Colors,
  ColorButton,
  SaveButton,
  FullPostIt,
  FullPostItPin,
  FullPostItContent,
  FullPostItTitle,
  FullPostItMessage,
  FullPostItFooter,
  DeleteButton,
} from "./style";


// ==========================================
// CORES DISPONÍVEIS
// ==========================================

const cores = [
  "#f9be06",
  "#FFDD75",
  "#FF9F9F",
  "#A8E6CF",
  "#A9D6FF",
  "#D8B4FE",
];


// ==========================================
// COMPONENTE
// ==========================================

export default function Muraladm() {

  // ----------------------------------------
  // POSTS
  // ----------------------------------------

  const [posts, setPosts] = useState(() => {

    const dadosSalvos =
      localStorage.getItem("muralPostIts");

    if (!dadosSalvos) {
      return [];
    }

    try {
      return JSON.parse(dadosSalvos);
    } catch {
      return [];
    }

  });


  // ----------------------------------------
  // MODAL DE CRIAÇÃO
  // ----------------------------------------

  const [modalAberto, setModalAberto] =
    useState(false);


  // ----------------------------------------
  // POST ABERTO
  // ----------------------------------------

  const [postSelecionado, setPostSelecionado] =
    useState(null);


  // ----------------------------------------
  // FORMULÁRIO
  // ----------------------------------------

  const [titulo, setTitulo] =
    useState("");

  const [mensagem, setMensagem] =
    useState("");

  const [cor, setCor] =
    useState("#f9be06");


  // ========================================
  // SALVAR NO LOCALSTORAGE
  // ========================================

  useEffect(() => {

    localStorage.setItem(
      "muralPostIts",
      JSON.stringify(posts)
    );

  }, [posts]);


  // ========================================
  // ABRIR MODAL
  // ========================================

  function abrirModal() {

    setTitulo("");
    setMensagem("");
    setCor("#f9be06");

    setModalAberto(true);

  }


  // ========================================
  // FECHAR MODAL
  // ========================================

  function fecharModal() {

    setModalAberto(false);

  }


  // ========================================
  // CADASTRAR POST-IT
  // ========================================

  function cadastrarPost(event) {

    event.preventDefault();


    if (
      !titulo.trim() ||
      !mensagem.trim()
    ) {
      return;
    }


    const novoPost = {

      id: Date.now(),

      titulo:
        titulo.trim(),

      mensagem:
        mensagem.trim(),

      cor,

      criadoEm:
        new Date().toISOString(),

    };


    setPosts((postsAtuais) => [

      novoPost,

      ...postsAtuais,

    ]);


    setTitulo("");
    setMensagem("");
    setCor("#f9be06");

    setModalAberto(false);

  }


  // ========================================
  // EXCLUIR POST-IT
  // ========================================

  function excluirPost(id) {

    const confirmar =
      window.confirm(
        "Deseja realmente excluir este post-it?"
      );


    if (!confirmar) {
      return;
    }


    const novosPosts =
      posts.filter(
        (post) =>
          post.id !== id
      );


    setPosts(novosPosts);

    setPostSelecionado(null);

  }


  // ========================================
  // ABRIR POST-IT
  // ========================================

  function abrirPost(post) {

    setPostSelecionado(post);

  }


  // ========================================
  // FECHAR POST-IT
  // ========================================

  function fecharPost() {

    setPostSelecionado(null);

  }


  // ========================================
  // ESC FECHA MODAIS
  // ========================================

  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === "Escape"
      ) {

        setModalAberto(false);

        setPostSelecionado(null);

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


  // ========================================
  // RENDER
  // ========================================

  return (

    <Page>

      {/* MENU ADMIN */}

      <Layoutadm />


      {/* CONTEÚDO */}

      <Content>

        {/* HEADER */}

        <Header>

          <TitleArea>

            <Title>
              Mural
            </Title>

            <Subtitle>
              Organize suas ideias,
              lembretes e anotações.
            </Subtitle>

          </TitleArea>

        </Header>


        {/* =================================
            POST-ITS
        ================================= */}

        <Cards>

          {posts.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiFileText />
              </EmptyIcon>

              <EmptyTitle>
                Nenhum post-it cadastrado
              </EmptyTitle>

              <EmptyText>
                Clique no botão +
                para criar seu primeiro
                post-it.
              </EmptyText>

            </EmptyState>

          ) : (

            posts.map(
              (post, index) => (

                <PostIt
                  key={post.id}
                  $color={post.cor}
                  $index={index}
                  onClick={() =>
                    abrirPost(post)
                  }
                >

                  {/* PIN */}

                  <PostItPin />


                  {/* HEADER DO POST */}

                  <PostItHeader>

                    <PostItTitle>
                      {post.titulo}
                    </PostItTitle>

                  </PostItHeader>


                  {/* MENSAGEM */}

                  <PostItMessage>
                    {post.mensagem}
                  </PostItMessage>


                  {/* FOOTER */}

                  <PostItFooter>

                    <ReadMore>
                      Clique para visualizar
                    </ReadMore>

                  </PostItFooter>

                </PostIt>

              )
            )

          )}

        </Cards>

      </Content>


      {/* ===================================
          BOTÃO +
      =================================== */}

      <FloatingButton
        onClick={abrirModal}
        aria-label="Adicionar post-it"
      >

        <FiPlus />

      </FloatingButton>


      {/* ===================================
          MODAL DE CRIAÇÃO
      =================================== */}

      {modalAberto && (

        <ModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharModal();

            }

          }}
        >

          <Modal>

            <ModalHeader>

              <div>

                <ModalTitle>
                  Novo post-it
                </ModalTitle>

              </div>


              <CloseButton
                type="button"
                onClick={fecharModal}
                aria-label="Fechar"
              >

                <FiX />

              </CloseButton>

            </ModalHeader>


            <Form
              onSubmit={cadastrarPost}
            >

              {/* TÍTULO */}

              <Label>
                Título
              </Label>

              <Input
                type="text"
                placeholder="Digite o título..."
                value={titulo}
                onChange={(event) =>
                  setTitulo(
                    event.target.value
                  )
                }
                maxLength={80}
                autoFocus
              />


              {/* MENSAGEM */}

              <Label>
                Mensagem
              </Label>

              <TextArea
                placeholder="Digite a mensagem do post-it..."
                value={mensagem}
                onChange={(event) =>
                  setMensagem(
                    event.target.value
                  )
                }
                maxLength={500}
              />


              {/* CORES */}

              <ColorArea>

                <ColorLabel>
                  Cor do post-it
                </ColorLabel>


                <Colors>

                  {cores.map(
                    (corItem) => (

                      <ColorButton
                        key={corItem}
                        type="button"
                        $color={corItem}
                        $selected={
                          cor === corItem
                        }
                        onClick={() =>
                          setCor(
                            corItem
                          )
                        }
                        aria-label={`Selecionar cor ${corItem}`}
                      />

                    )
                  )}

                </Colors>

              </ColorArea>


              {/* BOTÃO */}

              <FormFooter>

                <SaveButton
                  type="submit"
                >

                  <FiPlus />

                  Criar post-it

                </SaveButton>

              </FormFooter>

            </Form>

          </Modal>

        </ModalOverlay>

      )}


      {/* ===================================
          VISUALIZAÇÃO DO POST-IT
      =================================== */}

      {postSelecionado && (

        <ModalOverlay
          onClick={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {

              fecharPost();

            }

          }}
        >

          <FullPostIt
            $color={
              postSelecionado.cor
            }
          >

            {/* FECHAR */}

            <CloseButton
              type="button"
              onClick={fecharPost}
              aria-label="Fechar post-it"
            >

              <FiX />

            </CloseButton>


            {/* PIN */}

            <FullPostItPin />


            {/* CONTEÚDO */}

            <FullPostItContent>

              <FullPostItTitle>

                {
                  postSelecionado.titulo
                }

              </FullPostItTitle>


              <FullPostItMessage>

                {
                  postSelecionado.mensagem
                }

              </FullPostItMessage>


              <FullPostItFooter>

                <DeleteButton
                  type="button"
                  onClick={() =>
                    excluirPost(
                      postSelecionado.id
                    )
                  }
                >

                  <FiTrash2 />

                  Excluir post-it

                </DeleteButton>

              </FullPostItFooter>

            </FullPostItContent>

          </FullPostIt>

        </ModalOverlay>

      )}

    </Page>

  );

}