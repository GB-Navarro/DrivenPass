import Joi from "joi";
var create = Joi.object({
    url: Joi.string().uri().required(),
    username: Joi.string().min(4).required(),
    password: Joi.string().min(10).required(),
    tittle: Joi.string().min(4).required()
});
var credentialSchemas = {
    create: create
};
export default credentialSchemas;
