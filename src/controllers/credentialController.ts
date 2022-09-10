import { Request, Response } from "express";
import { ICredentialData } from "../types/credentialTypes.js";
import { IUserData } from "../types/authTypes.js";


import credentialServices from "../services/credentialServices.js";

async function create(req: Request, res: Response ){

    const userData : IUserData = res.locals.data;
    const credentialData: ICredentialData  = req.body;

    await credentialServices.create(userData, credentialData)

    res.status(201).send("The credential has been created!");
}

const credentialController = {

    create
}

export default credentialController;