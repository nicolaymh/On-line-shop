// CSS Styles ( SASS Modules ).
import style from "../../../sass/products/FilterSelectProducts.module.scss";

// Components.
import GenericComponents from "../../generic-components";

const FilterSelectProducts = ({
   categoryinfoAll,
   subcategoriesList,
   handleSelectCategory,
   handleSelectSubcategory,
}) => {
   return (
      <div className={style.selectContainer}>
         <GenericComponents.SelectOptions
            handleSelected={handleSelectCategory}
            arrayOptions={categoryinfoAll}
            infoTitle="Categories"
         />

         <GenericComponents.SelectOptions
            handleSelected={handleSelectSubcategory}
            arrayOptions={subcategoriesList}
            infoTitle="Subcategories"
         />
      </div>
   );
};

export default FilterSelectProducts;
