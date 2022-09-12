import wifiSchemas from "../schemas/wifiSchemas.js";
function validateCreateSchema(req, res, next) {
    var data = req.body;
    var result = wifiSchemas.create.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var wifiMiddlewares = {
    validateCreateSchema: validateCreateSchema
};
export default wifiMiddlewares;
