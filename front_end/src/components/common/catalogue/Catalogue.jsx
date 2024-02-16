// Importing necessary components
import { CatalogueCover } from "./CatalogueCover.jsx";
import { CatalogueShowcase } from "./CatalogueShowcase.jsx";

// Defining the Catalogue component
export const Catalogue = () => {
  return (
    // Rendering the Catalogue component
    <div className="lcs-catalogue">
      {/* Rendering the CatalogueCover component */}
      <CatalogueCover />
      {/* Rendering the CatalogueShowcase component */}
      <CatalogueShowcase />
    </div>
  );
};