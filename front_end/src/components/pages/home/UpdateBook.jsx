// Importing necessary components
import { Title } from "../../common/others/Title.jsx";
import { UpdateForm } from "../../common/others/UpdateForm.jsx";

// Defining the UpdateBook component
export const UpdateBook = () => {
  return (
    // Rendering a <div> element with the class name "lcs-add-book"
    <div className="lcs-add-book"> 
      {/* Rendering the Title component with the text "Update a new book" */}
      <Title text='Update a new book' />
      {/* Rendering the UpdateForm component */}
      <UpdateForm />
    </div>
  );
};