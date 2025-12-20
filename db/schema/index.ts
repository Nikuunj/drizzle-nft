import { mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const contact = mysqlTable("contact", {
  fistName: varchar("fist_name", { length: 100 }).notNull(),
  lastName: varchar("last_name", { length: 100 }).notNull(),
  email: varchar("email", { length: 100 }).primaryKey()
})
