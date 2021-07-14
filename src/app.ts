import express, { urlencoded } from "express";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { TestResolver } from "./resolvers/testResolver";
import { buildSchema } from "type-graphql";
import { ProductResolver } from "./resolvers/ProductResolver";
import cookieParser from "cookie-parser"

import AuthRoutes from "./routes/auth.routes";

import * as authMiddleware from "./middleware/auth.middleware";
const app = express();

// config

app.set("port", process.env.PORT || 4000);


// middlewares
app.use(cookieParser())
app.use(express.json());
app.use(urlencoded({extended: false}))

// routes
app.get('/', authMiddleware.verifySession, (req, res)=>{ 

  res.json({message: `Welcome to home`, user: res.locals})
})
app.use("/api/auth", AuthRoutes);



export const startServer = async () => {

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [TestResolver, ProductResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
    // plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
};
