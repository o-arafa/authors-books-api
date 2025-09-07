const Joi = require("joi");

const createAuthorSchema = Joi.object({
  name: Joi.string().min(2).max(100).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must be at least 2 characters long",
    "string.max": "Name cannot exceed 100 characters",
    "any.required": "Name is required",
  }),

  birthDate: Joi.date().max("now").required().messages({
    "date.base": "Birth date must be a valid date",
    "date.max": "Birth date cannot be in the future",
    "any.required": "Birth date is required",
  }),
});

const updateAuthorSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(100)
    .pattern(/^[a-zA-Z\u0600-\u06FF\s'-]+$/)
    .optional()
    .messages({
      "string.base": "Name must be a string",
      "string.empty": "Name cannot be empty",
      "string.min": "Name must be at least 2 characters long",
      "string.max": "Name cannot exceed 100 characters",
      "string.pattern.base":
        "Name can only contain letters, spaces, hyphens, and apostrophes",
    }),

  birthDate: Joi.date().max("now").optional().messages({
    "date.base": "Birth date must be a valid date",
    "date.max": "Birth date cannot be in the future",
  }),
}).min(1);

module.exports = {
  createAuthorSchema,
  updateAuthorSchema,
};
