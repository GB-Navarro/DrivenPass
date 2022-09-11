import { cards } from "@prisma/client";
import { Request, Response } from "express";
import cardServices from "../services/cardServices.js";
import { IUserData } from "../types/authTypes.js";
import { ICardData } from "../types/cardTypes.js";

async function create(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;
    const cardData: ICardData = req.body;

    await cardServices.create(userId, cardData);

    res.status(201).send("Create!");
}

async function search(req: Request, res: Response){

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const cardsData: cards[] = await cardServices.search(userId);

    res.status(200).send(cardsData);
}

async function searchById(req: Request, res: Response){

    res.status(200).send("SearchById!");
}

const cardController = {
    create,
    search,
    searchById
}

export default cardController;