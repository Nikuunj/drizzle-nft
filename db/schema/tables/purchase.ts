import { char, int, mysqlTable } from "drizzle-orm/mysql-core";
import { user } from "./user";
import { events } from "./event";


export const purchase = mysqlTable("purchase", {
  userId: char("user_id", { length: 36 }).notNull().references(() => user.id),
  eventId: int("event_id").notNull().references(() => events.id)
})
