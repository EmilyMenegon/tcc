import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../../components/Layout";
import { FiPlus, FiX } from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Gallery,
  Card,
  Image,
  Modal,
  ModalImage,
  CloseButton,
} from "./style";


export default function Galeria(){

  const navigate = useNavigate();

  const [imagemSelecionada,setImagemSelecionada] = useState(null);


  const fotos = [
    
  ];


  return(

    <Page>

      <Layout />

      <Content>

        <Header>

          <Title>
            Galeria
          </Title>

        </Header>


        <Gallery>

          {fotos.map((foto)=>(

            <Card key={foto.id}>


              <Image
                onClick={()=>setImagemSelecionada(foto.imagem)}
              >

                <img
                  src={foto.imagem}
                  alt={foto.nome}
                />

              </Image>


            </Card>

          ))}

        </Gallery>


      </Content>


      {imagemSelecionada && (

        <Modal onClick={()=>setImagemSelecionada(null)}>


          <CloseButton>

            <FiX size={35}/>

          </CloseButton>


          <ModalImage
            src={imagemSelecionada}
            onClick={(e)=>e.stopPropagation()}
          />


        </Modal>

      )}


    </Page>

  )

}