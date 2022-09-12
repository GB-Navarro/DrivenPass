import Joi from "joi";
var numberPattern = /^[0-9]{4,13}$/;
var create = Joi.object({
    number: Joi.string().min(4).pattern(numberPattern).required(),
    name: Joi.string().min(4).max(50).required(),
    securityCode: Joi.number().greater(100).required(),
    expirationDate: Joi.string().min(5).max(5).required(),
    password: Joi.string().min(10).required(),
    isVirtual: Joi.bool().required(),
    type: Joi.string().valid("debit", "credit", "both").required(),
    tittle: Joi.string().min(4).required()
});
var cardSchemas = {
    create: create
};
export default cardSchemas;
