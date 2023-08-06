import type { Config } from "drizzle-kit"

export default {
  driver: "pg",
  schema: "src/**/*.table.ts",
  out: "./drizzle",
  dbCredentials: {
    user: "postgres",
    password: "postgrespassword",
    database: "postgres",
    host: "localhost",
  },
} satisfies Config
