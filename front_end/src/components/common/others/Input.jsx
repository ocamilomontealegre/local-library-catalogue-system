// Defining the Input component
export const Input = ({ text, onChange, value }) => {
  return (
    // Rendering an <input> element with the specified props
    <input 
      className='lcs-form-input'  // CSS class name for styling
      type='text'                  // Type of input (text)
      placeholder={text}           // Placeholder text displayed when the input field is empty
      onChange={onChange}          // Event handler for input changes
      value={value}                // Value of the input field
    />
  );
};