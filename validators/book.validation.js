const Joi = require("joi");

const createBookSchema = Joi.object({
  title: Joi.string().min(2).max(200).required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title cannot be empty",
    "string.min": "Title must be at least 1 character long",
    "string.max": "Title cannot exceed 200 characters",
    "any.required": "Title is required",
  }),

  publishedDate: Joi.date().max("now").required().messages({
    "date.base": "Published date must be a valid date",
    "date.max": "Published date cannot be in the future",
    "any.required": "Published date is required",
  }),
});

const updateBookSchema = Joi.object({
  title: Joi.string().min(2).max(200).optional().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title cannot be empty",
    "string.min": "Title must be at least 1 character long",
    "string.max": "Title cannot exceed 200 characters",
  }),

  publishedDate: Joi.date().max("now").optional().messages({
    "date.base": "Published date must be a valid date",
    "date.max": "Published date cannot be in the future",
  }),
}).min(1);

module.exports = {
  createBookSchema,
  updateBookSchema,
};
