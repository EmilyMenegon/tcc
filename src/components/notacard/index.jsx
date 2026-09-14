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


    // usa a nota final (média das 3 válidas menos o desconto de tempo)
    // e cai pra "media" se por algum motivo "resultado" não existir
    const notaFinal =
        nota.resultado ??
        nota.media ??
        0;


    const aprovado = notaFinal >= 7;



    return (

        <Card>


            <Content>


                <Aluno>

                    {nota.nomeAluno || "Poeta não encontrado"}

                </Aluno>


                {nota.eventoNome && (

                    <NotaItem>

                        <Label>Evento</Label>

                        <Valor>

                            {nota.eventoNome}

                        </Valor>

                    </NotaItem>

                )}




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

                        <Label>N5</Label>

                        <Valor>

                            {nota.n5?.toFixed(1) ?? "-"}

                        </Valor>

                    </NotaItem>




                    {nota.desconto > 0 && (

                        <NotaItem>

                            <Label>Desconto</Label>

                            <Valor>

                                -{nota.desconto.toFixed(1)}

                            </Valor>

                        </NotaItem>

                    )}




                    <NotaItem>

                        <Label>Nota final</Label>

                        <Media aprovado={aprovado}>

                            {notaFinal.toFixed(1)}

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