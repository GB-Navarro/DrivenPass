import { client } from "../dbStrategy/postgres.js";
import { Tittle } from "../types/genericTypes.js";
import { credentials } from "@prisma/client";

async function getTittleById(tittle: string, id: number) {

    const result: Tittle = await client.credentials.findFirst({
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

async function insert(data: Omit<credentials, "id">) {

    await client.credentials.create({
        data: data
    })
}

async function search(userId: number){

    const result: credentials[] = await client.credentials.findMany({
        where:{
            userId: userId
        }
    });

    return result;
}

async function checkOwnership(userId: number, credentialId: number){

    const result: credentials = await client.credentials.findFirst({
        where:{
            id: credentialId,
            userId: userId       
        }
    })

    return result;
}

async function deleteById(credentialId: number){

    await client.credentials.delete({
        where:{
            id: credentialId
        }
    })
}

const credentialRepository = {
    getTittleById,
    insert,
    search,
    checkOwnership,
    deleteById
}

export default credentialRepository