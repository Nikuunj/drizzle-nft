import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";

export const teams = mysqlTable("teams", {
  id: int("id").notNull().autoincrement().primaryKey(),
  teamName: varchar("team_name", { length: 255 }).notNull().unique()
})

export const teamSchema = createInsertSchema(teams);

export type TeamSchema = z.infer<typeof teamSchema>;
