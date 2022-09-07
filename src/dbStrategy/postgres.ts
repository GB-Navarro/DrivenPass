import pg from "pg";
import dotenv from "dotenv";
import pkg from "@prisma/client"

dotenv.config({ path: "../../.env" });

const { PrismaClient } = pkg;

export const client = new PrismaClient();

const { Pool } = pg;

export const connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});