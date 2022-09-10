import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { ICredentialData } from "../types/credentialTypes.js";
import credentialServices from "../services/credentialServices.js";

async function create(req: Request, res: Response ){

    const userData : IUserData = res.locals.data;
    const credentialData: ICredentialData  = req.body;

    await credentialServices.create(userData, credentialData)

    res.status(200).send("Hello World!");
}

const credentialController = {

    create
}

export default credentialController;