import { Request, Response } from "express";

async function create(req: Request, res: Response ){

    res.status(201).send("The wifi has been created!");
}

const wifiController = {

    create
}

export default wifiController;