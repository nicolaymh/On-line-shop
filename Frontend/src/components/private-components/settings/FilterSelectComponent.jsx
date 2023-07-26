// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/FilterSelectComponent.module.scss";

// Components.
import GenericComponents from "../../generic-components";

const FilterSelectComponent = (props) => {
   const {
      handleSelectCategory,
      categoryinfoAll,
      handleSelectSubcategory,
      subcategoriesList,
      selectRef,
   } = props;

   return (
      <div className={style.selectContainer}>
         <GenericComponents.SelectOptions
            handleSelected={handleSelectCategory}
            arrayOptions={categoryinfoAll}
            infoTitle="Category"
            selectRef={selectRef}
         />

         <GenericComponents.SelectOptions
            handleSelected={handleSelectSubcategory}
            arrayOptions={subcategoriesList}
            infoTitle={"Subcategories"}
         />
      </div>
   );
};

export default FilterSelectComponent;
