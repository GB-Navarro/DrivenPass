import { client } from "../dbStrategy/postgres.js";
import { Tittle } from "../types/genericTypes.js";
import { ISecurityNoteData } from "../types/securityNoteTypes.js";

async function getTittleById(tittle: string, id: number) {

    const result: Tittle = await client.securityNotes.findFirst({
        where: {
            tittle: tittle,
            userId: id,
        },
        select: {
            tittle: true
        }
    })

    return result;
}

async function insert(data: ISecurityNoteData){

    await client.securityNotes.create({
        data: data
    });
}

const securityNoteRepository = {

    insert,
    getTittleById
}

export default securityNoteRepository;