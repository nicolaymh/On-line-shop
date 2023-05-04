import { NavLink } from "react-router-dom";
import { useState } from "react";

// CSS Styles ( SASS Modules )
import style from "../../sass/settings/settingsNav.module.scss";

// React-Icons
import { FaAngleLeft } from "react-icons/fa";

const SettingsNav = () => {
  const [clicked, setClicked] = useState(false);

  const openMenu = () => setClicked(!clicked);

  return (
    <nav className={style.containerNav}>
      <div className={`${style.containerLinks} ${clicked ? style.open : ""}`}>
        <NavLink
          onClick={openMenu}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
          to="/shop/settings"
          end
        >
          My shopping
        </NavLink>
        <NavLink
          onClick={openMenu}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
          to="/shop/settings/edit-info"
        >
          Edit Info
        </NavLink>
        <NavLink
          onClick={openMenu}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
          to="/shop/settings/add-products"
        >
          Add Products
        </NavLink>
        <NavLink
          onClick={openMenu}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
          to="/shop/settings/manage-users"
        >
          Manage Users
        </NavLink>
        <NavLink
          onClick={openMenu}
          className={({ isActive }) => (isActive ? style.activeLink : null)}
          to="/shop/settings/manage-subcategories"
        >
          Manage Subcategories
        </NavLink>
      </div>

      <FaAngleLeft onClick={openMenu} className={`${style.icon} ${clicked ? style.open : ""}`} />
    </nav>
  );
};

export default SettingsNav;
