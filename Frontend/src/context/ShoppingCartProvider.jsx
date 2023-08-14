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
    * The function `addProductCart` adds a product to the cart and updates the cart state and local
    * storage accordingly.
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

   /**
    * The function decreases the quantity of a product in the cart by 1, updates the total price, and
    * updates the cart state and local storage.
    */
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

   /**
    * The function `removeProductCart` removes a product from the cart and updates the cart state and
    * local storage.
    */
   const removeProductCart = (id) => {
      const removeProduct = cart.filter((p) => p._id !== id);
      setCart(removeProduct);
      localStorage.setItem("cart", JSON.stringify(removeProduct));
   };

   /**
    * The `cleantCart` function clears the cart by setting it to an empty array and updating the local
    * storage accordingly.
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
