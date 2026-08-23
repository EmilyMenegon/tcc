import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";

import {
  FaHome,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import {
  Container,
  MusicVisualizer,
  MusicColumn,
  Pixel,
  Card,
  LeftSide,
  LogoImage,
  Welcome,
  RightSide,
  Tabs,
  Tab,
  Form,
  Input,
  Button,
  LinkText,
  LinkNormal,
  LinkAction,
  HomeButton,
  PasswordWrapper,
  EyeButton,
  ForgotPassword,
} from "./style";


export default function Login() {

  const [mode, setMode] = useState("cadastro");

  const navigate = useNavigate();

  const pageRef = useRef(null);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  const [mostrarSenha, setMostrarSenha] =
    useState(false);

  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] =
    useState(false);

  const [mostrarEsqueciSenha, setMostrarEsqueciSenha] =
    useState(false);


  /* ============================================================
     EQUALIZADOR
  ============================================================ */

  const columns = 48;
  const pixelsPerColumn = 12;


  /* ============================================================
     ANIMAÇÃO DOS QUADRADOS
  ============================================================ */

  useLayoutEffect(() => {

    const columnsElements =
      pageRef.current?.querySelectorAll(
        ".music-column"
      );

    if (!columnsElements?.length) return;

    const animations = [];


    columnsElements.forEach(
      (column, columnIndex) => {

        const pixels =
          column.querySelectorAll(
            ".music-pixel"
          );

        if (!pixels.length) return;


        const initialHeight =
          Math.floor(
            2 + Math.random() * 5
          );


        gsap.set(
          pixels,
          {
            opacity: 0.035,
          }
        );


        for (
          let i = 0;
          i < initialHeight;
          i++
        ) {

          gsap.to(
            pixels[i],
            {
              opacity:
                0.10 +
                Math.random() * 0.08,

              duration:
                0.45 +
                Math.random() * 0.25,

              ease: "power2.out",

              delay:
                columnIndex * 0.015 +
                i * 0.025,
            }
          );

        }


        const interval =
          gsap.delayedCall(
            0.65 +
            Math.random() * 0.35,

            function animateColumn() {

              const height =
                Math.floor(
                  2 +
                  Math.random() *
                  (pixels.length - 1)
                );


              pixels.forEach(
                (pixel, pixelIndex) => {

                  const isVisible =
                    pixelIndex < height;


                  if (isVisible) {

                    gsap.to(
                      pixel,
                      {
                        opacity:
                          0.07 +
                          Math.random() * 0.10,

                        duration:
                          0.35 +
                          Math.random() * 0.25,

                        ease:
                          "sine.inOut",

                        overwrite: true,
                      }
                    );

                  } else {

                    gsap.to(
                      pixel,
                      {
                        opacity:
                          0.025 +
                          Math.random() * 0.025,

                        duration:
                          0.45 +
                          Math.random() * 0.25,

                        ease:
                          "sine.inOut",

                        overwrite: true,
                      }
                    );

                  }

                }
              );


              interval.restart(
                0.55 +
                Math.random() * 0.30
              );

            }
          );


        animations.push(interval);

      }
    );


    return () => {

      animations.forEach(
        (animation) => {
          animation.kill();
        }
      );

    };

  }, []);


  /* ============================================================
     ANIMAÇÃO INICIAL
  ============================================================ */

  useLayoutEffect(() => {

    const page = pageRef.current;

    if (!page) return;


    const ctx = gsap.context(() => {

      const timeline =
        gsap.timeline({
          defaults: {
            ease: "power3.out",
          },
        });


      gsap.set(
        ".login-card",
        {
          opacity: 0,
          y: 35,
          scale: 0.97,
        }
      );


      gsap.set(
        ".login-home",
        {
          opacity: 0,
          scale: 0.7,
          rotation: -15,
        }
      );


      gsap.set(
        ".login-logo",
        {
          opacity: 0,
          y: 20,
          scale: 0.9,
        }
      );


      gsap.set(
        ".login-welcome",
        {
          opacity: 0,
          y: 20,
        }
      );


      gsap.set(
        ".login-tabs",
        {
          opacity: 0,
          y: 15,
        }
      );


      gsap.set(
        ".login-input",
        {
          opacity: 0,
          y: 15,
        }
      );


      gsap.set(
        ".login-button",
        {
          opacity: 0,
          y: 15,
          scale: 0.97,
        }
      );


      gsap.set(
        ".login-link",
        {
          opacity: 0,
          y: 10,
        }
      );


      timeline

        .to(
          ".login-card",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
          }
        )

        .to(
          ".login-home",
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.55,
            ease: "back.out(1.7)",
          },
          "-=0.55"
        )

        .to(
          ".login-logo",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.65,
            ease: "back.out(1.4)",
          },
          "-=0.45"
        )

        .to(
          ".login-welcome",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.3"
        )

        .to(
          ".login-tabs",
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
          },
          "-=0.25"
        )

        .to(
          ".login-input",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.08,
          },
          "-=0.15"
        )

        .to(
          ".login-button",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.45,
          },
          "-=0.15"
        )

        .to(
          ".login-link",
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
          },
          "-=0.2"
        );

    }, page);


    return () => {
      ctx.revert();
    };

  }, []);


  /* ============================================================
     TROCAR LOGIN / CADASTRO
  ============================================================ */

  function changeMode(newMode) {

    if (newMode === mode) return;


    const form =
      pageRef.current?.querySelector(
        ".login-form"
      );


    if (!form) {

      setMode(newMode);

      return;

    }


    gsap.killTweensOf(form);


    gsap.to(
      form,
      {
        opacity: 0,

        x:
          newMode === "login"
            ? 25
            : -25,

        duration: 0.2,

        ease: "power2.in",

        onComplete: () => {

          setMode(newMode);

          setMostrarEsqueciSenha(false);

        },
      }
    );

  }


  /* ============================================================
     ANIMAÇÃO DO FORM
  ============================================================ */

  useLayoutEffect(() => {

    const form =
      pageRef.current?.querySelector(
        ".login-form"
      );


    if (!form) return;


    const ctx = gsap.context(() => {

      gsap.fromTo(
        form,

        {
          opacity: 0,

          x:
            mode === "login"
              ? -25
              : 25,
        },

        {
          opacity: 1,

          x: 0,

          duration: 0.35,

          ease: "power3.out",
        }
      );


      gsap.fromTo(
        ".login-form .login-input",

        {
          opacity: 0,
          y: 12,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.06,
          delay: 0.05,
          ease: "power2.out",
        }
      );


      gsap.fromTo(
        ".login-form .login-button",

        {
          opacity: 0,
          y: 10,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.2,
          ease: "power2.out",
        }
      );


      gsap.fromTo(
        ".login-form .login-link",

        {
          opacity: 0,
          y: 8,
        },

        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          delay: 0.25,
          ease: "power2.out",
        }
      );

    }, pageRef);


    return () => {
      ctx.revert();
    };

  }, [mode]);


  /* ============================================================
     SUBMIT
  ============================================================ */

  async function handleSubmit(e) {

    e.preventDefault();

    setErro("");


    if (mode === "cadastro") {

      if (senha !== confirmarSenha) {

        setErro(
          "As senhas não coincidem."
        );

        return;

      }


      try {

        const res =
          await fetch(
            "http://localhost:3001/cadastro",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                nome,
                email,
                senha,
              }),
            }
          );


        const data =
          await res.json();


        if (!res.ok) {

          setErro(
            data.erro ||
            "Erro ao cadastrar."
          );

          return;

        }


        changeMode("login");


      } catch (err) {

        console.error(err);

        setErro(
          "Não foi possível conectar ao servidor."
        );

      }


    } else {

      try {

        const res =
          await fetch(
            "http://localhost:3001/login",
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                email,
                senha,
              }),
            }
          );


        const data =
          await res.json();


        if (!res.ok) {

          setErro(
            data.erro ||
            "Email ou senha inválidos."
          );

          return;

        }


        if (
          data.tipo ===
          "matematico"
        ) {

          navigate(
            "/mat",
            {
              state: {
                aba: "notas",
              },
            }
          );

        } else if (
          data.tipo ===
          "organizador"
        ) {

          navigate(
            "/adm/inicioadm"
          );

        } else {

          navigate(
            "/usuario/home"
          );

        }


      } catch (err) {

        console.error(err);

        setErro(
          "Não foi possível conectar ao servidor."
        );

      }

    }

  }


  /* ============================================================
     RENDER
  ============================================================ */

  return (

    <Container ref={pageRef}>


      {/* ======================================================
          QUADRADOS ANIMADOS
      ====================================================== */}

      <MusicVisualizer>

        {Array.from(
          {
            length: columns,
          }
        ).map(
          (_, columnIndex) => (

            <MusicColumn
              key={columnIndex}
              className="music-column"
            >

              {Array.from(
                {
                  length:
                    pixelsPerColumn,
                }
              ).map(
                (_, pixelIndex) => (

                  <Pixel
                    key={pixelIndex}
                    className="music-pixel"
                  />

                )
              )}

            </MusicColumn>

          )
        )}

      </MusicVisualizer>


      {/* ======================================================
          HOME
      ====================================================== */}

      <HomeButton
        className="login-home"
        onClick={() =>
          navigate("/")
        }
        aria-label="Voltar para a página inicial"
      >

        <FaHome />

      </HomeButton>


      {/* ======================================================
          CARD
      ====================================================== */}

      <Card className="login-card">


        <LeftSide>

          <LogoImage
            className="login-logo"
          >

            <img
              src="/logo.png"
              alt="Logo Slam Etecamp"
            />

          </LogoImage>


          <Welcome
            className="login-welcome"
          >

            Bem-vindo!

          </Welcome>

        </LeftSide>


        <RightSide>


          <Tabs
            className="login-tabs"
          >

            <Tab
              $active={
                mode === "login"
              }
              onClick={() =>
                changeMode("login")
              }
            >
              Login
            </Tab>


            <Tab
              $active={
                mode === "cadastro"
              }
              onClick={() =>
                changeMode("cadastro")
              }
            >
              Cadastro
            </Tab>

          </Tabs>


          <Form
            className="login-form"
            key={mode}
            onSubmit={handleSubmit}
          >


            {mode === "cadastro" && (

              <Input
                className="login-input"
                placeholder="Nome completo"
                value={nome}
                onChange={(e) =>
                  setNome(
                    e.target.value
                  )
                }
              />

            )}


            <Input
              className="login-input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />


            {/* ==================================================
                SENHA
            ================================================== */}

            <PasswordWrapper
              className="login-input"
            >

              <Input
                placeholder="Senha"
                type={
                  mostrarSenha
                    ? "text"
                    : "password"
                }
                value={senha}
                onChange={(e) =>
                  setSenha(
                    e.target.value
                  )
                }
                onFocus={() => {

                  if (
                    mode === "login"
                  ) {

                    setMostrarEsqueciSenha(
                      true
                    );

                  }

                }}
                onBlur={() => {

                  setTimeout(() => {

                    setMostrarEsqueciSenha(
                      false
                    );

                  }, 150);

                }}
                style={{
                  marginBottom: 0,
                }}
              />


              <EyeButton
                type="button"
                onClick={() =>
                  setMostrarSenha(
                    !mostrarSenha
                  )
                }
                aria-label={
                  mostrarSenha
                    ? "Ocultar senha"
                    : "Mostrar senha"
                }
              >

                {mostrarSenha
                  ? <FaEyeSlash />
                  : <FaEye />
                }

              </EyeButton>

            </PasswordWrapper>


            {/* ==================================================
                ESQUECI MINHA SENHA
            ================================================== */}

            {mode === "login" &&
              mostrarEsqueciSenha && (

                <ForgotPassword
                  type="button"
                  onMouseDown={(e) =>
                    e.preventDefault()
                  }
                  onClick={() => {

                    console.log(
                      "Esqueci minha senha"
                    );

                  }}
                >

                  Esqueci minha senha

                </ForgotPassword>

              )}


            {/* ==================================================
                CONFIRMAR SENHA
            ================================================== */}

            {mode === "cadastro" && (

              <PasswordWrapper
                className="login-input"
              >

                <Input
                  placeholder="Confirmar senha"
                  type={
                    mostrarConfirmarSenha
                      ? "text"
                      : "password"
                  }
                  value={
                    confirmarSenha
                  }
                  onChange={(e) =>
                    setConfirmarSenha(
                      e.target.value
                    )
                  }
                  style={{
                    marginBottom: 0,
                  }}
                />


                <EyeButton
                  type="button"
                  onClick={() =>
                    setMostrarConfirmarSenha(
                      !mostrarConfirmarSenha
                    )
                  }
                  aria-label={
                    mostrarConfirmarSenha
                      ? "Ocultar senha"
                      : "Mostrar senha"
                  }
                >

                  {mostrarConfirmarSenha
                    ? <FaEyeSlash />
                    : <FaEye />
                  }

                </EyeButton>

              </PasswordWrapper>

            )}


            {erro && (

              <p
                style={{
                  color: "red",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  margin: 0,
                }}
              >
                {erro}
              </p>

            )}


            <Button
              className="login-button"
              type="submit"
            >

              {mode === "login"
                ? "Entrar"
                : "Cadastrar"
              }

            </Button>


            {/* ==================================================
                LINK INFERIOR
            ================================================== */}

            <LinkText
              className="login-link"
              onClick={() =>
                changeMode(
                  mode === "login"
                    ? "cadastro"
                    : "login"
                )
              }
            >

              <LinkNormal>

                {mode === "login"
                  ? "Ainda não tem uma conta?"
                  : "Já tem uma conta?"
                }

              </LinkNormal>


              {" "}


              <LinkAction>

                {mode === "login"
                  ? "Faça cadastro"
                  : "Faça login"
                }

              </LinkAction>

            </LinkText>


          </Form>

        </RightSide>

      </Card>

    </Container>

  );

}