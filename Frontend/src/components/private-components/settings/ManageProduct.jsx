// Context.
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";
import ProductTable from "./ProductTable";

// Custom Hook.
import useProductsFiltering from "../../../Hooks/useProductsFiltering";

// Components.
import SearchProduct from "../../generic-components/SearchProduct";
import PaginationButton from "../../generic-components/PaginationButton";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   const { filterProducts, nextPage, prevPage, onSearchChange } =
      useProductsFiltering(ProductsInfo);

   return (
      <div>
         <SearchProduct onSearchChange={onSearchChange} />

         <ProductTable filterProducts={filterProducts} />

         <PaginationButton prevPage={prevPage} nextPage={nextPage} />
      </div>
   );
};

export default ManageProduct;
