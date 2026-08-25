import { useState } from "react";
import Layoutadm from "../../../components/Layoutadm";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {
  Page,
  Content,
  Title,
  FilterContainer,
  FilterButton,
  TableContainer,
  Table,
  Actions,
  Modal,
  ModalBox,
  Input,
  Select,
  SaveButton,
  CancelButton,
  ModalOverlay,
  ModalButtons,
  ConfirmButton,
} from "./style";


export default function Inscricaoadm() {


  const [turno, setTurno] = useState("Manhã");


  const [alunos,setAlunos] = useState(

    [

      {
        id:1,
        nome:"João Silva",
        nascimento:"15/05/2007",
        curso:"Linguagens",
        turno:"Manhã"
      },


      {
        id:2,
        nome:"Maria Souza",
        nascimento:"20/11/2006",
        curso:"Administração",
        turno:"Tarde"
      },


      {
        id:3,
        nome:"Pedro Santos",
        nascimento:"02/03/2008",
        curso:"Logística",
        turno:"Noite"
      },


      {
        id:4,
        nome:"Ana Lima",
        nascimento:"12/07/2007",
        curso:"Informática",
        turno:"Manhã"
      }

    ]

  );



  const [alunoEditando,setAlunoEditando] = useState(null);

  const [alunoExcluir, setAlunoExcluir] = useState(null);

  // CONFIRMAÇÃO DA EXCLUSÃO
  const [confirmacaoExclusao, setConfirmacaoExclusao] = useState("");



  function excluirAluno() {

    // Só permite excluir se tiver digitado "excluir"
    if (confirmacaoExclusao !== "excluir") {
      return;
    }

    const novos = alunos.filter(
      aluno => aluno.id !== alunoExcluir.id
    );

    setAlunos(novos);

    localStorage.setItem(
      "alunos",
      JSON.stringify(novos)
    );

    setAlunoExcluir(null);

    // Limpa o campo de confirmação
    setConfirmacaoExclusao("");
  }


  function salvarEdicao(){


    const novos = alunos.map(aluno=>

      aluno.id === alunoEditando.id

      ?

      alunoEditando

      :

      aluno

    );



    setAlunos(novos);



    localStorage.setItem(
      "alunos",
      JSON.stringify(novos)
    );



    setAlunoEditando(null);

  }





  const alunosFiltrados = alunos.filter(

    aluno=>aluno.turno === turno

  );





return (


<Page>


<Layoutadm/>



<Content>


<Title>
Inscrições dos Alunos
</Title>




<FilterContainer>


{
["Manhã","Tarde","Noite"].map(item=>(

<FilterButton

key={item}

$active={turno===item}

onClick={()=>setTurno(item)}

>

{item}

</FilterButton>

))
}


</FilterContainer>





<TableContainer>


<Table>

<thead>

<tr>

<th>Nome</th>

<th>Nascimento</th>

<th>Curso</th>

<th>Turno</th>

<th>Ações</th>

</tr>

</thead>




<tbody>


{
alunosFiltrados.map(aluno=>(


<tr key={aluno.id}>


<td>
{aluno.nome}
</td>


<td>
{aluno.nascimento}
</td>


<td>
{aluno.curso}
</td>


<td>
{aluno.turno}
</td>



<td>


<Actions>


<FiEdit

onClick={()=>setAlunoEditando(aluno)}

/>



<FiTrash2
  onClick={() => {
    setAlunoExcluir(aluno);
    setConfirmacaoExclusao("");
  }}
/>


</Actions>



</td>



</tr>


))

}



</tbody>


</Table>


</TableContainer>





</Content>







{
alunoEditando &&

<ModalOverlay>
<Modal>



<h2>
Editar aluno
</h2>




<Input

value={alunoEditando.nome}

onChange={(e)=>

setAlunoEditando({

...alunoEditando,

nome:e.target.value

})

}

/>



<Input

value={alunoEditando.nascimento}

onChange={(e)=>

setAlunoEditando({

...alunoEditando,

nascimento:e.target.value

})

}

/>





<Input

value={alunoEditando.curso}

onChange={(e)=>

setAlunoEditando({

...alunoEditando,

curso:e.target.value

})

}

/>





<Select

value={alunoEditando.turno}

onChange={(e)=>

setAlunoEditando({

...alunoEditando,

turno:e.target.value

})

}

>

<option>
Manhã
</option>

<option>
Tarde
</option>

<option>
Noite
</option>


</Select>




<ModalButtons>


<CancelButton

onClick={()=>setAlunoEditando(null)}

>

Cancelar

</CancelButton>




<SaveButton

onClick={salvarEdicao}

>

Salvar

</SaveButton>



</ModalButtons>








</Modal>
</ModalOverlay>


}



{/* CONFIRMAÇÃO DE EXCLUSÃO */}

{alunoExcluir && (

  <ModalOverlay>

    <Modal>

      <h2>
        Excluir aluno
      </h2>


      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "5px",
        }}
      >
        Tem certeza que deseja excluir{" "}
        <strong>{alunoExcluir.nome}</strong>?
      </p>


      <p
        style={{
          textAlign: "center",
          color: "#666",
          fontSize: "14px",
          marginBottom: "5px",
        }}
      >
        Para confirmar, digite{" "}
        <strong>excluir</strong> abaixo:
      </p>


      <Input

        type="text"

        placeholder="Digite excluir"

        value={confirmacaoExclusao}

        onChange={(e) =>
          setConfirmacaoExclusao(e.target.value)
        }

      />


      <ModalButtons>


        <CancelButton

          onClick={() => {
            setAlunoExcluir(null);
            setConfirmacaoExclusao("");
          }}

        >

          Cancelar

        </CancelButton>



        <ConfirmButton

          onClick={excluirAluno}

          disabled={confirmacaoExclusao !== "excluir"}

        >

          Excluir

        </ConfirmButton>


      </ModalButtons>


    </Modal>

  </ModalOverlay>

)}



</Page>

);

}