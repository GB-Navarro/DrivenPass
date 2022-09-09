import { Request, Response, NextFunction } from "express";

import authUtils from "../utils/authUtils.js";

import dotenv from "dotenv";

dotenv.config({ path: "../../.env" });

function validateToken(req: Request, res: Response, next: NextFunction): void {

    const token: string = req.headers.authorization;

    if (token === undefined) {
        throw { code: "error_notReceivedAToken", message: "Token not found!" };
    }

    const filteredToken = authUtils.filterToken(token);
    const email: string = authUtils.validateToken(filteredToken);

    res.locals.email = email;

    next();
}

const genericMiddlewares = {

    validateToken
}

export default genericMiddlewares;