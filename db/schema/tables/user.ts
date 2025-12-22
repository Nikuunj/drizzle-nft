import { sql } from "drizzle-orm";
import { char, int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";
import { teams } from "./teams";

export const user = mysqlTable("user", {
  id: char("id", { length: 36 }).primaryKey().default(sql`(UUID())`),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull()
})

export const players = mysqlTable("players", {
  userId: char("user_id", { length: 36 }).notNull().references(() => user.id),
  teamId: int("team_id").notNull().references(() => teams.id),
},
  (table) => ({
    pk: primaryKey({
      columns: [table.teamId, table.userId]
    })
  })
)
