import credentialSchemas from "../schemas/credentialSchemas.js";
function validateCreateSchema(req, res, next) {
    var data = req.body;
    var result = credentialSchemas.create.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var credentialMiddlewares = {
    validateCreateSchema: validateCreateSchema
};
export default credentialMiddlewares;
