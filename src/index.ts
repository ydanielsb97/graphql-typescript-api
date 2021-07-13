import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/typeorm";

const main = async () => {
  await connect();
  console.log("Database is connected");

  const app = await startServer();

  app.listen(3000);

  console.log("Server on port", 3000);
};

main();
