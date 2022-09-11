import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { IDocumentData } from "../types/documentTypes.js";
import { documents } from "@prisma/client";

import documentServices from "../services/documentServices.js";

async function create(req: Request, res: Response ){

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const documentData: IDocumentData = req.body; 

    await documentServices.create(userId, documentData);

    res.status(200).send("The document has been created!");
}

async function search(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const documentsData: documents[] = await documentServices.search(userId);

    res.status(200).send(documentsData);
}

async function searchById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: documentId } = req.params;

    const document = await documentServices.searchById(userId, parseInt(documentId));

    res.status(200).send(document);
}

const documentController = {
    
    create,
    search,
    searchById
}

export default documentController;