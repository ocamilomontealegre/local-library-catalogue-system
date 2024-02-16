// Importing the Axios library for making HTTP requests
import axios from 'axios';
// Importing the baseUrl from the apiData module
import { baseUrl } from '../api/apiData.js';

// Defining the getBooks function
export const getBooks = async () => {
  try {
    // Making a GET request to the baseUrl to fetch book data
    const result = await axios.get(baseUrl);
    // Returning the books data from the response
    return result.data.books;
  } catch (error) {
    // Handling errors if the request fails
    console.error(error);
  }
};