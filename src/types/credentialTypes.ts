import { credentials } from "@prisma/client";

export type ICredentialData = Omit<credentials, "id">
export type Tittle = Omit<credentials, "id" | "userId" | "url" | "username" | "password">