import React, {
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import Layout from "../../../components/Layout";

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
  PageHeader,
  PageNumber,
  PageTitle,
  WritingArea,
  PageFooter,
  PageNavigation,
  NavigationButton,
  PageCounter,
  DragHint,
} from "./style";


const TOTAL_PAGES = 40;


const createPages = () =>
  Array.from(
    {
      length: TOTAL_PAGES,
    },
    (_, index) => ({
      number: index + 1,
      content: "",
    })
  );


export default function Notes() {

  const [pages, setPages] =
    useState(createPages);

  const [currentSpread, setCurrentSpread] =
    useState(0);

  const [isTurning, setIsTurning] =
    useState(false);


  const pagesRef =
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
  // ATUALIZAR PÁGINA
  // =====================================================

  const updatePage = (
    index,
    value
  ) => {

    setPages(
      (previousPages) =>
        previousPages.map(
          (
            page,
            pageIndex
          ) =>
            pageIndex === index
              ? {
                  ...page,
                  content: value,
                }
              : page
        )
    );

  };


  // =====================================================
  // ANIMAÇÃO DA FOLHA
  // =====================================================

  const animatePageTurn = (
    direction
  ) => {

    if (
      isTurning ||
      !pagesRef.current
    ) {
      return;
    }


    const page =
      pagesRef.current;


    const isNext =
      direction === "next";


    const rotation =
      isNext
        ? -180
        : 180;


    setIsTurning(true);


    gsap.killTweensOf(page);


    gsap.set(page, {

      rotationY: 0,

      rotationZ: 0,

      scaleX: 1,

      scaleY: 1,

      x: 0,

      transformPerspective: 2200,

      transformOrigin:
        isNext
          ? "left center"
          : "right center",

      transformStyle:
        "preserve-3d",

      zIndex: 20,

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
              isNext
                ? previous + 1
                : previous - 1
          );


          gsap.set(page, {

            rotationY: 0,

            rotationZ: 0,

            scaleX: 1,

            scaleY: 1,

            x: 0,

            zIndex: 1,

            clearProps:
              "transform,boxShadow,filter",

          });


          setIsTurning(false);

        },

      });


    // ===================================================
    // LEVANTA A FOLHA
    // ===================================================

    timeline.to(page, {

      rotationY:
        isNext
          ? -16
          : 16,

      rotationZ:
        isNext
          ? -0.7
          : 0.7,

      scaleX:
        0.99,

      x:
        isNext
          ? 3
          : -3,

      boxShadow:
        isNext
          ? "-7px 8px 18px rgba(0,0,0,.10)"
          : "7px 8px 18px rgba(0,0,0,.10)",

      filter:
        "brightness(.99)",

      duration:
        0.16,

      ease:
        "power1.out",

    });


    // ===================================================
    // DOBRA A FOLHA
    // ===================================================

    timeline.to(page, {

      rotationY:
        isNext
          ? -72
          : 72,

      rotationZ:
        isNext
          ? -1.7
          : 1.7,

      scaleX:
        0.945,

      x:
        isNext
          ? 13
          : -13,

      boxShadow:
        isNext
          ? "-20px 14px 34px rgba(0,0,0,.17)"
          : "20px 14px 34px rgba(0,0,0,.17)",

      filter:
        "brightness(.94)",

      duration:
        0.23,

      ease:
        "power2.in",

    });


    // ===================================================
    // PERFIL DA FOLHA
    // ===================================================

    timeline.to(page, {

      rotationY:
        isNext
          ? -100
          : 100,

      rotationZ:
        isNext
          ? -2
          : 2,

      scaleX:
        0.90,

      x:
        isNext
          ? 18
          : -18,

      boxShadow:
        isNext
          ? "-30px 13px 40px rgba(0,0,0,.22)"
          : "30px 13px 40px rgba(0,0,0,.22)",

      filter:
        "brightness(.89)",

      duration:
        0.12,

      ease:
        "power1.inOut",

    });


    // ===================================================
    // PASSA PARA O OUTRO LADO
    // ===================================================

    timeline.to(page, {

      rotationY:
        isNext
          ? -145
          : 145,

      rotationZ:
        isNext
          ? -1.3
          : 1.3,

      scaleX:
        0.96,

      x:
        isNext
          ? 10
          : -10,

      boxShadow:
        isNext
          ? "-18px 11px 30px rgba(0,0,0,.15)"
          : "18px 11px 30px rgba(0,0,0,.15)",

      filter:
        "brightness(.95)",

      duration:
        0.20,

      ease:
        "power2.out",

    });


    // ===================================================
    // ASSENTA A FOLHA
    // ===================================================

    timeline.to(page, {

      rotationY:
        rotation,

      rotationZ:
        0,

      scaleX:
        1,

      scaleY:
        1,

      x:
        0,

      boxShadow:
        "0 8px 25px rgba(0,0,0,.06)",

      filter:
        "brightness(1)",

      duration:
        0.16,

      ease:
        "power2.out",

    });

  };


  // =====================================================
  // PRÓXIMO SPREAD
  // =====================================================

  const nextSpread = () => {

    if (
      isTurning ||
      currentSpread >=
        TOTAL_PAGES / 2 - 1
    ) {
      return;
    }


    animatePageTurn("next");

  };


  // =====================================================
  // SPREAD ANTERIOR
  // =====================================================

  const previousSpread = () => {

    if (
      isTurning ||
      currentSpread <= 0
    ) {
      return;
    }


    animatePageTurn("previous");

  };


  // =====================================================
  // POINTER DOWN
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


  // =====================================================
  // POINTER UP
  // =====================================================

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


  // =====================================================
  // POINTER CANCEL
  // =====================================================

  const handlePointerCancel =
    () => {

      isDragging.current =
        false;

      dragStartX.current =
        null;

    };


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


        <Notebook>

          <NotebookHeader>

            <NotebookHeaderTitle>
              Caderno de anotações
            </NotebookHeaderTitle>


            <NotebookHeaderInfo>
              {leftPage.number} —{" "}
              {rightPage.number} de{" "}
              {TOTAL_PAGES}
            </NotebookHeaderInfo>

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

            <PageCard
              ref={pagesRef}
              $turning={isTurning}
            >

              {/* FRENTE */}

              <div>

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


                <WritingArea
                  value={
                    leftPage.content
                  }

                  onChange={(
                    event
                  ) =>
                    updatePage(
                      leftPageIndex,
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

              </div>


              {/* VERSO */}

              <div className="page-back">

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


                <WritingArea
                  value={
                    rightPage.content
                  }

                  onChange={(
                    event
                  ) =>
                    updatePage(
                      rightPageIndex,
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

              </div>

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

      </Content>

    </Page>
  );
}
