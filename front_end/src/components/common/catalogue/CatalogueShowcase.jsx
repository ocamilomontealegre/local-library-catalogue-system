// Importing necessary components
import { Title } from "../others/Title.jsx";
import { CatalogueContent } from "./CatalogueContent.jsx";

// Defining the CatalogueShowcase component
export const CatalogueShowcase = () => {
  return (
    // Rendering a <div> element with the class name "lcs-catalogue-showcase"
    <div className="lcs-catalogue-showcase">
      {/* Rendering the Title component with the text 'Catalogue' */}
      <Title text='Catalogue' />
      {/* Rendering the CatalogueContent component */}
      <CatalogueContent />
    </div>
  );
};