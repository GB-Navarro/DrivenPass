import { Request, Response } from "express";
import { IUserData } from "../types/authTypes.js";
import { IWifiData } from "../types/wifiTypes.js";

async function create(req: Request, res: Response ){

    const { id: userId }: Omit<IUserData, "email"> = res.locals.data;

    const wifiData: IWifiData = req.body;

    //await wifiServices.create();

    res.status(201).send("The wifi has been created!");
}

const wifiController = {

    create
}

export default wifiController;