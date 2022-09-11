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

const cardRepository = {

    getTittleById
}

export default cardRepository;