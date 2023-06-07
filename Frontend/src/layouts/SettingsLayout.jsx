// React-Router-Dom.
import { Outlet } from "react-router-dom";

// CSS Styles ( SASS Modules )
import style from "../sass/settings/settings.module.scss";

// Components
import privateRoutes from "../components/private-components/";

const SettingsLayout = () => {
   return (
      <div className={style.settingsContainer}>
         <privateRoutes.SettingsNav />

         <main>
            <Outlet />
         </main>
      </div>
   );
};

export default SettingsLayout;
