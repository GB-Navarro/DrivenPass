import { IWifiData } from "../types/wifiTypes.js";

import Joi from "joi";

const create = Joi.object<IWifiData>({

    name: Joi.string().min(4).max(50).required(),
    password: Joi.string().min(10).required(),
    tittle: Joi.string().min(4).required()
})

const authSchemas = {

    create
}

export default authSchemas;