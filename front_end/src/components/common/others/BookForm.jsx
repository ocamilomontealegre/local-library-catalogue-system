import { useState } from "react";
import { FormButton } from "./FormButton.jsx";
import { bookModel } from '../../../models/bookModel.js';
import { createBookEntry } from "../../../services/createBookEntry.js";
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js'

export const BookForm = () => {
  const [ bookData, setBookData ] = useState(bookModel);
  
  const addBook = async (event) => {
    event.preventDefault();

    try {
      const result = await createBookEntry(bookData);
      if(result) sendAlertMessage(`Book added successfully`)
      setBookData(bookModel)
    } catch (err) {
      console.error(err);
    }
  }

  const handleInputChange = (event, key) => {
    setBookData({
      ...bookData,
      [key]: event.target.value
    });
  }

  return(
    <div className="lcs-form">
      <form className="lcs-f-body">
        <div className="lcs-f-group">
          <input type="text" name="title" id="title" value={bookData.title} onChange={(event) => handleInputChange(event, 'title')} placeholder="Title" />
          <input type="text" name="author" id="author" value={bookData.author} onChange={(event) => handleInputChange(event, 'author')} placeholder="Author" />
        </div>
        <div className="lcs-f-group">
          <input type="number" name="releaseYear" id="releaseYear" value={bookData.releaseYear} onChange={(event) => handleInputChange(event, 'releaseYear')} placeholder="Release Year" />
          <input type="number" name="pages" id="pages" value={bookData.pages} onChange={(event) => handleInputChange(event, 'pages')} placeholder="Pages" />
        </div>
        <div className="lcs-f-group">
          <input type="text" name="picture" id="picture" value={bookData.picture} onChange={(event) => handleInputChange(event, 'picture')} placeholder="Picture" />
        </div>
        <FormButton text="Add Book" onClick={addBook}/>
      </form>
    </div>
  );
};