import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config({ path: "../../.env" })

function encryptPassword(password: string): string {

    const cryptr = new Cryptr(process.env.CRYPTR_SECRET);

    const encryptedPassword = cryptr.encrypt(password);

    return encryptedPassword;
}

const genericUtils = {

    encryptPassword
}

export default genericUtils;