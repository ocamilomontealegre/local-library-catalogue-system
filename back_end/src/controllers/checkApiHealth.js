import { response } from '../utils/responseManager.js';

// This function checks the health of the API.
export const checkApiHealth = (req, res) => {
  // Respond with a success message indicating that the API is live.
  response(res, { type: 'success', name: 'addBook', statusCode: 200 }, { message: 'Great News! The API is now live' } );
}