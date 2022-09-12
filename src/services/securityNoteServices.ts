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

    const data: Omit<securityNotes, "id"> = {
        userId: userId,
        text: text,
        tittle: tittle
    }

    await securityNoteRepository.insert(data);
}

async function search(userId: number) {

    const data: securityNotes[] = await securityNoteRepository.search(userId);

    return data;
}

async function checkOwnership(userId: number, securityNoteId: number) {

    const result = await securityNoteRepository.checkOwnership(userId, securityNoteId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, securityNoteId: number) {

    const securityNote = await checkOwnership(userId, securityNoteId);

    return securityNote;
}

async function deleteById(userId: number, securityNoteId: number) {

    await checkOwnership(userId, securityNoteId);
    await securityNoteRepository.deleteById(securityNoteId);
}

const securityNoteServices = {

    create,
    search,
    searchById,
    deleteById
}

export default securityNoteServices;