import { useCallback, useEffect, useMemo, useState } from "react";
import { FaPlus, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

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
    DeleteButton,
    EventoGroup,
    EventoGroupHeader,
    EventoGroupTitle,
    PublishButton,
    PublishedBadge
} from "./style";


const API_URL = "http://localhost:3001";


export default function Notas() {

    const [notas, setNotas] = useState([]);

    const [formVisible, setFormVisible] = useState(false);

    const [editingNota, setEditingNota] = useState(null);

    const [deleteModal, setDeleteModal] = useState(false);

    const [idDelete, setIdDelete] = useState(null);

    const [publicando, setPublicando] = useState(null);


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


    // ============================
    // AGRUPAR NOTAS POR EVENTO
    // Cada evento vira um bloco separado, com seu próprio
    // botão de publicar (ou selo de "Publicado").
    // ============================

    const gruposPorEvento = useMemo(() => {

        const grupos = new Map();

        notas.forEach((nota) => {

            const chave = nota.eventoId ?? "sem-evento";

            if (!grupos.has(chave)) {

                grupos.set(chave, {
                    eventoId: nota.eventoId,
                    eventoNome: nota.eventoNome || "Sem evento",
                    notas: []
                });

            }

            grupos.get(chave).notas.push(nota);

        });

        return Array.from(grupos.values());

    }, [notas]);


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


    // ============================
    // PUBLICAR RESULTADOS DO EVENTO
    // Só a partir daqui as notas aparecem na tela de resultados
    // do organizador (e, futuramente, do aluno).
    // ============================

    async function handlePublicar(eventoId) {

        if (!eventoId) return;

        setPublicando(eventoId);

        try {

            const res = await fetch(
                `${API_URL}/eventos/${eventoId}/notas/publicar`,
                { method: "PUT" }
            );

            const data = await res.json();

            if (!res.ok) {

                alert(
                    data.erro ||
                    "Erro ao publicar os resultados."
                );

                return;

            }

            await loadNotas();

        } catch (err) {

            console.error(err);

            alert(
                "Não foi possível publicar os resultados."
            );

        } finally {

            setPublicando(null);

        }

    }


    return (

        <>

            {notas.length === 0 ? (

                <EmptyState
                    message="Nenhuma nota cadastrada"
                />

            ) : (

                gruposPorEvento.map((grupo) => {

                    const todasPublicadas = grupo.notas.every(
                        (nota) => nota.publicado
                    );

                    return (

                        <EventoGroup
                            key={grupo.eventoId ?? "sem-evento"}
                        >

                            <EventoGroupHeader>

                                <EventoGroupTitle>

                                    {grupo.eventoNome}

                                </EventoGroupTitle>


                                {grupo.eventoId && (

                                    todasPublicadas ? (

                                        <PublishedBadge>

                                            <FaCheckCircle />

                                            Publicado

                                        </PublishedBadge>

                                    ) : (

                                        <PublishButton

                                            onClick={() =>
                                                handlePublicar(
                                                    grupo.eventoId
                                                )
                                            }

                                            disabled={
                                                publicando ===
                                                grupo.eventoId
                                            }

                                        >

                                            <FaPaperPlane />

                                            {publicando === grupo.eventoId
                                                ? "Publicando..."
                                                : `Publicar resultados (${grupo.notas.length})`
                                            }

                                        </PublishButton>

                                    )

                                )}

                            </EventoGroupHeader>


                            <List>

                                {grupo.notas.map((nota) => (

                                    <NotaCard
                                        key={nota.id}
                                        nota={nota}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />

                                ))}

                            </List>

                        </EventoGroup>

                    );

                })

            )}


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