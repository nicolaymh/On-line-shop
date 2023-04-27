import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ marginBottom: "2rem" }}>Settings</div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link to="/shop/settings">settings home</Link>
        <Link to="/shop/settings/update-data">update data</Link>
        <Link to="/shop/settings/manage-products">Manage Products</Link>
        <Link to="/shop/settings/Manage-Subcategories">Manage Subcategories</Link>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
