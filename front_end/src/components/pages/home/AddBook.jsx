import { Title } from "../../common/others/Title.jsx";
import { BookForm } from "../../common/others/BookForm.jsx";

export const AddBook = () => {
  return(
    <div className="lcs-add-book"> 
      <Title text='Add a new book' />
      <BookForm />
    </div>
  )
};