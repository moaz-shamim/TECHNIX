import express from "express";
import cors from "cors";
// import userRoutes from "../routes/user.routes.js";
// import authRoutes from "../routes/auth.routes.js";
import { productRouter } from "../routes/product.routes.js";
import { errorHandler } from "../middlewares/error.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to Server");
});



app.use(errorHandler);
app.use("/api/product", productRouter);

export default app;
