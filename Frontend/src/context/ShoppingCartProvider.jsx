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

   const decreaseProductQuantity = (id) => {
      const subtractAmount = cart.map((p) => {
         if (p._id === id) {
            if (p.quantity > 1) {
               return { ...p, quantity: p.quantity - 1, total: (p.quantity - 1) * p.price };
            } else {
               return p;
            }
         }

         return p;
      });

      setCart(subtractAmount);
      localStorage.setItem("cart", JSON.stringify(subtractAmount));
   };

   const removeProductCart = (id) => {
      const removeProduct = cart.filter((p) => p._id !== id);
      setCart(removeProduct);
      localStorage.setItem("cart", JSON.stringify(removeProduct));
   };

   /**
    * The emptyCart function sets the cart array to an empty array.
    */
   const cleantCart = () => {
      setCart([]);
      localStorage.setItem("cart", JSON.stringify([]));
   };

   return (
      <ShoppingCartContext.Provider
         value={{
            cart,
            setCart,
            addProductCart,
            decreaseProductQuantity,
            removeProductCart,
            cleantCart,
         }}
      >
         {children}
      </ShoppingCartContext.Provider>
   );
};

export { ShoppingCartProvider };

export default ShoppingCartContext;
