import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function checkEmailUniqueness(email:string){

    const result = await authRepository.searchEmail(email);

    if(result != null){
        throw { code: "error_emailAlreadyIsUse", message: "This e-mail has already in use by other user"};
    }

}

function encryptPassword(password:string){
    
    const encryptedPassword = bcrypt.hashSync(password,10);

    return encryptPassword;

}

async function createUser(email:string,password:string){

    await checkEmailUniqueness(email);
    
    const encryptedPassword = encryptPassword(password);
}

const authServices = {
    createUser
}

export default authServices;