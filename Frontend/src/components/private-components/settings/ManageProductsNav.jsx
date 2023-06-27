// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageProductsNav.module.scss";

// React-Icons Library.
import { MdLibraryAdd } from "react-icons/md";
import { AiFillEdit } from "react-icons/Ai";

// React-Router-Dom.
import { NavLink } from "react-router-dom";

const ManageProductsNav = () => {
   return (
      <nav className={style.navContainer}>
         <h3>Manage Products</h3>

         <div className={style.linksContainer}>
            <NavLink
               className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.clickedLink}` : style.navLink
               }
               to="/shop/settings/manage-products"
               end
            >
               <h4>Add Product</h4>

               <MdLibraryAdd className={style.icon} />
            </NavLink>

            <NavLink
               className={({ isActive }) =>
                  isActive ? `${style.navLink} ${style.clickedLink}` : style.navLink
               }
               to="/shop/settings/manage-products/manage-product"
            >
               <h4>Manage Product</h4>

               <AiFillEdit className={style.icon} />
            </NavLink>
         </div>
      </nav>
   );
};

export default ManageProductsNav;
