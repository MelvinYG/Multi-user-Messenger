import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('Database URL is required');
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './drizzle/schema.js',
  out: './drizzle/migration',
  strict: true,
  verbose: true,
  dbCredentials: { 
    url: process.env.DATABASE_URL,
  }
});
