import { createContext, useState } from "react";

import useProducts from "../Hooks/useProducts";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const { ProductsInfo } = useProducts();

   /**
    * The function `addProductCart` adds a product to the cart, incrementing the quantity if the
    * product is already in the cart.
    */
   const addProductCart = (id) => {
      const productToAdd = ProductsInfo.find((p) => p._id === id);
      const isProductInCart = cart.some((p) => p._id === id);

      !isProductInCart
         ? setCart([...cart, { ...productToAdd, quantity: 1, total: productToAdd.price }])
         : setCart((prev) =>
              prev.map((p) =>
                 p._id === id
                    ? { ...p, quantity: p.quantity + 1, total: (p.quantity + 1) * p.price }
                    : p
              )
           );
   };

   const decreaseProductCart = (id) => {};

   const removeProductCart = (id) => {};

   /**
    * The emptyCart function sets the cart array to an empty array.
    */
   const emptyCart = () => setCart([]);

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
