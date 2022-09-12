import { client } from "../dbStrategy/postgres.js";
import { Tittle } from "../types/genericTypes.js";
import { securityNotes } from "@prisma/client";

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

async function insert(data: Omit<securityNotes, "id">) {

    await client.securityNotes.create({
        data: data
    });
}

async function search(userId: number) {

    const result: securityNotes[] = await client.securityNotes.findMany({
        where: {
            userId: userId
        }
    });

    return result;
}

async function checkOwnership(userId: number, securityNoteId: number) {

    const result: securityNotes = await client.securityNotes.findFirst({
        where: {
            id: securityNoteId,
            userId: userId
        }
    })

    return result;
}

async function deleteById(securityNoteId: number) {

    await client.securityNotes.delete({
        where: {
            id: securityNoteId
        }
    })
}

const securityNoteRepository = {

    insert,
    getTittleById,
    search,
    checkOwnership,
    deleteById
}

export default securityNoteRepository;