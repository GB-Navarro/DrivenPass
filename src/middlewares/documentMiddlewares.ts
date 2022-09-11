import { Request, Response, NextFunction } from "express";
import { IDocumentData } from "../types/documentTypes.js";

import documentSchemas from "../schemas/documentSchemas.js";

function validateCreateSchema(req: Request, res: Response, next: NextFunction) {

    const data: IDocumentData = req.body;
    const result = documentSchemas.create.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const documentMiddlewares = {

    validateCreateSchema
}

export default documentMiddlewares;