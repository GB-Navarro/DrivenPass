import { client } from "../dbStrategy/postgres.js";
import { documents } from "@prisma/client";

async function insert(data: Omit<documents, "id">) {

    await client.documents.create({
        data: data
    })
}

const documentRepository = {

    insert
}

export default documentRepository;