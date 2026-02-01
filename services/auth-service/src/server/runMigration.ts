import migrate from "node-pg-migrate";
import { migrationConfig } from "../config/migrate";

export const runMigrations = async () => {
  console.log("Running database migrations...");
  await migrate(migrationConfig);
  console.log("Migrations completed");
};
