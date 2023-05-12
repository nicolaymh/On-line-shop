import { createContext, useState, useEffect } from "react";

const CategoryContext = createContext();

// Auth Context
import useAuth from "../Hooks/useAuth";

import axiosInstance from "../helpers/axiosInstance";

const CategoryProvider = ({ children }) => {
   const [categoryinfoAll, setCategoryinfoAll] = useState({});

   const { auth } = useAuth();

   useEffect(() => {
      const token = localStorage.getItem("token") || null;

      const getCategoriesInfo = async () => {
         const config = {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         };

         try {
            const { data } = await axiosInstance("/categories/get-categories", config);
            console.log(data.categories);
            setCategoryinfoAll(data.categories);
         } catch (error) {
            
         }
      };

      if (auth._id) {
         getCategoriesInfo();
      }
   }, [auth]);

   return (
      <CategoryContext.Provider value={{ categoryinfoAll }}>{children}</CategoryContext.Provider>
   );
};

export { CategoryProvider };

export default CategoryContext;
