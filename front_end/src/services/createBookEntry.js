// Importing Axios library for making HTTP requests
import axios from 'axios';
// Importing the baseUrl from the apiData module
import { baseUrl } from '../api/apiData.js';

// Defining the createBookEntry function
export const createBookEntry = async (bookData) => {
  try {
    // Making a POST request to the baseUrl with the provided bookData
    const result = await axios.post(baseUrl, bookData);
    // Returning the data received from the server
    return result.data;
  } catch (err) {
    // Handling errors if the request fails
    console.error(err);
  }
};