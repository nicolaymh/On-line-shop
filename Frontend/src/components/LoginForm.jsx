import { useForm } from "../Hooks/useForm";

// assets
import logo from "../assets/logo-final.png";
import loginImage from "../assets/login-image.png";

// CSS Styles ( SASS Modules )
import styles from "../sass/forms/login.module.scss";

const LoginForm = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  return (
    <div className={`mainContainer`}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <div className={styles.logoTitle}>
            <div className={styles.logo}>
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
              <input type="submit" value="Log In" />
            </div>

            <div className={styles.field}>
              <div className={styles.containerLink}>
                <a className={styles.link} href="#">
                  Create a New Account
                </a>
              </div>

              <div className={styles.containerLink}>
                <a className={styles.link} href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.loginImg}>
          <img src={loginImage} alt="login-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
