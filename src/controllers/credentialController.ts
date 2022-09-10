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

async function search(req: Request, res: Response){
    
    res.status(200).send("Search!");
}

async function searchById(req: Request, res: Response){

    res.status(200).send("Search By Id!");
}

const credentialController = {

    create,
    search,
    searchById
}

export default credentialController;