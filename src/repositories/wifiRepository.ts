import { client } from "../dbStrategy/postgres.js";
import { IWifiData } from "../types/wifiTypes.js";
import { wifi } from "@prisma/client";

async function insert(data: Omit<wifi, "id">) {

    await client.wifi.create({
        data: data
    })
}

const wifiRepository = {

    insert
}

export default wifiRepository;