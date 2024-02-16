// Importing the Axios library for making HTTP requests
import axios from 'axios';
// Importing the baseUrl from the apiData module
import { baseUrl } from '../api/apiData.js';

// Defining the searchBookData function
export const searchBookData = async (bookReference) => {
  try {
    // Making a GET request to search books by title
    let result = await axios.get(`${baseUrl}/search?title=${encodeURIComponent(bookReference)}`);
    // Checking if the search by title was successful and returning the data if found
    if (!result.data.message) return result.data;

    // If search by title didn't find any results, making a GET request to search books by author
    result = await axios.get(`${baseUrl}/search?author=${encodeURIComponent(bookReference)}`);
    // Checking if the search by author was successful and returning the data if found
    if (!result.data.message) return result.data;

    // If both searches failed to find any results, returning the data received from the server (likely an error message)
    return result.data;
  } catch (err) {
    // Handling errors if the request fails
    console.error(err);
  }
};