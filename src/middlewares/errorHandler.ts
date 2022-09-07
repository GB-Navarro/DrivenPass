import { Request, Response, NextFunction } from "express";

export default async function errorHandler(error: any, req: Request, res: Response, next: NextFunction){
    
    if(error.code === "error_dataDontIsValid"){
        return res.status(404).send({message: error.message});
    }
    if(error.code === "error_emailAlreadyIsUse"){
        return res.status(409).send({message: error.message});
    }
    
    return res.sendStatus(500);
}