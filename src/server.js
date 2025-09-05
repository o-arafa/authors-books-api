const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authorsRouter = require("./routes/authors.route");
const booksRouter = require("./routes/books.route");
dotenv.config();
const app = express();
const port = process.env.PORT;
const url = process.env.MONGO_URI;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is working...");
});

app.use("/api/authors", authorsRouter);
app.use("/api/authors/:authorId/books", booksRouter);

mongoose
  .connect(url)
  .then(() => console.log("MongoDB connected successfully."))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
