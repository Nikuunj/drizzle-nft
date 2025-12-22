import { char, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { events } from "./event";

export const tags = mysqlTable("tags", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

export const status = mysqlTable("status", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 255 }).notNull().unique()
})

export const eventsTags = mysqlTable("events_tags", {
  tagId: int("tagId").notNull().references(() => tags.id),
  eventsId: char("eventsId", { length: 36 }).notNull().references(() => events.id)
})
