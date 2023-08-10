// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React Hooks
import { useState } from "react";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";

// Components.
import Prices from "../Products/Prices";
import ProductListCart from "../Products/ProductListCart";

const ShoppingCart = () => {
   const [prices, setPrices] = useState({ grossPrice: 0, tax: 0, finalPrice: 0 });

   const { cart, addProductCart } = useShoppingCart();

   console.log(cart);

   return (
      <main className={style.mainContainer}>
         <ProductListCart cart={cart} addProductCart={addProductCart} />

         <Prices cart={cart} prices={prices} setPrices={setPrices} />
      </main>
   );
};

export default ShoppingCart;
