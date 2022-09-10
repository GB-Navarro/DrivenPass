import { Request, Response } from "express";
import { ISecurityNoteData } from "../types/securityNoteTypes";
import { IUserData } from "../types/authTypes.js";


import securityNoteServices from "../services/securityNoteServices.js";

async function create(req: Request, res: Response) {

    const { id: userId}: Omit<IUserData,"email"> = res.locals.data;
    const securityNoteData: Omit<ISecurityNoteData, "userId"> = req.body;

    await securityNoteServices.create(userId, securityNoteData);

    res.status(201).send("The note has been created!");
}

const securityNoteController = {
    create
}

export default securityNoteController;