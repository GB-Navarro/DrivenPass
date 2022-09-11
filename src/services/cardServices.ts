import { ICardData } from "../types/cardTypes.js";
import { Tittle } from "../types/genericTypes.js";

import cardRepository from "../repositories/cardRepository.js";
async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await cardRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}

async function create(userId: number, cardData: ICardData){
    
}

const cardServices = {
    create
}

export default cardServices;