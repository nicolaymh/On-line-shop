import { NavLink } from "react-router-dom";

const ManageProductsNav = () => {
   return (
      <nav>
         <div>
            <NavLink to="/shop/settings/manage-products">Add Product</NavLink>
            <NavLink to="/shop/settings/manage-products/manage-product">Manage Product</NavLink>
         </div>
      </nav>
   );
};

export default ManageProductsNav;
