import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {

    if (error.code === "error_wrongPassword" || error.code === "error_notReceivedAToken" || error.code === "error_invalidToken") {
        return res.status(401).send(error.message);
    }
    if (error.code === "error_dataDontIsValid" || error.code === "error_thisEmailIsNotRegistered" || error.code === "error_InvalidRequest") {
        return res.status(404).send(error.message);
    }
    if (error.code === "error_emailAlreadyInUse" || error.code === "error_thisTittleAlreadyExist") {
        return res.status(409).send(error.message);
    }

    return res.sendStatus(500);
}