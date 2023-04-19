import { useState } from "react";

// Styles
import style from "../../sass/Header/burgerButton.module.scss";

const BurgerButton = () => {
  /* `const [clicked, setClicked] = useState(false);` is using the `useState` hook to declare a state
  variable called `clicked` and a function called `setClicked` to update the value of `clicked`. The
  initial value of `clicked` is set to `false`. */
  const [clicked, setClicked] = useState(false);

  /**
   * This is a function that toggles the value of a state variable called "clicked" in a React
   * component.
   */
  const handleClicked = () => setClicked(!clicked);

  return (
    <div onClick={handleClicked} className={`${style.navIcon5} ${clicked ? style.open : ""}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerButton;
