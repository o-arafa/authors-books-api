const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Book", bookSchema);
