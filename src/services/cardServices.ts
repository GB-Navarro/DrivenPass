import { ICardData } from "../types/cardTypes.js";
import { Tittle } from "../types/genericTypes.js";
import { cards } from "@prisma/client";

import cardRepository from "../repositories/cardRepository.js";
import genericUtils from "../utils/genericUtils.js";

async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await cardRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}

async function create(userId: number, cardData: ICardData){
    
    const { number, name, securityCode, expirationDate, password, isVirtual, type, tittle } = cardData;

    await checkTittleExistence(tittle, userId);

    const encryptedSecurityCode = genericUtils.encryptPassword(securityCode);
    const encryptedPassword = genericUtils.encryptPassword(password);

    const data: Omit<cards, "id"> = {
        userId: userId,
        number: number,
        name: name,
        securityCode: encryptedSecurityCode,
        expirationDate: expirationDate,
        password: encryptedPassword,
        isVirtual: isVirtual,
        type: type,
        tittle: tittle
    }

    await cardRepository.insert(data);
}

async function search(userId: number){

    const data: cards[] = await cardRepository.search(userId);

    return data;
}

async function checkOwnership(userId: number, cardId: number) {

    const result = await cardRepository.checkOwnership(userId, cardId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, cardId: number) {

    const data = await checkOwnership(userId, cardId);

    return data;
}

async function deleteById(userId: number, cardId: number){

    await checkOwnership(userId, cardId);
    await cardRepository.deleteById(cardId);
}

const cardServices = {
    create,
    search,
    searchById,
    deleteById
}

export default cardServices;