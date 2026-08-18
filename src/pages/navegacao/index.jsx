import React from "react";
import { Link } from "react-router-dom";
import { Container, NavMenu, NavButton } from "./style";

export default function navegacao() {
  return (
    <Container>
      <NavMenu>
        <NavButton as={Link} to="/login">
          voltar
        </NavButton>

        <NavButton as={Link} to="/usuario/home">
          usuario
        </NavButton>

        <NavButton as={Link} to="/adm/inicioadm">
          adiministrador
        </NavButton>

        <NavButton as={Link} to="/mat">
          matemático
        </NavButton>
      </NavMenu>
    </Container>
  );
}