var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import dotenv from "dotenv";
import Cryptr from "cryptr";
dotenv.config({ path: "../../.env" });
function decrypt(encryptedCredential) {
    var cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    var decryptedCredential = __assign({}, encryptedCredential);
    decryptedCredential.password = cryptr.decrypt(encryptedCredential.password);
    return decryptedCredential;
}
function decryptMany(encryptedCredentials) {
    var cryptr = new Cryptr(process.env.CRYPTR_SECRET);
    var decryptedCredentials = encryptedCredentials.map(function (encryptedCredential) {
        encryptedCredential.password = cryptr.decrypt(encryptedCredential.password);
        return encryptedCredential;
    });
    return decryptedCredentials;
}
var credentialUtils = {
    decrypt: decrypt,
    decryptMany: decryptMany
};
export default credentialUtils;
