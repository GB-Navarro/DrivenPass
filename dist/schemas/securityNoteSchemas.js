import Joi from "joi";
var create = Joi.object({
    tittle: Joi.string().min(4).max(50).required(),
    text: Joi.string().min(4).max(1000).required()
});
var securityNoteSchemas = {
    create: create
};
export default securityNoteSchemas;
