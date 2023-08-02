import { createContext, useState } from "react";

import useProducts from "../Hooks/useProducts";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   const { ProductsInfo } = useProducts();

   const addProductCart = (id) => {
      const product = cart.find((p) => p._id === id);

      !product &&
         setCart([...cart, { ...ProductsInfo.filter((p) => p._id === id)[0], quantity: 1 }]);

      product &&
         setCart((prev) => prev.map((p) => (p._id === id ? { ...p, quantity: p.quantity++ } : p)));
   };

   return (
      <ShoppingCartContext.Provider value={{ cart, setCart, addProductCart }}>
         {children}
      </ShoppingCartContext.Provider>
   );
};

export { ShoppingCartProvider };

export default ShoppingCartContext;
