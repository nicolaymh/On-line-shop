import { useForm } from "../../Hooks/useForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../helpers/axiosInstance";
import initialFormInputs from "../../helpers/initialFormInputs";

// Components
import { Alert } from "../general-components/Alert";

// Assets
import logo from "../../assets/logo-final.png";
import newPasswordImage from "../../assets/images/new-password.png";

// CSS styles ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";

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

  const handleSubmit = async (e) => {};

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
          {alert.msg && <Alert {...alert} />}

          {tokenExists && (
            <>
              <div className={styles.field}>
                <label htmlFor="newPassword">New Password: </label>
                <input
                  id="newPassword"
                  name="newPassword"
                  type="newPassword"
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
                  type="confirmPassword"
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
        <img height={420} src={newPasswordImage} alt="register-image" />
      </div>
    </div>
  );
};

export default NewPassword;
