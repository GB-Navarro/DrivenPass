import { Request, Response } from "express";

async function create(req: Request, res: Response ){

    const data : any = res.locals.data;
    console.log("createCredentialData => ", data);
    
    res.status(200).send("Hello World!");
}

const credentialController = {
    create
}

export default credentialController;