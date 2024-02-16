// Importing necessary components
import { BrandLogo } from './BrandLogo.jsx';
import { Nav } from './Nav.jsx';
import { SideFooter } from './SideFooter.jsx';

// Defining the SideBar component
export const SideBar = () => {
  return (
    // Rendering a <div> element with the class name 'lcs-side-bar'
    <div className='lcs-side-bar'>
      {/* Rendering the BrandLogo component */}
      <BrandLogo />
      {/* Rendering the Nav component */}
      <Nav />
      {/* Rendering the SideFooter component */}
      <SideFooter />
    </div>
  );
};