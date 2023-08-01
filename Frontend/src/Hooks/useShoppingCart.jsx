import { useContext } from "react";

import ShoppingCartContext from "../context/ShoppingCartProvider";

const useShoppingCart = () => {
   return useContext(ShoppingCartContext);
};

export default useShoppingCart;
