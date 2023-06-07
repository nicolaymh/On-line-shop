// React-Router-Dom.
import { Navigate, Outlet } from "react-router-dom";

// Context.
import useAuth from "../Hooks/useAuth";

// Components.
import privateRoutes from "../components/private-components/";

const ShopLayout = () => {
   const { auth } = useAuth();

   return (
      <>
         {auth._id ? (
            <div>
               <privateRoutes.Header />

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
