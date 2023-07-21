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

   const [currentPage, setCurrentPage] = useState(0);
   const [search, setSearch] = useState("");

   const filterProducts = () => {
      if (search.length === 0) return ProductsInfo.slice(currentPage, currentPage + 5);

      const filtered = ProductsInfo.filter((p) => p.description.includes(search.toLowerCase()));
      return filtered.slice(currentPage, currentPage + 5);
   };

   const nextPage = () => {
      if (ProductsInfo.filter((p) => p.description.includes(search)).length > currentPage + 5)
         return setCurrentPage(currentPage + 5);
   };

   const prevPage = () => {
      if (currentPage > 0) setCurrentPage(currentPage - 5);
   };

   const onSearchChange = ({ target }) => {
      setCurrentPage(0);
      setSearch(target.value);
   };

   return (
      <div>
         <div className={inputStyle.inputContainer}>
            <input type="text" placeholder="Search Product" onChange={onSearchChange} />
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
