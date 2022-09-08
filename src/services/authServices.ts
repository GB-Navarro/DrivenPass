import { users } from "@prisma/client";

import bcrypt from "bcrypt";

import authRepository from "../repositories/authRepository.js";
import authUtils from "../utils/authUtils.js";

async function checkEmailUniqueness(email: string) {

    const result = await authRepository.searchEmail(email);

    if (result != null) {
        throw { code: "error_emailAlreadyInUse", message: "This e-mail has already in use by other user" };
    }
}

async function createUser(email: Omit<users, "id" | "password">, password: Omit<users, "id" | "email">) {

    await checkEmailUniqueness(email.toString());

    const encryptedPassword = authUtils.encryptPassword(password.toString());

    await authRepository.insertUser(email.toString(), encryptedPassword);
}

async function checkEmailExistence(email: string) {

    const result = await authRepository.searchEmail(email);

    if (result === null) {
        throw { code: "error_thisEmailIsNotRegistered", message: "This e-mail is not registered!" };
    }
}

async function comparePasswords(email: Omit<users, "id" | "password">, password: Omit<users, "id" | "email">) {

    const realPassword = await authRepository.getPasswordByEmail(email.toString());
    const isEqual = bcrypt.compareSync(password.toString(), realPassword.toString());

    if (!(isEqual)) {
        throw { code: "error_wrongPassword", message: "Wrong password!" };
    }
}

async function login(email: Omit<users, "id" | "password">, password: Omit<users, "id" | "email">) {

    await checkEmailExistence(email.toString());
    await comparePasswords(email, password);

    const token = authUtils.generateToken(email);

    return token;
}

const authServices = {
    createUser,
    login
}

export default authServices;