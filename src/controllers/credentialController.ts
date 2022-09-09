import { Request, Response } from "express";

async function credentialController(req: Request, res: Response ){
    res.status(200).send("Hello World!");
}

const exampleControllers = {
    credentialController
}

export default credentialController;