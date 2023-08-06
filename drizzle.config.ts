import type { Config } from "drizzle-kit"

export default {
  driver: "pg",
  schema: "src/**/*.table.ts",
  out: "./drizzle",
  dbCredentials: {
    user: process.env["PGUSER"],
    password: process.env["PGPASSWORD"],
    database: process.env["PGDATABASE"]!,
    host: process.env["PGHOST"]!,
  },
} satisfies Config
