// import { singleton } from "tsyringe";
// import { Database } from "../db";
import { pgTable, serial, text } from "drizzle-orm/pg-core"

export let Hellos = pgTable("hellos", {
  id: serial("id"),
  name: text("name"),
})
