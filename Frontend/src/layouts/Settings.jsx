import { Link, Outlet } from "react-router-dom";

// Context
import useAuth from "../Hooks/useAuth";

const Settings = () => {
  const { auth } = useAuth();

  return (
    <div className="mainContainer">
      <nav>
        <Link to="/shop/settings">My shopping</Link>
        <Link to="/shop/settings/edit-info">Edit Info</Link>
        <Link to="/shop/settings/add-products">Add Products</Link>
        <Link to="/shop/settings/manage-users">Manage Users</Link>
        <Link to="/shop/settings/manage-subcategories">Manage Subcategories</Link>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Settings;
