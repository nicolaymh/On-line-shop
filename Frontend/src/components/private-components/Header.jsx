import { NavLink } from "react-router-dom";

// React-Icons
import { AiOutlineMonitor, AiFillAlert, AiFillCaretUp } from "react-icons/ai";

// Assets
import logo from "../../assets/logo-final.png";

// Styles
import style from "../../sass/Header/header.module.scss";

// Context
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { auth } = useAuth();

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
        <NavLink
          to="/shop"
          end
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop/Categories"
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Categories
        </NavLink>

        <NavLink
          to="/shop/settings"
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Settings
        </NavLink>
      </nav>

      <div className={style.inputContainer}>
        <input type="text" placeholder="Look your product" />
        <AiOutlineMonitor style={{ color: "blue", fontSize: "3rem" }} />
        <AiOutlineMonitor />
        <AiFillCaretUp />
      </div>

      <div className={style.containerUser}>
        <h3>
          Welcome <span>{auth.name.split(" ")[0].toUpperCase()}</span>
        </h3>
      </div>
    </div>
  );
};

export default Header;
