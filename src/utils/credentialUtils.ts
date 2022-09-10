import { credentials } from "@prisma/client";

import dotenv from "dotenv";
import Cryptr from "cryptr";

dotenv.config({ path: "../../.env" })

function decrypt(encryptedCredential: credentials): credentials {

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    const decryptedCredential = { ...encryptedCredential };

    decryptedCredential.password = cryptr.decrypt(encryptedCredential.password);

    return decryptedCredential;
}

function decryptMany(encryptedCredentials: credentials[]): credentials[] {

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

    const decryptedCredentials = encryptedCredentials.map((encryptedCredential) => {
        encryptedCredential.password = cryptr.decrypt(encryptedCredential.password);
        return encryptedCredential;
    })

    return decryptedCredentials;
}

const credentialUtils = {

    decrypt,
    decryptMany
}

export default credentialUtils;