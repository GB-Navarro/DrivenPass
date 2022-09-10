import { credentials } from "@prisma/client";

export type ICredentialData = Omit<credentials, "id" | "userId">
export type Tittle = Omit<credentials, "id" | "userId" | "url" | "username" | "password">