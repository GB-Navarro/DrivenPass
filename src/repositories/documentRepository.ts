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

async function checkOwnership(userId: number, documentId: number){

    const result: documents = await client.documents.findFirst({
        where:{
            id: documentId,
            userId: userId       
        }
    })

    return result;
}

const documentRepository = {

    insert,
    search,
    checkOwnership
}

export default documentRepository;