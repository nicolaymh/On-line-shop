import { Link } from "react-router-dom";
import { useForm } from "../../Hooks/useForm";
import { useState } from "react";
import axiosInstance from "../../helpers/axiosInstance";

// Components
import { Alert } from "../general-components/Alert";

// Assets
import logo from "../../assets/logo-final.png";
import forgotPasswordImage from "../../assets/images/forgot-password.png";

// CSS Styles ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";
import initialFormInputs from "../../helpers/initialFormInputs";

const ForgotPassword = () => {
  const { forgotPasswordForm: initialForm } = initialFormInputs();

  const { email, setFormState, onInputChange } = useForm(initialForm);

  const [alert, setAlert] = useState({ msg: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setAlert({ msg: "", error: false });

    if (!email) {
      return setAlert({ msg: "The email must be valid", error: true });
    }

    try {
      const { data } = await axiosInstance.post("/users/forget-password", { email });

      setAlert({ msg: data.msg, error: false });
      setFormState(initialForm);
    } catch (error) {
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
          {alert.msg && <Alert {...alert} />}

          <div className={styles.field}>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your e-mail"
              autoComplete="off"
              value={email}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.field}>
            <input type="submit" value="GET A NEW PASSWORD" />
          </div>

          <nav className={styles.field}>
            <div className={styles.containerLink}>
              <Link to="/" className={styles.link}>
                Sign in
              </Link>
            </div>

            <div className={styles.containerLink}>
              <Link to="/register" className={styles.link}>
                Create a New Account
              </Link>
            </div>
          </nav>
        </form>
      </div>

      <div className={styles.loginImg}>
        <img height={415} src={forgotPasswordImage} alt="login-image" />
      </div>
    </div>
  );
};

export default ForgotPassword;
