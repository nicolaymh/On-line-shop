import { useForm } from "../Hooks/useForm";

import logo from "../assets/logo-final.png";

import style from "../sass/forms/login.module.scss";

const LoginForm = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  return (
    <div className={`mainContainer ${style.container}`}>
      <div className={style.loginBox}>
        <div className={style.logoTitle}>
          <div className={style.logo}>
            <img src={logo} alt="logo" />
          </div>

          <h1>
            GAMER <span>STORE</span>
          </h1>
        </div>

        <form className={style.form}>
          <div className={style.field}>
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

          <div className={style.field}>
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

          <div className={style.field}>
            <input type="submit" value="Log In" />
          </div>

          <div className={style.field}>
            <div className={style.containerLink}>
              <a className={style.link} href="#">
                Create a New Account
              </a>
            </div>

            <div className={style.containerLink}>
              <a className={style.link} href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
