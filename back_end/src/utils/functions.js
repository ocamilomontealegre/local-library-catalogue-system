
import { database } from './database.js';

// Find book by Id
export const findBookById = (bookId) => database.find(book => book.id === bookId);

// Find book by title
export const findBookByTitle = (bookTitle) => database.find(book => book.title === bookTitle);

// Find book by author
export const findBookByAuthor = (bookAuthor) => database.find(book => book.author === bookAuthor);

// Find book index
export const findBookIndex = (bookId) => database.findIndex(book => book.id === bookId);