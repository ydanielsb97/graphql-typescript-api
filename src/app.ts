import express from "express";
import { ApolloServer } from "apollo-server-express";
import { TestResolver } from "./resolvers/testResolver";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";

export const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TestResolver, ProductResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
};
