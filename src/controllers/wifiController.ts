import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { IWifiData } from "../types/wifiTypes.js";

import wifiServices from "../services/wifiServices.js";

async function create(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const wifiData: IWifiData = req.body;

    await wifiServices.create(userId, wifiData);

    res.status(201).send("The wifi has been created!");
}

async function search(req: Request, res: Response) {

    res.status(200).send("The wifi has been created!");
}

async function searchById(req: Request, res: Response) {

    res.status(200).send("The wifi has been created!");
}

const wifiController = {

    create,
    search,
    searchById
}

export default wifiController;