import authRepository from "../repositories/authRepository.js";

async function checkEmailUniqueness(email:string){

    const result = await authRepository.searchEmail(email);

    if(result != undefined){
        throw { code: "error_emailAlreadyIsUse", message: "This e-mail has already in use by other user"};
    }
}

const authServices = {
    checkEmailUniqueness
}

export default authServices;