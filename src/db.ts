import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { singleton } from "tsyringe"

@singleton()
export class Database {
  public pool = postgres()
  public SQL = drizzle(this.pool)
}
