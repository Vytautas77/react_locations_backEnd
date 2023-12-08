import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import locationRouter from "./src/routes/locations.js";
import usersRouter from "./src/routes/users.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(express.json());
app.use(locationRouter);
app.use(usersRouter);

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("Connected to db"))
  .catch((err) => {
    console.log("err:", err);
  });

app.get("/", function (req, res) {
  res.send("Hello World");
});

// eslint-disable-next-line no-undef
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`App connected on port ${process.env.PORT}`);
});
