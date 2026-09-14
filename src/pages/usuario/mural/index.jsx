import { useEffect, useState } from "react";

import Layout from "../../../components/Layout";

import {
  FiFileText,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Cards,

  PostIt,
  PostItBadge,
  PostItTitle,
  PostItMessage,
  PostItFooter,
  ReadMore,
  ReadMoreIcon,

  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyText,

  ModalOverlay,
  FullPostIt,
  FullPostItTop,
  FullPostItBadge,
  FullPostItContent,
  FullPostItTitle,
  FullPostItMessage,
  CloseButton,
} from "./style";


const API_URL = "http://localhost:3001";


export default function Mural() {

  const [posts, setPosts] = useState([]);

  const [postSelecionado, setPostSelecionado] =
    useState(null);


  /* ==========================================
     POSIÇÃO DO MOUSE NO BOTÃO
  ========================================== */

  const handleButtonMouseMove = (e) => {

    const button = e.currentTarget;

    const rect =
      button.getBoundingClientRect();

    button.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );

    button.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
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
     CARREGAMENTO
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
     ABRIR
  ========================================== */

  function abrirPost(post) {

    setPostSelecionado(post);

  }


  /* ==========================================
     FECHAR
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


  return (

    <Page>

      <Layout />

      <Content>

        {/* ==================================
            HEADER
            NÃO ALTERADO
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
            CARDS
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
                    "#ffdb53"
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

                  {/* BADGE */}

                  <PostItBadge>
                    AVISO
                  </PostItBadge>


                  {/* TÍTULO */}

                  <PostItTitle>

                    {post.titulo}

                  </PostItTitle>


                  {/* MENSAGEM */}

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
                      Ler aviso completo
                    </ReadMore>

                    <ReadMoreIcon>
                      <FiArrowRight />
                    </ReadMoreIcon>

                  </PostItFooter>

                </PostIt>

              )
            )

          )}

        </Cards>

      </Content>


      {/* ==================================
          MODAL
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
              "#ffdb53"
            }
          >

            {/* TOPO */}

            <FullPostItTop>

              <FullPostItBadge>
                AVISO
              </FullPostItBadge>

            </FullPostItTop>


            {/* FECHAR */}

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