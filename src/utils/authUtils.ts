import { IAuthData, userEmail } from "../types/authTypes";

import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt, { JwtPayload } from "jsonwebtoken"
import { options } from "joi";
import { json } from "express";

dotenv.config({ path: "../../.env" });

function encryptPassword(password: string): string {

    const encryptedPassword: string = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

function generateRegistrationData(email: string, encryptedPassword: string): IAuthData {

    const registrationData: IAuthData = {

        email: email,
        password: encryptedPassword
    }

    return registrationData;
}

function generateToken(email: string): string {

    const data: userEmail = {
        email: email
    }

    const secretKey: string = process.env.JWT_SECRET;
    const configs: { expiresIn: number } = { expiresIn: 60 * 60 } /* O token irá expirar em 60 minutos*/
    const token: string = jwt.sign(data, secretKey, configs);

    return token;
}

function filterToken(token: string): string {

    let filteredToken: string = "";

    for (let index = 7; index < token.length; index++) {
        filteredToken += token[index];
    }

    return filteredToken
}

function validateToken(token: string): string {

    const secretKey: string = process.env.JWT_SECRET

    try {

        const { email } : any= jwt.verify(token, secretKey)

        return email;
    } catch (error) {

        throw { code: "error_invalidToken", message: "Invalid token!" };
    }
}

const authUtils = {

    encryptPassword,
    generateRegistrationData,
    generateToken,
    filterToken,
    validateToken
}

export default authUtils;