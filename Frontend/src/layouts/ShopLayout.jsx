// React-Router-Dom.
import { Navigate, Outlet } from "react-router-dom";

// Context.
import useAuth from "../Hooks/useAuth";

// Components.
import Header from "../components/private-components/header/Header";

const ShopLayout = () => {
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

export default ShopLayout;
