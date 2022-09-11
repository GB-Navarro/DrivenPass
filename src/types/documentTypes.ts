import { documents } from "@prisma/client";

export type IDocumentData = Omit<documents, "id" | "userId">;