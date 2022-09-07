import { client } from "./../dbStrategy/postgres.js";

async function searchEmail(email:string){

    const result = await client.users.findFirst({
        where: {
            email: email
        }
    })

    return result;
}

const authRepository = {
    searchEmail
}

export default authRepository;