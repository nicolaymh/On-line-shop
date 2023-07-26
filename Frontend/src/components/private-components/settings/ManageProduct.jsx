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
   const [infoProductEdit, setInfoProductEdit] = useState({});

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

   const showEditProduct = (id) => {
      setOpenModal(true);
      setInfoProductEdit(ProductsInfo.filter((p) => p._id === id)[0]);
   };

   return (
      <div className={style.containerManageProduct}>
         {openModal && (
            <ModalEditProduct
               showModal={() => setOpenModal(false)}
               infoProductEdit={infoProductEdit}
               categoryinfoAll={categoryinfoAll}
               setProductsInfo={setProductsInfo}
            />
         )}

         <>
            <FilterSelectComponent
               handleSelectCategory={handleSelectCategory}
               categoryinfoAll={categoryinfoAll}
               handleSelectSubcategory={handleSelectSubcategory}
               subcategoriesList={subcategoriesList}
            />

            <GenericComponents.SearchProduct onSearchChange={onSearchChange} />

            <ProductTable filterProducts={filterProducts} showEditProduct={showEditProduct} />

            <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
         </>
      </div>
   );
};

export default ManageProduct;
