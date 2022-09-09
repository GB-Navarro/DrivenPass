import { IAuthData } from "../types/authTypes";

import Joi from "joi";

const signUp = Joi.object <IAuthData>({

    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required()
})

const signIn = Joi.object <IAuthData>({

    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().min(10).required()
})

const authSchemas = {
    
    signUp,
    signIn
}

export default authSchemas;