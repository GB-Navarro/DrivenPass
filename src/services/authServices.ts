import bcrypt from "bcrypt";
import authRepository from "../repositories/authRepository.js";

async function checkEmailUniqueness(email: string) {

    const result = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }

}

function encryptPassword(password: string): string {

    const encryptedPassword = bcrypt.hashSync(password, 10);

    return encryptedPassword;

}

async function createUser(email: string, password: string) {

    await checkEmailUniqueness(email);

    const encryptedPassword = encryptPassword(password);

    await authRepository.insertUser(email, encryptedPassword);

}

async function checkEmailExistence(email: string) {

    const result = await authRepository.searchEmail(email);

    if (result === null) {
        throw { code: "error_thisEmailIsNotRegistered", message: "This e-mail is not registered!" };
    }

}

const authServices = {
    createUser
}

export default authServices;