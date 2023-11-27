import express, { Express } from "express";
import mongoose from "mongoose";
import router from "./routes/postsRouter";
import bodyParser from "body-parser";

mongoose
  .connect("mongodb://localhost:27017/myDB")
  .then(() => console.log("DB connected"))
  .catch(() => console.log("ne poshlo"));

const app: Express = express();
const PORT = 8080;

app.use(express.static("dist"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => console.log("Server started"));
