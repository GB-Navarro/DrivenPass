import { ICredentialData } from "../types/credentialTypes.js";

import Joi from "joi";

const create = Joi.object<ICredentialData>({
    
    url: Joi.string().uri().required(),
    username: Joi.string().min(4).required(),
    password: Joi.string().min(10).required(),
    tittle: Joi.string().min(4).required()
})

const credentialSchemas = {

    create
}

export default credentialSchemas;