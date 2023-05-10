import { Navigate, Outlet } from "react-router-dom";

import useAuth from "../Hooks/useAuth";

import Header from "../components/private-components/header/Header";
import { Modal } from "../components/general-components/Modal";

const Shop = () => {
   const { auth, showModal } = useAuth();

   return (
      <>
         {showModal ? (
            <Modal />
         ) : auth._id ? (
            <div>
               <Header />

               <main className="mainContainer">
                  <Outlet />
               </main>
            </div>
         ) : (
            <Navigate to="/" />
         )}
      </>
   );
};

export default Shop;
