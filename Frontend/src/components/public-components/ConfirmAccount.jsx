// Assets.
import { logoImage } from "../../assets/img";
import { authImages } from "../../assets/img";

// CSS style ( SASS Modules ).
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import style from "../../sass/confirmAccount/confirmAccount.module.scss";

// React-Router-Dom.
import { Link, useParams } from "react-router-dom";

// React-Hooks.
import { useEffect, useRef, useState } from "react";

// Axios instance. ==> (helpers).
import axiosInstance from "../../helpers/axiosInstance";

// Generic Components.
import GenericComponents from "../generic-components/index";

const ConfirmAccount = () => {
   const [alert, setAlert] = useState({ msg: "", error: false });

   const firstMount = useRef(true);

   const { id: token } = useParams();

   useEffect(() => {
      const confirmAccount = async () => {
         try {
            const response = await axiosInstance.put(`/users/confirm/${token}`);

            console.log(response);

            const notice = response.data.msg;
            setAlert({ msg: notice, error: false });
         } catch (error) {
            const notice = error.response.data.msg;
            setAlert({ msg: notice, error: true });
         }
      };

      if (firstMount.current) {
         confirmAccount();
         firstMount.current = false;
      }
   }, []);

   return (
      <div className={style.confirmAccountContainer}>
         <div className={style.containerImage}>
            <img src={authImages.confirmAccountImg} alt="confirmAccount-image" />
         </div>

         <div className={logoStyle.logoTitle2}>
            <div className={logoStyle.logo}>
               <img src={logoImage} alt="logo" />
            </div>

            <h1 className={style.h1}>
               GAMER <span>STORE</span>
            </h1>

            {alert.msg && <GenericComponents.Alert {...alert} />}

            <nav>
               <div className={style.containerNav}>
                  <Link className={style.link} to="/">
                     Sign in
                  </Link>
               </div>
            </nav>
         </div>
      </div>
   );
};

export default ConfirmAccount;
