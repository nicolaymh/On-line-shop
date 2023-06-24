// CSS Styles ( SASS Modules ).
import style from "../../../sass/settings/manageProductsNav.module.scss";

import { NavLink } from "react-router-dom";

const ManageProductsNav = () => {
   return (
      <nav className={style.navContainer}>
         <div className={style.linksContainer}>
            <NavLink to="/shop/settings/manage-products">Add Product</NavLink>
            <NavLink to="/shop/settings/manage-products/manage-product">Manage Product</NavLink>
         </div>
      </nav>
   );
};

export default ManageProductsNav;
