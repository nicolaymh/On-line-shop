import { useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../helpers/axiosInstance";

// Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
   const [auth, setAuth] = useState({});

   const [loading, setLoading] = useState(true);

   const [showModal, setShowModal] = useState(false);

   const navigate = useNavigate();

   useEffect(() => {
      const authenticateUser = async () => {
         const token = localStorage.getItem("token");

         if (!token) {
            setLoading(false);
            return;
         }

         const config = {
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${token}`,
            },
         };

         try {
            const { data } = await axiosInstance("/users/profile", config);

            setAuth(data);

            navigate("/shop");
         } catch (error) {
            console.log(error);
            setLoading(false);
            localStorage.removeItem("token");
         }
      };

      authenticateUser();
   }, []);

   return (
      <AuthContext.Provider value={{ auth, setAuth, loading, setLoading, showModal, setShowModal }}>
         {children}
      </AuthContext.Provider>
   );
};

export { AuthProvider };

export default AuthContext;
