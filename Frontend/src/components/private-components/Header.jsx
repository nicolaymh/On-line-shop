import { NavLink } from "react-router-dom";

// Assets
import logo from "../../assets/logo-final.png";

// Styles
import style from "../../sass/Header/header.module.scss";

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.containerLogo}>
        <div className={style.containerImg}>
          <img src={logo} alt="logo" />
        </div>

        <h1>
          GAMER <span>STORE</span>
        </h1>
      </div>

      <nav className={style.containerNav}>
        <NavLink className={style.navLink} to="/shop">
          Home
        </NavLink>

        <NavLink className={style.navLink} to="/shop/Categories">
          Categories
        </NavLink>

        <NavLink className={style.navLink} to="/shop/settings">
          Settings
        </NavLink>
      </nav>

      <div className={style.containerUser}>
        <h3>User</h3>
      </div>
    </div>
  );
};

export default Header;
