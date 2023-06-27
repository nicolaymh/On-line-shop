import { Outlet } from "react-router-dom";
import ManageProductsNav from "../components/private-components/settings/ManageProductsNav";

const ManageProductsLayout = () => {
   return (
      <div>
         <ManageProductsNav />

         <section>
            <Outlet />
         </section>
      </div>
   );
};

export default ManageProductsLayout;
