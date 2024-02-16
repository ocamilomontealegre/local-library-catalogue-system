// Importing necessary components
import { SideBar } from '../common/sideBar/SideBar.jsx';
import { AppRouter } from '../../router/AppRouter.jsx';
import { Catalogue } from '../common/catalogue/Catalogue.jsx';
import { Footer } from '../common/footer/Footer.jsx';

// Defining the MainContainer component
export const MainContainer = () => {
  return (
    // Rendering a <div> element with the class name "main-container"
    <div className="main-container">
      {/* Rendering the SideBar component */}
      <SideBar />
      {/* Rendering the AppRouter component */}
      <AppRouter />
      {/* Rendering the Catalogue component */}
      <Catalogue />
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
};