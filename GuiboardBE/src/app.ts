/* eslint-disable object-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { publisherRouter } from "./routes/publishers";

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://localhost:27017/guiboardDB");
}
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/guiboard/publishers", publisherRouter);
const port = process.env.PORT || 2000;
console.log(process.env.NODE_ENV);

app.listen(port, (err: void) => {
  if (err!) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
