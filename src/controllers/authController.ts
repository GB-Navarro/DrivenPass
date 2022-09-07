import { Request, Response } from "express";

async function signUp(req: Request, res: Response){
    res.status(200).send("Hello World!");
}

const authController = {
    signUp
}

export default authController;