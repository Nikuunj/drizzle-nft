import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const tags = mysqlTable("tags", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

export const status = mysqlTable("status", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

