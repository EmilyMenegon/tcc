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

  // ==========================================
  // POST-ITS
  // ==========================================

  const [posts, setPosts] = useState([]);


  // ==========================================
  // POST-IT SELECIONADO
  // ==========================================

  const [postSelecionado, setPostSelecionado] =
    useState(null);


  // ==========================================
  // CARREGAR POST-ITS
  // ==========================================

  useEffect(() => {

    function carregarPosts() {

      const dados =
        localStorage.getItem(
          "muralPostIts"
        );


      if (!dados) {

        setPosts([]);

        return;

      }


      try {

        const postsSalvos =
          JSON.parse(dados);


        if (
          Array.isArray(postsSalvos)
        ) {

          setPosts(postsSalvos);

        } else {

          setPosts([]);

        }

      } catch (error) {

        console.error(
          "Erro ao carregar os post-its:",
          error
        );

        setPosts([]);

      }

    }


    carregarPosts();


    // Atualiza caso outra aba altere
    // os post-its.

    function atualizarMural() {

      carregarPosts();

    }


    window.addEventListener(
      "storage",
      atualizarMural
    );


    return () => {

      window.removeEventListener(
        "storage",
        atualizarMural
      );

    };

  }, []);


  // ==========================================
  // ABRIR POST-IT
  // ==========================================

  function abrirPost(post) {

    setPostSelecionado(post);

  }


  // ==========================================
  // FECHAR POST-IT
  // ==========================================

  function fecharPost() {

    setPostSelecionado(null);

  }


  // ==========================================
  // TECLA ESC
  // ==========================================

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


  // ==========================================
  // RENDER
  // ==========================================

  return (

    <Page>

      {/* =====================================
          MENU DO USUÁRIO
      ===================================== */}

      <Layout />


      {/* =====================================
          CONTEÚDO
      ===================================== */}

      <Content>


        {/* ===================================
            HEADER
        =================================== */}

        <Header>

          <Title>
            Mural
          </Title>

          <Subtitle>
            Confira os avisos e mensagens
            publicados pela organização.
          </Subtitle>

        </Header>


        {/* ===================================
            POST-ITS
        =================================== */}

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
                  key={post.id}
                  $color={post.cor}
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


      {/* =====================================
          VISUALIZAÇÃO DO POST-IT
      ===================================== */}

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

            {/* BOTÃO FECHAR */}

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
                  postSelecionado.mensagem
                }

              </FullPostItMessage>

            </FullPostItContent>

          </FullPostIt>

        </ModalOverlay>

      )}

    </Page>

  );

}