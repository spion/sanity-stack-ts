import { singleton } from "tsyringe"
import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js"
import postgres from "postgres"

@singleton()
export class Database {
  public queryClient = postgres()
  public db = drizzle(this.queryClient)
}
