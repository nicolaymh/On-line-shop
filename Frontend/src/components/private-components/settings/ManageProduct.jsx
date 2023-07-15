import useProducts from "../../../Hooks/useProducts";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();

   console.log(ProductsInfo);

   return <div>ManageProduct</div>;
};

export default ManageProduct;
