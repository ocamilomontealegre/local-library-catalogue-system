import { useState } from 'react';
import { Title } from '../../common/others/Title.jsx'
import { SearchForm } from "../../common/others/SearchForm.jsx";
import { searchBookData } from '../../../services/searchBookData.js';
import { BookShowcase } from '../../common/others/BookShowcase.jsx';

export const SearchBook = () => {
  const [ inputContent, setInputContent ] = useState('');
  const [ bookData, setBookData ] = useState({});

  const handleInputContent = (event) => {
    setInputContent(event.target.value);
  }

  const fetchBookData = async() => {
    try {
      const result = await searchBookData(inputContent)
      setBookData(result);
      setInputContent('')
    } catch (err) {
      console.error(err);
    }
  };

  return(
    <div className="lcs-search-book">
      <Title text='Search for your favorite book' />
      <SearchForm 
        inputText='Book name or Book author' 
        buttonText='Search'
        inputChange={handleInputContent}
        inputValue={inputContent}
        onClick={fetchBookData}
      />
      <BookShowcase bookData={bookData} />
    </div>
  );
};