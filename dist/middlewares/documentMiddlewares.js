import documentSchemas from "../schemas/documentSchemas.js";
function validateCreateSchema(req, res, next) {
    var data = req.body;
    var result = documentSchemas.create.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var documentMiddlewares = {
    validateCreateSchema: validateCreateSchema
};
export default documentMiddlewares;
