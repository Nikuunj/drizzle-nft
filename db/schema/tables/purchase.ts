import { char, mysqlTable } from "drizzle-orm/mysql-core";
import { user } from "./user";
import { events } from "./event";


export const purchase = mysqlTable("purchase", {
  userId: char("user_id", { length: 36 }).notNull().references(() => user.id),
  eventId: char("event_id").notNull().references(() => events.id)
})
