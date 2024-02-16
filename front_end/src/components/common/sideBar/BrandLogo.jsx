// Importing necessary component
import { Link } from 'react-router-dom';

// Defining the BrandLogo component
export const BrandLogo = () => {
  return (
    // Rendering a <div> element with the class name "lcs-brand-logo"
    <div className="lcs-brand-logo">  
      {/* Rendering a <Link> component wrapping an <img> element */}
      <Link to='/'>
        {/* Rendering an <img> element with the specified source and alt text */}
        <img src="https://i.postimg.cc/5yGjrDz8/Library-Logo-1.png" alt="Brand Logo" />
      </Link>
    </div>
  );
};