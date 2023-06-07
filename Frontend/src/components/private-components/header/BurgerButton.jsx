// CSS Styles ( SASS Modules ).
import style from "../../../sass/Header/burgerButton.module.scss";

const BurgerButton = ({ clicked, setClicked }) => {
   return (
      <div
         onClick={() => setClicked(!clicked)}
         className={`${style.navIcon5} ${clicked ? style.open : ""}`}
      >
         <span></span>
         <span></span>
         <span></span>
      </div>
   );
};

export default BurgerButton;
