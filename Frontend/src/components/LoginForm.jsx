import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";

// Assets
import logo from "../assets/logo-final.png";
import loginImage from "../assets/images/login-image.png";

// CSS Styles ( SASS Modules )
import logoStyle from "../sass/logo/logoStyle.module.scss";
import styles from "../sass/forms/generalFormStyle.module.scss";

const LoginForm = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  return (
    <div className={styles.container}>
      <div className={styles.loginBox}>
        <div className={logoStyle.logoTitle}>
          <div className={logoStyle.logo}>
            <img src={logo} alt="logo" />
          </div>

          <h1>
            GAMER <span>STORE</span>
          </h1>
        </div>

        <form className={styles.form}>
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
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Your password"
              autoComplete="off"
              value={password}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.field}>
            <input type="submit" value="LOG IN" />
          </div>

          <nav className={styles.field}>
            <div className={styles.containerLink}>
              <Link to="/register" className={styles.link}>
                Create a New Account
              </Link>
            </div>

            <div className={styles.containerLink}>
              <Link to="/forgot-password" className={styles.link}>
                Forgot Password?
              </Link>
            </div>
          </nav>
        </form>
      </div>

      <div className={styles.loginImg}>
        <img height={435} src={loginImage} alt="login-image" />
      </div>
    </div>
  );
};

export default LoginForm;
