import { Request, Response } from "express";
import { ISecurityNoteData } from "../types/securityNoteTypes";
import { IUserData } from "../types/authTypes.js";
import { securityNotes } from "@prisma/client";

import securityNoteServices from "../services/securityNoteServices.js";

async function create(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;
    const securityNoteData: Omit<ISecurityNoteData, "userId"> = req.body;

    await securityNoteServices.create(userId, securityNoteData);

    res.status(201).send("The note has been created!");
}

async function search(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const securityNotes: securityNotes[] = await securityNoteServices.search(userId);

    res.status(200).send(securityNotes);
}

async function searchById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: securityNoteId } = req.params;

    const securityNote = await securityNoteServices.searchById(userId, parseInt(securityNoteId));

    res.status(200).send(securityNote);
}

async function deleteById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: securityNoteId } = req.params;

    await securityNoteServices.deleteById(userId, parseInt(securityNoteId))

    res.status(202).send("This note has been deleted!");
}

const securityNoteController = {

    create,
    search,
    searchById,
    deleteById
}

export default securityNoteController;