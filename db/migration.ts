import config from "@/drizzle.config"
import { drizzle } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import { createPool } from "mysql2/promise"

const pool = createPool({
  uri: process.env.DATABASE_URL!,
  waitForConnections: true,
});

const db = drizzle(pool);


async function main() {

  if (config.out) {
    await migrate(db, { migrationsFolder: config.out });
    console.log("Migration done!");
  }
}

main()
  .catch(e => {
    console.log(e);
  })
  .finally(async () => {
    await pool.end()
    console.log("Database disconneted");

  })
