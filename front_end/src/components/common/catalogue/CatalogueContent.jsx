import { useState, useEffect } from 'react';
import { BookInfo } from '../others/BookInfo.jsx';
import { getBooks } from "../../../services/getBooks.js";

export const CatalogueContent = () => {
  const [ booksData, setBooksData ] = useState([]);
  
  useEffect(() => {
    const fetchBooksData = async() => {
      try {
        setBooksData(await getBooks());
      } catch (err) {
        console.error(err);
      }
    };

    fetchBooksData();
  }, [])

  return(
    <div className="lcs-catalogue-content">
      {booksData?.map((book) => <BookInfo key={book.id} bookData={book} />)}
    </div>
  );
};