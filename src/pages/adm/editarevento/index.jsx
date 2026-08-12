import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layoutadm from "../../../components/Layoutadm";

import {
  Page,
  Container,
  Card,
  Title,
  Input,
  TextArea,
  Label,
  ButtonGroup,
  CancelButton,
  SaveButton
} from "./style";


export default function EditarEvento(){


  const { id } = useParams();

  const navigate = useNavigate();



  const eventosSalvos =
    JSON.parse(localStorage.getItem("eventos")) || [];



  const eventoAtual =
    eventosSalvos.find(
      (evento)=>evento.id === Number(id)
    );



  const [nome,setNome] =
    useState(eventoAtual?.nome || "");


  const [descricao,setDescricao] =
    useState(eventoAtual?.descricao || "");


  const [data,setData] =
    useState(eventoAtual?.data || "");


  const [horario,setHorario] =
    useState(eventoAtual?.horario || "");


  const [local,setLocal] =
    useState(eventoAtual?.local || "");





  function salvarAlteracoes(){


    const novosEventos =
      eventosSalvos.map((evento)=>{


        if(evento.id === Number(id)){


          return {

            ...evento,

            nome,

            descricao,

            data,

            horario,

            local

          };

        }


        return evento;


      });





    localStorage.setItem(
      "eventos",
      JSON.stringify(novosEventos)
    );



    navigate("/adm/eventos");

  }





  return (

    <Page>


      <Layoutadm/>


      <Container>


        <Card>


          <Title>
            Editar Evento
          </Title>



          <Label>
            Nome do evento
          </Label>


          <Input

            value={nome}

            onChange={(e)=>
              setNome(e.target.value)
            }

          />




          <Label>
            Descrição
          </Label>


          <TextArea

            rows={5}

            value={descricao}

            onChange={(e)=>
              setDescricao(e.target.value)
            }

          />




          <Label>
            Data
          </Label>


          <Input

            type="date"

            value={data}

            onChange={(e)=>
              setData(e.target.value)
            }

          />





          <Label>
            Horário
          </Label>


          <Input

            type="time"

            value={horario}

            onChange={(e)=>
              setHorario(e.target.value)
            }

          />





          <Label>
            Local
          </Label>


          <Input

            value={local}

            onChange={(e)=>
              setLocal(e.target.value)
            }

          />





          <ButtonGroup>


            <CancelButton

              onClick={()=>
                navigate("/adm/eventos")
              }

            >

              Cancelar

            </CancelButton>




            <SaveButton

              onClick={salvarAlteracoes}

            >

              Salvar Alterações

            </SaveButton>


          </ButtonGroup>



        </Card>


      </Container>


    </Page>

  );


}