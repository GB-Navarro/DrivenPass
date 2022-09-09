import { ICredentialData, Tittle } from "../types/credentialTypes.js";
import { client } from "../dbStrategy/postgres.js";

async function getTittleById(id: number) {
    
    const result: Tittle = await client.credentials.findFirst({
        where: {
            userId: id,
        },
        select:{
            tittle: true
        }
    })

    return result;
}

const credentialRepository = {
    getTittleById
}

export default credentialRepository