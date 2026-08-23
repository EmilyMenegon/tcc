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

    const [nome, setNome] = useState("");
    const [turma, setTurma] = useState("");

    useEffect(() => {

        if (aluno) {

            setNome(aluno.nome || "");
            setTurma(aluno.celular || "");

        } else {

            setNome("");
            setTurma("");

        }

    }, [aluno, visible]);


    function handleSave() {

        if (
            nome.trim() &&
            turma.trim()
        ) {

            onSave(
                nome.trim(),
                "",
                turma.trim()
            );

            onClose();

        }

    }


    if (!visible) {
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
                    onChange={(e) => setNome(e.target.value)}
                />


                <Input
                    placeholder="Turma"
                    value={turma}
                    onChange={(e) => setTurma(e.target.value)}
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