import { useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FaArrowRight, FaEnvelope, FaInstagram, FaYoutube,
  FaFileAlt, FaCalendarAlt, FaTrophy, FaBookOpen, FaMicrophone,
} from "react-icons/fa";

import {
  Page, HeroWrapper, Hero, Header, Logo, HeaderBar, SocialIcons, SocialIcon,
  Container, LeftSide, BigText, SmallText, Buttons, PrimaryButton, ImageBox,
  Image, Circle,
  MarqueeSection, MarqueeReveal, MarqueeTrack, AnimatedImage, Phrase,
  AboutSection, AboutContainer, AboutTitle, AboutContent, AboutText,
  AboutFindBox, AboutWords, AboutWord, AboutGame, AboutBoard, AboutRow,
  AboutLetter, GameFeedback,
  FeaturesSection, SectionTitle, FeaturesGrid, FeatureCard, FeatureIcon,
  FeatureTitle, FeatureText,
  NumbersSection, NumbersContainer, NumberItem, NumberValue, NumberLabel,
  NumberDivider,
  CTASection, CTAContainer, CTAIcon, CTAText, CTATitle, CTASubtitle, CTALink,
} from "./style";

gsap.registerPlugin(ScrollTrigger);


/* ============================================================
   PALAVRAS DO CAÇA-PALAVRAS
============================================================ */

const words = [
  "SLAM", "POESIA", "SENTIMENTOS", "ARTE", "ESCRITA",
  "ORALIDADE", "RIMAS", "PERFORMANCES", "CONFIANÇA", "EXPRESSÃO",
];


/* ============================================================
   TABULEIRO
============================================================ */

const board = [
  ["S", "E", "N", "T", "I", "M", "E", "N", "T", "O", "S", "R"],
  ["P", "Q", "X", "L", "M", "N", "B", "V", "C", "D", "R", "T"],
  ["O", "E", "S", "C", "R", "I", "T", "A", "F", "G", "T", "E"],
  ["E", "W", "R", "Y", "U", "I", "O", "P", "A", "S", "E", "Z"],
  ["S", "L", "A", "M", "H", "J", "K", "L", "M", "N", "P", "O"],
  ["I", "D", "F", "G", "H", "J", "K", "A", "R", "T", "E", "R"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"],
  ["O", "R", "A", "L", "I", "D", "A", "D", "E", "M", "N", "P"],
  ["R", "I", "M", "A", "S", "Q", "W", "E", "R", "T", "Y", "U"],
  ["P", "E", "R", "F", "O", "R", "M", "A", "N", "C", "E", "S"],
  ["C", "O", "N", "F", "I", "A", "N", "Ç", "A", "X", "Z", "A"],
  ["E", "X", "P", "R", "E", "S", "S", "Ã", "O", "Q", "W", "E"],
];


export default function TelaInicial() {

  const pageRef = useRef(null);
  const marqueeRef = useRef(null);
  const numbersRef = useRef(null);

  const gameRef = useRef(null);
  const feedbackRef = useRef(null);

  const [selected, setSelected] = useState([]);
  const [found, setFound] = useState([]);
  const [foundCells, setFoundCells] = useState([]);
  const [feedback, setFeedback] = useState("");


  /* ============================================================
     MOSTRAR FEEDBACK
  ============================================================ */

  function showFeedback(message, success = false) {

    setFeedback(message);

    setTimeout(() => {

      if (!feedbackRef.current) return;

      gsap.killTweensOf(feedbackRef.current);

      gsap.fromTo(
        feedbackRef.current,
        { opacity: 0, scale: success ? 0.7 : 0.6, y: success ? 20 : 10 },
        {
          opacity: 1, scale: 1, y: 0,
          duration: success ? 0.7 : 0.2,
          ease: success ? "back.out(1.7)" : "back.out(2)",
          onComplete: () => {
            if (!success) {
              gsap.to(feedbackRef.current, {
                opacity: 0, scale: 0.8, y: -10,
                duration: 0.25, delay: 0.45, ease: "power2.in",
                onComplete: () => setFeedback(""),
              });
            }
          },
        }
      );

    }, 30);

  }


  /* ============================================================
     ANIMAÇÃO DE ERRO
  ============================================================ */

  function shakeGame() {

    if (!gameRef.current) return;

    gsap.killTweensOf(gameRef.current);

    gsap.timeline()
      .to(gameRef.current, { x: -10, duration: 0.07, ease: "power1.inOut" })
      .to(gameRef.current, { x: 10, duration: 0.07, ease: "power1.inOut" })
      .to(gameRef.current, { x: -8, duration: 0.06, ease: "power1.inOut" })
      .to(gameRef.current, { x: 8, duration: 0.06, ease: "power1.inOut" })
      .to(gameRef.current, { x: -5, duration: 0.05, ease: "power1.inOut" })
      .to(gameRef.current, { x: 5, duration: 0.05, ease: "power1.inOut" })
      .to(gameRef.current, { x: 0, duration: 0.08, ease: "power1.out" });

  }


  /* ============================================================
     SELECIONAR LETRAS
  ============================================================ */

  function selectLetter(row, col) {

    const position = `${row}-${col}`;

    if (selected.length === 0) {
      setSelected([position]);
      return;
    }

    const first = selected[0];
    const [r1, c1] = first.split("-").map(Number);
    const r2 = row;
    const c2 = col;

    let cells = [];

    /* HORIZONTAL */
    if (r1 === r2) {
      const start = Math.min(c1, c2);
      const end = Math.max(c1, c2);
      for (let c = start; c <= end; c++) cells.push(`${r1}-${c}`);
    }

    /* VERTICAL */
    else if (c1 === c2) {
      const start = Math.min(r1, r2);
      const end = Math.max(r1, r2);
      for (let r = start; r <= end; r++) cells.push(`${r}-${c1}`);
    }

    /* DIAGONAL */
    else if (Math.abs(r1 - r2) === Math.abs(c1 - c2)) {

      const rowStep = r2 > r1 ? 1 : -1;
      const colStep = c2 > c1 ? 1 : -1;

      let r = r1;
      let c = c1;

      while (true) {
        cells.push(`${r}-${c}`);
        if (r === r2 && c === c2) break;
        r += rowStep;
        c += colStep;
      }

    }

    /* VERIFICAR PALAVRA */
    const letters = cells.map((item) => {
      const [r, c] = item.split("-").map(Number);
      return board[r][c];
    });

    const word = letters.join("");
    const reverse = word.split("").reverse().join("");
    const correctWord = words.find((item) => item === word || item === reverse);

    /* PALAVRA CORRETA */
    if (correctWord && !found.includes(correctWord)) {

      const newFound = [...found, correctWord];

      setFound(newFound);
      setFoundCells((prev) => [...new Set([...prev, ...cells])]);
      setSelected([]);

      if (newFound.length === words.length) {
        setTimeout(() => {
          showFeedback("PARABÉNS! VOCÊ ENCONTROU TODAS AS PALAVRAS!", true);
        }, 250);
      }

      return;
    }

    /* PALAVRA JÁ ENCONTRADA */
    if (correctWord && found.includes(correctWord)) {
      setSelected([]);
      return;
    }

    /* ERRO */
    setSelected([]);
    shakeGame();
    showFeedback("Credo!", false);

  }


  /* ============================================================
     GSAP
  ============================================================ */

  useLayoutEffect(() => {

    const page = pageRef.current;
    if (!page) return;

    const ctx = gsap.context(() => {

      /* HERO — ANIMAÇÃO DE ENTRADA */
      const heroTimeline = gsap.timeline({ defaults: { ease: "power4.out" } });

      heroTimeline
        .from(".hero-logo", { y: -30, opacity: 0, duration: 0.7 })
        .from(".hero-social", { y: -20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-title", { y: 60, opacity: 0, duration: 0.8 }, "-=0.25")
        .from(".hero-description", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-buttons", { y: 25, opacity: 0, duration: 0.5 }, "-=0.3")
        .from(".hero-image", { y: 60, opacity: 0, scale: 0.94, duration: 0.8 }, "-=0.5")
        .from(".hero-circle", {
          scale: 0, opacity: 0, stagger: 0.06, duration: 0.4, ease: "back.out(1.8)",
        }, "-=0.5");

      /* CÍRCULOS FLUTUANTES */
      gsap.utils.toArray(".hero-circle").forEach((circle, index) => {
        gsap.to(circle, {
          y: index % 2 === 0 ? -20 : 20,
          x: index % 3 === 0 ? 12 : -12,
          duration: 3 + index * 0.25,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        });
      });

      /* MARQUEE — SOMENTE HORIZONTAL */
      if (marqueeRef.current) {
        gsap.set(marqueeRef.current, { x: 0, y: 0, opacity: 1, visibility: "visible" });
      }

      const marqueeTrack = page.querySelector(".marquee-track");

      if (marqueeTrack) {

        const getMarqueeWidth = () => marqueeTrack.scrollWidth / 2;

        gsap.to(marqueeTrack, {
          x: () => -getMarqueeWidth(),
          duration: 25,
          repeat: -1,
          ease: "none",
          modifiers: {
            x: gsap.utils.unitize((value) => {
              const width = getMarqueeWidth();
              const number = parseFloat(value);
              return number <= -width ? 0 : number;
            }),
          },
        });

      }

      /* NÚMEROS */
      if (numbersRef.current) {

        const numberElements = numbersRef.current.querySelectorAll(".number-value");

        numberElements.forEach((element) => {

          const target = Number(element.dataset.target) || 0;
          const suffix = element.dataset.suffix || "";
          const counter = { value: 0 };

          element.textContent = `0${suffix}`;

          gsap.to(counter, {
            value: target,
            duration: 1.8,
            ease: "power2.out",
            snap: { value: 1 },
            scrollTrigger: {
              trigger: numbersRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              once: true,
            },
            onUpdate: () => {
              element.textContent = `${Math.round(counter.value)}${suffix}`;
            },
          });

        });

      }

      requestAnimationFrame(() => ScrollTrigger.refresh());

    }, page);

    return () => ctx.revert();

  }, []);


  return (

    <Page ref={pageRef}>

      {/* HERO */}
      <HeroWrapper>
        <Hero>

          <Header>

            <Logo className="hero-logo">
              <img src="/logo.png" alt="Slam Interescolar" />
            </Logo>

            <HeaderBar />

            <SocialIcons className="hero-social">
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="mailto:contato@email.com">
                <FaEnvelope />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
            </SocialIcons>

          </Header>

          <Container>

            <LeftSide>

              <BigText className="hero-title">
                DAS RUAS PARA AS{" "}<span>ESCOLAS</span>
                <br />
                DAS ESCOLAS PARA AS{" "}<span>RUAS</span>
              </BigText>

              <SmallText className="hero-description">
                O Slam Etecamp celebra a expressão, criatividade e o poder da
                palavra entre jovens estudantes.
              </SmallText>

              <Buttons className="hero-buttons">
                <RouterLink to="/login">
                  <PrimaryButton>
                    Participar do Slam Etecamp
                    <FaArrowRight />
                  </PrimaryButton>
                </RouterLink>
              </Buttons>

            </LeftSide>

            <ImageBox className="hero-image">
              <Circle className="hero-circle" $size="65px" $top="0%" $left="8%" />
              <Circle className="hero-circle" $size="45px" $top="0%" $left="28%" />
              <Circle className="hero-circle" $size="25px" $top="18%" $right="12%" />
              <Circle className="hero-circle" $size="35px" $bottom="10%" $left="2%" />
              <Circle className="hero-circle" $size="18px" $bottom="25%" $right="5%" />
              <Circle className="hero-circle" $size="70px" $top="99%" $right="20%" />
              <Image src="/homem.png" alt="Ilustração do Slam Etecamp" />
            </ImageBox>

          </Container>

        </Hero>
      </HeroWrapper>

      {/* MARQUEE */}
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
      </MarqueeSection>

      {/* SOBRE O SLAM */}
      <AboutSection>

        <AboutTitle>SOBRE O <span>SLAM</span></AboutTitle>

        <AboutContainer>

          <AboutContent>

            <AboutText>
              O <b>Slam</b> Interescolar é uma competição de <b>poesia</b> falada
              que reúne estudantes de diferentes escolas para compartilharem suas
              ideias, <b>sentimentos</b> e vivências por meio da <b>arte</b> e da
              palavra.
              <br /><br />
              Além de incentivar a <b>escrita</b> e a<b> oralidade</b>, a
              iniciativa fortalece a autoestima, o pensamento crítico e o
              respeito. Entre <b>rimas</b>, emoções e<b> performances</b>, os
              jovens desenvolvem<b> confiança</b> e ampliam suas formas de<b>
              expressão</b>.
            </AboutText>

            <AboutFindBox>

              <h3>Encontre:</h3>

              <AboutWords>
                {words.map((word) => (
                  <AboutWord key={word} $found={found.includes(word)}>
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
                $success={feedback.startsWith("PARABÉNS")}
              >
                {feedback}
              </GameFeedback>
            )}

            <AboutBoard
              ref={gameRef}
              $completed={found.length === words.length}
            >
              {board.map((row, i) => (
                <AboutRow key={i}>
                  {row.map((letter, j) => {

                    const position = `${i}-${j}`;

                    return (
                      <AboutLetter
                        type="button"
                        key={j}
                        $active={selected.includes(position)}
                        $found={foundCells.includes(position)}
                        onClick={() => selectLetter(i, j)}
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

      {/* FEATURES */}
      <FeaturesSection>

        <SectionTitle>O QUE VOCÊ ENCONTRA <span>AQUI</span></SectionTitle>

        <FeaturesGrid>

          <FeatureCard>
            <FeatureIcon><FaFileAlt /></FeatureIcon>
            <FeatureTitle>INSCRIÇÕES</FeatureTitle>
            <FeatureText>Faça sua inscrição de forma simples e rápida.</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaCalendarAlt /></FeatureIcon>
            <FeatureTitle>ETAPAS DO EVENTO</FeatureTitle>
            <FeatureText>Acompanhe todas as fases do Slam Interescolar e não perca nada!</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaTrophy /></FeatureIcon>
            <FeatureTitle>PONTUAÇÕES</FeatureTitle>
            <FeatureText>Veja as notas, classificações e o ranking dos slammers.</FeatureText>
          </FeatureCard>

          <FeatureCard>
            <FeatureIcon><FaBookOpen /></FeatureIcon>
            <FeatureTitle>REGRAS E DICAS</FeatureTitle>
            <FeatureText>Fique por dentro das regras do Slam e prepare sua melhor poesia.</FeatureText>
          </FeatureCard>

        </FeaturesGrid>

      </FeaturesSection>

      {/* NÚMEROS */}
      <NumbersSection ref={numbersRef}>
        <NumbersContainer>

          <SectionTitle $dark>O SLAM EM <span>NÚMEROS</span></SectionTitle>

          <NumberItem>
            <NumberValue className="number-value" data-target="500" data-suffix="+">0+</NumberValue>
            <NumberLabel>POESIAS<br />ESCRITAS</NumberLabel>
          </NumberItem>

          <NumberDivider />

          <NumberItem>
            <NumberValue className="number-value" data-target="400" data-suffix="+">0+</NumberValue>
            <NumberLabel>ESCOLAS<br />CONECTADAS</NumberLabel>
          </NumberItem>

          <NumberDivider />

          <NumberItem>
            <NumberValue className="number-value" data-target="300" data-suffix="+">0+</NumberValue>
            <NumberLabel>ALUNOS<br />INSCRITOS</NumberLabel>
          </NumberItem>

          <NumberDivider />

          <NumberItem>
            <NumberValue className="number-value" data-target="10" data-suffix="">0</NumberValue>
            <NumberLabel>ANOS<br />DE EVENTO</NumberLabel>
          </NumberItem>

        </NumbersContainer>
      </NumbersSection>

      {/* CTA */}
      <CTASection>
        <CTAContainer>

          <CTAIcon><FaMicrophone /></CTAIcon>

          <CTAText>
            <CTATitle>SUA VOZ TEM PODER.</CTATitle>
            <CTASubtitle>PARTICIPE, PERFORME E TRANSFORME!</CTASubtitle>
          </CTAText>

          <CTALink href="/login">
            QUERO PARTICIPAR
            <FaArrowRight />
          </CTALink>

        </CTAContainer>
      </CTASection>

    </Page>

  );

}