import { users } from "@prisma/client";


export type userEmail =  Omit<users, "id" | "password">

export type userPassword = Omit<users, "id" | "email">

