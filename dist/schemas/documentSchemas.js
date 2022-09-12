import Joi from "joi";
var registrationNumberPattern = /^[0-9]{4,13}$/;
var create = Joi.object({
    type: Joi.string().valid("RG", "CNH").required(),
    name: Joi.string().min(4).max(50).required(),
    emissionDate: Joi.string().min(10).max(10).required(),
    validate: Joi.string().min(10).max(10).required(),
    registrationNumber: Joi.string().min(4).max(50).pattern(registrationNumberPattern).required(),
    issuer: Joi.string().min(4).max(50).required()
});
var documentSchemas = {
    create: create
};
export default documentSchemas;
