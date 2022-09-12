import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config({ path: "../../.env" });
function encryptPassword(password) {
    var cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    var encryptedPassword = cryptr.encrypt(password);
    return encryptedPassword;
}
var genericUtils = {
    encryptPassword: encryptPassword
};
export default genericUtils;
