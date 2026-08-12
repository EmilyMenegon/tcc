import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import {
    getAllNotas,
    getAllAlunos,
    createNota,
    updateNota,
    deleteNota
} from "../../database/database";

import NotaCard from "../../components/NotaCard";
import NotaForm from "../../components/NotaForm";
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


export default function Notas() {


    const [notas, setNotas] = useState([]);

    const [formVisible, setFormVisible] = useState(false);

    const [editingNota, setEditingNota] = useState(null);

    const [deleteModal, setDeleteModal] = useState(false);

    const [idDelete, setIdDelete] = useState(null);





    const loadNotas = useCallback(async()=>{


        const result = await getAllNotas();

        setNotas(result);


    },[]);





    useEffect(()=>{


        loadNotas();


    },[loadNotas]);








    async function loadAlunos(){


        return await getAllAlunos();


    }








    async function handleSave(
        n1,
        n2,
        n3,
        n4,
        id_aluno
    ){



        if(editingNota){


            await updateNota(

                editingNota.id,

                n1,

                n2,

                n3,

                n4,

                id_aluno

            );


        }else{


            await createNota(

                n1,

                n2,

                n3,

                n4,

                id_aluno

            );


        }



        setEditingNota(null);


        await loadNotas();


    }








    function handleEdit(nota){


        setEditingNota(nota);


        setFormVisible(true);


    }








    function handleDelete(id){


        setIdDelete(id);


        setDeleteModal(true);


    }








    async function confirmDelete(){


        if(idDelete){


            await deleteNota(idDelete);


            await loadNotas();


        }



        setDeleteModal(false);


        setIdDelete(null);



    }








    function closeForm(){


        setFormVisible(false);


        setEditingNota(null);


    }








    return (


        <>





            <List>


                {

                    notas.length === 0 ?


                    <EmptyState

                        message="Nenhuma nota cadastrada"

                    />

                    :



                    notas.map((nota)=>(


                        <NotaCard


                            key={nota.id}


                            nota={nota}


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









            <NotaForm


                visible={formVisible}


                nota={editingNota}


                onClose={closeForm}


                onSave={handleSave}


                onLoadAlunos={loadAlunos}


            />












            {


                deleteModal && (



                    <Overlay>



                        <Modal>




                            <ModalTitle>


                                Confirmar Exclusão


                            </ModalTitle>





                            <ModalText>


                                Tem certeza que deseja excluir esta nota?


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
