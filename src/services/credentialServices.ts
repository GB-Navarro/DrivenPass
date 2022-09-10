import { ICredentialData } from "../types/credentialTypes.js";
import { Tittle } from "../types/genericTypes.js";
import { credentials } from "@prisma/client";
import { IUserData } from "../types/authTypes.js";

import credentialRepository from "../repositories/credentialRepository.js";
import genericUtils from "../utils/genericUtils.js";
import credentialUtils from "../utils/credentialUtils.js";

async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await credentialRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}

async function create(userData: IUserData, credentialData: ICredentialData) {

    const { id: userId }: IUserData = userData;
    const { url, username, tittle }: Partial<ICredentialData> = credentialData;

    let { password }: Partial<ICredentialData> = credentialData;

    await checkTittleExistence(tittle, userId);

    password = genericUtils.encryptPassword(password);

    const data: Omit<credentials, "id"> = {
        userId: userId,
        url: url,
        username: username,
        password: password,
        tittle: tittle,
    }

    await credentialRepository.insert(data);
}

async function search(userId: number) {

    const encryptedData: credentials[] = await credentialRepository.search(userId);

    const decryptedData = credentialUtils.decryptMany(encryptedData);

    return decryptedData;
}

async function checkOwnership(userId: number, credentialId: number) {

    const result = await credentialRepository.checkOwnership(userId, credentialId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, credentialId: number) {

    const encryptedCredential = await checkOwnership(userId, credentialId);
    const decryptedCredential = credentialUtils.decrypt(encryptedCredential);

    return decryptedCredential;
}

async function deleteById(userId: number, credentialId: number){

    await checkOwnership(userId, credentialId);
    await credentialRepository.deleteById(credentialId);
}

const credentialServices = {

    create,
    search,
    searchById,
    deleteById
}

export default credentialServices;