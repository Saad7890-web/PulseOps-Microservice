import { env } from "./env";

export const migrationConfig = {
  direction: "up",
  migrationsTable: "pgmigrations",
  dir: "migrations",
  databaseUrl: {
    host: env.db.host,
    port: env.db.port,
    user: env.db.user,
    password: env.db.password,
    database: env.db.name,
  },
};
