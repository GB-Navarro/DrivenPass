import { cards } from "@prisma/client";

type ICardData = Omit<cards,"id" | "userId">