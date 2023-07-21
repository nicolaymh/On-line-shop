// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageProducts.module.scss";

// Context.
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ProductTable from "./ProductTable";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

// Components.
import GenericComponents from "../../generic-components";

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
   } = useProductsFiltering(ProductsInfo);

   return (
      <div className={style.container}>
         <div className={style.selectContainer}>
            <GenericComponents.SelectOptions
               handleSelected={handleSelectCategory}
               arrayOptions={categoryinfoAll}
               infoTitle="Category"
            />

            <GenericComponents.SelectOptions
               handleSelected={handleSelectSubcategory}
               arrayOptions={subcategoriesList}
               infoTitle={"Subcategories"}
            />
         </div>

         <GenericComponents.SearchProduct onSearchChange={onSearchChange} />

         <ProductTable filterProducts={filterProducts} />

         <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
   );
};

export default ManageProduct;
