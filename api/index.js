import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running in 3000 port!!!");
});
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
