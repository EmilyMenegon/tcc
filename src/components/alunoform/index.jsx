import { useEffect, useState } from "react";

import {
    Overlay,
    Modal,
    Title,
    Input,
    Buttons,
    CancelButton,
    SaveButton
} from "./style";


export default function AlunoForm({
    visible,
    aluno,
    onClose,
    onSave
}) {


    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [celular,setCelular] = useState("");




    useEffect(()=>{


        if(aluno){

            setNome(aluno.nome);
            setEmail(aluno.email);
            setCelular(aluno.celular);

        }else{

            setNome("");
            setEmail("");
            setCelular("");

        }


    },[aluno,visible]);







    function handleSave(){


        if(
            nome.trim() &&
            email.trim() &&
            celular.trim()
        ){


            onSave(
                nome.trim(),
                email.trim(),
                celular.trim()
            );


            onClose();


        }


    }








    if(!visible){

        return null;

    }







    return (

        <Overlay>


            <Modal>


                <Title>

                    {aluno 
                        ? "Editar Poeta"
                        : "Novo Poeta"
                    }

                </Title>





                <Input

                    placeholder="Nome"

                    value={nome}

                    onChange={(e)=>setNome(e.target.value)}

                />





                <Input

                    placeholder="RM"

                    value={email}

                    onChange={(e)=>setEmail(e.target.value)}

                />





                <Input

                    placeholder="Turma"

                    value={celular}

                    onChange={(e)=>setCelular(e.target.value)}

                />







                <Buttons>


                    <CancelButton

                        onClick={onClose}

                    >

                        Cancelar

                    </CancelButton>





                    <SaveButton

                        onClick={handleSave}

                    >

                        Salvar

                    </SaveButton>



                </Buttons>





            </Modal>


        </Overlay>

    );

}
