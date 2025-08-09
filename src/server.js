const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT;
const url = process.env.MONGO_URI;

const app = express();

app.get("/", (req, res) => {
  res.send("API is working...");
});

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
