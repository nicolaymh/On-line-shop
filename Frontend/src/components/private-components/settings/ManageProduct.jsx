// CSS Styles ( SASS Modules ).

// Context.
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

// Components.
import GenericComponents from "../../generic-components";
import ProductTable from "./ProductTable";
import FilterSelectComponent from "./FilterSelectComponent";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   const {
      filterProducts,
      nextPage,
      prevPage,
      onSearchChange,
      subcategoriesList,
      handleSelectCategory,
      handleSelectSubcategory,
   } = useProductsFiltering(ProductsInfo, categoryinfoAll);

   return (
      <div>
         <FilterSelectComponent
            handleSelectCategory={handleSelectCategory}
            categoryinfoAll={categoryinfoAll}
            handleSelectSubcategory={handleSelectSubcategory}
            subcategoriesList={subcategoriesList}
         />

         <GenericComponents.SearchProduct onSearchChange={onSearchChange} />

         <ProductTable filterProducts={filterProducts} />

         <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
   );
};

export default ManageProduct;
