import { client } from "../dbStrategy/postgres.js";
import { documents } from "@prisma/client";

async function insert(data: Omit<documents, "id">) {

    await client.documents.create({
        data: data
    })
}

async function search(userId: number){

    const result: documents[] = await client.documents.findMany({
        where:{
            userId: userId
        }
    });

    return result;
}

const documentRepository = {

    insert,
    search
}

export default documentRepository;