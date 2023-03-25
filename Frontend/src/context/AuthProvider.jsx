import { useEffect, useState } from "react";
import { createContext } from "react";

import axiosInstance from "../helpers/axiosInstance";

// Context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "aplication/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axiosInstance("/users/profile", config);

        setAuth(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    authenticateUser();
  }, []);

  return <AuthContext.Provider value={{ setAuth }}>{children}</AuthContext.Provider>;
};

export { AuthProvider };

export default AuthContext;
