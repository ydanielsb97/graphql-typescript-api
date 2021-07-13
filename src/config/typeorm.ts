import { createConnection } from "typeorm";

export const connect = async () => {
  await createConnection();
};
