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

async function search(userId: number) {

    const result: cards[] = await client.cards.findMany({
        where: {
            userId: userId
        }
    });

    return result;
}

async function checkOwnership(userId: number, cardId: number) {

    const result: cards = await client.cards.findFirst({
        where: {
            id: cardId,
            userId: userId
        }
    })

    return result;
}

async function deleteById(cardId: number) {

    await client.cards.delete({
        where: {
            id: cardId
        }
    })
}

const cardRepository = {

    getTittleById,
    insert,
    search,
    checkOwnership,
    deleteById
}

export default cardRepository;