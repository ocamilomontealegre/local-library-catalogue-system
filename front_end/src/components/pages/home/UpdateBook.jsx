import { Title } from "../../common/others/Title.jsx";
import { UpdateForm } from "../../common/others/UpdateForm.jsx";

export const UpdateBook = () => {
  return(
    <div className="lcs-add-book"> 
      <Title text='Update a new book' />
      <UpdateForm />
    </div>
  )
};