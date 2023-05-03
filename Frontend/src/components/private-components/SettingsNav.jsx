import { NavLink } from "react-router-dom";

// CSS Styles ( SASS Modules )
import style from "../../sass/settings/settingsNav.module.scss";

const SettingsNav = () => {
  return (
    <nav className={style.container}>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : null)}
        to="/shop/settings"
        end
      >
        My shopping
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : null)}
        to="/shop/settings/edit-info"
      >
        Edit Info
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : null)}
        to="/shop/settings/add-products"
      >
        Add Products
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : null)}
        to="/shop/settings/manage-users"
      >
        Manage Users
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? style.activeLink : null)}
        to="/shop/settings/manage-subcategories"
      >
        Manage Subcategories
      </NavLink>
    </nav>
  );
};

export default SettingsNav;
