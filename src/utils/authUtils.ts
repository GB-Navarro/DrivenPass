import { users } from "@prisma/client";
import { IAuthData, userEmail } from "../types/authTypes";

import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

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
    const configs: { expiresIn: number } = { expiresIn: 60 * 10 } /* O token irá expirar em 10 minutos*/

    const token: string = jwt.sign(data, secretKey, configs);

    return token;
}

const authUtils = {

    encryptPassword,
    generateRegistrationData,
    generateToken
}

export default authUtils;