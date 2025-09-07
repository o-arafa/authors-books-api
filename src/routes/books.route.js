const express = require("express");
const router = express.Router({ mergeParams: true });
const booksController = require("../controllers/books.controller");
const validateObjectId = require("../middlewares/validateObjectId");

router.get("/", booksController.getAllBooks);
router.get("/:bookId", validateObjectId("bookId"), booksController.getBook);
router.post("/", booksController.createBook);
router.put("/:bookId", validateObjectId("bookId"), booksController.updateBook);
router.delete(
  "/:bookId",
  validateObjectId("bookId"),
  booksController.deleteBook
);

module.exports = router;
