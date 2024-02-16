import { getBooksData } from '../services/getBooksData.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

// This function retrieves data for all books.
export const getBooks = (req, res) => {  
  try {
    // Attempt to retrieve data for all books.
    const books = getBooksData();

    // Log information about the request and the retrieved books.
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(books) );

    // Send a success response with the retrieved books data.
    response(res, { type: 'success', name: 'getBooks', statusCode: 200 }, books );
  } catch (err) {
    // If an error occurs during data retrieval, send an error response.
    response( res, { type: 'error', name: 'getBooks', statusCode: 500 }, { message: err.message } );
  };
};