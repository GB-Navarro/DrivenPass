import pg from "pg";
import dotenv from "dotenv";
import pkg from "@prisma/client";
dotenv.config({ path: "../../.env" });
var PrismaClient = pkg.PrismaClient;
export var client = new PrismaClient();
var Pool = pg.Pool;
export var connection = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
