import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../helpers/axiosInstance";

const ProductsContext = createContext();

// Auth Context.
import useAuth from "../Hooks/useAuth";

const ProductsProvider = ({ children }) => {
   const [ProductsInfo, setProductsInfo] = useState([]);

   const { auth, setAuth, setLoading, setShowModal } = useAuth();

   const navigate = useNavigate();

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
            const { data } = await axiosInstance.get("/manage/product/get-productss", config);

            setProductsInfo(data.products);
         } catch (error) {
            console.log(error);

            setShowModal({ ok: true, msg: error.response.data.msg || "Server error" });

            navigate("/", { replace: true });

            localStorage.clear();

            setAuth({});

            setLoading(false);
         }
      };

      if (auth?._id) {
         getAllProductsInfo();
      }
   }, [auth]);

   return (
      <ProductsContext.Provider value={{ ProductsInfo, setProductsInfo }}>
         {children}
      </ProductsContext.Provider>
   );
};

export { ProductsProvider };

export default ProductsContext;
