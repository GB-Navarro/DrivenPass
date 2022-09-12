import authUtils from "../utils/authUtils.js";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
function validateToken(req, res, next) {
    var token = req.headers.authorization;
    if (token === undefined) {
        throw { code: "error_notReceivedAToken", message: "Token not found!" };
    }
    var filteredToken = authUtils.filterToken(token);
    var data = authUtils.checkTokenValidity(filteredToken);
    res.locals.data = data;
    next();
}
var genericMiddlewares = {
    validateToken: validateToken
};
export default genericMiddlewares;
