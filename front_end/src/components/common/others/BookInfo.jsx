// Defining the BookInfo component
export const BookInfo = ({ bookData }) => {
  return (
    // Rendering a <div> element with the class name "lcs-book-info"
    <div className="lcs-book-info">
      {/* Rendering an <img> element with the src attribute set to the bookData's picture and alt attribute set to the bookData's title */}
      <img src={bookData.picture} alt={bookData.title} />
      {/* Rendering a <p> element with the text content set to the bookData's title */}
      <p>{bookData.title}</p>
    </div>
  );
};