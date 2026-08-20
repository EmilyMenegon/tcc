import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";

import {
  FiFileText,
  FiX,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Cards,

  PostIt,
  PostItPin,
  PostItTitle,
  PostItMessage,
  PostItFooter,
  ReadMore,

  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,

  ModalOverlay,
  FullPostIt,
  FullPostItPin,
  FullPostItContent,
  FullPostItTitle,
  FullPostItMessage,
  CloseButton,
} from "./style";


export default function Mural() {

  /* ==========================================
     POSTS
  ========================================== */

  const [posts, setPosts] = useState([]);


  /* ==========================================
     POST SELECIONADO
  ========================================== */

  const [postSelecionado, setPostSelecionado] =
    useState(null);


  /* ==========================================
     CARREGAR POSTS
  ========================================== */

  function carregarPosts() {

    const dados =
      localStorage.getItem("muralPostIts");


    if (!dados) {

      setPosts([]);

      return;

    }


    try {

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

  }


  /* ==========================================
     CARREGAMENTO INICIAL
  ========================================== */

  useEffect(() => {

    carregarPosts();


    /*
      Quando o ADM estiver aberto em outra aba,
      o navegador dispara o evento storage.
    */

    function atualizarStorage(event) {

      if (
        event.key === "muralPostIts"
      ) {

        carregarPosts();

      }

    }


    /*
      Atualização dentro da mesma aplicação.
    */

    function atualizarMural() {

      carregarPosts();

    }


    window.addEventListener(
      "storage",
      atualizarStorage
    );


    window.addEventListener(
      "muralAtualizado",
      atualizarMural
    );


    /*
      Atualiza periodicamente também.
      Isso ajuda caso ADM e usuário estejam
      sendo usados em páginas diferentes.
    */

    const intervalo =
      setInterval(
        carregarPosts,
        1000
      );


    return () => {

      window.removeEventListener(
        "storage",
        atualizarStorage
      );


      window.removeEventListener(
        "muralAtualizado",
        atualizarMural
      );


      clearInterval(intervalo);

    };

  }, []);


  /* ==========================================
     ABRIR POST
  ========================================== */

  function abrirPost(post) {

    setPostSelecionado(post);

  }


  /* ==========================================
     FECHAR POST
  ========================================== */

  function fecharPost() {

    setPostSelecionado(null);

  }


  /* ==========================================
     ESC
  ========================================== */

  useEffect(() => {

    function handleKeyDown(event) {

      if (
        event.key === "Escape"
      ) {

        fecharPost();

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


  /* ==========================================
     RENDER
  ========================================== */

  return (

    <Page>

      <Layout />


      <Content>

        {/* ==================================
            HEADER
        ================================== */}

        <Header>

          <Title>
            Mural
          </Title>

          <Subtitle>
            Confira os avisos e mensagens
            publicados pela organização.
          </Subtitle>

        </Header>


        {/* ==================================
            POST-ITS
        ================================== */}

        <Cards>

          {posts.length === 0 ? (

            <EmptyState>

              <EmptyIcon>
                <FiFileText />
              </EmptyIcon>


              <EmptyTitle>
                Nenhum aviso disponível
              </EmptyTitle>


              <EmptyText>
                No momento não existem
                mensagens publicadas no mural.
              </EmptyText>

            </EmptyState>

          ) : (

            posts.map(
              (post, index) => (

                <PostIt
                  key={
                    post.id || index
                  }

                  $color={
                    post.cor ||
                    "#fff176"
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

                  {/* PIN */}

                  <PostItPin />


                  {/* TÍTULO */}

                  <PostItTitle>

                    {post.titulo}

                  </PostItTitle>


                  {/* DESCRIÇÃO */}

                  <PostItMessage>

                    {
                      post.mensagem ||
                      post.descricao ||
                      ""
                    }

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


      {/* ==================================
          MODAL DO POST
      ================================== */}

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
              postSelecionado.cor ||
              "#fff176"
            }
          >

            {/* FECHAR */}

            <CloseButton
              type="button"
              onClick={fecharPost}
              aria-label="Fechar mensagem"
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
                  postSelecionado.mensagem ||
                  postSelecionado.descricao ||
                  ""
                }

              </FullPostItMessage>

            </FullPostItContent>

          </FullPostIt>

        </ModalOverlay>

      )}

    </Page>

  );

}