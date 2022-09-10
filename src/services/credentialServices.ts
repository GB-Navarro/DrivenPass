import { ICredentialData, Tittle } from "../types/credentialTypes.js";
import { credentials } from "@prisma/client";
import { IUserData } from "../types/authTypes.js";

import credentialRepository from "../repositories/credentialRepository.js";
import genericUtils from "../utils/genericUtils.js";

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

async function checkTittleExistence(tittle: string, userId: number) {

    const result: Tittle = await credentialRepository.getTittleById(tittle, userId);

    if (result != null) {
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}


const credentialServices = {

    create
}

export default credentialServices;