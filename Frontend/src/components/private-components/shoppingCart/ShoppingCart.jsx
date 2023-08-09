import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React Hooks
import { useEffect, useState } from "react";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";
import Prices from "../Products/Prices";

const ShoppingCart = () => {
   const [prices, setPrices] = useState({ grossPrice: 0, tax: 0, finalPrice: 0 });

   const { cart } = useShoppingCart();

   console.log(cart);

   return (
      <main className={style.mainContainer}>
         <section className={style.sectionProducts}></section>

         <Prices cart={cart} prices={prices} setPrices={setPrices} />
      </main>
   );
};

export default ShoppingCart;
