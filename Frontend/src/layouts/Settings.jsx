import { Outlet } from "react-router-dom";

// Context
import useAuth from "../Hooks/useAuth";
import SettingsNav from "../components/private-components/SettingsNav";

const Settings = () => {
  const { auth } = useAuth();

  return (
    <div>
      <SettingsNav />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Settings;
