import { FaEdit, FaTrash } from "react-icons/fa";

import {
    Card,
    Content,
    Aluno,
    Notas,
    NotaItem,
    Label,
    Valor,
    Media,
    Actions,
    EditButton,
    DeleteButton
} from "./style";


export default function NotaCard({
    nota,
    onEdit,
    onDelete
}) {


    const aprovado = (nota.media ?? 0) >= 7;



    return (

        <Card>


            <Content>


                <Aluno>

                    {nota.nome_aluno || "Poeta não encontrado"}

                </Aluno>




                <Notas>


                    <NotaItem>

                        <Label>N1</Label>

                        <Valor>

                            {nota.n1?.toFixed(1) ?? "-"}

                        </Valor>

                    </NotaItem>




                    <NotaItem>

                        <Label>N2</Label>

                        <Valor>

                            {nota.n2?.toFixed(1) ?? "-"}

                        </Valor>

                    </NotaItem>





                    <NotaItem>

                        <Label>N3</Label>

                        <Valor>

                            {nota.n3?.toFixed(1) ?? "-"}

                        </Valor>

                    </NotaItem>





                    <NotaItem>

                        <Label>N4</Label>

                        <Valor>

                            {nota.n4?.toFixed(1) ?? "-"}

                        </Valor>

                    </NotaItem>





                    <NotaItem>

                        <Label>Média</Label>

                        <Media aprovado={aprovado}>

                            {nota.media?.toFixed(1) ?? "-"}

                        </Media>

                    </NotaItem>



                </Notas>



            </Content>







            <Actions>


                <EditButton

                    onClick={()=>onEdit(nota)}

                >

                       <FaEdit/>

                </EditButton>





                <DeleteButton

                    onClick={()=>onDelete(nota.id)}

                >

                     <FaTrash/>

                </DeleteButton>



            </Actions>




        </Card>

    );

}
