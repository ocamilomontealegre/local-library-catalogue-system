import { validateProperties } from '../validations/validations.js';
import { bookIdSchema } from '../validations/schemas.js';
import { modifyBookEntry } from '../services/modifyBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// Update a book entry
export const updateBook = (req, res) => {
  // Extracting book ID from the request parameters and updated book data from the request body.
  const { bookId } = req.params;
  const updatedBookData = { ...req.body };
  
  // Validate book ID property
  const validationResult = validateProperties(bookIdSchema, { bookId });
  if (validationResult.errorCode !== 0)
    // If validation fails, return an error response.
    return response(res, { type: 'error', name: 'updateBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );
    
  try {
    // Attempt to modify the book entry with the provided book ID and updated data.
    const result = modifyBookEntry(bookId, updatedBookData);
    
    // Log information about the request and the result of the modification.
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result) );

    // Send a success response with the result of the modification.
    response( res, { type: 'success', name: 'updateBook', statusCode: 200 }, result );
  } catch (err) {
    // If an error occurs during the modification, send an error response.
    response( res, { type: 'error', name: 'updateBook', statusCode: 500 }, { message: err.message } );
  }
};