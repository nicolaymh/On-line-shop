import { Link, Outlet } from "react-router-dom";

// Context
import useAuth from "../Hooks/useAuth";

const Settings = () => {
  const { auth } = useAuth();

  return (
    <div>
      <div>
        <Link to="/shop/settings">settings home</Link>
        <Link to="/shop/settings/update-data">update data</Link>
        <Link to="/shop/settings/manage-products">Manage Products</Link>

        {auth.role === "admin" && (
          <Link to="/shop/settings/manage-subcategories">Manage Subcategories</Link>
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
