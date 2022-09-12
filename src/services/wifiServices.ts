import { IWifiData } from "../types/wifiTypes.js";
import { wifi } from "@prisma/client";

import wifiRepository from "../repositories/wifiRepository.js";
import genericUtils from "../utils/genericUtils.js";

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

async function search(userId: number) {

    const data: wifi[] = await wifiRepository.search(userId);

    return data;
}

async function checkOwnership(userId: number, wifiId: number) {

    const result = await wifiRepository.checkOwnership(userId, wifiId);

    if (result === null) {
        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
    }

    return result;
}

async function searchById(userId: number, wifiId: number) {

    const wifiData: wifi = await checkOwnership(userId, wifiId);

    return wifiData;
}

async function deleteById(userId: number, wifiId: number) {

    await checkOwnership(userId, wifiId);
    await wifiRepository.deleteById(wifiId);
}

const wifiServices = {

    create,
    search,
    searchById,
    deleteById
}

export default wifiServices;