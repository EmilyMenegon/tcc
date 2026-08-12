import { useState, useRef } from "react";
import Layoutadm from "../../../components/Layoutadm";
import { FiPlus, FiX, FiTrash2 } from "react-icons/fi";

import {
  Page,
  Content,
  Header,
  Title,
  Gallery,
  Card,
  Image,
  FloatingButton,
  Modal,
  ModalImage,
  CloseButton,
  DeleteButton,
} from "./style";


export default function Galeriaadm() {


  const [imagemSelecionada, setImagemSelecionada] = useState(null);


 const [fotos, setFotos] = useState([]);


  const fileInputRef = useRef(null);



  const abrirGaleria = () => {

    fileInputRef.current.click();

  };





  const adicionarImagem = (e) => {


    const arquivos = Array.from(e.target.files);


    if(!arquivos.length) return;



    const novasFotos = arquivos.map((arquivo,index)=>({

      id:Date.now()+index,

      nome:arquivo.name,

      imagem:URL.createObjectURL(arquivo),

    }));



    setFotos((prev)=>[

      ...prev,

      ...novasFotos

    ]);



    // permite selecionar a mesma imagem novamente

    e.target.value = "";

  };





  const removerImagem = (id)=>{


    setFotos((prev)=>

      prev.filter((foto)=>

        foto.id !== id

      )

    );


  };





  return (

    <Page>


      <Layoutadm />



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
                onClick={()=>
                  setImagemSelecionada(foto.imagem)
                }
              >

                <img
                  src={foto.imagem}
                  alt={foto.nome}
                />


              </Image>



              <DeleteButton
                onClick={()=>
                  removerImagem(foto.id)
                }
              >

                <FiTrash2 />

              </DeleteButton>



            </Card>


          ))}


        </Gallery>


      </Content>





      <FloatingButton
        onClick={abrirGaleria}
      >

        <FiPlus size={30}/>

      </FloatingButton>





      <input

        type="file"

        accept="image/*"

        multiple

        ref={fileInputRef}

        hidden

        onChange={adicionarImagem}

      />







      {imagemSelecionada && (


        <Modal
          onClick={()=>
            setImagemSelecionada(null)
          }
        >


          <CloseButton>

            <FiX size={35}/>

          </CloseButton>




          <ModalImage

            src={imagemSelecionada}

            onClick={(e)=>
              e.stopPropagation()
            }

          />



        </Modal>


      )}



    </Page>

  );

}