import { validateProperties } from '../validations/validations.js';
import { searchBookSchema } from '../validations/schemas.js';
import { findBookEntry } from '../services/findBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

export const searchBook = (req, res) => {
  const { title, author } = req.query;

  // Validate body properties
  const validationResult = validateProperties(searchBookSchema, { title, author });
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'searchBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );

  try {
    const bookData = findBookEntry(title, author);
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(bookData) );

    response( res, { type: 'success', name: 'searchBook', statusCode: 200 }, bookData );
  } catch (err) {
    response( res, { type: 'error', name: 'searchBook', statusCode: 500 }, { message: err.message } );
  };
};