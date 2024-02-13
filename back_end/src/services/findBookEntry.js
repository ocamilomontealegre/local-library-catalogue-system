
import { findBookByTitle, findBookByAuthor } from "../utils/functions.js";

export const findBookEntry = (bookTitle, bookAuthor) => {
  try {
    let bookData = findBookByTitle(bookTitle)
    if(bookData) return bookData;

    bookData = findBookByAuthor(bookAuthor);
    if(bookData) return bookData;

    if(!bookData) return { message: `Book not found` };
  } catch (err) {
    return { message: err.message }
  };
};