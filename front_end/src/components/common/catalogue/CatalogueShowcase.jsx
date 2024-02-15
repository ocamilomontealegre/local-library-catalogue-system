import { Title } from "../others/Title.jsx";
import { CatalogueContent } from "./CatalogueContent.jsx";

export const CatalogueShowcase = () => {
  return(
    <div className="lcs-catalogue-showcase">
      <Title text='Catalogue' />
      <CatalogueContent />
    </div>
  );
};