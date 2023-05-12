import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import getCategoriesInfo from "../helpers/getCategoriesInfo";

const CategoryContext = createContext();

// Auth Context
import useAuth from "../Hooks/useAuth";

const CategoryProvider = ({ children }) => {
   const [categoryinfoAll, setCategoryinfoAll] = useState({});

   const { auth, setAuth, setLoading, setShowModal } = useAuth();

   const navigate = useNavigate();

   useEffect(() => {
      if (auth?._id) {
         getCategoriesInfo({ setCategoryinfoAll, setAuth, setLoading, setShowModal, navigate });
      }
   }, [auth]);

   return (
      <CategoryContext.Provider value={{ categoryinfoAll, setCategoryinfoAll }}>
         {children}
      </CategoryContext.Provider>
   );
};

export { CategoryProvider };

export default CategoryContext;
