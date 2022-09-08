import { client } from "./../dbStrategy/postgres.js";
import { users } from "@prisma/client";

async function searchEmail(email: Omit<users, "id" | "password">) {

    const result: users = await client.users.findUnique({
        where: {
            email: email.toString()
        }
    })

    return result;
}

async function insertUser(data: Omit<users, "id">) {

    await client.users.create({
        data: data
    })
}

async function getPasswordByEmail(email: Omit<users, "id" | "password">) {

    const result: Omit<users, "id" | "email"> = await client.users.findUnique({
        where: {
            email: email.toString()
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