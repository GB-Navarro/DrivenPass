import { request, Request, Response } from "express";
import { ICredentialData } from "../types/credentialTypes.js";
import { IUserData } from "../types/authTypes.js";


import credentialServices from "../services/credentialServices.js";
import { credentials } from "@prisma/client";

async function create(req: Request, res: Response) {

    const userData: IUserData = res.locals.data;
    const credentialData: ICredentialData = req.body;

    await credentialServices.create(userData, credentialData)

    res.status(201).send("The credential has been created!");
}

async function search(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const credentialsData: credentials[] = await credentialServices.search(userId);

    res.status(200).send(credentialsData);
}

async function searchById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: credentialId } = req.params;

    const credential = await credentialServices.searchById(userId, parseInt(credentialId));

    res.status(200).send(credential);
}

async function deleteById(req: Request, res: Response){

    const { id: credentialId } = req.params;
    console.log("deleteId => ", credentialId);

    res.status(202).send("This credential are been deleted!");
}

const credentialController = {

    create,
    search,
    searchById,
    deleteById
}

export default credentialController;