import { getAuthHeaders } from "../../../utils/auth";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

import {
  FaArrowRight,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFileAlt,
  FaCalendarAlt,
  FaTrophy,
  FaBookOpen,
  FaMicrophone,
  FaChevronLeft,
  FaChevronRight,
  FaImages,
} from "react-icons/fa";

import {
  GlobalStyle,
  Page,
  HeroWrapper,
  Hero,
  Header,
  Logo,
  HeaderBar,
  SocialIcons,
  SocialIcon,
  Container,
  LeftSide,
  BigText,
  SmallText,
  Buttons,
  PrimaryButton,
  ImageBox,
  Image,
  Circle,
  PixelImage,
  MarqueeSection,
  InkPaint,
  MarqueeReveal,
  MarqueeTrack,
  AnimatedImage,
  Phrase,
  AboutSection,
  AboutContainer,
  AboutTitle,
  AboutContent,
  AboutText,
  AboutFindBox,
  AboutWords,
  AboutWord,
  AboutGame,
  AboutBoard,
  AboutRow,
  AboutLetter,
  GameFeedback,
  FeaturesSection,
  SectionTitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureText,
  GallerySection,
  GalleryWrapper,
  GalleryHint,
  GalleryViewport,
  GalleryTrack,
  GalleryCard,
  GalleryImage,
  GalleryState,
  GalleryArrows,
  GalleryArrowButton,
  CTASection,
  CTAContainer,
  CTAIcon,
  CTAText,
  CTATitle,
  CTASubtitle,
  CTALink,
} from "./style";

gsap.registerPlugin(ScrollTrigger, Draggable);

const API_URL = "http://localhost:3001";

const words = [
  "SLAM",
  "POESIA",
  "SENTIMENTOS",
  "ARTE",
  "ESCRITA",
  "ORALIDADE",
  "RIMAS",
  "PERFORMANCES",
  "CONFIANÇA",
  "EXPRESSÃO",
];

const board = [
  ["P", "O", "R", "H", "C", "D", "W", "J", "M", "N", "S", "R"],
  ["C", "E", "Ã", "R", "M", "W", "E", "A", "J", "A", "S", "L"],
  ["O", "O", "R", "S", "Y", "J", "L", "T", "M", "T", "O", "O"],
  ["K", "C", "R", "F", "S", "S", "P", "I", "R", "B", "T", "N"],
  ["L", "O", "I", "A", "O", "E", "R", "U", "V", "A", "N", "M"],
  ["Q", "N", "A", "I", "L", "R", "R", "T", "O", "J", "E", "C"],
  ["W", "F", "T", "D", "P", "I", "M", "P", "P", "L", "M", "M"],
  ["S", "I", "I", "Y", "N", "O", "D", "A", "X", "L", "I", "R"],
  ["H", "A", "R", "B", "U", "Z", "E", "A", "N", "E", "T", "H"],
  ["G", "N", "C", "S", "V", "A", "R", "S", "D", "C", "N", "A"],
  ["P", "Ç", "S", "M", "M", "X", "W", "Z", "I", "E", "E", "A"],
  ["Y", "A", "E", "P", "Y", "J", "Z", "V", "Z", "A", "S", "S"],
];

function ehVideo(imagem) {
  return (
    typeof imagem === "string" &&
    imagem.startsWith("data:video")
  );
}

export default function TelaInicial() {
  const pageRef = useRef(null);
  const marqueeRef = useRef(null);
  const gameRef = useRef(null);
  const feedbackRef = useRef(null);

  const galleryViewportRef = useRef(null);
  const galleryTrackRef = useRef(null);
  const galleryDraggableRef = useRef(null);

  const [selected, setSelected] = useState([]);
  const [found, setFound] = useState([]);
  const [foundCells, setFoundCells] = useState([]);
  const [feedback, setFeedback] = useState("");

  const [fotos, setFotos] = useState([]);
  const [galleryLoading, setGalleryLoading] = useState(true);

  function handleButtonMove(event) {
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
  }

  function showFeedback(message, success = false) {
    setFeedback(message);

    setTimeout(() => {
      if (!feedbackRef.current) return;

      gsap.killTweensOf(feedbackRef.current);

      gsap.fromTo(
        feedbackRef.current,
        {
          opacity: 0,
          scale: success ? 0.7 : 0.6,
          y: success ? 20 : 10,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: success ? 0.7 : 0.2,
          ease: success ? "back.out(1.7)" : "back.out(2)",
          onComplete: () => {
            if (!success) {
              gsap.to(feedbackRef.current, {
                opacity: 0,
                scale: 0.8,
                y: -10,
                duration: 0.25,
                delay: 0.45,
                ease: "power2.in",
                onComplete: () => setFeedback(""),
              });
            }
          },
        }
      );
    }, 30);
  }

  function shakeGame() {
    if (!gameRef.current) return;

    gsap.killTweensOf(gameRef.current);

    gsap
      .timeline()
      .to(gameRef.current, {
        x: -10,
        duration: 0.07,
      })
      .to(gameRef.current, {
        x: 10,
        duration: 0.07,
      })
      .to(gameRef.current, {
        x: -8,
        duration: 0.06,
      })
      .to(gameRef.current, {
        x: 8,
        duration: 0.06,
      })
      .to(gameRef.current, {
        x: -5,
        duration: 0.05,
      })
      .to(gameRef.current, {
        x: 5,
        duration: 0.05,
      })
      .to(gameRef.current, {
        x: 0,
        duration: 0.08,
      });
  }

  function selectLetter(row, col) {
    const position = `${row}-${col}`;

    if (selected.length === 0) {
      setSelected([position]);
      return;
    }

    const [r1, c1] = selected[0].split("-").map(Number);

    let cells = [];

    if (r1 === row) {
      for (
        let c = Math.min(c1, col);
        c <= Math.max(c1, col);
        c++
      ) {
        cells.push(`${r1}-${c}`);
      }
    } else if (c1 === col) {
      for (
        let r = Math.min(r1, row);
        r <= Math.max(r1, row);
        r++
      ) {
        cells.push(`${r}-${c1}`);
      }
    } else if (
      Math.abs(r1 - row) === Math.abs(c1 - col)
    ) {
      const rowStep = row > r1 ? 1 : -1;
      const colStep = col > c1 ? 1 : -1;

      let r = r1;
      let c = c1;

      while (true) {
        cells.push(`${r}-${c}`);

        if (r === row && c === col) {
          break;
        }

        r += rowStep;
        c += colStep;
      }
    }

    const letters = cells.map((item) => {
      const [r, c] = item.split("-").map(Number);
      return board[r][c];
    });

    const word = letters.join("");

    const reverse = word.split("").reverse().join("");

    const correctWord = words.find(
      (item) => item === word || item === reverse
    );

    if (correctWord && !found.includes(correctWord)) {
      const newFound = [...found, correctWord];

      setFound(newFound);

      setFoundCells((prev) => [
        ...new Set([...prev, ...cells]),
      ]);

      setSelected([]);

      if (newFound.length === words.length) {
        setTimeout(() => {
          showFeedback(
            "PARABÉNS! VOCÊ ENCONTROU TODAS AS PALAVRAS!",
            true
          );
        }, 250);
      }

      return;
    }

    if (
      correctWord &&
      found.includes(correctWord)
    ) {
      setSelected([]);
      return;
    }

    setSelected([]);
    shakeGame();
    showFeedback("Credo!");
  }

  useEffect(() => {
  let ativo = true;

  async function carregarGaleria() {
    try {
      setGalleryLoading(true);

      const response = await fetch(
        `${API_URL}/galeria`,
        {
          method: "GET",
          headers: getAuthHeaders(),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Erro HTTP ${response.status}`
        );
      }

      const data = await response.json();

      console.log("GALERIA HOME:", data);

      if (!ativo) return;

      if (Array.isArray(data)) {
        setFotos(data);
      } else {
        setFotos([]);
      }
    } catch (error) {
      console.error(
        "ERRO AO CARREGAR GALERIA HOME:",
        error
      );

      if (ativo) {
        setFotos([]);
      }
    } finally {
      if (ativo) {
        setGalleryLoading(false);
      }
    }
  }

  carregarGaleria();

  return () => {
    ativo = false;
  };
}, []);

  useLayoutEffect(() => {
    if (
      galleryLoading ||
      fotos.length <= 1 ||
      !galleryViewportRef.current ||
      !galleryTrackRef.current
    ) {
      return;
    }

    const viewport = galleryViewportRef.current;
    const track = galleryTrackRef.current;

    const getLimit = () => {
      return Math.max(
        0,
        track.scrollWidth - viewport.clientWidth
      );
    };

    galleryDraggableRef.current?.kill();

    galleryDraggableRef.current =
      Draggable.create(track, {
        type: "x",

        bounds: () => ({
          minX: -getLimit(),
          maxX: 0,
        }),

        edgeResistance: 0.85,
        cursor: "grab",
        activeCursor: "grabbing",
        allowNativeTouchScrolling: false,
      })[0];

    gsap.fromTo(
      track.children,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      }
    );

    function resize() {
      if (!galleryDraggableRef.current) return;

      galleryDraggableRef.current.applyBounds({
        minX: -getLimit(),
        maxX: 0,
      });
    }

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);

      galleryDraggableRef.current?.kill();

      galleryDraggableRef.current = null;
    };
  }, [fotos, galleryLoading]);

  function moverGaleria(direcao) {
    const track = galleryTrackRef.current;
    const viewport = galleryViewportRef.current;
    const draggable = galleryDraggableRef.current;

    if (!track || !viewport || !draggable) {
      return;
    }

    const limite = Math.max(
      0,
      track.scrollWidth - viewport.clientWidth
    );

    const passo = Math.min(
      320,
      viewport.clientWidth * 0.8
    );

    const atual = Number(
      gsap.getProperty(track, "x") || 0
    );

    let destino =
      atual + direcao * -passo;

    destino = Math.max(
      -limite,
      Math.min(0, destino)
    );

    gsap.to(track, {
      x: destino,
      duration: 0.5,
      ease: "power3.out",
      onUpdate: () => {
        draggable.update();
      },
    });
  }

  useLayoutEffect(() => {
    const page = pageRef.current;

    if (!page) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: {
            ease: "power4.out",
          },
        })
        .from(".hero-logo", {
          y: -30,
          opacity: 0,
          duration: 0.7,
        })
        .from(
          ".hero-social",
          {
            y: -20,
            opacity: 0,
            duration: 0.6,
          },
          "-=.4"
        )
        .from(
          ".hero-title",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
          },
          "-=.25"
        )
        .from(
          ".hero-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=.4"
        )
        .from(
          ".hero-buttons",
          {
            y: 25,
            opacity: 0,
            duration: 0.5,
          },
          "-=.3"
        )
        .from(
          ".hero-image",
          {
            y: 60,
            opacity: 0,
            scale: 0.94,
            duration: 0.8,
          },
          "-=.5"
        )
        .from(
          ".hero-circle",
          {
            scale: 0,
            opacity: 0,
            stagger: 0.06,
            duration: 0.4,
            ease: "back.out(1.8)",
          },
          "-=.5"
        )
        .from(
          ".hero-pixel",
          {
            scale: 0,
            opacity: 0,
            rotation: -25,
            stagger: 0.12,
            duration: 0.6,
            ease: "back.out(1.8)",
          },
          "-=.35"
        );

      gsap.utils
        .toArray(".hero-pixel")
        .forEach((pixel, index) => {
          gsap.to(pixel, {
            y:
              index === 0
                ? -18
                : index === 1
                ? 20
                : -15,

            x:
              index === 0
                ? 12
                : index === 1
                ? -12
                : 10,

            rotation:
              index === 0
                ? 6
                : index === 1
                ? -7
                : 5,

            duration: 2.8 + index * 0.45,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      gsap.utils
        .toArray(".hero-circle")
        .forEach((circle, index) => {
          gsap.to(circle, {
            y:
              index % 2 === 0
                ? -20
                : 20,

            x:
              index % 3 === 0
                ? 12
                : -12,

            duration: 3 + index * 0.25,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        });

      if (marqueeRef.current) {
        gsap.set(marqueeRef.current, {
          x: 0,
          y: 0,
          opacity: 1,
          visibility: "visible",
        });
      }

      const marqueeTrack =
        page.querySelector(".marquee-track");

      if (marqueeTrack) {
        const getWidth = () =>
          marqueeTrack.scrollWidth / 2;

        gsap.to(marqueeTrack, {
          x: () => -getWidth(),
          duration: 25,
          repeat: -1,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((value) => {
              const width = getWidth();
              const number = parseFloat(value);

              return number <= -width
                ? 0
                : number;
            }),
          },
        });
      }

      requestAnimationFrame(() =>
        ScrollTrigger.refresh()
      );
    }, page);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <GlobalStyle />

      <Page ref={pageRef}>
        <HeroWrapper>
          <Hero>
            <Header>
              <Logo className="hero-logo">
                <img
                  src="/logo.png"
                  alt="Slam Interescolar"
                />
              </Logo>

              <HeaderBar />

              <SocialIcons className="hero-social">
                <SocialIcon
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </SocialIcon>

                <SocialIcon href="mailto:contato@email.com">
                  <FaEnvelope />
                </SocialIcon>

                <SocialIcon
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </SocialIcon>
              </SocialIcons>
            </Header>

            <Container>
              <LeftSide>
                <BigText className="hero-title">
                  DAS RUAS PARA AS{" "}
                  <span>ESCOLAS</span>
                  <br />
                  DAS ESCOLAS PARA AS{" "}
                  <span>RUAS</span>
                </BigText>

                <SmallText className="hero-description">
                  O Slam Etecamp celebra a
                  expressão, criatividade e o
                  poder da palavra entre jovens
                  estudantes.
                </SmallText>

                <Buttons className="hero-buttons">
                  <RouterLink to="/login">
                    <PrimaryButton
                      onPointerMove={
                        handleButtonMove
                      }
                    >
                      <span className="button-content">
                        Participar do Slam Etecamp
                        <FaArrowRight />
                      </span>
                    </PrimaryButton>
                  </RouterLink>
                </Buttons>
              </LeftSide>

              <ImageBox className="hero-image">
                <PixelImage
                  className="hero-pixel hero-pixel-01"
                  src="/pixel01.png"
                  alt=""
                />

                <PixelImage
                  className="hero-pixel hero-pixel-02"
                  src="/pixel02.png"
                  alt=""
                />

                <PixelImage
                  className="hero-pixel hero-pixel-03"
                  src="/pixel03.png"
                  alt=""
                />

                <Circle
                  className="hero-circle"
                  $size="65px"
                  $top="0%"
                  $left="8%"
                />

                <Circle
                  className="hero-circle"
                  $size="45px"
                  $top="0%"
                  $left="28%"
                />

                <Circle
                  className="hero-circle"
                  $size="25px"
                  $top="18%"
                  $right="12%"
                />

                <Circle
                  className="hero-circle"
                  $size="35px"
                  $bottom="10%"
                  $left="2%"
                />

                <Circle
                  className="hero-circle"
                  $size="18px"
                  $bottom="25%"
                  $right="5%"
                />

                <Circle
                  className="hero-circle"
                  $size="70px"
                  $top="99%"
                  $right="20%"
                />

                <Image
                  src="/inicialimg.png"
                  alt="Ilustração do Slam Etecamp"
                />
              </ImageBox>
            </Container>
          </Hero>
        </HeroWrapper>

        <MarqueeSection>
          <MarqueeReveal ref={marqueeRef}>
            <MarqueeTrack className="marquee-track">
              <Phrase>LIBERDADE</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>RESPEITO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>ESFORÇO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>AUTENTICIDADE</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>EVOLUÇÃO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>CORAGEM</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>UNIÃO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>LIBERDADE</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>RESPEITO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>ESFORÇO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>AUTENTICIDADE</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>EVOLUÇÃO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>CORAGEM</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>UNIÃO</Phrase>
              <AnimatedImage src="/icons.png" alt="Slam" />

              <Phrase>CULTURA</Phrase>
            </MarqueeTrack>
          </MarqueeReveal>

          <InkPaint />
        </MarqueeSection>

        <AboutSection>
          <AboutTitle>
            SOBRE O <span>SLAM</span>
          </AboutTitle>

          <AboutContainer>
            <AboutContent>
              <AboutText>
                O <b>Slam</b> Interescolar é uma
                competição de <b>poesia</b> falada
                que reúne estudantes de diferentes
                escolas para compartilharem suas
                ideias, <b>sentimentos</b> e vivências
                por meio da <b>arte</b> e da palavra.

                <br />
                <br />

                Além de incentivar a <b>escrita</b> e
                a <b>oralidade</b>, a iniciativa
                fortalece a autoestima, o pensamento
                crítico e o respeito. Entre{" "}
                <b>rimas</b>, emoções e{" "}
                <b>performances</b>, os jovens
                desenvolvem <b>confiança</b> e ampliam
                suas formas de <b>expressão</b>.
              </AboutText>

              <AboutFindBox>
                <h3>Encontre:</h3>

                <AboutWords>
                  {words.map((word) => (
                    <AboutWord
                      key={word}
                      $found={found.includes(word)}
                    >
                      {word}
                    </AboutWord>
                  ))}
                </AboutWords>
              </AboutFindBox>
            </AboutContent>

            <AboutGame>
              {feedback && (
                <GameFeedback
                  ref={feedbackRef}
                  $success={feedback.startsWith(
                    "PARABÉNS"
                  )}
                >
                  {feedback}
                </GameFeedback>
              )}

              <AboutBoard
                ref={gameRef}
                $completed={
                  found.length === words.length
                }
              >
                {board.map((row, i) => (
                  <AboutRow key={i}>
                    {row.map((letter, j) => {
                      const position = `${i}-${j}`;

                      return (
                        <AboutLetter
                          type="button"
                          key={j}
                          $active={selected.includes(
                            position
                          )}
                          $found={foundCells.includes(
                            position
                          )}
                          onClick={() =>
                            selectLetter(i, j)
                          }
                        >
                          {letter}
                        </AboutLetter>
                      );
                    })}
                  </AboutRow>
                ))}
              </AboutBoard>
            </AboutGame>
          </AboutContainer>
        </AboutSection>

        <FeaturesSection>
          <SectionTitle>
            O QUE VOCÊ ENCONTRA{" "}
            <span>AQUI</span>
          </SectionTitle>

          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <FaFileAlt />
              </FeatureIcon>

              <FeatureTitle>
                INSCRIÇÕES
              </FeatureTitle>

              <FeatureText>
                Faça sua inscrição de forma
                simples e rápida.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaCalendarAlt />
              </FeatureIcon>

              <FeatureTitle>
                ETAPAS DO EVENTO
              </FeatureTitle>

              <FeatureText>
                Acompanhe todas as fases
                do Slam Interescolar e não
                perca nada!
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaTrophy />
              </FeatureIcon>

              <FeatureTitle>
                PONTUAÇÕES
              </FeatureTitle>

              <FeatureText>
                Veja as notas, classificações
                e o ranking dos slammers.
              </FeatureText>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <FaBookOpen />
              </FeatureIcon>

              <FeatureTitle>
                REGRAS E DICAS
              </FeatureTitle>

              <FeatureText>
                Fique por dentro das regras
                do Slam e prepare sua melhor
                poesia.
              </FeatureText>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <GallerySection>
          <SectionTitle>
            GALERIA DO <span>SLAM</span>
          </SectionTitle>

          <GalleryWrapper>
            {galleryLoading ? (
              <GalleryState>
                Carregando fotos...
              </GalleryState>
            ) : fotos.length === 0 ? (
              <GalleryState>
                <FaImages
                  style={{
                    marginRight: 8,
                  }}
                />
                Nenhuma foto encontrada.
              </GalleryState>
            ) : (
              <>
                <GalleryHint>
                  Arraste para o lado para ver
                  mais fotos
                </GalleryHint>

                <GalleryViewport
                  ref={galleryViewportRef}
                >
                  <GalleryTrack
                    ref={galleryTrackRef}
                  >
                    {fotos.map((foto) => (
                      <GalleryCard
                        key={foto.id}
                      >
                        {ehVideo(foto.imagem) ? (
                          <video
                            src={foto.imagem}
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              display: "block",
                            }}
                          />
                        ) : (
                          <GalleryImage
                            src={foto.imagem}
                            alt="Foto do Slam Etecamp"
                            draggable={false}
                          />
                        )}
                      </GalleryCard>
                    ))}
                  </GalleryTrack>
                </GalleryViewport>

                {fotos.length > 1 && (
                  <GalleryArrows>
                    <GalleryArrowButton
                      type="button"
                      onClick={() =>
                        moverGaleria(-1)
                      }
                      aria-label="Anterior"
                    >
                      <FaChevronLeft />
                    </GalleryArrowButton>

                    <GalleryArrowButton
                      type="button"
                      onClick={() =>
                        moverGaleria(1)
                      }
                      aria-label="Próxima"
                    >
                      <FaChevronRight />
                    </GalleryArrowButton>
                  </GalleryArrows>
                )}
              </>
            )}
          </GalleryWrapper>
        </GallerySection>

        <CTASection>
          <CTAContainer>
            <CTAIcon>
              <FaMicrophone />
            </CTAIcon>

            <CTAText>
              <CTATitle>
                SUA VOZ TEM PODER.
              </CTATitle>

              <CTASubtitle>
                PARTICIPE, PERFORME E TRANSFORME!
              </CTASubtitle>
            </CTAText>

            <CTALink
              href="/login"
              onPointerMove={handleButtonMove}
            >
              <span className="button-content">
                QUERO PARTICIPAR
                <FaArrowRight />
              </span>
            </CTALink>
          </CTAContainer>
        </CTASection>
      </Page>
    </>
  );
}