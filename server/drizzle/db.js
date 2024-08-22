import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.js";
import postgres from "postgres";
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is not defined in environment variables");
  process.exit(1);
}

const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, { schema, logger: true });

export const checkDbConnection = async () => {
  try {
    await client`SELECT 1`;
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1);
  }
};