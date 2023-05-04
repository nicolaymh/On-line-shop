import { Outlet } from "react-router-dom";

// CSS Styles ( SASS Modules )
import style from "../sass/settings/settings.module.scss";

// Components
import SettingsNav from "../components/private-components/SettingsNav";

// Context
import useAuth from "../Hooks/useAuth";

const Settings = () => {
  return (
    <div className={style.settingsContainer}>
      <SettingsNav />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Settings;
