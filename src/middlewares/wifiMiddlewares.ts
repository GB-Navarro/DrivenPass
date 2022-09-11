import { Request, Response, NextFunction } from "express";
import { IWifiData } from "../types/wifiTypes.js";

import wifiSchemas from "../schemas/wifiSchemas.js";

function validateCreateSchema(req: Request, res: Response, next: NextFunction) {

    const data: IWifiData = req.body;
    const result = wifiSchemas.create.validate(data);

    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }

    next();
}

const wifiMiddlewares = {

    validateCreateSchema
}

export default wifiMiddlewares;