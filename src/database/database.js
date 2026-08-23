import { openDB } from "idb";


const DB_NAME = "alunos.db";

const DB_VERSION = 1;



async function getDatabase(){


    return await openDB(
        DB_NAME,
        DB_VERSION,
        {

            upgrade(db){



                if(!db.objectStoreNames.contains("alunos")){


                    const alunos = db.createObjectStore(
                        "alunos",
                        {
                            keyPath:"id",
                            autoIncrement:true
                        }
                    );


                    alunos.createIndex(
                        "nome",
                        "nome"
                    );


                }






                if(!db.objectStoreNames.contains("notas")){


                    const notas = db.createObjectStore(
                        "notas",
                        {
                            keyPath:"id",
                            autoIncrement:true
                        }
                    );


                    notas.createIndex(
                        "id_aluno",
                        "id_aluno"
                    );


                }


            }


        }
    );


}







// =======================
// ALUNOS
// =======================



export async function getAllAlunos(){


    const db = await getDatabase();


    const alunos = await db.getAll("alunos");


    return alunos.sort(
        (a,b)=>
        a.nome.localeCompare(b.nome)
    );


}







export async function getAlunoById(id){


    const db = await getDatabase();


    return await db.get(
        "alunos",
        id
    );


}








export async function createAluno(
    nome,
    email,
    celular
){


    const db = await getDatabase();


    return await db.add(
        "alunos",
        {
            nome,
            email,
            celular
        }
    );


}








export async function updateAluno(
    id,
    nome,
    email,
    celular
){


    const db = await getDatabase();


    await db.put(
        "alunos",
        {
            id,
            nome,
            email,
            celular
        }
    );


}








export async function deleteAluno(id){


    const db = await getDatabase();


    await db.delete(
        "alunos",
        id
    );


}








export async function searchAlunos(texto){


    const alunos = await getAllAlunos();


    return alunos.filter(
        aluno =>
            aluno.nome
            .toLowerCase()
            .includes(
                texto.toLowerCase()
            )
    );


}









// =======================
// NOTAS
// =======================





export async function getAllNotas(){


    const db = await getDatabase();


    const notas =
        await db.getAll("notas");



    const alunos =
        await db.getAll("alunos");




    return notas.map(nota=>{


        const aluno =
            alunos.find(
                a =>
                a.id === nota.id_aluno
            );



        return {

            ...nota,

            nome_aluno:
                aluno?.nome

        };


    });


}









export async function getNotaById(id){


    const db = await getDatabase();


    return await db.get(
        "notas",
        id
    );


}









export async function createNota(
    n1,
    n2,
    n3,
    n4,
    id_aluno
){



    const media =
        (
            Number(n2)
            +
            Number(n3)
        )
        /
        2;



    const db =
        await getDatabase();



    return await db.add(
        "notas",
        {

            n1,
            n2,
            n3,
            n4,
            media,
            id_aluno

        }
    );


}









export async function updateNota(
    id,
    n1,
    n2,
    n3,
    n4,
    id_aluno
){



    const media =
        (
            Number(n2)
            +
            Number(n3)
        )
        /
        2;




    const db =
        await getDatabase();




    await db.put(
        "notas",
        {

            id,

            n1,

            n2,

            n3,

            n4,

            media,

            id_aluno

        }
    );


}








export async function deleteNota(id){


    const db =
        await getDatabase();



    await db.delete(
        "notas",
        id
    );


}
