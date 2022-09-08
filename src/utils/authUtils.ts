import { users } from "@prisma/client";
import { userEmail, userPassword } from "../types/authTypes";

import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "../../.env" });

function encryptPassword(password: userPassword): string {

    const encryptedPassword: string = bcrypt.hashSync(password.toString(), 10);

    return encryptedPassword;
}

function generateRegistrationData(email: string, encryptedPassword: string): Omit<users, "id"> {

    const registrationData: Omit<users, "id"> = {

        email: email,
        password: encryptedPassword
    }

    return registrationData;
}

function generateToken(email: userEmail): string {

    const data: Omit<users, "id" | "password"> = {
        email: email.toString()
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