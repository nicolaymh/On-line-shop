// CSS Styles ( SASS Modules ).
import buttonsStyle from "../../../sass/settings/buttonsPreviousNextProducts.module.scss";
import inputStyle from "../../../sass/forms/inputSearchProduct.module.scss";

// Context.
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ProductTable from "./ProductTable";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   const { filterProducts, nextPage, prevPage, onSearchChange } =
      useProductsFiltering(ProductsInfo);

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
