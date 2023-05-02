import { NavLink } from "react-router-dom";

const SettingsNav = () => {
  return (
    <nav>
      <NavLink to="/shop/settings">My shopping</NavLink>
      <NavLink to="/shop/settings/edit-info">Edit Info</NavLink>
      <NavLink to="/shop/settings/add-products">Add Products</NavLink>
      <NavLink to="/shop/settings/manage-users">Manage Users</NavLink>
      <NavLink to="/shop/settings/manage-subcategories">Manage Subcategories</NavLink>
    </nav>
  );
};

export default SettingsNav;
