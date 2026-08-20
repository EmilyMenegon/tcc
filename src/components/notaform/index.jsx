import { useEffect, useState } from "react";

import {
    Overlay,
    Modal,
    Title,
    Label,
    Select,
    Input,
    Row,
    InputGroup,
    MediaBox,
    Buttons,
    CancelButton,
    SaveButton
} from "./style";


export default function NotaForm({
    visible,
    nota,
    onClose,
    onSave,
    onLoadAlunos
}) {


    const [alunos,setAlunos] = useState([]);

    const [idAluno,setIdAluno] = useState("");

    const [n1,setN1] = useState("");
    const [n2,setN2] = useState("");
    const [n3,setN3] = useState("");
    const [n4,setN4] = useState("");




    useEffect(()=>{


        if(visible){

            carregarAlunos();

        }


    },[visible]);




    async function carregarAlunos(){

        const data = await onLoadAlunos();

        setAlunos(data);

    }






    useEffect(()=>{


        if(nota){


            setN1(nota.n1 ?? "");

            setN2(nota.n2 ?? "");

            setN3(nota.n3 ?? "");

            setN4(nota.n4 ?? "");

            setIdAluno(nota.id_aluno);



        }else{


            setN1("");

            setN2("");

            setN3("");

            setN4("");

            setIdAluno("");

        }



    },[nota,visible]);







    function validarNota(valor){


        if(valor === "") return true;


        const numero = Number(valor);


        return numero >=0 && numero <=10;


    }







    function media(){


        if(n2 && n3){


            return (
                (
                    Number(n2)
                    +
                    Number(n3)
                ) / 2
            ).toFixed(1);


        }


        return "-";

    }







    function salvar(){


        if(

            !idAluno ||
            !n1 ||
            !n2 ||
            !n3 ||
            !n4

        ){

            return;

        }




        if(

            !validarNota(n1) ||
            !validarNota(n2) ||
            !validarNota(n3) ||
            !validarNota(n4)

        ){

            return;

        }




        onSave(

            Number(n1),

            Number(n2),

            Number(n3),

            Number(n4),

            Number(idAluno)

        );



        onClose();



    }







    if(!visible){

        return null;

    }






    return (

        <Overlay>


            <Modal>


                <Title>

                    {nota
                    ? "Editar Nota"
                    : "Nova Nota"}

                </Title>





                <Label>

                    Selecione o Poeta

                </Label>





                <Select

                    value={idAluno}

                    onChange={(e)=>setIdAluno(e.target.value)}

                >

                    <option value="">

                        Selecione...

                    </option>



                    {
                        alunos.map((aluno)=>(

                            <option
                                key={aluno.id}
                                value={aluno.id}
                            >

                                {aluno.nome}

                            </option>

                        ))
                    }


                </Select>






                <Row>


                    <InputGroup>

                        <Label>N1</Label>

                        <Input

                            value={n1}

                            onChange={(e)=>setN1(e.target.value)}

                            type="number"

                            min="0"

                            max="10"

                        />

                    </InputGroup>





                    <InputGroup>

                        <Label>N2</Label>

                        <Input

                            value={n2}

                            onChange={(e)=>setN2(e.target.value)}

                            type="number"

                            min="0"

                            max="10"

                        />

                    </InputGroup>





                    <InputGroup>

                        <Label>N3</Label>

                        <Input

                            value={n3}

                            onChange={(e)=>setN3(e.target.value)}

                            type="number"

                            min="0"

                            max="10"

                        />

                    </InputGroup>





                    <InputGroup>

                        <Label>N4</Label>

                        <Input

                            value={n4}

                            onChange={(e)=>setN4(e.target.value)}

                            type="number"

                            min="0"

                            max="10"

                        />

                    </InputGroup>


                </Row>






                <MediaBox>

                    Média: {media()}

                </MediaBox>







                <Buttons>


                    <CancelButton

                        onClick={onClose}

                    >

                        Cancelar

                    </CancelButton>





                    <SaveButton

                        onClick={salvar}

                    >

                        Salvar

                    </SaveButton>



                </Buttons>






            </Modal>


        </Overlay>

    );

}
