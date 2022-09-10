import { Request, Response, NextFunction } from "express";
import { ISecurityNoteData } from "../types/securityNoteTypes.js";

import securityNoteSchemas from "../schemas/securityNoteSchemas.js";

function validateCreateSchema(req: Request, res: Response, next: NextFunction) {

    const data: ISecurityNoteData = req.body;
    const result = securityNoteSchemas.create.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const securityNoteMiddlewares = {

    validateCreateSchema
}

export default securityNoteMiddlewares;