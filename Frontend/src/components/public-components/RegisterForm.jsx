import { useForm } from "../../Hooks/useForm";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Components
import { Alert } from "../general-components/Alert";

// Assets
import logo from "../../assets/logo-final.png";
import registerImage from "../../assets/images/register-image.png";

// CSS styles ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";

const RegisterForm = () => {
  const { nombre, password, confirmPassword, email, address, phone, onInputChange } = useForm({
    nombre: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: "",
    phone: "",
  });

  const [alert, setAlert] = useState({ msg: "", error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, password, confirmPassword, email, address, phone].includes("")) {
      return setAlert({ msg: "All fields are required", error: true });
    }

    if (password !== confirmPassword) {
      return setAlert({ msg: "Password and Confirm-Password must be the same ", error: true });
    }

    if (password.length < 6) {
      return setAlert({ msg: "The password must be at least 6 characters", error: true });
    }

    try {
      // setAlert({ msg: "User created, check your email to confirm the account", error: false });

      const response = await axios.post("http://localhost:3000/api/users", {
        nombre,
        password,
        confirmPassword,
        email,
        address,
        phone,
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
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
                type="password"
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
          <img height="100%" src={registerImage} alt="register-image" />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
