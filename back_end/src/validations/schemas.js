import Joi from 'joi';

export const addBookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  releaseYear: Joi.number().required(),
  pages: Joi.number().required(),
  picture: Joi.string().allow('')
});

export const bookIdSchema = Joi.object({
  bookId: Joi.string().required()
});

export const searchBookSchema = Joi.object({
  title: Joi.string().allow(''),
  author: Joi.string().allow('')
});
