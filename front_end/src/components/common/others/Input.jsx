export const Input = ({ text, onChange, value }) => {
  return(
    <input 
      className='lcs-form-input' 
      type='text' 
      placeholder={text} 
      onChange={onChange} 
      value={value} 
    />
  );
};