import { FaEdit, FaTrash } from "react-icons/fa";


import {
    Card,
    Content,
    Nome,
    Info,
    Actions,
    EditButton,
    DeleteButton
} from "./style";


export default function AlunoCard({
    aluno,
    onEdit,
    onDelete
}) {


    return (

        <Card>


            <Content>


                <Nome>

                    {aluno.nome}

                </Nome>




                <Info>

                    Turma: {aluno.celular}

                </Info>



            </Content>





            <Actions>


                <EditButton

                    onClick={() => onEdit(aluno)}

                >

                    <FaEdit/>

                </EditButton>





                <DeleteButton

                    onClick={() => onDelete(aluno.id)}

                >

                    <FaTrash/>

                </DeleteButton>



            </Actions>




        </Card>

    );

}
