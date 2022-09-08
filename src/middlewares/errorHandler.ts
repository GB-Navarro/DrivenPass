import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {

    if (error.code === "error_dataDontIsValid" || error.code === "error_thisEmailIsNotRegistered") {
        return res.status(404).send({ message: error.message });
    }
    if (error.code === "error_emailAlreadyInUse") {
        return res.status(409).send({ message: error.message });
    }
    if (error.code === "error_wrongPassword") {
        return res.status(401).send({ message: error.message });
    }

    return res.sendStatus(500);
}