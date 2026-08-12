import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layoutadm from "../../../components/Layoutadm";

import {
  FiEdit,
  FiTrash2,
  FiPlus,
  FiCalendar,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Cards,
  Card,
  Image,
  Info,
  EventName,
  Description,
  InfoItem,
  Button,
  Actions,
  FloatingButton,
} from "./style";


export default function Eventos() {


  const navigate = useNavigate();


  const [eventos, setEventos] = useState(
    JSON.parse(localStorage.getItem("eventos")) || []
  );



  function excluirEvento(id){


    const novosEventos = eventos.filter(
      (evento)=>evento.id !== id
    );


    setEventos(novosEventos);


    localStorage.setItem(
      "eventos",
      JSON.stringify(novosEventos)
    );

  }





  return (

    <Page>

      <Layoutadm />


      <Content>


        <Header>

          <Title>
            Eventos
          </Title>

        </Header>





        <Cards>


          {
          eventos.length === 0 ? (

            <p>
              Nenhum evento cadastrado.
            </p>

          )

          :

          (

          eventos.map((evento)=>(


            <Card key={evento.id}>


              <Image>

                <img
                  src={evento.imagem}
                  alt={evento.nome}
                />

              </Image>





              <Info>


                <EventName>
                  {evento.nome}
                </EventName>





                <Description>
                  {evento.descricao}
                </Description>





                <InfoItem>

                  <FiCalendar/>

                  {evento.data}

                </InfoItem>





                <InfoItem>

                  <FiClock/>

                  {evento.horario}

                </InfoItem>





                <InfoItem>

                  <FiMapPin/>

                  {evento.local}

                </InfoItem>







                <Button

                  onClick={()=>
                    navigate(`/adm/acessarevento/${evento.id}`)
                  }

                >

                  Acessar Evento

                </Button>







                <Actions>



                  <FiEdit

                    size={20}

                    onClick={()=>
                     navigate(`/adm/editarevento/${evento.id}`)
                    }

                  />






                  <FiTrash2

                    size={20}

                    onClick={()=>
                      excluirEvento(evento.id)
                    }

                  />



                </Actions>




              </Info>



            </Card>


          ))

          )

          }



        </Cards>




      </Content>







      <FloatingButton

        onClick={()=>
          navigate("/adm/addeventos")
        }

      >

        <FiPlus size={30}/>


      </FloatingButton>





    </Page>

  );

}