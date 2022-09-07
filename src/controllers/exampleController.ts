import { Request, Response } from "express";

function exampleController(req: Request, res: Response ){
    res.status(200).send("Hello World!");
}

const exampleControllers = {
    exampleController
}

export default exampleControllers;