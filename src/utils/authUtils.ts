import { IAuthData, IUserData } from "../types/authTypes";

import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


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

function generateToken(email: string, id: number): string {

    const userInfo: IUserData = {
        id: id,
        email: email
    }

    const secretKey: string = process.env.JWT_SECRET;
    const configs: { expiresIn: number } = { expiresIn: 60 * 60 } /* O token irá expirar em 60 minutos*/
    const token: string = jwt.sign(userInfo, secretKey, configs);

    return token;
}

function filterToken(token: string): string {

    let filteredToken: string = "";

    for (let index = 7; index < token.length; index++) {
        filteredToken += token[index];
    }

    return filteredToken
}

function checkTokenValidity(token: string): string {

    const secretKey: string = process.env.JWT_SECRET

    try {

        const { id, email } : any = jwt.verify(token, secretKey)

        const data: any = {
            id: id,
            email: email
        }

        return data;
    } catch (error) {

        throw { code: "error_invalidToken", message: "Invalid token!" };
    }
}

const authUtils = {

    encryptPassword,
    generateRegistrationData,
    generateToken,
    filterToken,
    checkTokenValidity
}

export default authUtils;