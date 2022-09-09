import credentialRepository from "../repositories/credentialRepository.js";
import { ICredentialData } from "../types/credentialTypes.js";
import genericUtils from "../utils/genericUtils.js";

async function create(data: ICredentialData){

    const { userId, password } = data;

    await checkTittleExistence(userId);

    data.password = genericUtils.encryptPassword(password);

    await credentialRepository.insert(data);
}

async function checkTittleExistence(userId: number){

    const result = await credentialRepository.getTittleById(userId);
    
    if(result != null){
        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
    }
}


const credentialServices = {
    
    create
}

export default credentialServices;