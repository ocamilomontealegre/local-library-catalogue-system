import { getBooksData } from '../services/getBooksData.js';
import { logInfo } from '../utils/logger.js';
import { response } from '../utils/responseManager.js';

export const getBooks = (req, res) =>{  
  try {
    const books = getBooksData();
    logInfo(`Method: ${req.method} |`, `Path: ${req.path} |`, JSON.stringify(books) );

    response(res, { type: 'success', name: 'getBooks', statusCode: 200 }, books );
  } catch (err) {
    response( res, { type: 'error', name: 'getBooks', statusCode: 500 }, { message: err.message } );
  };
};