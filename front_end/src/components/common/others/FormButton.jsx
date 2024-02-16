// Defining the FormButton component
export const FormButton = ({ onClick, text }) => {
  return (
    // Rendering a <button> element with the class name "lcs-form-button"
    // When the button is clicked, the onClick function provided as prop is executed
    <button className="lcs-form-button" onClick={onClick}>
      {/* Text content of the button */}
      {text}
    </button>
  );
};