import { Outlet } from "react-router-dom";
import ManageProductsNav from "../components/private-components/settings/ManageProductsNav";

const ManageProductsLayout = () => {
   return (
      <div>
         <ManageProductsNav />

         <main>
            <Outlet />
         </main>
      </div>
   );
};

export default ManageProductsLayout;
