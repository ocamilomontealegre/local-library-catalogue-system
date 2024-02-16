import { validateProperties } from '../validations/validations.js';
import { addBookSchema } from '../validations/schemas.js';
import { createBookEntry } from '../services/createBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// This function is responsible for adding a new book.
export const addBook = (req, res) => {
  // Extracting book data from the request body.
  const bookData = { ...req.body };

  // Validate the properties of the book data against a schema.
  const validationResult = validateProperties(addBookSchema, bookData);
  if (validationResult.errorCode !== 0)
    // If validation fails, return an error response.
    return response(res, { type: 'error', name: 'addBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );

  try {
    // Attempt to create a new book entry using the provided book data.
    const newBook = createBookEntry(bookData);
    
    // Log the successful addition of the book.
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(newBook) );

    // Respond with a success message and the new book data.
    response( res, { type: 'success', name: 'addBook', statusCode: 201 }, newBook );
  } catch (err) {
    // If an error occurs during book creation, return an error response.
    response( res, { type: 'error', name: 'addBook', statusCode: 500 }, { message: err.message } );
  }
};