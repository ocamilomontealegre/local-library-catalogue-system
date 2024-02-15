import { SideBar } from '../common/sideBar/SideBar.jsx';
import { AppRouter } from '../../router/AppRouter.jsx';
import { Catalogue } from '../common/catalogue/Catalogue.jsx';
import { Footer } from '../common/footer/Footer.jsx';

export const MainContainer = () => {
  return(
    <div className="main-container">
      <SideBar />
      <AppRouter />
      <Catalogue />
      <Footer />
    </div>
  );
};