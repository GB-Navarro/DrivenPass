import { client } from "../dbStrategy/postgres.js";
import { IWifiData } from "../types/wifiTypes.js";
import { wifi } from "@prisma/client";

async function insert(data: Omit<wifi, "id">) {

    await client.wifi.create({
        data: data
    })
}

async function search(userId: number){

    const result: wifi[] = await client.wifi.findMany({
        where:{
            userId: userId
        }
    });

    return result;
}

const wifiRepository = {

    insert,
    search
}

export default wifiRepository;