const ProductTable = ({ ProductsInfo }) => {
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

export default ProductTable;
