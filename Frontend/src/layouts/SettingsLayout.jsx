// React-Router-Dom.
import { Outlet } from "react-router-dom";

// CSS Styles ( SASS Modules )
import style from "../sass/settings/settings.module.scss";

// Components
import SettingsNav from "../components/private-components/settings/SettingsNav";
import Marketing from "../components/private-components/home/Marketing";

const SettingsLayout = () => {
   return (
      <>
         <div className={style.settingsContainer}>
            <SettingsNav />

            <main>
               <Outlet />
            </main>
         </div>

         <Marketing />
      </>
   );
};

export default SettingsLayout;
