// Assets
import logo from "../assets/logo-final.png";
import confirmAccountImage from "../assets/images/confirmAccount-image.png";

// CSS style ( SASS Modules )
import logoStyle from "../sass/logo/logoStyle.module.scss";
import style from "../sass/confirmAccount.module.scss";

const ConfirmAccount = () => {
  return (
    <div className={style.confirmAccountContainer}>
      <div className={style.containerImage}>
        <img src={confirmAccountImage} alt="confirmAccount-image" />
      </div>

      <div className={logoStyle.logoTitle2}>
        <div className={logoStyle.logo}>
          <img src={logo} alt="logo" />
        </div>

        <h1 className={style.h1}>
          GAMER <span>STORE</span>
        </h1>

        <div>
          <h2 className={style.h2}>
            <span>Confirm your account and start </span>shopping
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAccount;
