import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "../../Hooks/useForm";
import initialFormInputs from "../../helpers/initialFormInputs";
import axiosInstance from "../../helpers/axiosInstance";

// Components
import { Alert } from "../general-components/Alert";
import Loader from "../general-components/Loader";

// Assets
import logo from "../../assets/logo-final.png";
import loginImage from "../../assets/images/login-image.png";

// CSS Styles ( SASS Modules )
import logoStyle from "../../sass/logo/logoStyle.module.scss";
import styles from "../../sass/forms/generalFormStyle.module.scss";

// Context
import useAuth from "../../Hooks/useAuth";

const LoginForm = () => {
  const { loginForm: initialForm } = initialFormInputs();

  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm(initialForm);

  const [alert, setAlert] = useState({ msg: "", error: false });

  const { setAuth, loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations Form
    if ([email, password].includes("")) {
      return setAlert({ msg: "All fields are required", error: true });
    }

    // API Call
    try {
      const { data } = await axiosInstance.post("/users/login", { email, password });

      setAlert({ msg: "", error: false });

      localStorage.setItem("token", data.token);

      setAuth(data);

      navigate("/shop");
    } catch (error) {
      console.log(error);

      const data = error.response.data.msg || error.response.data.errors[0].msg;

      setAlert({ msg: data, error: true });
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};

export default LoginForm;
