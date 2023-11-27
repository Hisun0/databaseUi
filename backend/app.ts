import express, { Express } from "express";
import mongoose from "mongoose";
import "dotenv/config.js";

import router from "./routes/postsRouter.ts";
import bodyParser from "body-parser";

const databaseUrl = process.env.DB_CONNECTION;

if (!databaseUrl) throw new Error("Your connection string is not defined!");

const connectDatabase = async () => {
  try {
    await mongoose.connect(databaseUrl);
    console.log("Database connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

connectDatabase().then(() =>
  app.listen(PORT, () => console.log("Server started"))
);
