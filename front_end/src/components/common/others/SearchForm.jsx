import { Input } from './Input.jsx';
import { FormButton } from './FormButton.jsx';

export const SearchForm = ({onClick, inputText, inputChange, inputValue, buttonText}) => {
  return(
    <div className="lcs-search-form">
      <Input text={inputText} onChange={inputChange} value={inputValue} />
      <FormButton text={buttonText} onClick={onClick} />
    </div>
  );
};