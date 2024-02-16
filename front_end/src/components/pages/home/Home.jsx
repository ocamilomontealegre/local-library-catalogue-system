// Importing the SearchBook component
import { SearchBook } from "./SearchBook.jsx";

// Defining the Home component
export const Home = () => {
  return (
    // Rendering a <div> element with the class name "lcs-home"
    <div className="lcs-home">
      {/* Rendering the SearchBook component */}
      <SearchBook />
    </div>
  );
};