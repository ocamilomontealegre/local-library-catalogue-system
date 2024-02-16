// Importing necessary modules
import { useState } from 'react';
import { Title } from '../../common/others/Title.jsx';
import { SearchForm } from "../../common/others/SearchForm.jsx";
import { searchBookData } from '../../../services/searchBookData.js';
import { BookShowcase } from '../../common/others/BookShowcase.jsx';

// Defining the SearchBook component
export const SearchBook = () => {
  // State variables for input content and book data
  const [inputContent, setInputContent] = useState('');
  const [bookData, setBookData] = useState({});

  // Function to handle input content change
  const handleInputContent = (event) => {
    setInputContent(event.target.value);
  }

  // Function to fetch book data based on input content
  const fetchBookData = async () => {
    try {
      const result = await searchBookData(inputContent);
      setBookData(result);
      setInputContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    // Rendering a <div> element with the class name "lcs-search-book"
    <div className="lcs-search-book">
      {/* Rendering the Title component with the text "Search for your favorite book" */}
      <Title text='Search for your favorite book' />
      {/* Rendering the SearchForm component with specified props */}
      <SearchForm 
        inputText='Book name or Book author' 
        buttonText='Search'
        inputChange={handleInputContent}
        inputValue={inputContent}
        onClick={fetchBookData}
      />
      {/* Rendering the BookShowcase component with bookData as prop */}
      <BookShowcase bookData={bookData} />
    </div>
  );
};