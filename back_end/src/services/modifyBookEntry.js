import { database } from '../utils/database.js'; // Importing the database array from the database utility
import { findBookIndex } from '../utils/functions.js'; // Importing the findBookIndex function from utility functions

// Modify book entry properties
export const modifyBookEntry = (bookId, updatedBookData) => {
  // Filter out properties with empty values
  const nonEmptyProperties = Object.entries(updatedBookData)
    .reduce((acc, [key, value]) => {
      if (value && value !== '') acc[key] = value; // Add non-empty properties to the accumulator
      return acc;
    }, {});

  try {
    // Find the index of the book in the database array
    const bookIndex = findBookIndex(bookId);

    // Merge updated properties into the book entry in the database
    Object.assign(database[bookIndex], nonEmptyProperties);

    // Return a success message with the modified book entry
    return { message: database[bookIndex] };
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};