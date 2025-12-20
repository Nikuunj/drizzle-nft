import * as schema from "@/db/schema";
import { drizzle } from "drizzle-orm/mysql2";
import { createPool } from "mysql2/promise";


const pool = createPool({
  uri: process.env.DATABASE_URL!,
  waitForConnections: true,
});

const db = drizzle(pool);

