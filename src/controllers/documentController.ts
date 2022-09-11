import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";

async function create(req: Request, res: Response ){

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    res.status(200).send("The document has been created!");
}

const documentController = {
    create
}

export default documentController;