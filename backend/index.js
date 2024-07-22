import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/server.js";

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on PORT:${PORT}`);
  });
});