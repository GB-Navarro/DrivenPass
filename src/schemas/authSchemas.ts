import Joi from "joi";

const signUp = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required()
})

const authSchemas = {
    signUp
}

export default authSchemas;