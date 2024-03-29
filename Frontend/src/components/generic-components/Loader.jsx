// CSS Styles ( SASS Modules ).
import style from "../../sass/screenLoader/loader.module.scss";

// Assets.
import { logoImage } from "../../assets/img";

const Loader = () => {
   return (
      <div className={`${style.logerContainer}`}>
         <div className={`${style.imageContainer}`}>
            <img
               className={`animate__animated animate__rollIn animate__slow animate__infinite`}
               src={logoImage}
               alt="logo-image"
            />
         </div>

         <div
            className={`${style.noticeContainer} animate__animated animate__slow animate__zoomIn animate__infinite`}
         >
            <h1>Loading</h1>
         </div>
      </div>
   );
};

export default Loader;
