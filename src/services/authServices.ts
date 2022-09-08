import { users } from "@prisma/client";
import { userEmail, userPassword } from "../types/authTypes.js";

import bcrypt from "bcrypt";

import authRepository from "../repositories/authRepository.js";
import authUtils from "../utils/authUtils.js";

async function checkEmailUniqueness(email: userEmail) {

    const result: users = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }
}

async function createUser(email: userEmail, password: userPassword) {

    await checkEmailUniqueness(email);

    const encryptedPassword: string = authUtils.encryptPassword(password);

    const registrationData: Omit<users, "id"> = authUtils.generateRegistrationData(email.toString(), encryptedPassword);

    await authRepository.insertUser(registrationData);
}

async function checkEmailExistence(email: userEmail) {

    const result: users = await authRepository.searchEmail(email);

    if (result === null) {
        throw { code: "error_thisEmailIsNotRegistered", message: "This e-mail is not registered!" };
    }
}

async function comparePasswords(email: userEmail, password: userPassword) {

    const realPassword: string = await authRepository.getPasswordByEmail(email);

    const isEqual: boolean = bcrypt.compareSync(password.toString(), realPassword.toString());

    if (!(isEqual)) {
        throw { code: "error_wrongPassword", message: "Wrong password!" };
    }
}

async function login(email: userEmail, password: userPassword) {

    await checkEmailExistence(email);
    await comparePasswords(email, password);

    const token: string = authUtils.generateToken(email);

    return token;
}

const authServices = {

    createUser,
    login
}

export default authServices;