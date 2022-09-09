import bcrypt from "bcrypt";

function encryptPassword(password: string): string {

    const encryptedPassword: string = bcrypt.hashSync(password, 10);

    return encryptedPassword;
}

const genericUtils = {
    
    encryptPassword
}

export default genericUtils;