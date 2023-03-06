import { useForm } from "../../Hooks/useForm";

// Assets
import logo from "../../assets/logo-final.png";
import newPasswordImage from "../../assets/images/new-password.png";

// CSS styles ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";

const NewPassword = () => {
  const { formState, onInputChange } = useForm({
    newPassword: "",
    confirmPassword: "",
  });

  const { newPassword, confirmPassword } = formState;

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

        <form className={styles.form}>
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
        </form>
      </div>

      <div className={styles.loginImg}>
        <img height={350} src={newPasswordImage} alt="register-image" />
      </div>
    </div>
  );
};

export default NewPassword;
