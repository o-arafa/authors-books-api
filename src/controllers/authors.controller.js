const Author = require("../models/authors.models");

const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const newAuthor = new Author(req.body);
    await newAuthor.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const { name, birthDate } = req.body;
    const author = await Author.findByIdAndUpdate(
      req.params.authorId,
      { name, birthDate },
      { new: true, runValidators: true }
    );

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json(author);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.authorId);
    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }
    res.status(200).json({ message: "Author has been deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = {
  getAllAuthors,
  createAuthor,
  getAuthor,
  updateAuthor,
  deleteAuthor,
};
