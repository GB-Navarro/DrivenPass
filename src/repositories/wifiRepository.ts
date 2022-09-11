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

async function checkOwnership(userId: number, credentialId: number){

    const result: wifi = await client.wifi.findFirst({
        where:{
            id: credentialId,
            userId: userId       
        }
    })

    return result;
}

async function deleteById(wifiId: number){

    await client.wifi.delete({
        where:{
            id: wifiId
        }
    })
}

const wifiRepository = {

    insert,
    search,
    checkOwnership,
    deleteById
}

export default wifiRepository;