import Joi from "joi";
var signUp = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required()
});
var signIn = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required()
});
var authSchemas = {
    signUp: signUp,
    signIn: signIn
};
export default authSchemas;
