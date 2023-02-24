import { useForm } from "../Hooks/useForm";

import logo from "../assets/logo.png";

import style from "../sass/forms/login.module.scss";

const LoginForm = () => {
  const { formState, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const { email, password } = formState;

  return (
    <>
      <form>
        <div>
          <img src={logo} alt="logo" />
          <div>
            <h1 className={`${style.h1}`}>
              Game{" "}
              <span className={style.size}>
                <h3 className={style.h3Color}>STORE</h3>
              </span>
            </h1>

            <h1 className={style.size}>
              Hola <span>Mundo!</span>
            </h1>
          </div>
        </div>

        <div>
          <label htmlFor="email">E-mail</label>
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

        <div>
          <label htmlFor="password">Password</label>
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
      </form>
    </>
  );
};

export default LoginForm;
