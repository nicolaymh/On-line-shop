import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Header from "../components/private-components/Header";

const Shop = () => {
  const { auth } = useAuth();

  return (
    <div className="mainContainer">
      {auth._id ? (
        <div>
          <Header />

          <main>
            <Outlet />
          </main>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
};

export default Shop;
