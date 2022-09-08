import { users } from "@prisma/client";

import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config({ path: "../../.env" });

function encryptPassword(password: string): string {

    const encryptedPassword = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

function generateToken(email: Omit<users, "id" | "password">): string {

    const data = {
        email: email
    }

    const secretKey = process.env.JWT_SECRET;
    const configs = { expiresIn: 60 * 10 } /* O token irá expirar em 10 minutos*/

    const token = jwt.sign(data, secretKey, configs);

    return token;
}

const authUtils = {
    generateToken,
    encryptPassword
}

export default authUtils;