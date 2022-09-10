import { Request, Response } from "express";
import { IUserData } from "../types/authTypes";
import { ICardData } from "../types/cardTypes";

async function create(req: Request, res: Response ){

    const userData: IUserData = res.locals.data;
    const cardData: ICardData = req.body;

    res.status(200).send("Create!");
}

const cardController = {
    create
}

export default cardController;