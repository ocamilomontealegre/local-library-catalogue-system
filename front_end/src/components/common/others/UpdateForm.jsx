import { useState } from "react";
import { FormButton } from "./FormButton.jsx";
import { updateModel } from '../../../models/updateModel.js';
import { updateBookEntry } from "../../../services/updateBookEntry.js";
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js'

export const UpdateForm = () => {
  const [ bookData, setBookData ] = useState(updateModel);
  
  const addBook = async (event) => {
    event.preventDefault();

    try {
      const result = await updateBookEntry(bookData);
      if(result) sendAlertMessage(`Book updated successfully`)
      setBookData(updateModel)
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
          <input type="text" name="id" id="bookId" value={bookData.id} onChange={(event) => handleInputChange(event, 'id')} placeholder="Book Id" />
        </div>
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