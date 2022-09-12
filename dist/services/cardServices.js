var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import cardRepository from "../repositories/cardRepository.js";
import genericUtils from "../utils/genericUtils.js";
function checkTittleExistence(tittle, userId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardRepository.getTittleById(tittle, userId)];
                case 1:
                    result = _a.sent();
                    if (result != null) {
                        throw { code: "error_thisTittleAlreadyExist", message: "This tittle already exist!" };
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function create(userId, cardData) {
    return __awaiter(this, void 0, void 0, function () {
        var number, name, securityCode, expirationDate, password, isVirtual, type, tittle, encryptedSecurityCode, encryptedPassword, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    number = cardData.number, name = cardData.name, securityCode = cardData.securityCode, expirationDate = cardData.expirationDate, password = cardData.password, isVirtual = cardData.isVirtual, type = cardData.type, tittle = cardData.tittle;
                    return [4 /*yield*/, checkTittleExistence(tittle, userId)];
                case 1:
                    _a.sent();
                    encryptedSecurityCode = genericUtils.encryptPassword(securityCode);
                    encryptedPassword = genericUtils.encryptPassword(password);
                    data = {
                        userId: userId,
                        number: number,
                        name: name,
                        securityCode: encryptedSecurityCode,
                        expirationDate: expirationDate,
                        password: encryptedPassword,
                        isVirtual: isVirtual,
                        type: type,
                        tittle: tittle
                    };
                    return [4 /*yield*/, cardRepository.insert(data)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function search(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardRepository.search(userId)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function checkOwnership(userId, cardId) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, cardRepository.checkOwnership(userId, cardId)];
                case 1:
                    result = _a.sent();
                    if (result === null) {
                        throw { code: "error_InvalidRequest", message: "Invalid Request!" };
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
function searchById(userId, cardId) {
    return __awaiter(this, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkOwnership(userId, cardId)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
function deleteById(userId, cardId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, checkOwnership(userId, cardId)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, cardRepository.deleteById(cardId)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
var cardServices = {
    create: create,
    search: search,
    searchById: searchById,
    deleteById: deleteById
};
export default cardServices;
