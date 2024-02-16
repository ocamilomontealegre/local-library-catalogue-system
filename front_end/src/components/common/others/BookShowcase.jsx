// Defining the BookShowcase component
export const BookShowcase = ({ bookData }) => {
  return (
    // Rendering a <div> element with the class name "lcs-book-showcase"
    <div className="lcs-book-showcase">
      {/* Rendering an <img> element with the src attribute set to the bookData's picture and alt attribute set to the bookData's title */}
      <img src={bookData.picture} alt={bookData.title} />
      {/* Rendering a <p> element with the text content set to the bookData's title */}
      <p>{bookData.title}</p>
      {/* Conditional rendering based on whether bookData exists and has properties */}
      {(bookData && Object.keys(bookData).length > 0)
        ? <p>{`${bookData.author}, pages: ${bookData.pages}`}</p>  // Displaying author and pages if bookData exists
        : null  // Rendering null if bookData is not provided or is empty
      }
    </div>
  );
};