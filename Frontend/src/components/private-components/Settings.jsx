import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <div>
      <div>
        Settings
        <Link to="/shop/settings">settings home</Link>
        <Link to="/shop/settings/update-data">update data</Link>
      </div>

      <div style={{ marginTop: "3rem" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
