import Joi from "joi";

const create = Joi.object({
    tittle: Joi.string().min(4).max(50).required(),
    annotation: Joi.string().min(4).max(1000).required()
})