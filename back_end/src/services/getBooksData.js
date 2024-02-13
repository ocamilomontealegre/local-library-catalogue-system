import { database } from "../utils/database.js";

export const getBooksData = () => {
  try {
    return { books: [...database] };
  } catch (err) {
    return { message: err.message };
  }
};