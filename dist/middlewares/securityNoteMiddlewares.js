import securityNoteSchemas from "../schemas/securityNoteSchemas.js";
function validateCreateSchema(req, res, next) {
    var data = req.body;
    var result = securityNoteSchemas.create.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var securityNoteMiddlewares = {
    validateCreateSchema: validateCreateSchema
};
export default securityNoteMiddlewares;
