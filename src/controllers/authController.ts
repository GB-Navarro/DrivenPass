import { Request, Response } from "express";

import authServices from "./../services/authServices.js";

async function signUp(req: Request, res: Response){

    const { email, password } = req.body;

    await authServices.checkEmailUniqueness(email);
    
    res.status(200).send("Hello World!");
}

const authController = {
    signUp
}

export default authController;