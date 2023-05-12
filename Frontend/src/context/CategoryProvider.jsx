import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

const CategoryContext = createContext();

import axiosInstance from "../helpers/axiosInstance";

// Auth Context
import useAuth from "../Hooks/useAuth";

const CategoryProvider = ({ children }) => {
   const [categoryinfoAll, setCategoryinfoAll] = useState({});

   const { auth, setAuth, setLoading, setShowModal } = useAuth();

   const navigate = useNavigate();

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
            setCategoryinfoAll(data.categories);
         } catch (error) {
            setShowModal({ ok: true, msg: error.response.data.msg });

            navigate("/", { replace: true });

            localStorage.clear();

            setAuth({});

            setLoading(false);
         }
      };

      if (auth?._id) {
         getCategoriesInfo();
      }
   }, [auth]);

   return (
      <CategoryContext.Provider value={{ categoryinfoAll }}>{children}</CategoryContext.Provider>
   );
};

export { CategoryProvider };

export default CategoryContext;
