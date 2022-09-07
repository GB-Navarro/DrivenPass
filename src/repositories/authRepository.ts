import { client } from "./../dbStrategy/postgres.js";

async function searchEmail(email:string){
    const result = client.users.findFirst({
        where: {
            email: email
        }
    })
}

const authRepository = {
    searchEmail
}

export default authRepository;