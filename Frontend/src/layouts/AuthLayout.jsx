import { Outlet } from "react-router-dom";

const AuthLayout = () => {
   return (
      <main className="mainContainer">
         <Outlet />
      </main>
   );
};

export default AuthLayout;
