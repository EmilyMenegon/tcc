import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { gsap } from "gsap";

import {
  Header,
  Navbar,
  NavCenter,
  NavItem,
  ProfileIcon,
  ProfilePhoto,
  MenuButton,
} from "./style";

import { FaUser } from "react-icons/fa";
import { getUsuarioLogado } from "../../utils/auth";

export default function Layoutadm() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [foto, setFoto] = useState(null);

  const headerRef = useRef(null);
  const navRef = useRef(null);
  const indicatorRef = useRef(null);
  const hoveredItemRef = useRef(null);

  const links = [
    {
      label: "Início",
      path: "/adm/inicioadm",
    },
    {
      label: "Inscrições",
      path: "/adm/inscricaoadm",
    },
    {
      label: "Eventos",
      path: "/adm/eventos",
    },
    {
      label: "Mural",
      path: "/adm/muraladm",
    },
    {
      label: "Galeria",
      path: "/adm/galeriaadm",
    },
  ];

  /* =====================================================
     CARREGA FOTO DO USUÁRIO
  ===================================================== */

  useLayoutEffect(() => {
    const usuarioLogado = getUsuarioLogado();

    if (!usuarioLogado?.email) return;

    fetch(
      `http://localhost:3001/perfil/${usuarioLogado.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.foto) {
          setFoto(data.foto);
        }
      })
      .catch(() => {});
  }, []);

  /* =====================================================
     PEGA ITEM ATIVO
  ===================================================== */

  const getActiveItem = useCallback(() => {
    return navRef.current?.querySelector(".active");
  }, []);

  /* =====================================================
     MOVE INDICADOR PRETO
  ===================================================== */

  const moveIndicator = useCallback(
    (element, duration = 0.55) => {
      if (
        !element ||
        !navRef.current ||
        !indicatorRef.current
      ) {
        return;
      }

      const navRect =
        navRef.current.getBoundingClientRect();

      const itemRect =
        element.getBoundingClientRect();

      const x =
        itemRect.left -
        navRect.left;

      const y =
        itemRect.top -
        navRect.top;

      gsap.to(indicatorRef.current, {
        x,
        y,

        width: itemRect.width,

        height: itemRect.height,

        opacity: 1,

        duration,

        ease: "power3.out",

        overwrite: true,
      });
    },
    []
  );

  /* =====================================================
     RESET ITEM
  ===================================================== */

  const resetItemColor = useCallback(
    (item) => {
      if (!item) return;

      const isActive =
        item.classList.contains("active");

      gsap.to(item, {
        color: isActive
          ? "#fff"
          : "#111",

        scale: 1,

        duration: 0.2,

        ease: "power2.out",

        overwrite: true,
      });
    },
    []
  );

  /* =====================================================
     HOVER
  ===================================================== */

  const activateHover = useCallback(
    (item) => {
      if (
        !item ||
        window.innerWidth <= 700
      ) {
        return;
      }

      const previous =
        hoveredItemRef.current;

      if (
        previous &&
        previous !== item
      ) {
        resetItemColor(previous);
      }

      hoveredItemRef.current = item;

      moveIndicator(item);

      gsap.to(item, {
        color: "#fff",

        scale: 1.04,

        duration: 0.2,

        ease: "power2.out",

        overwrite: true,
      });
    },
    [
      moveIndicator,
      resetItemColor,
    ]
  );

  /* =====================================================
     RETORNA AO ITEM ATIVO
  ===================================================== */

  const returnToActive = useCallback(() => {
    if (window.innerWidth <= 700) {
      return;
    }

    const hovered =
      hoveredItemRef.current;

    if (hovered) {
      gsap.to(hovered, {
        color: "#111",

        scale: 1,

        duration: 0.2,

        ease: "power2.out",

        overwrite: true,
      });
    }

    hoveredItemRef.current = null;

    const active = getActiveItem();

    if (active) {
      moveIndicator(active);

      gsap.to(active, {
        color: "#fff",

        scale: 1,

        duration: 0.3,

        ease: "power2.out",

        overwrite: true,
      });
    }
  }, [
    getActiveItem,
    moveIndicator,
  ]);

  /* =====================================================
     ANIMAÇÃO INICIAL
  ===================================================== */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const active = getActiveItem();

      if (
        !active ||
        !indicatorRef.current ||
        !navRef.current
      ) {
        return;
      }

      const navRect =
        navRef.current.getBoundingClientRect();

      const itemRect =
        active.getBoundingClientRect();

      const x =
        itemRect.left -
        navRect.left;

      const y =
        itemRect.top -
        navRect.top;

      gsap.set(indicatorRef.current, {
        x,
        y,

        width: itemRect.width,

        height: itemRect.height,

        opacity: 1,

        backgroundColor: "#111",

        scale: 0.85,
      });

      gsap.to(indicatorRef.current, {
        scale: 1,

        duration: 0.5,

        ease: "back.out(1.7)",

        overwrite: true,
      });

      gsap.set(active, {
        color: "#fff",
      });
    }, headerRef);

    return () => ctx.revert();
  }, [getActiveItem]);

  /* =====================================================
     RESPONSIVIDADE
  ===================================================== */

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!hoveredItemRef.current) {
        const active = getActiveItem();

        if (active) {
          moveIndicator(active, 0);
        }
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, [
    getActiveItem,
    moveIndicator,
  ]);

  /* =====================================================
     MOUSE ENTER
  ===================================================== */

  const handleMouseEnter = (event) => {
    activateHover(event.currentTarget);
  };

  /* =====================================================
     MOUSE LEAVE ITEM
  ===================================================== */

  const handleMouseLeave = (event) => {
    const item = event.currentTarget;

    if (
      hoveredItemRef.current === item
    ) {
      gsap.to(item, {
        color: "#111",

        scale: 1,

        duration: 0.2,

        ease: "power2.out",

        overwrite: true,
      });

      hoveredItemRef.current = null;

      const active = getActiveItem();

      if (active) {
        moveIndicator(active);

        gsap.to(active, {
          color: "#fff",

          scale: 1,

          duration: 0.25,

          ease: "power2.out",

          overwrite: true,
        });
      }
    }
  };

  /* =====================================================
     MOUSE LEAVE NAVBAR
  ===================================================== */

  const handleNavMouseLeave = () => {
    returnToActive();
  };

  /* =====================================================
     FECHA MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <Header ref={headerRef}>

      {/* =================================================
          PERFIL
      ================================================= */}

      <ProfileIcon
        to="/adm/profileadm"
        $comFoto={!!foto}
        aria-label="Meu perfil"
      >
        {foto ? (
          <ProfilePhoto
            src={foto}
            alt="Foto de perfil"
          />
        ) : (
          <FaUser />
        )}
      </ProfileIcon>


      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar>

        <NavCenter
          ref={navRef}
          $open={menuOpen}
          onMouseLeave={handleNavMouseLeave}
        >

          {/* INDICADOR PRETO */}

          <span ref={indicatorRef} />


          {/* LINKS */}

          {links.map((link) => (
            <NavItem
              key={link.path}
              to={link.path}
              className="nav-item"
              onClick={closeMenu}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {link.label}
            </NavItem>
          ))}

        </NavCenter>


        {/* =================================================
            BOTÃO MOBILE
        ================================================= */}

        <MenuButton
          type="button"
          onClick={() =>
            setMenuOpen(
              (prev) => !prev
            )
          }
          aria-label={
            menuOpen
              ? "Fechar menu"
              : "Abrir menu"
          }
          aria-expanded={menuOpen}
          $open={menuOpen}
        >
          <span />
          <span />
          <span />
        </MenuButton>

      </Navbar>

    </Header>
  );
}