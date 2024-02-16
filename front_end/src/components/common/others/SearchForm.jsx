// Importing necessary components
import { Input } from './Input.jsx';
import { FormButton } from './FormButton.jsx';

// Defining the SearchForm component
export const SearchForm = ({ onClick, inputText, inputChange, inputValue, buttonText }) => {
  return (
    // Rendering a <div> element with the class name "lcs-search-form"
    <div className="lcs-search-form">
      {/* Rendering the Input component with specified props */}
      <Input text={inputText} onChange={inputChange} value={inputValue} />
      {/* Rendering the FormButton component with specified props */}
      <FormButton text={buttonText} onClick={onClick} />
    </div>
  );
};