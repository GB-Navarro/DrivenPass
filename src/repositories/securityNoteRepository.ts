import { client } from "../dbStrategy/postgres.js";
import { Tittle } from "../types/genericTypes.js";
import { securityNotes } from "@prisma/client";
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

async function search(userId: number){

    const result: securityNotes[] = await client.securityNotes.findMany({
        where:{
            userId: userId
        }
    });

    return result;
}

async function checkOwnership(userId: number, securityNoteId: number) {

    const result: securityNotes = await client.securityNotes.findFirst({
        where:{
            id: securityNoteId,
            userId: userId       
        }
    })

    return result;
}

async function deleteById(securityNoteId: number) {

}

const securityNoteRepository = {

    insert,
    getTittleById,
    search,
    checkOwnership,
    deleteById
}

export default securityNoteRepository;