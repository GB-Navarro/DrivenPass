import { Request, Response, NextFunction } from "express";
import { ICardData } from "../types/cardTypes.js";

import cardSchemas from "../schemas/cardSchemas.js";
function validateCreateSchema(req: Request, res: Response, next: NextFunction) {

    const data: ICardData = req.body;
    const result = cardSchemas.create.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const cardMiddlewares = {

    validateCreateSchema
}

export default cardMiddlewares;