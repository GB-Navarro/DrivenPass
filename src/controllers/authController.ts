import { Request, Response } from "express";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const { email, password }: { email: string, password: string } = req.body;

    await authServices.createUser(email, password);

    res.status(200).send("The user was created!");
}

async function signIn(req: Request, res: Response){

    const { email, password }: {email: string, password: string } = req.body;

    res.status(200).send("Hello World!");
}

const authController = {
    signUp,
    signIn
}

export default authController;