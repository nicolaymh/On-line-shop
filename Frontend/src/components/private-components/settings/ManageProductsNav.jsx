// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageProductsNav.module.scss";

// React-Icons Library.
import { SiAddthis } from "react-icons/Si";
import { AiFillEdit } from "react-icons/Ai";

// React-Router-Dom.
import { NavLink } from "react-router-dom";

const ManageProductsNav = () => {
   return (
      <nav className={style.navContainer}>
         <h3>Manage Products</h3>

         <div className={style.linksContainer}>
            <div className={style.LinkContainer}>
               <NavLink className={style.Link} to="/shop/settings/manage-products">
                  Add Product
               </NavLink>

               <SiAddthis className={style.icon} />
            </div>
            <div className={style.LinkContainer}>
               <NavLink className={style.Link} to="/shop/settings/manage-products/manage-product">
                  Manage Product
               </NavLink>

               <AiFillEdit className={style.icon} />
            </div>
         </div>
      </nav>
   );
};

export default ManageProductsNav;
