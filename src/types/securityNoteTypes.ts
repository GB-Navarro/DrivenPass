import { securityNotes } from "@prisma/client";

export type ISecurityNoteData = Omit<securityNotes, "id">