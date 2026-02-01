import { runMigrations } from "./server/runMigration";
import { startServer } from "./server/startServer";

const bootstrap = async () => {
  await runMigrations();
  startServer();
};

bootstrap();
