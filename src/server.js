const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("API is working...");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
