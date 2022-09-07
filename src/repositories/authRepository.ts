import { client } from "./../dbStrategy/postgres.js";

async function searchEmail(email:string){

    const result = await client.users.findFirst({
        where: {
            email: email
        }
    })

    return result;
    
}

async function insertUser(email:string, password:string){

    const result = await client.users.create({
        data: {
            email: email,
            password: password
        }
    })

    return result;

}

const authRepository = {
    searchEmail
}

export default authRepository;