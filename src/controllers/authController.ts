import { Request, Response } from "express";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const { email, password }: { email: string, password: string } = req.body;

    await authServices.createUser(email, password);

    res.status(200).send("The user was created!");
}

const authController = {
    signUp
}

export default authController;