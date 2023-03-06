// Assets
import logo from "../assets/logo-final.png";
import loginImage from "../assets/images/login-image.png";

// CSS style ( SASS Modules )
import styleLogo from "../sass/forms/generalFormStyle.module.scss";

const ConfirmAccount = () => {
  return (
    <div className={styleLogo.container}>
      <div className={styleLogo.loginBox}>
        <div className={styleLogo.logoTitle}>
          <div className={styleLogo.logo}>
            <img src={logo} alt="logo" />
          </div>

          <h1>
            GAMER <span>STORE</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
