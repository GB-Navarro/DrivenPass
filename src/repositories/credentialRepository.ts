import { Tittle } from "../types/credentialTypes.js";
import { client } from "../dbStrategy/postgres.js";
import { credentials } from "@prisma/client";

async function getTittleById(tittle: string, id: number) {

    const result: Tittle = await client.credentials.findFirst({
        where: {
            tittle: tittle,
            userId: id,
        },
        select:{
            tittle: true
        }
    })

    return result;
}

async function insert(data: Omit<credentials,"id">) {

    await client.credentials.create({
        data: data
    })
}

const credentialRepository = {
    getTittleById,
    insert
}

export default credentialRepository