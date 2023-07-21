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

   console.log(categoryinfoAll);

   const { filterProducts, nextPage, prevPage, onSearchChange } =
      useProductsFiltering(ProductsInfo);

   return (
      <div>
         <GenericComponents.SearchProduct onSearchChange={onSearchChange} />

         <ProductTable filterProducts={filterProducts} />

         <GenericComponents.PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
   );
};

export default ManageProduct;
