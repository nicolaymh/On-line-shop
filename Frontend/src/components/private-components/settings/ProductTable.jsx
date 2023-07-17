// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/tableProduct.module.scss";

const ProductTable = ({ ProductsInfo }) => {
   return (
      <div className={style.containerTable}>
         <table className={style.table}>
            <thead>
               <tr>
                  <th>Name</th>
                  <th className={style.tDescription}>Description</th>
                  <th className={style.tPrice}>Price</th>
                  <th>Status</th>
               </tr>
            </thead>

            <tbody>
               {ProductsInfo.slice(0, 6).map((product) => {
                  return (
                     <tr key={product._id}>
                        <td>{product.name}</td>
                        <td className={style.tDescription}>{product.description}</td>
                        <td className={style.tPrice}>
                           {product.price.toLocaleString("es-CO", {
                              style: "currency",
                              currency: "COP",
                           })}
                        </td>
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
