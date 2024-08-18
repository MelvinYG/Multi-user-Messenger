import { pgTable, uuid, varchar, text, serial, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  username: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: text("password").notNull()
});


export const messages = pgTable("messages", {
  id: serial("id").primaryKey().notNull(), 
  message: varchar("message", { length: 255 }).notNull(),
  userId: uuid("userId").references(() => users.id).notNull(), 
  createdAt: timestamp("created_at", {
    mode: "date",
    precision: 3,
  }).defaultNow(),
});