import { useCallback, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

import NotaCard from "../../components/notacard";
import NotaForm from "../../components/notaform";
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


const API_URL = "http://localhost:3001";


export default function Notas() {

    const [notas, setNotas] = useState([]);

    const [formVisible, setFormVisible] = useState(false);

    const [editingNota, setEditingNota] = useState(null);

    const [deleteModal, setDeleteModal] = useState(false);

    const [idDelete, setIdDelete] = useState(null);


    const loadNotas = useCallback(async () => {

        try {

            const res = await fetch(`${API_URL}/notas`);

            const data = await res.json();

            setNotas(Array.isArray(data) ? data : []);

        } catch (err) {

            console.error(err);

        }

    }, []);


    useEffect(() => {

        loadNotas();

    }, [loadNotas]);


    async function handleSave(payload) {

        try {

            const url = editingNota
                ? `${API_URL}/notas/${editingNota.id}`
                : `${API_URL}/notas`;

            const method = editingNota
                ? "PUT"
                : "POST";

            const res = await fetch(url, {

                method,

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(payload)

            });

            if (!res.ok) {

                const data = await res.json();

                alert(
                    data.erro ||
                    "Erro ao salvar a nota."
                );

                return false;

            }

            setEditingNota(null);

            setFormVisible(false);

            await loadNotas();

            return true;

        } catch (err) {

            console.error(err);

            alert(
                "Não foi possível salvar a nota."
            );

            return false;

        }

    }


    function handleEdit(nota) {

        setEditingNota(nota);

        setFormVisible(true);

    }


    function closeForm() {

        setFormVisible(false);

        setEditingNota(null);

    }


    function handleDelete(id) {

        setIdDelete(id);

        setDeleteModal(true);

    }


    async function confirmDelete() {

        if (idDelete) {

            try {

                await fetch(
                    `${API_URL}/notas/${idDelete}`,
                    { method: "DELETE" }
                );

                await loadNotas();

            } catch (err) {

                console.error(err);

            }

        }

        setDeleteModal(false);

        setIdDelete(null);

    }


    return (

        <>

            <List>

                {notas.length === 0 ? (

                    <EmptyState
                        message="Nenhuma nota cadastrada"
                    />

                ) : (

                    notas.map((nota) => (

                        <NotaCard
                            key={nota.id}
                            nota={nota}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />

                    ))

                )}

            </List>


            <Fab
                onClick={() => setFormVisible(true)}
            >

                <FaPlus />

            </Fab>


            <NotaForm
                visible={formVisible}
                nota={editingNota}
                onClose={closeForm}
                onSave={handleSave}
            />


            {deleteModal && (

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
                                onClick={() => setDeleteModal(false)}
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

            )}

        </>

    );

}