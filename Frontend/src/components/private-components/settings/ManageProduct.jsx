// CSS Styles ( SASS Modules ).
import buttonsStyle from "../../../sass/settings/buttonsPreviousNextProducts.module.scss";
import inputStyle from "../../../sass/forms/inputSearchProduct.module.scss";

import { useState } from "react";

// Context
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ProductTable from "./ProductTable";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   console.log(ProductsInfo);
   console.log(categoryinfoAll);

   const [currentPage, setCurrentPage] = useState(0);

   const filterProducts = () => {
      return ProductsInfo.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (ProductsInfo.length > currentPage + 5) setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   return (
      <div>
         <div className={inputStyle.inputContainer}>
            <input type="text" placeholder="Search Product" />
         </div>

         <ProductTable filterProducts={filterProducts} />

         <div className={buttonsStyle.containerButtons}>
            <button onClick={prevPage}>Previous</button>
            <button onClick={nextPage}>Next</button>
         </div>
      </div>
   );
};

export default ManageProduct;
