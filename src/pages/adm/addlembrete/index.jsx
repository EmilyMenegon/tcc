import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout";

import {
  Page,
  Container,
  Card,
  Title,
  Label,
  Input,
  TextArea,
  ButtonGroup,
  CancelButton,
  SaveButton,
} from "./style";

export default function AddLembrete() {
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [descricao, setDescricao] = useState("");

  function salvarLembrete() {
    const lembrete = {
      titulo,
      data,
      hora,
      descricao,
    };

    console.log(lembrete);

    navigate("/adm/mural");
  }

  return (
    <Page>

      <Container>
        <Card>

          <Title>Novo Lembrete</Title>

          <Label>Título</Label>

          <Input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          <Label>Data</Label>

          <Input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          <Label>Horário</Label>

          <Input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />

          <Label>Descrição</Label>

          <TextArea
            rows={6}
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
<ButtonGroup>
            <CancelButton
    type="button"
    onClick={() => navigate("/adm/mural")}
  >
    Cancelar
  </CancelButton>

          <SaveButton
    type="button"
    onClick={salvarLembrete}
  >
    Salvar Lembrete
  </SaveButton>
          </ButtonGroup>

        </Card>
      </Container>

    </Page>
  );
}