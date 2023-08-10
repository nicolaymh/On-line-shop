import { createContext, useEffect, useState } from "react";

import useProducts from "../Hooks/useProducts";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const { ProductsInfo } = useProducts();

   useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
   }, []);

   /**
    * The function `addProductCart` adds a product to the cart, updating the quantity and total price
    * if the product is already in the cart.
    */
   const addProductCart = (id) => {
      const productToAdd = ProductsInfo.find((p) => p._id === id);
      const isProductInCart = cart.some((p) => p._id === id);

      if (!isProductInCart) {
         const car = [...cart, { ...productToAdd, quantity: 1, total: productToAdd.price }];
         setCart(car);
         localStorage.setItem("cart", JSON.stringify(car));
      }

      if (isProductInCart) {
         const car = cart.map((p) =>
            p._id === id ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price } : p
         );
         setCart(car);
         localStorage.setItem("cart", JSON.stringify(car));
      }
   };

   const decreaseProductCart = (id) => {};

   const removeProductCart = (id) => {};

   /**
    * The emptyCart function sets the cart array to an empty array.
    */
   const emptyCart = () => {
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
   };

   return (
      <ShoppingCartContext.Provider
         value={{
            cart,
            setCart,
            addProductCart,
            decreaseProductCart,
            removeProductCart,
            emptyCart,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

export { ShoppingCartProvider };

export default ShoppingCartContext;
