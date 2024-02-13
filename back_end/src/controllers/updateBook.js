import { validateProperties } from '../validations/validations.js';
import { bookIdSchema } from '../validations/schemas.js';
import { modifyBookEntry } from '../services/modifyBookEntry.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// Update a book entry
export const updateBook = (req, res) => {
  const { bookId } = req.params;
  const updatedBookData = { ...req.body };
  
  // Validate id properties
  const validationResult = validateProperties(bookIdSchema, { bookId });
  if (validationResult.errorCode !== 0)
    return response(res, { type: 'error', name: 'updateBook', statusCode: validationResult.statusCode }, { message: validationResult.message } );
    
  try {
    const result = modifyBookEntry(bookId, updatedBookData);
    logInfo( `Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(result) );

    response( res, { type: 'success', name: 'updateBook', statusCode: 200 }, result );
  } catch (err) {
    response( res, { type: 'error', name: 'updateBook', statusCode: 500 }, { message: err.message } );
  }
};