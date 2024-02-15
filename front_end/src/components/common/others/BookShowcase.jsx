export const BookShowcase = ({bookData}) => {
  return(
    <div className="lcs-book-showcase">
      <img src={bookData.picture} alt={bookData.title} />
      <p>{bookData.title}</p>
      {(bookData && Object.keys(bookData).length > 0)
       ? <p>{`${bookData.author}, pages: ${bookData.pages}`}</p>
       : null
      }
    </div>
  );
};