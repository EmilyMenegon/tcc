import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { useNavigate } from "react-router-dom";

import { gsap } from "gsap";

import { FaHome } from "react-icons/fa";

import {
  Container,
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
  HomeButton,
} from "./style";


export default function Login() {

  const [mode, setMode] = useState("cadastro");

  const navigate = useNavigate();

  const pageRef = useRef(null);


  /* ============================================================
     ANIMAÇÃO INICIAL
  ============================================================ */

  useLayoutEffect(() => {

    const page = pageRef.current;

    if (!page) return;


    const ctx = gsap.context(() => {

      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });


      /* ========================================================
         ESTADO INICIAL
      ======================================================== */

      gsap.set(".login-card", {
        opacity: 0,
        y: 35,
        scale: 0.97,
      });


      gsap.set(".login-home", {
        opacity: 0,
        scale: 0.7,
        rotation: -15,
      });


      gsap.set(".login-logo", {
        opacity: 0,
        y: 20,
        scale: 0.9,
      });


      gsap.set(".login-welcome", {
        opacity: 0,
        y: 20,
      });


      gsap.set(".login-tabs", {
        opacity: 0,
        y: 15,
      });


      gsap.set(".login-input", {
        opacity: 0,
        y: 15,
      });


      gsap.set(".login-button", {
        opacity: 0,
        y: 15,
        scale: 0.97,
      });


      gsap.set(".login-link", {
        opacity: 0,
        y: 10,
      });


      /* ========================================================
         TIMELINE
      ======================================================== */

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
     TROCAR ENTRE LOGIN / CADASTRO
  ============================================================ */

  function changeMode(newMode) {

    if (newMode === mode) return;


    const form = pageRef.current?.querySelector(
      ".login-form"
    );


    if (!form) {

      setMode(newMode);

      return;

    }


    gsap.killTweensOf(form);


    gsap.to(form, {

      opacity: 0,

      x: newMode === "login"
        ? 25
        : -25,

      duration: 0.2,

      ease: "power2.in",

      onComplete: () => {

        setMode(newMode);

      },

    });

  }


  /* ============================================================
     ANIMAÇÃO DO FORM APÓS TROCA
  ============================================================ */

  useLayoutEffect(() => {

    const form = pageRef.current?.querySelector(
      ".login-form"
    );


    if (!form) return;


    const ctx = gsap.context(() => {

      gsap.fromTo(
        form,

        {
          opacity: 0,
          x: mode === "login" ? -25 : 25,
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

  function handleSubmit(e) {

    e.preventDefault();


    if (mode === "cadastro") {

      navigate("/navegacao");

    } else {

      console.log("Login");

    }

  }


  /* ============================================================
     RENDER
  ============================================================ */

  return (

    <Container ref={pageRef}>


      {/* ======================================================
          BOTÃO HOME
      ====================================================== */}

      <HomeButton
        className="login-home"
        onClick={() => navigate("/")}
        aria-label="Voltar para a página inicial"
      >

        <FaHome />

      </HomeButton>


      {/* ======================================================
          CARD
      ====================================================== */}

      <Card className="login-card">


        {/* ====================================================
            LADO ESQUERDO
        ==================================================== */}

        <LeftSide>


          <LogoImage className="login-logo">

            <img
              src="/logo.png"
              alt="Logo Slam Etecamp"
            />

          </LogoImage>


          <Welcome className="login-welcome">

            Bem-vindo!

          </Welcome>


        </LeftSide>


        {/* ====================================================
            LADO DIREITO
        ==================================================== */}

        <RightSide>


          {/* ==================================================
              TABS
          ================================================== */}

          <Tabs className="login-tabs">


            <Tab
              $active={mode === "login"}
              onClick={() => changeMode("login")}
            >

              Login

            </Tab>


            <Tab
              $active={mode === "cadastro"}
              onClick={() => changeMode("cadastro")}
            >

              Cadastro

            </Tab>


          </Tabs>


          {/* ==================================================
              FORM
          ================================================== */}

          <Form
            className="login-form"
            key={mode}
            onSubmit={handleSubmit}
          >


            {mode === "cadastro" && (

              <Input
                className="login-input"
                placeholder="Nome completo"
              />

            )}


            <Input
              className="login-input"
              placeholder="Email"
              type="email"
            />


            <Input
              className="login-input"
              placeholder="Senha"
              type="password"
            />


            {mode === "cadastro" && (

              <Input
                className="login-input"
                placeholder="Confirmar senha"
                type="password"
              />

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

              {mode === "login"
                ? "Ainda não tem uma conta? Faça cadastro"
                : "Já tem uma conta? Faça login"
              }

            </LinkText>


          </Form>


        </RightSide>


      </Card>


    </Container>

  );

}