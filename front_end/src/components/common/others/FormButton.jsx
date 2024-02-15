export const FormButton = ({ onClick, text }) => {
  return(
    <button className="lcs-form-button" onClick={onClick}>{text}</button>
  )
};