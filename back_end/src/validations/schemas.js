// Importing Joi library
import Joi from 'joi';

// Schema for adding a book
export const addBookSchema = Joi.object({
  title: Joi.string().required(),         // Title of the book, required
  author: Joi.string().required(),        // Author of the book, required
  releaseYear: Joi.number().required(),   // Release year of the book, required
  pages: Joi.number().required(),         // Number of pages in the book, required
  picture: Joi.string().allow('')         // Picture of the book (optional, can be an empty string)
});

// Schema for book ID
export const bookIdSchema = Joi.object({
  bookId: Joi.string().required()         // Book ID, required
});

// Schema for searching books
export const searchBookSchema = Joi.object({
  title: Joi.string().allow(''),          // Title of the book (optional, can be an empty string)
  author: Joi.string().allow('')          // Author of the book (optional, can be an empty string)
});