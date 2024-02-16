import { findBookByTitle, findBookByAuthor } from "../utils/functions.js";

// Function to find a book entry based on title and author
export const findBookEntry = (bookTitle, bookAuthor) => {
  try {
    // Attempt to find a book by its title
    let bookData = findBookByTitle(bookTitle);
    if (bookData) return bookData; // If book is found by title, return its data

    // If book is not found by title, attempt to find it by author
    bookData = findBookByAuthor(bookAuthor);
    if (bookData) return bookData; // If book is found by author, return its data

    // If book is not found by title or author, return a message indicating book not found
    if (!bookData) return { message: `Book not found` };
  } catch (err) {
    // If an error occurs during the process, return an object with an error message
    return { message: err.message };
  }
};