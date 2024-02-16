import { database } from "../utils/database.js";

// Function to retrieve all books data from the database
export const getBooksData = () => {
  try {
    // Returning an object containing an array of all books from the database
    return { books: [...database] };
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};