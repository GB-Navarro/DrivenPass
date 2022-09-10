import { users } from "@prisma/client";

export type IAuthData = Omit<users, "id">
export type userPassword = Omit<users, "id" | "email">
export type userEmail = Omit<users, "id" | "password">
export type IUserData = Omit<users, "password">

/*
    const config = {
        headers: {
            "Authorization": "Bearer token_recebido" //Padrão da API (Bearer Authentication)
        }
    }
*/

/*export type Authorization = {
    headers: {
        "Authorization": string
    }
}*/