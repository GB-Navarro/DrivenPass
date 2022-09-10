import { ISecurityNoteData } from "../types/securityNoteTypes";
import { Tittle } from "../types/genericTypes.js";
import { securityNotes } from "@prisma/client";

import securityNoteRepository from "../repositories/securityNoteRepository.js";

async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await securityNoteRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}

async function create(userId: number, securityNoteData: Omit<ISecurityNoteData, "userId">) {

    const { tittle, text }: Omit<ISecurityNoteData, "userId"> = securityNoteData;

    await checkTittleExistence(tittle, userId);

    const data: ISecurityNoteData = {
        userId: userId,
        tittle: tittle,
        text: text
    }

    await securityNoteRepository.insert(data);
}

async function search(userId: number) {

    const data: securityNotes[] = await securityNoteRepository.search(userId);

    return data;
}

async function checkOwnership(userId: number, credentialId: number) {

    const result = await securityNoteRepository.checkOwnership(userId, credentialId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, credentialId: number) {

    const securityNote = await checkOwnership(userId, credentialId);

    return securityNote;
}

const securityNoteServices = {

    create,
    search,
    searchById
}

export default securityNoteServices;