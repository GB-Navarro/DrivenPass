import { cards } from "@prisma/client";
import { client } from "../dbStrategy/postgres.js";
import { Tittle } from "../types/genericTypes.js";

async function getTittleById(tittle: string, id: number) {

    const result: Tittle = await client.cards.findFirst({
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

async function insert(data: Omit<cards, "id">) {

    await client.cards.create({
        data: data
    })
}

async function search(userId: number){

    const result: cards[] = await client.cards.findMany({
        where:{
            userId: userId
        }
    });

    return result;
}

const cardRepository = {

    getTittleById,
    insert,
    search
}

export default cardRepository;