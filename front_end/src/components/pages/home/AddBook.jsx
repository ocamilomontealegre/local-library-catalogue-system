// Importing necessary components
import { Title } from "../../common/others/Title.jsx";
import { BookForm } from "../../common/others/BookForm.jsx";

// Defining the AddBook component
export const AddBook = () => {
  return (
    // Rendering a <div> element with the class name "lcs-add-book"
    <div className="lcs-add-book"> 
      {/* Rendering the Title component with the text "Add a new book" */}
      <Title text='Add a new book' />
      {/* Rendering the BookForm component */}
      <BookForm />
    </div>
  );
};