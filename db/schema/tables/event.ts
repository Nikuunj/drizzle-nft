import { sql } from "drizzle-orm";
import { char, int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { user } from "./user";
import { status, tags } from "./tags";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";

export const events = mysqlTable("events", {
  id: char("id", { length: 36 }).primaryKey().default(sql`(UUID())`),
  organizationName: varchar("organization_name", { length: 255 }).notNull(),
  title: varchar("title", { length: 50 }).notNull(),
  description: varchar("description", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }).notNull(),
  statusId: int("status_id").notNull().references(() => status.id, {
    onUpdate: "cascade",
    onDelete: "cascade"
  }),
  price: int("price").notNull(),
  userId: char("user_id", { length: 36 }).notNull().references(() => user.id),
  dateTime: timestamp("date_time"),
  createAt: timestamp("create_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const eventsTags = mysqlTable("events_tags", {
  tagId: int("tagId").notNull().references(() => tags.id),
  eventsId: char("eventsId", { length: 36 }).notNull().references(() => events.id)
})

export const eventsSchema = createInsertSchema(events);
export const eventsTagsSchema = createInsertSchema(eventsTags);

export type EventsSchema = z.infer<typeof eventsSchema>;
export type EventsTagsSchema = z.infer<typeof eventsTagsSchema>;
