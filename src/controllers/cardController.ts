import { Request, Response } from "express";

async function create(req: Request, res: Response ){
    
    res.status(200).send("Create!");
}

const cardController = {
    create
}

export default cardController;