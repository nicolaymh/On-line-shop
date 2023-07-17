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
      </div>
   );
};

export default ManageProduct;
