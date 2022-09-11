import { documents } from "@prisma/client";

type IDocumentData = Omit<documents, "id" | "userId">;