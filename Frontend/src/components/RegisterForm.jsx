import { useForm } from "../Hooks/useForm";
import { Link } from "react-router-dom";

// Assets
import logo from "../assets/logo-final.png";
import registerImage from "../assets/images/register-image.png";

// CSS styles ( SASS Modules )
import styles from "../sass/forms/generalFormStyle.module.scss";

const RegisterForm = () => {
  const { formState, onInputChange } = useForm({
    nombre: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: "",
    phone: "",
  });

  const { nombre, password, confirmPassword, email, address, phone } = formState;

  return (
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
            <label htmlFor="nombre">Nombre: </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              value={nombre}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Create a password"
              autoComplete="off"
              value={password}
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
            <label htmlFor="email">E-mail: </label>
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
            <label htmlFor="address">Address: </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="Your Address"
              autoComplete="off"
              value={address}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone: </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your Tel"
              autoComplete="off"
              value={phone}
              onChange={onInputChange}
            />
          </div>

          <div className={styles.field}>
            <input type="submit" value="SIGN UP" />
          </div>

          <nav className={styles.field}>
            <div className={styles.containerLink}>
              <Link to="/" className={styles.link}>
                Sign in
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
        <img height={620} src={registerImage} alt="register-image" />
      </div>
    </div>
  );
};

export default RegisterForm;
