import { Request, Response } from "express";
import { userEmail, userPassword } from "../types/authTypes.js";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const { email, password }: { email: userEmail, password: userPassword } = req.body;

    await authServices.createUser(email, password);

    res.status(200).send("The user was created!");
}

async function signIn(req: Request, res: Response) {

    const { email, password }: { email: userEmail, password: userPassword } = req.body;

    const token: string = await authServices.login(email, password);

    res.status(200).send(token);
}

const authController = {

    signUp,
    signIn
}

export default authController;