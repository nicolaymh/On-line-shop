import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext();

import axiosInstance from "../helpers/axiosInstance";

const ProductsProvider = ({ children }) => {
   const [ProductsInfo, setProductsInfo] = useState([]);

   useEffect(() => {
      const getAllProductsInfo = async () => {
         const token = localStorage.getItem("token");

         const config = {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         };

         try {
            const data = await axiosInstance.get("/manage/product/get-products", config);
            console.log(data);
         } catch (error) {
            console.log(error);
         }
      };

      if (localStorage.getItem("token")) {
         getAllProductsInfo();
      }
   }, []);

   return (
      <ProductsContext.Provider value={{ ProductsInfo, setProductsInfo }}>
         {children}
      </ProductsContext.Provider>
   );
};

export { ProductsProvider };

export default ProductsContext;
