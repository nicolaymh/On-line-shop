import { NavLink, useNavigate } from "react-router-dom";

// React-Icons
import { HiSearchCircle } from "react-icons/Hi";
import { ImExit } from "react-icons/Im";

// Assets
import logo from "../../assets/logo-final.png";

// Styles
import style from "../../sass/Header/header.module.scss";

// Context
import useAuth from "../../Hooks/useAuth";
import BurguerButton from "./BurguerButton";

const Header = () => {
  const { auth, setAuth, setLoading } = useAuth();

  const navigate = useNavigate();

  const signOff = () => {
    localStorage.removeItem("token");
    setAuth({});
    navigate("/");
    setLoading(false);
  };

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

      <div className={style.inputContainer}>
        <input type="text" placeholder="Search" />

        <HiSearchCircle className={style.searchIcon} />
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

      <BurguerButton />

      <div className={style.containerUser}>
        <h3>{auth.name.split(" ")[0].toUpperCase()}</h3>
        <ImExit onClick={signOff} alt="Sign off" className={style.signOff} />
      </div>
    </div>
  );
};

export default Header;
