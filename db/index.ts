import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool, type Pool } from "mysql2/promise";

declare global {
  // Prevent multiple pools in dev (HMR)
  // eslint-disable-next-line no-var
  var mysqlPool: Pool | undefined;
}

const pool =
  global.mysqlPool ??
  createPool({
    uri: process.env.DATABASE_URL!,
    waitForConnections: true,
    connectionLimit: 10,
  });

if (process.env.NODE_ENV !== "production") {
  global.mysqlPool = pool;
}

export const db = drizzle(pool, {
  schema,
  mode: "default",
});

