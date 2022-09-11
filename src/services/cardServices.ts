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

    const encryptedPassword = genericUtils.encryptPassword(password);

    const data: Omit<cards, "id"> = {
        userId: userId,
        number: number,
        name: name,
        securityCode: securityCode,
        expirationDate: expirationDate,
        password: encryptedPassword,
        isVirtual: isVirtual,
        type: type,
        tittle: tittle
    }

    await cardRepository.insert(data);
}

const cardServices = {
    create
}

export default cardServices;