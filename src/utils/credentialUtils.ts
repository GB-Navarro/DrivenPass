import { credentials } from "@prisma/client";

import dotenv from "dotenv";
import Cryptr from "cryptr";

dotenv.config({ path: "../../.env" })

function decryptMany(encryptedCredentials: credentials[]) {

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);
;
    const decryptedCredentials = encryptedCredentials.map((encryptedCredential) => {
        encryptedCredential.password = cryptr.decrypt(encryptedCredential.password);
        return encryptedCredential;
    })

    return decryptedCredentials;
}

const credentialUtils = {

    decryptMany
}

export default credentialUtils;