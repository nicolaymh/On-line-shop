// Assets.
import logo from "../../assets/logo-final.png";
import { authImages } from "../../assets/img";

// CSS styles ( SASS Modules ).
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";

// React-Router-Dom.
import { useParams } from "react-router-dom";

// React-Hooks.
import { useEffect, useState } from "react";

// Custom-Hook to handle forms.
import { useForm } from "../../Hooks/useForm";

// Model Object to handle forms. ==> (helpers).
import initialFormInputs from "../../helpers/initialFormInputs";

// Axios instance. ==> (helpers).
import axiosInstance from "../../helpers/axiosInstance";

// Generic Components.
import GenericComponents from "../generic-components/index";

const NewPassword = () => {
   const { newPasswordForm: initialForm } = initialFormInputs();

   const { newPassword, confirmPassword, onInputChange } = useForm(initialForm);

   const [alert, setAlert] = useState({ msg: "", error: false });
   const [tokenExists, setTokenExists] = useState(false);

   const { token } = useParams();

   useEffect(() => {
      const tokenValidate = async () => {
         try {
            await axiosInstance.get(`/users/forget-password/${token}`);

            setTokenExists(true);
         } catch (error) {
            setAlert({ msg: error.response.data.msg, error: true });
         }
      };

      tokenValidate();
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Form Validations
      if ([newPassword, confirmPassword].includes("")) {
         return setAlert({ msg: "All fields are required", error: true });
      }

      if (newPassword !== confirmPassword) {
         return setAlert({ msg: "NewPassword and ConfirmPassword must be the same", error: true });
      }

      if (newPassword.length < 6) {
         return setAlert({ msg: "The NewPassword must be at least 6 characters", error: true });
      }

      // API call to restore password
      try {
         const { data } = await axiosInstance.post(`/users/forget-password/${token}`, {
            password: newPassword,
         });

         setAlert({ msg: data.msg, error: false });
         setTokenExists(false);
      } catch (error) {
         console.log(error);
         const data = error.response.data.msg || error.response.data.errors[0].msg;
         setAlert({ msg: data, error: true });
      }
   };

   return (
      <div className={styles.container}>
         <div className={styles.loginBox}>
            <div className={logoStyle.logoTitle1}>
               <div className={logoStyle.logo}>
                  <img src={logo} alt="logo" />
               </div>

               <h1>
                  GAMER <span>STORE</span>
               </h1>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
               {alert.msg && <GenericComponents.Alert {...alert} />}

               {tokenExists && (
                  <>
                     <div className={styles.field}>
                        <label htmlFor="newPassword">New Password: </label>
                        <input
                           id="newPassword"
                           name="newPassword"
                           type="password"
                           placeholder="Create a new password"
                           autoComplete="off"
                           value={newPassword}
                           onChange={onInputChange}
                        />
                     </div>

                     <div className={styles.field}>
                        <label htmlFor="confirmPassword">Confirm-password </label>
                        <input
                           id="confirmPassword"
                           name="confirmPassword"
                           type="password"
                           placeholder="Confirm your password"
                           autoComplete="off"
                           value={confirmPassword}
                           onChange={onInputChange}
                        />
                     </div>

                     <div className={styles.field}>
                        <input type="submit" value="SAVE NEW PASSWORD" />
                     </div>
                  </>
               )}
            </form>
         </div>

         <div className={styles.loginImg}>
            <img height={420} src={authImages.newPasswordImg} alt="register-image" />
         </div>
      </div>
   );
};

export default NewPassword;
