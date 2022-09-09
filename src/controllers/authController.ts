import { Request, Response } from "express";
import { IAuthData } from "../types/authTypes.js";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const data: IAuthData = req.body;

    await authServices.createUser(data);

    res.status(200).send("The user was created!");
}

async function signIn(req: Request, res: Response) {

    const data: IAuthData = req.body;

    const token: string = await authServices.login(data);

    res.status(200).send(token);
}

const authController = {

    signUp,
    signIn
}

export default authController;