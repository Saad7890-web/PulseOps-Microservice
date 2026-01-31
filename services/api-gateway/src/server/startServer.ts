import { env } from "../config/env";
import { app } from "./app";

export const startServer = () => {
  app.listen(env.port, () => {
    console.log(`API Gateway running on port ${env.port}`);
  });
};
