import { Request, Response } from "express";
import { users } from "@prisma/client";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response) {

    const { email, password }: { email: Omit<users, "id" | "password">, password: Omit<users, "id" | "email"> } = req.body;

    await authServices.createUser(email, password);

    res.status(200).send("The user was created!");
}

async function signIn(req: Request, res: Response) {

    const { email, password }: { email: Omit<users, "id" | "password">, password: Omit<users, "id" | "email"> } = req.body;

    const token = await authServices.login(email, password);

    res.status(200).send(token);
}

const authController = {
    signUp,
    signIn
}

export default authController;