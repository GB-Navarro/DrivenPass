import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";

async function create(req: Request, res: Response){

    const userData: IUserData = res.locals.data;

    res.status(201).send("The note has been created!");
}

const securityNoteController = {
    create
}

export default securityNoteController;