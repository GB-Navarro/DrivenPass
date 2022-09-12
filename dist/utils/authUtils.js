import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
dotenv.config({ path: "../../.env" });
function encryptPassword(password) {
    var encryptedPassword = bcrypt.hashSync(password, 10);
    return encryptedPassword;
}
function generateRegistrationData(email, encryptedPassword) {
    var registrationData = {
        email: email,
        password: encryptedPassword
    };
    return registrationData;
}
function generateToken(email, id) {
    var userInfo = {
        id: id,
        email: email
    };
    var secretKey = process.env.JWT_SECRET;
    var configs = { expiresIn: 60 * 60 }; /* O token irá expirar em 60 minutos*/
    var token = jwt.sign(userInfo, secretKey, configs);
    return token;
}
function filterToken(token) {
    var filteredToken = "";
    for (var index = 7; index < token.length; index++) {
        filteredToken += token[index];
    }
    return filteredToken;
}
function checkTokenValidity(token) {
    var secretKey = process.env.JWT_SECRET;
    try {
        var _a = jwt.verify(token, secretKey), id = _a.id, email = _a.email;
        var data = {
            id: id,
            email: email
        };
        return data;
    }
    catch (error) {
        throw { code: "error_invalidToken", message: "Invalid token!" };
    }
}
var authUtils = {
    encryptPassword: encryptPassword,
    generateRegistrationData: generateRegistrationData,
    generateToken: generateToken,
    filterToken: filterToken,
    checkTokenValidity: checkTokenValidity
};
export default authUtils;
