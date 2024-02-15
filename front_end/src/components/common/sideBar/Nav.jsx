import { Link } from 'react-router-dom';

export const Nav = () => {
  return(
    <nav className="lcs-nav">
      <ul>
        <li>
          <Link to='add'>Add New Book</Link>
        </li>
        <li>
          <Link to='update'>Update Book Properties</Link>
        </li>
      </ul>
    </nav>
  )
};