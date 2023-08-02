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
      const product = cart.find((p) => p._id === id);

      !product &&
         setCart([...cart, { ...ProductsInfo.filter((p) => p._id === id)[0], quantity: 1 }]);

      product &&
         setCart((prev) => prev.map((p) => (p._id === id ? { ...p, quantity: p.quantity++ } : p)));
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
