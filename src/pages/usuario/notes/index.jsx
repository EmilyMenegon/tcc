import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import { useNavigate } from "react-router-dom";

import { FaLock } from "react-icons/fa";

import Layout from "../../../components/Layout";

import {
  getUsuarioLogado,
  getAuthHeaders,
} from "../../../utils/auth";

import {
  Page,
  Content,
  Header,
  Title,
  Subtitle,
  Notebook,
  NotebookHeader,
  NotebookHeaderTitle,
  NotebookHeaderInfo,
  Pages,
  PageCard,
  PageSide,
  PageHeader,
  PageNumber,
  PageTitle,
  TitleInput,
  WritingArea,
  PageFooter,
  PageNavigation,
  NavigationButton,
  PageCounter,
  DragHint,

  SaveStatus,

  LockedState,
  LockedIcon,
  LockedTitle,
  LockedText,
  LockedButton,
} from "./style";


const API_URL = "http://localhost:3001";

const TOTAL_PAGES = 40;

// Tempo de espera depois da última tecla antes de salvar.
const DEBOUNCE_MS = 1000;


const createPages = () =>
  Array.from(
    {
      length: TOTAL_PAGES,
    },
    (_, index) => ({
      number: index + 1,
      title: "",
      content: "",
    })
  );


export default function Notes() {

  const navigate = useNavigate();

  const [pages, setPages] =
    useState(createPages);

  const [currentSpread, setCurrentSpread] =
    useState(0);

  const [isTurning, setIsTurning] =
    useState(false);

  const [turningDirection, setTurningDirection] =
    useState(null);


  /*
   * Controle de acesso:
   * o caderno só abre para quem já fez a inscrição.
   */
  const [verificando, setVerificando] =
    useState(true);

  const [inscrito, setInscrito] =
    useState(false);


  /*
   * "salvo" | "salvando" | "erro" | null
   */
  const [saveState, setSaveState] =
    useState(null);


  /*
   * Um timer de debounce por página.
   */
  const saveTimers =
    useRef({});


  /*
   * Folha que anima quando vai para frente.
   * É a página direita.
   */
  const nextPageRef =
    useRef(null);


  /*
   * Folha que anima quando volta.
   * É a página esquerda.
   */
  const previousPageRef =
    useRef(null);


  const dragStartX =
    useRef(null);

  const isDragging =
    useRef(false);


  const leftPageIndex =
    currentSpread * 2;

  const rightPageIndex =
    leftPageIndex + 1;


  const leftPage =
    pages[leftPageIndex];

  const rightPage =
    pages[rightPageIndex];


  // =====================================================
  // VERIFICA INSCRIÇÃO E CARREGA AS ANOTAÇÕES
  // =====================================================

  useEffect(() => {

    const usuario =
      getUsuarioLogado();


    if (!usuario?.email) {

      setInscrito(false);

      setVerificando(false);

      return;

    }


    let cancelado = false;


    async function verificarEcarregar() {

      try {

        /*
         * O tipo guardado no login pode estar
         * desatualizado, então a inscrição é
         * consultada direto no back-end.
         */
        const resInscricao =
          await fetch(
            `${API_URL}/inscricao/${usuario.email}`,
            {
              headers: getAuthHeaders(),
            }
          );


        if (cancelado) return;


        if (!resInscricao.ok) {

          setInscrito(false);

          setVerificando(false);

          return;

        }


        setInscrito(true);


        const resAnotacoes =
          await fetch(
            `${API_URL}/anotacoes`,
            {
              headers: getAuthHeaders(),
            }
          );


        if (cancelado) return;


        if (resAnotacoes.ok) {

          const dados =
            await resAnotacoes.json();


          if (
            cancelado ||
            !Array.isArray(dados)
          ) {
            return;
          }


          setPages((paginasAtuais) => {

            const novasPaginas =
              [...paginasAtuais];


            dados.forEach((anotacao) => {

              const indice =
                anotacao.numero_pagina - 1;


              if (
                indice >= 0 &&
                indice < novasPaginas.length
              ) {

                novasPaginas[indice] = {
                  ...novasPaginas[indice],
                  title:
                    anotacao.titulo || "",
                  content:
                    anotacao.conteudo || "",
                };

              }

            });


            return novasPaginas;

          });

        }

      } catch (err) {

        console.error(err);

      } finally {

        if (!cancelado) {

          setVerificando(false);

        }

      }

    }


    verificarEcarregar();


    return () => {

      cancelado = true;

    };

  }, []);


  // =====================================================
  // LIMPA OS TIMERS AO SAIR DA PÁGINA
  // =====================================================

  useEffect(() => {

    const timers = saveTimers;


    return () => {

      Object.values(
        timers.current
      ).forEach(clearTimeout);

    };

  }, []);


  // =====================================================
  // SALVA UMA PÁGINA NO BACK-END
  // =====================================================

  const salvarPagina = useCallback(
    async (
      numeroPagina,
      titulo,
      conteudo
    ) => {

      setSaveState("salvando");


      try {

        const res =
          await fetch(
            `${API_URL}/anotacoes/${numeroPagina}`,
            {
              method: "PUT",
              headers: {
                "Content-Type":
                  "application/json",
                ...getAuthHeaders(),
              },
              body: JSON.stringify({
                titulo,
                conteudo,
              }),
            }
          );


        if (!res.ok) {

          setSaveState("erro");

          return;

        }


        setSaveState("salvo");

      } catch (err) {

        console.error(err);

        setSaveState("erro");

      }

    },
    []
  );


  // =====================================================
  // ATUALIZA UM CAMPO DA PÁGINA (título ou conteúdo)
  // E AGENDA O SALVAMENTO AUTOMÁTICO
  // =====================================================

  const updatePageField = (
    index,
    field,
    value
  ) => {

    setPages(
      (previousPages) => {

        const novasPaginas =
          previousPages.map(
            (
              page,
              pageIndex
            ) =>
              pageIndex === index
                ? {
                    ...page,
                    [field]: value,
                  }
                : page
          );


        const numeroPagina =
          index + 1;

        const paginaAtualizada =
          novasPaginas[index];


        /*
         * Espera o usuário parar de digitar
         * antes de mandar para o servidor.
         */
        clearTimeout(
          saveTimers.current[numeroPagina]
        );


        saveTimers.current[numeroPagina] =
          setTimeout(() => {

            salvarPagina(
              numeroPagina,
              paginaAtualizada.title,
              paginaAtualizada.content
            );

          }, DEBOUNCE_MS);


        return novasPaginas;

      }
    );

  };


  // =====================================================
  // RESET DA FOLHA
  // =====================================================

  const resetTurningPage = (
    page
  ) => {

    if (!page) {
      return;
    }


    gsap.killTweensOf(page);


    gsap.set(page, {

      rotationY: 0,

      rotationZ: 0,

      scale: 1,

      x: 0,

      zIndex: 1,

      opacity: 1,

      clearProps:
        "transform,boxShadow,filter",

    });

  };


  // =====================================================
  // ANIMAÇÃO PARA FRENTE
  // DIREITA -> ESQUERDA
  // =====================================================

  const animateNextPage = () => {

    const page =
      nextPageRef.current;


    if (
      !page ||
      isTurning
    ) {
      return;
    }


    setIsTurning(true);

    setTurningDirection("next");


    gsap.killTweensOf(page);


    /*
     * A página começa exatamente
     * na posição da página direita.
     */
    gsap.set(page, {

      rotationY: 0,

      rotationZ: 0,

      scale: 1,

      x: 0,

      opacity: 1,

      zIndex: 100,

      transformPerspective: 2200,

      transformStyle:
        "preserve-3d",

      transformOrigin:
        "left center",

      force3D: true,

    });


    const timeline =
      gsap.timeline({

        defaults: {
          overwrite: "auto",
        },

        onComplete: () => {

          setCurrentSpread(
            (previous) =>
              previous + 1
          );


          resetTurningPage(page);


          setTurningDirection(null);

          setIsTurning(false);

        },

      });


    // -----------------------------------------------------
    // LEVANTA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        -12,

      rotationZ:
        -0.4,

      scale:
        0.995,

      x:
        2,

      boxShadow:
        "-5px 7px 18px rgba(0,0,0,.10)",

      duration:
        0.14,

      ease:
        "power1.out",

    });


    // -----------------------------------------------------
    // COMEÇA A VIRAR
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        -55,

      rotationZ:
        -1,

      scale:
        0.97,

      x:
        7,

      boxShadow:
        "-18px 12px 30px rgba(0,0,0,.17)",

      duration:
        0.22,

      ease:
        "power1.in",

    });


    // -----------------------------------------------------
    // MEIO DA VIRADA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        -90,

      rotationZ:
        -1.5,

      scale:
        0.94,

      x:
        13,

      boxShadow:
        "-26px 14px 38px rgba(0,0,0,.21)",

      duration:
        0.14,

      ease:
        "power1.inOut",

    });


    // -----------------------------------------------------
    // PASSA PARA O OUTRO LADO
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        -135,

      rotationZ:
        -1,

      scale:
        0.97,

      x:
        8,

      boxShadow:
        "-17px 10px 28px rgba(0,0,0,.15)",

      duration:
        0.18,

      ease:
        "power2.out",

    });


    // -----------------------------------------------------
    // ASSENTA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        -180,

      rotationZ:
        0,

      scale:
        1,

      x:
        0,

      boxShadow:
        "0 8px 20px rgba(0,0,0,.04)",

      duration:
        0.20,

      ease:
        "power2.out",

    });

  };


  // =====================================================
  // ANIMAÇÃO PARA TRÁS
  // ESQUERDA -> DIREITA
  // =====================================================

  const animatePreviousPage = () => {

    const page =
      previousPageRef.current;


    if (
      !page ||
      isTurning
    ) {
      return;
    }


    setIsTurning(true);

    setTurningDirection("previous");


    gsap.killTweensOf(page);


    /*
     * A página começa exatamente
     * na posição da página esquerda.
     */
    gsap.set(page, {

      rotationY: 0,

      rotationZ: 0,

      scale: 1,

      x: 0,

      opacity: 1,

      zIndex: 100,

      transformPerspective: 2200,

      transformStyle:
        "preserve-3d",

      transformOrigin:
        "right center",

      force3D: true,

    });


    const timeline =
      gsap.timeline({

        defaults: {
          overwrite: "auto",
        },

        onComplete: () => {

          setCurrentSpread(
            (previous) =>
              previous - 1
          );


          resetTurningPage(page);


          setTurningDirection(null);

          setIsTurning(false);

        },

      });


    // -----------------------------------------------------
    // LEVANTA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        12,

      rotationZ:
        0.4,

      scale:
        0.995,

      x:
        -2,

      boxShadow:
        "5px 7px 18px rgba(0,0,0,.10)",

      duration:
        0.14,

      ease:
        "power1.out",

    });


    // -----------------------------------------------------
    // COMEÇA A VIRAR
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        55,

      rotationZ:
        1,

      scale:
        0.97,

      x:
        -7,

      boxShadow:
        "18px 12px 30px rgba(0,0,0,.17)",

      duration:
        0.22,

      ease:
        "power1.in",

    });


    // -----------------------------------------------------
    // MEIO DA VIRADA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        90,

      rotationZ:
        1.5,

      scale:
        0.94,

      x:
        -13,

      boxShadow:
        "26px 14px 38px rgba(0,0,0,.21)",

      duration:
        0.14,

      ease:
        "power1.inOut",

    });


    // -----------------------------------------------------
    // PASSA PARA O OUTRO LADO
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        135,

      rotationZ:
        1,

      scale:
        0.97,

      x:
        -8,

      boxShadow:
        "17px 10px 28px rgba(0,0,0,.15)",

      duration:
        0.18,

      ease:
        "power2.out",

    });


    // -----------------------------------------------------
    // ASSENTA
    // -----------------------------------------------------

    timeline.to(page, {

      rotationY:
        180,

      rotationZ:
        0,

      scale:
        1,

      x:
        0,

      boxShadow:
        "0 8px 20px rgba(0,0,0,.04)",

      duration:
        0.20,

      ease:
        "power2.out",

    });

  };


  // =====================================================
  // NAVEGAÇÃO
  // =====================================================

  const nextSpread = () => {

    if (
      isTurning ||
      currentSpread >=
        TOTAL_PAGES / 2 - 1
    ) {
      return;
    }


    animateNextPage();

  };


  const previousSpread = () => {

    if (
      isTurning ||
      currentSpread <= 0
    ) {
      return;
    }


    animatePreviousPage();

  };


  // =====================================================
  // DRAG
  // =====================================================

  const handlePointerDown = (
    event
  ) => {

    if (isTurning) {
      return;
    }


    if (
      event.target.closest(
        "textarea"
      ) ||
      event.target.closest(
        "input"
      )
    ) {
      return;
    }


    dragStartX.current =
      event.clientX;

    isDragging.current =
      true;


    event.currentTarget.setPointerCapture(
      event.pointerId
    );

  };


  const handlePointerUp = (
    event
  ) => {

    if (
      !isDragging.current
    ) {
      return;
    }


    const startX =
      dragStartX.current;

    const endX =
      event.clientX;

    const distance =
      endX - startX;


    isDragging.current =
      false;

    dragStartX.current =
      null;


    if (
      Math.abs(distance) < 80
    ) {
      return;
    }


    if (distance < 0) {

      nextSpread();

    } else {

      previousSpread();

    }

  };


  const handlePointerCancel =
    () => {

      isDragging.current =
        false;

      dragStartX.current =
        null;

    };


  // =====================================================
  // TEXTO DO STATUS DE SALVAMENTO
  // =====================================================

  const textoSalvamento =
    saveState === "salvando"
      ? "Salvando..."
      : saveState === "salvo"
      ? "Salvo"
      : saveState === "erro"
      ? "Erro ao salvar"
      : "";


  // =====================================================
  // RENDER
  // =====================================================

  return (
    <Page>

      <Layout />


      <Content>

        <Header>

          <Title>
            Caderno
          </Title>


          <Subtitle>
            Organize suas ideias,
            pensamentos e poemas
            em um único lugar.
          </Subtitle>

        </Header>


        {/* =================================================
            AINDA VERIFICANDO A INSCRIÇÃO
        ================================================= */}

        {verificando ? null : !inscrito ? (

          /* =================================================
             BLOQUEADO: SEM INSCRIÇÃO
          ================================================= */

          <LockedState>

            <LockedIcon>
              <FaLock />
            </LockedIcon>


            <LockedTitle>
              Caderno bloqueado
            </LockedTitle>


            <LockedText>
              O caderno fica disponível para quem
              está inscrito no Slam. Faça sua
              inscrição para desbloquear e começar
              a escrever suas poesias.
            </LockedText>


            <LockedButton
              type="button"
              onClick={() =>
                navigate(
                  "/usuario/inscricao"
                )
              }
            >
              Fazer inscrição
            </LockedButton>

          </LockedState>

        ) : (

          /* =================================================
             LIBERADO: CADERNO
          ================================================= */

          <Notebook>

            <NotebookHeader>

              <NotebookHeaderTitle>
                Caderno de anotações
              </NotebookHeaderTitle>


              <NotebookHeaderInfo>
                {leftPage.number}
                {" — "}
                {rightPage.number}
                {" de "}
                {TOTAL_PAGES}
              </NotebookHeaderInfo>


              {textoSalvamento && (

                <SaveStatus>
                  {textoSalvamento}
                </SaveStatus>

              )}

            </NotebookHeader>


            <Pages
              onPointerDown={
                handlePointerDown
              }

              onPointerUp={
                handlePointerUp
              }

              onPointerCancel={
                handlePointerCancel
              }

              aria-label="Caderno de notas"
            >

              <PageCard>

                {/* =================================================
                    PÁGINA ESQUERDA NORMAL
                ================================================= */}

                <PageSide>

                  <PageHeader>

                    <PageTitle>
                      Página{" "}
                      {leftPage.number}
                    </PageTitle>


                    <PageNumber>
                      {String(
                        leftPage.number
                      ).padStart(2, "0")}
                    </PageNumber>

                  </PageHeader>


                  <TitleInput
                    type="text"

                    value={
                      leftPage.title
                    }

                    onChange={(
                      event
                    ) =>
                      updatePageField(
                        leftPageIndex,
                        "title",
                        event.target.value
                      )
                    }

                    placeholder="Título da poesia..."

                    maxLength={80}

                    autoComplete="off"
                  />


                  <WritingArea
                    value={
                      leftPage.content
                    }

                    onChange={(
                      event
                    ) =>
                      updatePageField(
                        leftPageIndex,
                        "content",
                        event.target.value
                      )
                    }

                    placeholder="Comece a escrever..."

                    spellCheck

                    autoComplete="off"

                    autoCorrect="on"

                    autoCapitalize="sentences"
                  />


                  <PageFooter>
                    Página{" "}
                    {leftPage.number}
                  </PageFooter>

                </PageSide>


                {/* =================================================
                    PÁGINA DIREITA NORMAL
                ================================================= */}

                <PageSide
                  className="right-page"
                >

                  <PageHeader>

                    <PageTitle>
                      Página{" "}
                      {rightPage.number}
                    </PageTitle>


                    <PageNumber>
                      {String(
                        rightPage.number
                      ).padStart(2, "0")}
                    </PageNumber>

                  </PageHeader>


                  <TitleInput
                    type="text"

                    value={
                      rightPage.title
                    }

                    onChange={(
                      event
                    ) =>
                      updatePageField(
                        rightPageIndex,
                        "title",
                        event.target.value
                      )
                    }

                    placeholder="Título da poesia..."

                    maxLength={80}

                    autoComplete="off"
                  />


                  <WritingArea
                    value={
                      rightPage.content
                    }

                    onChange={(
                      event
                    ) =>
                      updatePageField(
                        rightPageIndex,
                        "content",
                        event.target.value
                      )
                    }

                    placeholder="Continue escrevendo..."

                    spellCheck

                    autoComplete="off"

                    autoCorrect="on"

                    autoCapitalize="sentences"
                  />


                  <PageFooter>
                    Página{" "}
                    {rightPage.number}
                  </PageFooter>

                </PageSide>


                {/* =================================================
                    FOLHA DIREITA -> ESQUERDA
                ================================================= */}

                <PageSide
                  ref={nextPageRef}
                  className={
                    `turning-page next-page ${
                      turningDirection === "next"
                        ? "active"
                        : ""
                    }`
                  }
                >

                  <PageHeader>

                    <PageTitle>
                      Página{" "}
                      {rightPage.number}
                    </PageTitle>


                    <PageNumber>
                      {String(
                        rightPage.number
                      ).padStart(2, "0")}
                    </PageNumber>

                  </PageHeader>


                  <TitleInput
                    type="text"

                    value={
                      rightPage.title
                    }

                    readOnly

                    tabIndex={-1}
                  />


                  <WritingArea
                    value={
                      rightPage.content
                    }

                    readOnly

                    tabIndex={-1}
                  />


                  <PageFooter>
                    Página{" "}
                    {rightPage.number}
                  </PageFooter>

                </PageSide>


                {/* =================================================
                    FOLHA ESQUERDA -> DIREITA
                ================================================= */}

                <PageSide
                  ref={previousPageRef}
                  className={
                    `turning-page previous-page ${
                      turningDirection === "previous"
                        ? "active"
                        : ""
                    }`
                  }
                >

                  <PageHeader>

                    <PageTitle>
                      Página{" "}
                      {leftPage.number}
                    </PageTitle>


                    <PageNumber>
                      {String(
                        leftPage.number
                      ).padStart(2, "0")}
                    </PageNumber>

                  </PageHeader>


                  <TitleInput
                    type="text"

                    value={
                      leftPage.title
                    }

                    readOnly

                    tabIndex={-1}
                  />


                  <WritingArea
                    value={
                      leftPage.content
                    }

                    readOnly

                    tabIndex={-1}
                  />


                  <PageFooter>
                    Página{" "}
                    {leftPage.number}
                  </PageFooter>

                </PageSide>

              </PageCard>

            </Pages>


            <PageNavigation>

              <NavigationButton
                type="button"
                onClick={
                  previousSpread
                }
                disabled={
                  currentSpread === 0 ||
                  isTurning
                }
              >
                ← Anterior
              </NavigationButton>


              <PageCounter>

                <strong>
                  {leftPage.number}
                </strong>

                <span>
                  —
                </span>

                <strong>
                  {rightPage.number}
                </strong>

                <small>
                  de {TOTAL_PAGES}
                </small>

              </PageCounter>


              <NavigationButton
                type="button"
                onClick={
                  nextSpread
                }
                disabled={
                  currentSpread >=
                    TOTAL_PAGES / 2 - 1 ||
                  isTurning
                }
              >
                Próxima →
              </NavigationButton>

            </PageNavigation>


            <DragHint>

              <span>
                ↔
              </span>

              Arraste para virar
              a página

            </DragHint>

          </Notebook>

        )}

      </Content>

    </Page>
  );
}