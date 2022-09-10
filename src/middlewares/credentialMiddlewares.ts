import { Request, Response, NextFunction } from "express";
import { ICredentialData } from "../types/credentialTypes.js";

import credentialSchemas from "../schemas/credentialSchemas.js";

function validateCreateSchema(req: Request, res: Response, next: NextFunction) {

    const data: ICredentialData = req.body;
    const result = credentialSchemas.create.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const credentialMiddlewares = {

    validateCreateSchema
}

export default credentialMiddlewares;