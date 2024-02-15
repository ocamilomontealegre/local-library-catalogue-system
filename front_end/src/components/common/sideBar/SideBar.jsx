import { BrandLogo } from './BrandLogo.jsx';
import { Nav } from './Nav.jsx';
import { SideFooter } from './SideFooter.jsx';

export const SideBar = () => {
  return(
    <div className='lcs-side-bar'>
      <BrandLogo />
      <Nav />
      <SideFooter />
    </div>
  );
};