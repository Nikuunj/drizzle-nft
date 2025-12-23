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
  dateTime: timestamp("date_time").notNull(),
  createAt: timestamp("create_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export const eventsTags = mysqlTable("events_tags", {
  tagId: int("tagId").notNull().references(() => tags.id),
  eventsId: char("eventsId", { length: 36 }).notNull().references(() => events.id)
})

export const eventsTagsSchema = createInsertSchema(eventsTags, {
  tagId: z.array(z.number())
});
const baseSchema = createInsertSchema(events, {
  organizationName: z.string().min(1).max(255),
  title: z.string().min(1).max(50),
  description: z.string().min(1).max(255),
  location: z.string().min(1).max(255),
  statusId: z.number().min(1),
  price: z.number().min(0),
  userId: z.string().length(36),
}).pick({
  organizationName: true,
  title: true,
  description: true,
  location: true,
  statusId: true,
  price: true,
  userId: true,
  dateTime: true,
});

export const eventsSchema = z.union([
  z.object({
    mode: z.literal("create"),
    organizationName: baseSchema.shape.organizationName,
    title: baseSchema.shape.title,
    description: baseSchema.shape.description,
    location: baseSchema.shape.location,
    statusId: baseSchema.shape.statusId,
    price: baseSchema.shape.price,
    userId: baseSchema.shape.userId,
    dateTime: baseSchema.shape.dateTime,
    tagIds: z.array(z.number()),
  }),
  z.object({
    mode: z.literal("edit"),
    id: z.string().length(36),
    organizationName: baseSchema.shape.organizationName,
    title: baseSchema.shape.title,
    description: baseSchema.shape.description,
    location: baseSchema.shape.location,
    statusId: baseSchema.shape.statusId,
    price: baseSchema.shape.price,
    userId: baseSchema.shape.userId,
    dateTime: baseSchema.shape.dateTime,
    tagIds: z.array(z.number()),
  }),
]);
export type EventsSchema = z.infer<typeof eventsSchema>;
export type EventsTagsSchema = z.infer<typeof eventsTagsSchema>;
