import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const teams = mysqlTable("teams", {
  id: int("id").notNull().autoincrement().primaryKey(),
  teamName: varchar("team_name", { length: 255 }).notNull().unique()
})
