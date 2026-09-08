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


/* ==========================================
   CONFIG DA API
========================================== */

const API_URL = "http://localhost:3001";


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
     POSIÇÃO DO MOUSE NO BOTÃO
  ========================================== */

  const handleButtonMouseMove = (e) => {

    const button = e.currentTarget;

    const rect =
      button.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

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
     CARREGAR POSTS
  ========================================== */

  function carregarPosts() {

    fetch(`${API_URL}/mural`, {

      headers: {

        Authorization:
          `Bearer ${localStorage.getItem("token")}`,

      },

    })

      .then((resposta) => {

        if (!resposta.ok) {

          throw new Error(
            "Erro ao buscar o mural"
          );

        }

        return resposta.json();

      })

      .then((postsSalvos) => {

        if (Array.isArray(postsSalvos)) {

          setPosts(postsSalvos);

        } else {

          setPosts([]);

        }

      })

      .catch((error) => {

        console.error(
          "Erro ao carregar o mural:",
          error
        );

        setPosts([]);

      });

  }


  /* ==========================================
     CARREGAMENTO INICIAL
  ========================================== */

  useEffect(() => {

    carregarPosts();

    const intervalo =
      setInterval(
        carregarPosts,
        3000
      );

    return () => {

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

            {/* ==================================
                BOTÃO FECHAR
            ================================== */}

            <CloseButton
              type="button"
              onClick={fecharPost}
              onMouseMove={
                handleButtonMouseMove
              }
              aria-label="Fechar mensagem"
            >

              <span className="buttonContent">

                <FiX />

              </span>

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
