import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const getBooks = async() => {
  try {
    const result = await axios.get(baseUrl);
    return result.data.books;
  } catch (error) {
    console.error(error);
  }
}