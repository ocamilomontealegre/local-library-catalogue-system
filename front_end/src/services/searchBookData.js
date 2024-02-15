import axios from 'axios';
import { baseUrl } from '../api/apiData.js';

export const searchBookData = async(bookReference) => {
  try {
    let result = await axios.get(`${baseUrl}/search?title=${encodeURIComponent(bookReference)}`)
    if(!result.data.message) return result.data;

    result = await axios.get(`${baseUrl}/search?author=${encodeURIComponent(bookReference)}`)
    if(!result.data.message) return result.data;

    return result.data;
  } catch (err) {
    console.error(err);
  };
};