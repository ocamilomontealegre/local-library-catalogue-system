// Importing necessary hooks and components
import { useState } from "react";
import { FormButton } from "./FormButton.jsx";
import { bookModel } from '../../../models/bookModel.js';
import { createBookEntry } from "../../../services/createBookEntry.js";
import { sendAlertMessage } from '../../../functions/sendAlertMessage.js';

// Defining the BookForm component
export const BookForm = () => {
  // State variable to hold the form data, initialized with default book model
  const [bookData, setBookData] = useState(bookModel);
  
  // Function to add a book entry
  const addBook = async (event) => {
    event.preventDefault();

    try {
      // Creating a book entry using the form data
      const result = await createBookEntry(bookData);
      // Displaying a success message if the book is added successfully
      if (result) sendAlertMessage(`Book added successfully`);
      // Resetting the form data to the default book model
      setBookData(bookModel);
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
    // Rendering the BookForm component
    <div className="lcs-form">
      <form className="lcs-f-body">
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
        {/* Submit button for adding a book */}
        <FormButton text="Add Book" onClick={addBook}/>
      </form>
    </div>
  );
};