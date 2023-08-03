// Assets.
import logo from "../../../assets/logo-final.png";

// CSS Styles ( SASS Modules ).
import style from "../../../sass/Header/header.module.scss";

// React-Router-Dom.
import { NavLink, useNavigate } from "react-router-dom";

// React-Hooks.
import { useEffect, useState } from "react";

// React-Icons Library.
import { ImExit } from "react-icons/im";
import { BsCart } from "react-icons/bs";

// Context.
import useAuth from "../../../Hooks/useAuth";
import useCategory from "../../../Hooks/useCategory";

// Components.
import BurgerButton from "./BurgerButton";
import useShoppingCart from "../../../Hooks/useShoppingCart";

const Header = () => {
   const { auth, setAuth, setLoading } = useAuth();
   const userName = auth.name.split(" ")[0].toUpperCase();

   const [clicked, setClicked] = useState(false);

   const { setCategoryinfoAll } = useCategory();
   const { cart } = useShoppingCart();

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
               to="/shop/products"
               onClick={() => setClicked(false)}
               className={({ isActive }) => (isActive ? style.activeLink : style.inactiveLink)}
            >
               Products
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
               to="/shop/shopping-cart"
               onClick={() => setClicked(false)}
               className={({ isActive }) => (isActive ? style.activeCart : style.inactiveCart)}
            >
               <BsCart className={style.cart} />
            </NavLink>

            {cart[0] && <span>{cart.length}</span>}
         </div>

         <div className={style.burgerButton}>
            <BurgerButton clicked={clicked} setClicked={setClicked} />
         </div>

         <div className={style.containerUser}>
            <h3>{userName}</h3>

            <ImExit onClick={logOut} className={style.logOut} />
         </div>
      </div>
   );
};

export default Header;
