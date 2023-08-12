// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React Hooks
import { useState } from "react";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";

// Components.
import Prices from "./Prices";
import ProductListCart from "./ProductListCart";

const ShoppingCart = () => {
   const [prices, setPrices] = useState({ grossPrice: 0, tax: 0, finalPrice: 0 });

   const { cart, addProductCart, removeProductCart, decreaseProductQuantity } = useShoppingCart();

   return (
      <main className={style.mainContainer}>
         <ProductListCart
            cart={cart}
            addProductCart={addProductCart}
            removeProductCart={removeProductCart}
            decreaseProductQuantity={decreaseProductQuantity}
         />

         <Prices cart={cart} prices={prices} setPrices={setPrices} />
      </main>
   );
};

export default ShoppingCart;
