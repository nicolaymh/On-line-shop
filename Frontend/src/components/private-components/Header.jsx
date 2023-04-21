import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// React-Icons
import { HiSearchCircle } from "react-icons/Hi";
import { ImExit } from "react-icons/im";
import { BsCart } from "react-icons/bs";

// Assets
import logo from "../../assets/logo-final.png";

// Styles
import style from "../../sass/Header/header.module.scss";

// Context
import useAuth from "../../Hooks/useAuth";
import BurguerButton from "./BurgerButton";

const Header = () => {
  const { auth, setAuth, setLoading } = useAuth();
  const userName = auth.name.split(" ")[0].toUpperCase();

  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  useEffect(() => {
    const wide = () => {
      if (window.innerWidth >= 650) {
        setClicked(false);
      }
    };
    window.addEventListener("resize", wide);

    return () => window.removeEventListener("resize", wide);
  }, []);

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

      <nav
        className={`animate__animated animate__fadeInDown animate__fast ${style.containerNav} ${
          clicked ? style.burguerNavButton : ""
        }`}
      >
        <NavLink
          to="/shop"
          onClick={() => setClicked(false)}
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Home
        </NavLink>

        <NavLink
          to="/shop/Categories"
          onClick={() => setClicked(false)}
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Categories
        </NavLink>

        <NavLink
          to="/shop/settings"
          end
          onClick={() => setClicked(false)}
          className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
        >
          Settings
        </NavLink>
      </nav>

      <NavLink
        to="/shop/shoping-cart"
        onClick={() => setClicked(false)}
        className={style.shoppingCart}
      >
        <BsCart />
      </NavLink>

      <div className={style.burgerButton}>
        <BurguerButton clicked={clicked} handleClicked={handleClicked} />
      </div>

      <div className={style.containerUser}>
        <h3>{userName}</h3>

        <ImExit onClick={signOff} alt="Sign off" className={style.signOff} />
      </div>
    </div>
  );
};

export default Header;
