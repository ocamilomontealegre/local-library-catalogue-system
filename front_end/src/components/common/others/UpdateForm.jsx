// Importing necessary hooks and components
import { useState } from "react";
import { FormButton } from "./FormButton.jsx";
import { updateModel } from '../../../models/updateModel.js';
import { updateBookEntry } from "../../../services/updateBookEntry.js";
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js';

// Defining the UpdateForm component
export const UpdateForm = () => {
  // State variable to hold the form data, initialized with default update model
  const [bookData, setBookData] = useState(updateModel);
  
  // Function to update a book entry
  const addBook = async (event) => {
    event.preventDefault();

    try {
      // Updating a book entry using the form data
      const result = await updateBookEntry(bookData);
      // Displaying a success message if the book is updated successfully
      if (result) sendAlertMessage(`Book updated successfully`);
      // Resetting the form data to the default update model
      setBookData(updateModel);
    } catch (err) {
      // Handling errors by logging them to the console
      console.error(err);
    }
  };

  // Function to handle input changes in the form fields
  const handleInputChange = (event, key) => {
    setBookData({
      ...bookData,
      [key]: event.target.value
    });
  };

  return (
    // Rendering the UpdateForm component
    <div className="lcs-form">
      <form className="lcs-f-body">
        {/* Form field for book ID */}
        <div className="lcs-f-group">
          <input type="text" name="id" id="bookId" value={bookData.id} onChange={(event) => handleInputChange(event, 'id')} placeholder="Book Id" />
        </div>
        {/* Form fields for title and author */}
        <div className="lcs-f-group">
          <input type="text" name="title" id="title" value={bookData.title} onChange={(event) => handleInputChange(event, 'title')} placeholder="Title" />
          <input type="text" name="author" id="author" value={bookData.author} onChange={(event) => handleInputChange(event, 'author')} placeholder="Author" />
        </div>
        {/* Form fields for release year and pages */}
        <div className="lcs-f-group">
          <input type="number" name="releaseYear" id="releaseYear" value={bookData.releaseYear} onChange={(event) => handleInputChange(event, 'releaseYear')} placeholder="Release Year" />
          <input type="number" name="pages" id="pages" value={bookData.pages} onChange={(event) => handleInputChange(event, 'pages')} placeholder="Pages" />
        </div>
        {/* Form field for picture */}
        <div className="lcs-f-group">
          <input type="text" name="picture" id="picture" value={bookData.picture} onChange={(event) => handleInputChange(event, 'picture')} placeholder="Picture" />
        </div>
        {/* Submit button for updating a book */}
        <FormButton text="Update Book" onClick={addBook}/>
      </form>
    </div>
  );
};