import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import locationRouter from "./src/routes/locations.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(locationRouter);

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected"))
  .catch((err) => {
    console.log("err:", err);
  });

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log(`App connected on port ${process.env.PORT}`);
});
