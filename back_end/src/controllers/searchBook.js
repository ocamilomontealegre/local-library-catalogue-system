import { validateProperties } from '../validations/validations.js';
import { searchBookSchema } from '../validations/schemas.js';
import { findBookEntry } from '../services/findBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// This function handles searching for books based on title and/or author.
export const searchBook = (req, res) => {
  // Extracting title and author from the query parameters.
  const { title, author } = req.query;

  // Validate query parameters against the search schema.
  const validationResult = validateProperties(searchBookSchema, { title, author });
  if (validationResult.errorCode !== 0)
    // If validation fails, return an error response.
    return response(res, { type: 'error', name: 'searchBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );

  try {
    // Attempt to find book entry based on title and author.
    const bookData = findBookEntry(title, author);
    
    // Log information about the request and the retrieved book data.
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(bookData) );

    // Send a success response with the retrieved book data.
    response( res, { type: 'success', name: 'searchBook', statusCode: 200 }, bookData );
  } catch (err) {
    // If an error occurs during the search, send an error response.
    response( res, { type: 'error', name: 'searchBook', statusCode: 500 }, { message: err.message } );
  };
};