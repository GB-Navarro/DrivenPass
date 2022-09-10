import { ICardData } from "../types/cardTypes.js";

import Joi from "joi";

const create = Joi.object<ICardData>({

    number: Joi.string().min(4).required(),
    name: Joi.string().min(4).max(50).required(),
    securityCode: Joi.number().greater(100).required(),
    expirationDate: Joi.string().min(5).max(5).required(),
    password: Joi.string().min(10).required(),
    isVirtual: Joi.bool().required(),
    type: Joi.string().allow("debit","credit","both"),
    tittle: Joi.string().min(4).required()
})

const cardSchemas = {

    create
}

export default cardSchemas;