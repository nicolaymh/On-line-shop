import style from "../../sass/Header/burgerButton.module.scss";

const BurgerButton = () => {
  return (
    <div className={`${style.navIcon5}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
