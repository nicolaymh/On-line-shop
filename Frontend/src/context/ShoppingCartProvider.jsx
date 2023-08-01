import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const [cart, setCart] = useState([]);

   return (
      <ShoppingCartContext.Provider value={{ cart, setCart }}>
         {children}
      </ShoppingCartContext.Provider>
   );
};

export { ShoppingCartProvider };

export default ShoppingCartContext;
