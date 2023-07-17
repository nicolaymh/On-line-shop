// Context
import useCategory from "../../../Hooks/useCategory";
import useProducts from "../../../Hooks/useProducts";

const ManageProduct = () => {
   const { ProductsInfo, setProductsInfo } = useProducts();
   const { categoryinfoAll } = useCategory();

   console.log(ProductsInfo);
   console.log(categoryinfoAll);

   return (
      <div>
         <table>
            <thead>
               <tr>
                  <th>Name</th>
                  <th>description</th>
                  <th>Price</th>
                  <th>Status</th>
               </tr>
            </thead>

            <tbody>
               {ProductsInfo.map((product) => {
                  return (
                     <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.status ? "Active" : "Inactive"}</td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default ManageProduct;
