const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authors.controller");

router.get("/", authorsController.getAllAuthors);
router.get("/:authorId", authorsController.getAuthor);
router.post("/", authorsController.createAuthor);
router.put("/:authorId", authorsController.updateAuthor);
router.delete("/:authorId", authorsController.deleteAuthor);
module.exports = router;
