import authSchemas from "../schemas/authSchemas.js";
function validateSignUpSchema(req, res, next) {
    var data = req.body;
    var result = authSchemas.signUp.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
function validateSignInSchema(req, res, next) {
    var data = req.body;
    var result = authSchemas.signIn.validate(data);
    if (result.error != undefined) {
        throw { code: "error_dataDontIsValid", message: result.error.message };
    }
    next();
}
var authMiddlewares = {
    validateSignUpSchema: validateSignUpSchema,
    validateSignInSchema: validateSignInSchema
};
export default authMiddlewares;
