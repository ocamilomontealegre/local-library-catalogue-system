// Importing necessary component
import { Link } from 'react-router-dom';

// Defining the Nav component
export const Nav = () => {
  return (
    // Rendering a <nav> element with the class name "lcs-nav"
    <nav className="lcs-nav">
      <ul>
        {/* Rendering a list item with a Link to the 'add' route */}
        <li>
          <Link to='add'>Add New Book</Link>
        </li>
        {/* Rendering a list item with a Link to the 'update' route */}
        <li>
          <Link to='update'>Update Book Properties</Link>
        </li>
      </ul>
    </nav>
  );
};