import { ISecurityNoteData } from "../types/securityNoteTypes";
import { Tittle } from "../types/genericTypes.js";

import securityNoteRepository from "../repositories/securityNoteRepository.js";

async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await securityNoteRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}

async function create(userId: number, securityNoteData: Omit<ISecurityNoteData,"userId">){

    const { tittle, text } : Omit<ISecurityNoteData,"userId"> = securityNoteData;

    await checkTittleExistence(tittle, userId);

    const data: ISecurityNoteData = {
        userId: userId,
        tittle: tittle,
        text: text
    }

    await securityNoteRepository.insert(data);
}



const securityNoteServices ={

    create
}

export default securityNoteServices;