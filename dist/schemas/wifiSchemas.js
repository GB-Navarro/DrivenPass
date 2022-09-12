import Joi from "joi";
var create = Joi.object({
    name: Joi.string().min(4).max(50).required(),
    password: Joi.string().min(10).required(),
    tittle: Joi.string().min(4).required()
});
var authSchemas = {
    create: create
};
export default authSchemas;
