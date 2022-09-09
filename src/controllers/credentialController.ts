import { Request, Response } from "express";

async function create(req: Request, res: Response ){

    const email = res.locals.email;
    
    res.status(200).send("Hello World!");
}

const credentialController = {
    create
}

export default credentialController;