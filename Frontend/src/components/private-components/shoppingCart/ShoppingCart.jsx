// CSS Styles ( SASS Modules ).
import style from "../../../sass/shoppingCart/shoppingCart.module.scss";

// React Hooks
import { useState } from "react";

// Context.
import useShoppingCart from "../../../Hooks/useShoppingCart";

// Components.
import Prices from "./Prices";
import ProductListCart from "./ProductListCart";
import EmptyCart from "./EmptyCart";

const ShoppingCart = () => {
   const [prices, setPrices] = useState({ grossPrice: 0, tax: 0, finalPrice: 0 });

   const { cart, addProductCart, removeProductCart, decreaseProductQuantity, cleantCart } =
      useShoppingCart();

   return (
      <main className={style.mainContainer}>
         {cart.length === 0 ? (
            <EmptyCart />
         ) : (
            <>
               <ProductListCart
                  cart={cart}
                  addProductCart={addProductCart}
                  removeProductCart={removeProductCart}
                  decreaseProductQuantity={decreaseProductQuantity}
               />

               <Prices cart={cart} prices={prices} setPrices={setPrices} cleantCart={cleantCart} />
            </>
         )}
      </main>
   );
};

export default ShoppingCart;
