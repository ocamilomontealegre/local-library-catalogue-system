// Importing the Axios library for making HTTP requests
import axios from 'axios';
// Importing the baseUrl from the apiData module
import { baseUrl } from '../api/apiData.js';

// Defining the updateBookEntry function
export const updateBookEntry = async (bookData) => {
  try {
    // Making a PUT request to update the book entry with the provided bookData
    const result = await axios.put(`${baseUrl}/${bookData.id}`, bookData);
    // Returning the data received from the server
    return result.data;
  } catch (err) {
    // Handling errors if the request fails
    console.error(err);
  }
};