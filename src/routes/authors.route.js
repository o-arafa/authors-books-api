const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authors.controller");
const validateObjectId = require("../middlewares/validateObjectId");
const validateRequest = require("../middlewares/validateRequest");
const {
  createAuthorSchema,
  updateAuthorSchema,
} = require("../validators/author.validation");

router.get("/", authorsController.getAllAuthors);
router.get(
  "/:authorId",
  validateObjectId("authorId"),
  authorsController.getAuthor
);
router.post(
  "/",
  validateRequest(createAuthorSchema),
  authorsController.createAuthor
);
router.put(
  "/:authorId",
  validateObjectId("authorId"),
  validateRequest(updateAuthorSchema),
  authorsController.updateAuthor
);
router.delete(
  "/:authorId",
  validateObjectId("authorId"),
  authorsController.deleteAuthor
);
module.exports = router;
