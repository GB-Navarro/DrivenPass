import { client } from "./../dbStrategy/postgres.js";
import { users } from "@prisma/client";

async function searchEmail(email: string) {

    const result: users = await client.users.findUnique({
        where: {
            email: email
        }
    })

    return result;
}

async function insertUser(email: string, password: string) {

    await client.users.create({
        data: {
            email: email,
            password: password
        }
    })
}

async function getPasswordByEmail(email: string) {

    const result: Omit<users, "id" | "email"> = await client.users.findUnique({
        where: {
            email: email
        },
        select: {
            password: true
        }
    })

    return result.password;
}

const authRepository = {
    searchEmail,
    insertUser,
    getPasswordByEmail
}

export default authRepository;