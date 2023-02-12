import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const port = process.env.PORT || 9091;

app.listen(port, () => {
  console.log("server running on port", port);
});
