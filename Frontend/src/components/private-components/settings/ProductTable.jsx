// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/tableProduct.module.scss";

// React-Icons Library.
import { FaEdit } from "react-icons/fa";

const ProductTable = ({ filterProducts }) => {
   console.log(filterProducts());

   return (
      <div className={style.containerTable}>
         <table className={style.table}>
            <thead>
               <tr>
                  <th>Name</th>
                  <th className={style.expand}>Description</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Edit</th>
               </tr>
            </thead>

            <tbody>
               {!filterProducts().length && (
                  <tr>
                     <td colSpan="5">No data found</td>
                  </tr>
               )}

               {filterProducts().map(({ _id, name, description, price, status }) => {
                  const Name = name.slice(0, 1).toUpperCase() + name.slice(1);
                  const Description = description.slice(0, 1).toUpperCase() + description.slice(1);

                  return (
                     <tr key={_id}>
                        <td className={style.tName}>{Name}</td>
                        <td className={style.expand}>{Description}</td>
                        <td className={style.tPrice}>
                           {
                              price
                                 .toLocaleString("es-CO", {
                                    style: "currency",
                                    currency: "COP",
                                 })
                                 .split(",")[0]
                           }
                        </td>
                        <td>
                           <span
                              className={`${style.statusLabel} ${
                                 status ? style.active : style.inactive
                              }`}
                           >
                              {status ? "Active" : "Inactive"}
                           </span>
                        </td>
                        <td>
                           <FaEdit className={style.icon} />
                        </td>
                     </tr>
                  );
               })}
            </tbody>
         </table>
      </div>
   );
};

export default ProductTable;
