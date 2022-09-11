import { IUserData } from "../types/authTypes";
import { IWifiData } from "../types/wifiTypes.js";
import { wifi } from "@prisma/client";

import genericUtils from "../utils/genericUtils.js";
import wifiRepository from "../repositories/wifiRepository.js";

async function create(userId: number, wifiData: IWifiData) {

    const { password, name, tittle }: IWifiData = wifiData;

    const encryptedPassword = genericUtils.encryptPassword(password);

    const data: Omit<wifi, "id"> = {
        userId: userId,
        name: name,
        password: encryptedPassword,
        tittle: tittle,
    }

    await wifiRepository.insert(data);
}

async function search(userId: number){

    const data: wifi[] = await wifiRepository.search(userId);

    return data;
}

const wifiServices = {

    create,
    search
}

export default wifiServices;