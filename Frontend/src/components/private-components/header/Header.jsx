// Assets.
import logo from "../../../assets/logo-final.png";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/Header/header.module.scss";

// React-Router-Dom.
import { NavLink, useNavigate } from "react-router-dom";

// React-Hooks.
import { useEffect, useState } from "react";

// React-Icons Library.
import { HiSearchCircle } from "react-icons/Hi";
import { ImExit } from "react-icons/im";
import { BsCart } from "react-icons/bs";

// Context.
import useAuth from "../../../Hooks/useAuth";
import useCategory from "../../../Hooks/useCategory";

// Components.
import privateRoutes from "../index";

const Header = () => {
   const { auth, setAuth, setLoading } = useAuth();
   const userName = auth.name.split(" ")[0].toUpperCase();

   const [clicked, setClicked] = useState(false);

   const { setCategoryinfoAll } = useCategory();

   useEffect(() => {
      const wide = () => window.innerWidth >= 650 && setClicked(false);

      window.addEventListener("resize", wide);

      return () => window.removeEventListener("resize", wide);
   }, []);

   const navigate = useNavigate();

   const logOut = () => {
      localStorage.clear();
      setAuth({});
      navigate("/");
      setLoading(false);
      setCategoryinfoAll({});
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

         <nav className={`${style.containerNav} ${clicked ? style.burguerNavButton : ""}`}>
            <NavLink
               to="/shop"
               end
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
               onClick={() => setClicked(false)}
               className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
            >
               Settings
            </NavLink>
         </nav>

         <div className={style.shoppingCart}>
            <NavLink
               to="/shop/shoping-cart"
               onClick={() => setClicked(false)}
               className={({ isActive }) => (isActive ? style.activeCart : style.inactiveCart)}
            >
               <BsCart className={style.cart} />
            </NavLink>
         </div>

         <div className={style.burgerButton}>
            <privateRoutes.BurgerButton clicked={clicked} setClicked={setClicked} />
         </div>

         <div className={style.containerUser}>
            <h3>{userName}</h3>

            <ImExit onClick={logOut} className={style.logOut} />
         </div>
      </div>
   );
};

export default Header;
