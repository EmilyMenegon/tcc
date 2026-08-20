import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
    getAllAlunos,
    createAluno,
    updateAluno,
    deleteAluno,
    searchAlunos
} from "../../database/database";

import AlunoCard from "../../components/AlunoCard";
import AlunoForm from "../../components/AlunoForm";
import EmptyState from "../../components/EmptyState";

import {
    List,
    Fab,
    Overlay,
    Modal,
    ModalTitle,
    ModalText,
    Buttons,
    CancelButton,
    DeleteButton
} from "./style";


export default function Poetas({ search }) {


    const [alunos, setAlunos] = useState([]);

    const [formVisible, setFormVisible] = useState(false);

    const [editingAluno, setEditingAluno] = useState(null);

    const [deleteModal, setDeleteModal] = useState(false);

    const [idDelete, setIdDelete] = useState(null);



    const loadAlunos = useCallback(async()=>{

        let result;


        if(search && search.trim()){

            result = await searchAlunos(search);

        }else{

            result = await getAllAlunos();

        }


        setAlunos(result);


    },[search]);



    useEffect(()=>{

        loadAlunos();

    },[loadAlunos]);





    async function handleSave(nome,email,celular){


        if(editingAluno){

            await updateAluno(
                editingAluno.id,
                nome,
                email,
                celular
            );


        }else{


            await createAluno(
                nome,
                email,
                celular
            );

        }


        setEditingAluno(null);

        await loadAlunos();

    }





    function handleEdit(aluno){

        setEditingAluno(aluno);

        setFormVisible(true);

    }





    function handleDelete(id){

        setIdDelete(id);

        setDeleteModal(true);

    }





    async function confirmDelete(){


        if(idDelete){

            await deleteAluno(idDelete);

            await loadAlunos();

        }


        setDeleteModal(false);

        setIdDelete(null);

    }





    function closeForm(){

        setFormVisible(false);

        setEditingAluno(null);

    }





    return (

        <>


            <List>


                {
                    alunos.length === 0 ?


                    <EmptyState
                        message="Nenhum poeta cadastrado"
                    />


                    :


                    alunos.map((aluno)=>(


                        <AlunoCard

                            key={aluno.id}

                            aluno={aluno}

                            onEdit={handleEdit}

                            onDelete={handleDelete}

                        />


                    ))

                }


            </List>





            <Fab

                onClick={()=>setFormVisible(true)}

            >

                  <FaPlus />


            </Fab>







            <AlunoForm

                visible={formVisible}

                aluno={editingAluno}

                onClose={closeForm}

                onSave={handleSave}

            />









            {
                deleteModal && (


                    <Overlay>


                        <Modal>


                            <ModalTitle>

                                Confirmar Exclusão

                            </ModalTitle>



                            <ModalText>

                                Tem certeza que deseja excluir este poeta?
                                Todas as notas relacionadas também serão excluídas.

                            </ModalText>



                            <Buttons>


                                <CancelButton

                                    onClick={()=>setDeleteModal(false)}

                                >

                                    Cancelar

                                </CancelButton>





                                <DeleteButton

                                    onClick={confirmDelete}

                                >

                                    Excluir

                                </DeleteButton>



                            </Buttons>


                        </Modal>


                    </Overlay>


                )
            }




        </>

    );

}
