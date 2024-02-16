import { randomUUID } from 'node:crypto'; // Importing randomUUID function from the crypto module
import { findBookById } from '../utils/functions.js'; // Importing findBookById function from utility functions
import { database } from '../utils/database.js'; // Importing the database array from the database utility

// Create new book entry in the database
export const createBookEntry = (bookData) => {
  try {
    // Validate book existence by its id
    const bookTitleValidation = findBookById(bookData.id); // Checking if a book with the same ID exists in the database
    if (bookTitleValidation) throw new Error(`${bookData.title} already exists in the database`); // Throwing an error if a book with the same ID exists

    // Add new book entry
    const newBook = { id: randomUUID(), ...bookData }; // Generating a new UUID as the book's ID and merging it with the provided book data
    if (!newBook.picture) newBook.picture = 'https://i.postimg.cc/C12VywF2/000-no-cover.jpg'; // Assigning a default picture if none is provided
    database.push(newBook); // Adding the new book entry to the database array
    
    return newBook;  // Returning the newly created book entry
  } catch (err) {
    return { message: err.message }; // Returning an object with an error message if an error occurs
  }
};