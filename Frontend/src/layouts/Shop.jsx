import { Link, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const Shop = () => {
  const { auth } = useAuth();

  return (
    <main className="mainContainer">
      {auth._id ? (
        <div>
          <nav>
            <Link to="/shop">
              <h2>WebSite</h2>
            </Link>

            <Link to="/shop/products">
              <h2>Products</h2>
            </Link>
          </nav>

          <div>
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </main>
  );
};

export default Shop;
