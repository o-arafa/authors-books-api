const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authors.controller");
const validateObjectId = require("../middlewares/validateObjectId");

router.get("/", authorsController.getAllAuthors);
router.get(
  "/:authorId",
  validateObjectId("authorId"),
  authorsController.getAuthor
);
router.post("/", authorsController.createAuthor);
router.put(
  "/:authorId",
  validateObjectId("authorId"),
  authorsController.updateAuthor
);
router.delete(
  "/:authorId",
  validateObjectId("authorId"),
  authorsController.deleteAuthor
);
module.exports = router;
