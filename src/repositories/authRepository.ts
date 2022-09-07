import { client } from "./../dbStrategy/postgres.js";
import { users } from "@prisma/client";

async function searchEmail(email: string) {

    const result: users = await client.users.findFirst({
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

const authRepository = {
    searchEmail,
    insertUser
}

export default authRepository;