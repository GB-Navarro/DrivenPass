import cardSchemas from "../schemas/cardSchemas.js";
function validateCreateSchema(req, res, next) {
    var data = req.body;
    var result = cardSchemas.create.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var cardMiddlewares = {
    validateCreateSchema: validateCreateSchema
};
export default cardMiddlewares;
