export const BookInfo = ({ bookData }) => {
  return(
    <div className="lcs-book-info">
      <img src={bookData.picture} alt={bookData.title} />
      <p>{bookData.title}</p>
    </div>
  )
};