// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageProducts.module.scss";

// React Hook.
import { useState } from "react";

// Context.
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

// Components.
import GenericComponents from "../../generic-components";
import ProductTable from "./ProductTable";
import FilterSelectComponent from "./FilterSelectComponent";
import ModalEditProduct from "./ModalEditProduct";

const ManageProduct = () => {
   const [openModal, setOpenModal] = useState(false);

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
      <div className={style.containerManageProduct}>
         {openModal && (
            <ModalEditProduct
               showModal={() => {
                  setOpenModal(false);
               }}
            />
         )}

         <FilterSelectComponent
            handleSelectCategory={handleSelectCategory}
            categoryinfoAll={categoryinfoAll}
            handleSelectSubcategory={handleSelectSubcategory}
            subcategoriesList={subcategoriesList}
         />

         <GenericComponents.SearchProduct onSearchChange={onSearchChange} />

         <ProductTable
            filterProducts={filterProducts}
            showModal={() => {
               setOpenModal(true);
            }}
         />

         <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
   );
};

export default ManageProduct;
