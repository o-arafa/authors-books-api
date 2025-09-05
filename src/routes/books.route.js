const express = require("express");
const router = express.Router({ mergeParams: true });
const booksController = require("../controllers/books.controller");

router.get("/", booksController.getAllBooks);
router.get("/:bookId", booksController.getBook);
router.post("/", booksController.createBook);
router.put("/:bookId", booksController.updateBook);
router.delete("/:bookId", booksController.deleteBook);

module.exports = router;
