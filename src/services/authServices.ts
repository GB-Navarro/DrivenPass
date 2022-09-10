import { IAuthData } from "../types/authTypes.js";
import { users } from "@prisma/client";

import bcrypt from "bcrypt";

import authRepository from "../repositories/authRepository.js";
import authUtils from "../utils/authUtils.js";

async function checkEmailUniqueness(email: string) {

    const result: users = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }
}

async function createUser(data: IAuthData) {

    const { email, password }: IAuthData = data

    await checkEmailUniqueness(email);

    const encryptedPassword: string = authUtils.encryptPassword(password);

    const registrationData: IAuthData = authUtils.generateRegistrationData(email, encryptedPassword);

    await authRepository.insertUser(registrationData);
}

async function checkEmailExistence(email: string) {

    const result: users = await authRepository.searchEmail(email);

    if (result === null) {
        throw { code: "error_thisEmailIsNotRegistered", message: "This e-mail is not registered!" };
    }

    return result
}

async function comparePasswords(data: IAuthData) {

    const { email, password } = data;

    const realPassword: string = await authRepository.getPasswordByEmail(email);

    const isEqual: boolean = bcrypt.compareSync(password.toString(), realPassword.toString());

    if (!(isEqual)) {
        throw { code: "error_wrongPassword", message: "Wrong password!" };
    }
}

async function login(data: IAuthData) {

    const { email } = data;

    const { id } = await checkEmailExistence(email);

    await comparePasswords(data);

    const token: string = authUtils.generateToken(email, id);

    return token;
}

const authServices = {

    createUser,
    login
}

export default authServices;