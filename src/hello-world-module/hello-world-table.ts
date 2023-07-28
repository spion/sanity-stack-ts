// import { singleton } from "tsyringe";
// import { Database } from "../db";
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core"

export let Hellos = pgTable("hellos", {})
