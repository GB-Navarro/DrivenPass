import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { IWifiData } from "../types/wifiTypes.js";
import { wifi } from "@prisma/client";

import wifiServices from "../services/wifiServices.js";

async function create(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const wifiData: IWifiData = req.body;

    await wifiServices.create(userId, wifiData);

    res.status(201).send("The wifi has been created!");
}

async function search(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const result: wifi[] = await wifiServices.search(userId);

    res.status(200).send(result);
}

async function searchById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: wifiId } = req.params;

    const result: wifi = await wifiServices.searchById(userId, parseInt(wifiId));

    res.status(200).send(result);
}

async function deleteById(req: Request, res: Response) {

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const { id: wifiId } = req.params;

    await wifiServices.deleteById(userId, parseInt(wifiId));

    res.status(202).send("This wifi has been deleted!");
}

const wifiController = {

    create,
    search,
    searchById,
    deleteById
}

export default wifiController;