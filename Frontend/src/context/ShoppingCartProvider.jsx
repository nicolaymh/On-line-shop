import { createContext } from "react";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
   const hola = "hola mundo!!";

   return <ShoppingCartContext.Provider value={{ hola }}>{children}</ShoppingCartContext.Provider>;
};

export { ShoppingCartProvider };

export default ShoppingCartContext;
