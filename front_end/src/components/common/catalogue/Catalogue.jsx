import { CatalogueCover } from "./CatalogueCover.jsx";
import { CatalogueShowcase } from "./CatalogueShowcase.jsx";

export const Catalogue = () => {
  return(
    <div className="lcs-catalogue">
      <CatalogueCover />
      <CatalogueShowcase />
    </div>
  );
};