import { Link, Outlet } from "react-router-dom";

// Context
import useAuth from "../Hooks/useAuth";

const Settings = () => {
  const { auth } = useAuth();

  return (
    <main className="mainContainer">
      <div>
        <Link to="/shop/settings">My shopping</Link>
        <Link to="/shop/settings/edit-info">Edit Info</Link>
        <Link to="/shop/settings/add-products">Add Products</Link>
        <Link to="/shop/settings/manage-users">Manage Users</Link>
        <Link to="/shop/settings/manage-subcategories">Manage Subcategories</Link>
      </div>

      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Settings;
