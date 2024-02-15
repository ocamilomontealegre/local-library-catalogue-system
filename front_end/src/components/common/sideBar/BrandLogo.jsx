import { Link } from 'react-router-dom';

export const BrandLogo = () => {
  return(
    <div className="lcs-brand-logo">  
      <Link to='/'>
        <img src="https://i.postimg.cc/5yGjrDz8/Library-Logo-1.png" alt="Brand Logo" />
      </Link>
    </div>
  );
};