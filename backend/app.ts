import express, { Express } from "express";
import mongoose from "mongoose";
import "dotenv/config.js";

import router from "./routes/postsRouter.ts";
import bodyParser from "body-parser";

const databaseUrl = process.env.DB_CONNECTION;

if (!databaseUrl) throw new Error("Your connection string is not defined!");

mongoose
  .connect(databaseUrl)
  .then(() => console.log("DB connected"))
  .catch(() => new Error("Database is not connected!"));

const app: Express = express();
const PORT = process.env.PORT;

app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => console.log("Server started"));
