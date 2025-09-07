const express = require("express");
const router = express.Router({ mergeParams: true });
const booksController = require("../controllers/books.controller");
const validateObjectId = require("../middlewares/validateObjectId");
const validateRequest = require("../middlewares/validateRequest");
const {
  createBookSchema,
  updateBookSchema,
} = require("../validators/books.validators");

router.get("/", booksController.getAllBooks);
router.get("/:bookId", validateObjectId("bookId"), booksController.getBook);
router.post("/", validateRequest(createBookSchema), booksController.createBook);
router.put("/:bookId", validateObjectId("bookId"), booksController.updateBook);
router.delete(
  "/:bookId",
  validateObjectId("bookId"),
  validateRequest(updateBookSchema),
  booksController.deleteBook
);

module.exports = router;
