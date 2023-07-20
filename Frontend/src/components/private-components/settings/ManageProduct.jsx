// CSS Styles ( SASS Modules ).
import buttonsStyle from "../../../sass/settings/buttonsPreviousNextProducts.module.scss";

// Context
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ProductTable from "./ProductTable";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   console.log(ProductsInfo);
   console.log(categoryinfoAll);

   return (
      <div>
         <ProductTable ProductsInfo={ProductsInfo} />

         <div className={buttonsStyle.containerButtons}>
            <button>Previous</button>
            <button>Next</button>
         </div>
      </div>
   );
};

export default ManageProduct;
