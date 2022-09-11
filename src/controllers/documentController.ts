import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { IDocumentData } from "../types/documentTypes.js";

import documentServices from "../services/documentServices.js";

async function create(req: Request, res: Response ){

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const documentData: IDocumentData = req.body;

    await documentServices.create(userId, documentData);

    res.status(200).send("The document has been created!");
}

const documentController = {

    create
}

export default documentController;