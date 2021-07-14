import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./database/typeorm";
import * as env from "./config/variables.env";

const main = async () => {
  await connect();
  console.log("Database is connected");

  const app = await startServer();

  app.listen(env.PORT);

  console.log("Server on port", env.PORT);

};

main();