import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

import Header from "../components/private-components/header/Header";

const Shop = () => {
   const { auth } = useAuth();

   return (
      <>
         {auth._id ? (
            <div>
               <Header />

               <div className="mainContainer">
                  <Outlet />
               </div>
            </div>
         ) : (
            <Navigate to="/" />
         )}
      </>
   );
};

export default Shop;
