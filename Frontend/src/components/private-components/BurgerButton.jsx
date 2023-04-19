// Styles
import style from "../../sass/Header/burgerButton.module.scss";

const BurgerButton = ({ clicked, handleClicked }) => {
  return (
    <div onClick={handleClicked} className={`${style.navIcon5} ${clicked ? style.open : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
