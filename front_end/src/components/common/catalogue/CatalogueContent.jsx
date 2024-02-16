// Importing necessary hooks and components
import { useState, useEffect } from 'react';
import { BookInfo } from '../others/BookInfo.jsx';
import { getBooks } from "../../../services/getBooks.js";

// Defining the CatalogueContent component
export const CatalogueContent = () => {
  // State variable to hold the fetched book data
  const [booksData, setBooksData] = useState([]);

  // useEffect hook to fetch book data when the component mounts
  useEffect(() => {
    // Function to fetch book data asynchronously
    const fetchBooksData = async () => {
      try {
        // Fetching book data using the getBooks function
        const data = await getBooks();
        // Setting the fetched book data to the state variable
        setBooksData(data);
      } catch (err) {
        // Handling errors, if any, by logging them to the console
        console.error(err);
      }
    };

    // Calling the fetchBooksData function when the component mounts
    fetchBooksData();
  }, []); // Empty dependency array to ensure useEffect runs only once, when the component mounts

  return (
    // Rendering the CatalogueContent component
    <div className="lcs-catalogue-content">
      {/* Mapping over the booksData array and rendering BookInfo component for each book */}
      {booksData?.map((book) => <BookInfo key={book.id} bookData={book} />)}
    </div>
  );
};