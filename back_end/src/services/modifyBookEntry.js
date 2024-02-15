import { database } from '../utils/database.js';
import { findBookIndex } from '../utils/functions.js';

// Modify book entry properties
export const modifyBookEntry = (bookId, updatedBookData) => {
  const nonEmptyProperties = Object.entries(updatedBookData)
    .reduce((acc, [key, value]) => {
      if(value && value !== '') acc[key] = value;
      return acc;
    }, {});

  try {
    const bookIndex = findBookIndex(bookId);
    Object.assign(database[bookIndex], nonEmptyProperties);
    return { message: database[bookIndex] };
  } catch (err) {
    return { message: err.message };
  };
};