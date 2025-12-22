import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";

export const tags = mysqlTable("tags", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

export const status = mysqlTable("status", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

export const statusSchema = createInsertSchema(status);
export const tagsSchema = createInsertSchema(tags)

export type StatusSchema = z.infer<typeof statusSchema>;
export type TagsSchema = z.infer<typeof tagsSchema>;
