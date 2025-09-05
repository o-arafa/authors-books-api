const Book = require("../models/books.models");
const Author = require("../models/authors.models");

const getAllBooks = async (req, res) => {
  try {
    const authorExists = await Author.findById(req.params.authorId);
    if (!authorExists) {
      return res.status(404).json({ message: "Author not found" });
    }

    const books = await Book.find({ author: req.params.authorId });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({
      _id: req.params.bookId,
      author: req.params.authorId,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const createBook = async (req, res) => {
  try {
    const authorExists = await Author.findById(req.params.authorId);
    if (!authorExists) {
      return res.status(404).json({ message: "Author not found" });
    }
    const { title, publishedDate } = req.body;

    const newBook = new Book({
      title,
      publishedDate,
      author: req.params.authorId,
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, publishedDate } = req.body;
    const book = await Book.findOneAndUpdate(
      { _id: req.params.bookId, author: req.params.authorId },
      { title, publishedDate },
      { new: true, runValidators: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findOneAndDelete({
      _id: req.params.bookId,
      author: req.params.authorId,
    });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book has been deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
