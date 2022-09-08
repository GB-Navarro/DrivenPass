import { Request, Response, NextFunction } from "express";

import authSchemas from "../schemas/authSchemas.js";

function validateSignUpSchema(req: Request, res: Response, next: NextFunction) {

    const data = req.body;
    const result = authSchemas.signUp.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

function validateSignInSchema(req: Request, res: Response, next: NextFunction) {

    const data = req.body;
    const result = authSchemas.signIn.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const authMiddlewares = {
    
    validateSignUpSchema,
    validateSignInSchema
}

export default authMiddlewares;